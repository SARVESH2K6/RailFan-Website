const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  title: {
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
  category: {
    type: String,
    required: true
  },
  fullDescription: [String],
  features: [String],
  specifications: [[String]], // Array of [label, value]
  routes: [String],
  history: String,
  service: String,
  preservation: String,
  gallery: [String],
  infobox: {
    type: Object,
    default: {}
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Train', trainSchema); 