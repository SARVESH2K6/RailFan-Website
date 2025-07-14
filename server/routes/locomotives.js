const express = require('express');
const router = express.Router();
const Locomotive = require('../models/Locomotive');

// Get all locomotives
router.get('/', async (req, res) => {
  try {
    const locomotives = await Locomotive.find();
    res.json(locomotives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get locomotives by type
router.get('/type/:type', async (req, res) => {
  try {
    const locomotives = await Locomotive.find({ type: req.params.type });
    res.json(locomotives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single locomotive
router.get('/:id', async (req, res) => {
  try {
    const locomotive = await Locomotive.findById(req.params.id);
    if (locomotive) {
      res.json(locomotive);
    } else {
      res.status(404).json({ message: 'Locomotive not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new locomotive
router.post('/', async (req, res) => {
  const locomotive = new Locomotive(req.body);
  try {
    const newLocomotive = await locomotive.save();
    res.status(201).json(newLocomotive);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a locomotive
router.put('/:id', async (req, res) => {
  try {
    const locomotive = await Locomotive.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (locomotive) {
      res.json(locomotive);
    } else {
      res.status(404).json({ message: 'Locomotive not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a locomotive
router.delete('/:id', async (req, res) => {
  try {
    const locomotive = await Locomotive.findByIdAndDelete(req.params.id);
    if (locomotive) {
      res.json({ message: 'Locomotive deleted' });
    } else {
      res.status(404).json({ message: 'Locomotive not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 