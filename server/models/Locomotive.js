const mongoose = require('mongoose');

const locomotiveSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['steam', 'diesel', 'electric']
  },
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
  longDescription: {
    type: String,
  },
  history: {
    type: String,
  },
  service: {
    type: String,
  },
  preservation: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'retired', 'preserved', 'heritage'],
    required: true
  },
  specs: {
    type: Object,
  },
  gallery: [
    {
      type: String,
    }
  ],
  classes: [{
    name: String,
    description: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Locomotive', locomotiveSchema); 