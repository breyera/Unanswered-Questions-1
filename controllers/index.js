const router = require('express').Router();
<<<<<<< HEAD
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});
=======

>>>>>>> 431550ab798e8613847422092b6f456f043ff659

module.exports = router;