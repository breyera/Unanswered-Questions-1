const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000;

const hbs = exphbs.create({ helpers, extname: '.hbs' });

const sess = {
    secret: process.env.SECRET || 'secret_string',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

io.on('connection', (socket) => {
    console.log('New WS Connection...');
    //welcome current user
    socket.emit('message', 'Welcome to Philosophy Chat!');

    //broadcast when user connets
    socket.broadcast.emit('message', 'A user has joined the chat');

    //runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });
});

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
