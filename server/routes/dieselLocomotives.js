const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const LocomotiveSchema = require('../models/Locomotive').schema;
const DieselLocomotive = mongoose.model('DieselLocomotive', LocomotiveSchema, 'dieselLocomotives');

// Get all diesel locomotives
router.get('/', async (req, res) => {
  try {
    const locos = await DieselLocomotive.find();
    res.json(locos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single diesel locomotive by id
router.get('/:id', async (req, res) => {
  try {
    const loco = await DieselLocomotive.findById(req.params.id);
    if (loco) {
      res.json(loco);
    } else {
      res.status(404).json({ message: 'Locomotive not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 