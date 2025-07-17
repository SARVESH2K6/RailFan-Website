const mongoose = require('mongoose');
const Zone = require('../models/Zone');

const zoneData = [
  // ... Zone data will be pasted here ...
];

async function seedZones() {
  await Zone.deleteMany({});
  await Zone.insertMany(zoneData);
  console.log('Zones seeded!');
}

module.exports = seedZones;

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    await seedZones();
    mongoose.disconnect();
  });
} 