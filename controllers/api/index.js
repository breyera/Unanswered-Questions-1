const router = require('express').Router();
const philosopherRoutes = require('./philosopherRoutes');
const quotesRoutes = require('./quotesRoutes');
const quizRoutes = require('./quizRoutes');
const dailyQuestionRoutes = require('./dailyquestionRoutes');
const commentsRoutes = require('./commentsRoutes');
const userRoutes = require('./userRoutes')

router.use('/philosophers', philosopherRoutes);
router.use('/quotes', quotesRoutes);
router.use('/quiz', quizRoutes);
router.use('/dailyquestion', dailyQuestionRoutes);
router.use('/comments', commentsRoutes);
router.use('/user', userRoutes);

module.exports = router;