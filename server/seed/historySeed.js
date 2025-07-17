const mongoose = require('mongoose');
const History = require('../models/History');

const historyData = [
  // ... History data will be pasted here ...
];

async function seedHistory() {
  await History.deleteMany({});
  await History.insertMany(historyData);
  console.log('History seeded!');
}

module.exports = seedHistory;

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    await seedHistory();
    mongoose.disconnect();
  });
} 