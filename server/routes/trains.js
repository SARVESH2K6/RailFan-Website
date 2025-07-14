const express = require('express');
const router = express.Router();
const Train = require('../models/Train');

// Get all trains
router.get('/', async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get trains by category
router.get('/category/:category', async (req, res) => {
  try {
    const trains = await Train.find({ category: req.params.category });
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single train
router.get('/:id', async (req, res) => {
  try {
    const train = await Train.findById(req.params.id);
    if (train) {
      res.json(train);
    } else {
      res.status(404).json({ message: 'Train not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new train
router.post('/', async (req, res) => {
  const train = new Train(req.body);
  try {
    const newTrain = await train.save();
    res.status(201).json(newTrain);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a train
router.put('/:id', async (req, res) => {
  try {
    const train = await Train.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (train) {
      res.json(train);
    } else {
      res.status(404).json({ message: 'Train not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a train
router.delete('/:id', async (req, res) => {
  try {
    const train = await Train.findByIdAndDelete(req.params.id);
    if (train) {
      res.json({ message: 'Train deleted' });
    } else {
      res.status(404).json({ message: 'Train not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 