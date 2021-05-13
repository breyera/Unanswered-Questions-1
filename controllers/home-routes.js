const router = require('express').Router();
<<<<<<< HEAD
const { Router } = require('express');
=======
const { fillPhilosopherData } = require('../utils/handlers');
>>>>>>> 60c7412d123fb7fd2c5955adc63f304888cd87d1
const {
    Comments,
    Philosopher,
    Questions,
    Quiz,
    Quote,
    User,
    Chat,
} = require('../models');
const withauth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('home', {
            logged_in: req.session.logged_in || false,
            carouselQuotes: [
                {
                    imgUrl: 'carousel-image1_b.jpg',
                    quote: 'This is a quote',
                    credit: 'Zachary Eggert',
                },
                {
                    imgUrl: 'carousel-image2_b.jpg',
                    quote: "Don't quote me on that",
                    credit: 'Alicia Breyer',
                },
                {
                    imgUrl: 'carousel-image3_b.jpg',
                    quote: 'This is a quote 3',
                    credit: 'Zachary Eggert',
                },
            ],
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/philosopher/:id', async (req, res) => {
    try {
        let philosopherData = await Philosopher.findByPk(req.params.id, {
            include: [
                {
                    model: Quote,
                },
            ],
        });

        if (!philosopherData.about || !philosopherData.youtube) {
            philosopherData = await fillPhilosopherData(
                req.params.id,
                philosopherData
            );
        }

        const philosopher = philosopherData.get({ plain: true });

        res.render('onePhilosopher', {
            philosopher,
            logged_in: req.session.loggeed_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/philosophers', async (req, res) => {
    try {
        const philosophersData = await Philosopher.findAll({
            include: [
                {
                    model: Quote,
                },
            ],
        });

        const philosophers = philosophersData.map((e) =>
            e.get({ plain: true })
        );

        res.render('allPhilosophers', {
            philosophers,
            logged_in: req.session.loggeed_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/quiz/', async (req, res) => {
    try {
        const quizData = await Quiz.findByPK(req.params.id, {
            include: [
                {
                    model: quiz,
                },
            ],
        });

        const quiz = quizData.get({ plain: true });

        res.render('quiz', {
            quiz,
            logged_in: req.session.loggeed_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/qotd', async (req, res) => {
    try {
        const quotesData = await Quotes.findAll({
            include: [
                {
                    model: Quote
                },
            ],
        });

        const quotes = quotesData.map(e=>e.get({ plain: true }));

        res.render('qotd', {
            quotes,
            logged_in: req.session.loggeed_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/qotd/:id', async (req, res) => {
    try {
        const quotesData = await Quotes.findByPK(req.params.id, {
            include: [
                {
                    model: quotes,
                    attributes: ['id'],
                },
            ],
        });

        const quotes = quotesData.get({ plain: true });

        res.render('qotd', {
            quotes,
            logged_in: req.session.loggeed_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/poll/:id', async (req, res) => {
    try {
        const pollData = await Poll.findByPK(req.params.id, {
            include: [
                {
                    model: poll,
                    attributes: ['id'],
                },
            ],
        });

        const poll = pollData.get({ plain: true });

        res.render('poll', {
            poll,
            logged_in: req.session.loggeed_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/chat/:id', async (req, res) => {
    try {
        const chatData = await Chat.findByPK(req.params.id, {
            include: [
                {
                    model: chat,
                    attributes: ['id'],
                },
            ],
        });

        const chat = chatData.get({ plain: true });

        res.render('chat', {
            chat,
            logged_in: req.session.loggeed_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', withauth, async (req, res) => {
    try {
        const userData = await User.findByPK(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });

        const user = userData.get({ plain: true });

        res.render('home', {
            user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/chatroom', (req, res) => {
    res.render('joinchat');
});

router.get('/chat', (req, res) => {
    res.render('chat');
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
