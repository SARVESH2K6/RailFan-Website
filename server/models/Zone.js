const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Zone', zoneSchema); 