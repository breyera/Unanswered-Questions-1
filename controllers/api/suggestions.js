const router = require('express').Router();
const { Suggestions } = require('../..models');
const withAuth = require('../..utils/auth');

router.post('suggestions', withAuth, async (req, res) => {
    try { 
        const newSuggestion = await Suggestions.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newSuggestion);
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

