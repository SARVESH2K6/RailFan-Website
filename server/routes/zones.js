const express = require('express');
const router = express.Router();
const Zone = require('../models/Zone');

// Get all zones
router.get('/', async (req, res) => {
  try {
    const zones = await Zone.find();
    res.json(zones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get zones by region
router.get('/region/:region', async (req, res) => {
  try {
    const zones = await Zone.find({ region: req.params.region });
    res.json(zones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single zone
router.get('/:id', async (req, res) => {
  try {
    const zone = await Zone.findById(req.params.id);
    if (zone) {
      res.json(zone);
    } else {
      res.status(404).json({ message: 'Zone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new zone
router.post('/', async (req, res) => {
  const zone = new Zone(req.body);
  try {
    const newZone = await zone.save();
    res.status(201).json(newZone);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a zone
router.put('/:id', async (req, res) => {
  try {
    const zone = await Zone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (zone) {
      res.json(zone);
    } else {
      res.status(404).json({ message: 'Zone not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a zone
router.delete('/:id', async (req, res) => {
  try {
    const zone = await Zone.findByIdAndDelete(req.params.id);
    if (zone) {
      res.json({ message: 'Zone deleted' });
    } else {
      res.status(404).json({ message: 'Zone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 