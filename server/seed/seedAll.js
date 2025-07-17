const mongoose = require('mongoose');
const seedHistory = require('./historySeed');
const seedSteam = require('./steamSeed');
const seedDiesel = require('./dieselSeed');
const seedElectric = require('./electricSeed');
const seedTrains = require('./trainsSeed');
const seedZones = require('./zonesSeed');

async function seedAll() {
  await seedHistory();
  await seedSteam();
  await seedDiesel();
  await seedElectric();
  await seedTrains();
  await seedZones();
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  await seedAll();
  mongoose.disconnect();
}); 

