const express = require('express');
const router = express.Router();
const History = require('../models/History');

// Get all history events
router.get('/', async (req, res) => {
  try {
    const history = await History.find().sort({ order: 1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single history event
router.get('/:id', async (req, res) => {
  try {
    const history = await History.findById(req.params.id);
    if (history) {
      res.json(history);
    } else {
      res.status(404).json({ message: 'History event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new history event
router.post('/', async (req, res) => {
  const history = new History(req.body);
  try {
    const newHistory = await history.save();
    res.status(201).json(newHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a history event
router.put('/:id', async (req, res) => {
  try {
    const history = await History.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (history) {
      res.json(history);
    } else {
      res.status(404).json({ message: 'History event not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a history event
router.delete('/:id', async (req, res) => {
  try {
    const history = await History.findByIdAndDelete(req.params.id);
    if (history) {
      res.json({ message: 'History event deleted' });
    } else {
      res.status(404).json({ message: 'History event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 