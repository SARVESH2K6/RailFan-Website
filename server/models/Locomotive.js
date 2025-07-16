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
  specs: {
    type: Object, // or Map, for key-value technical specs
  },
  gallery: [
    {
      type: String, // image URLs
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