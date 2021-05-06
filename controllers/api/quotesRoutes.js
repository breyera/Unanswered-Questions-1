const router = require('express').Router();
const { Quotes, Philosophers } = require('../../models');

router.get('/', async (req, res) => {
    // find all quotes
    try {
      const quoteData = await Quotes.findAll({
          include: [{ model: Philosophers }],
      });
      res.status(200).json(quoteData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one quote by its `id` value
    try {
     const quoteData = await Quotes.findByPk(req.params.id, {
       where: { id: req.params.id }, include: [{ model: Philosophers }],
     });
  
     if(!quoteData) {
      res.status(404).json({ message: 'No quotes found with this id!' });
      return;
     }
  
     res.status(200).json(quoteData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new quote
    try {
      const quoteData = await Quotes.create({
          philosopher_id: req.body.philosopher_id,
      });
      res.status(200).json(quoteData)
    } catch (err) {
      res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a quote by its `id` value
    try {
      const quoteData = await Quotes.update(
        {
          quote_name: req.body.quote_name,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      if(!quoteData) {
        res.status(404).json({ message: 'No quote found with this id!' });
        return;
      }
      res.status(201).json(quoteData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete a quote by its `id` value
    try {
      const quoteData = await Quotes.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if(!quoteData) {
        res.status(404).json({ message: 'No quotes found with this id!' });
        return;
      }
      res.status(200).json(quoteData);
    } catch (err) {
      res.status(403).json(err);
      console.log('Cannot delete quotes associated with philosophers');
    }
});
  
module.exports = router;