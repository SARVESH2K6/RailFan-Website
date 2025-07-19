const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  abbreviation: String,
  image: { type: String, required: true },
  region: String,
  established: String,
  headquarters: String,
  about: String,
  history: String,
  geography: String,
  operations: String,
  divisions: [String],
  majorStations: [String],
  gallery: [String],
  website: String,
  wikipedia: String,
  references: [String]
}, { timestamps: true });

module.exports = mongoose.model('Zone', zoneSchema); 