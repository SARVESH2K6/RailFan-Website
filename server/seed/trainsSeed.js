const mongoose = require('mongoose');
const Train = require('../models/Train');

const trainData = [
  // ... Train data will be pasted here ...
];

async function seedTrains() {
  await Train.deleteMany({});
  await Train.insertMany(trainData);
  console.log('Trains seeded!');
}

module.exports = seedTrains;

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    await seedTrains();
    mongoose.disconnect();
  });
} 