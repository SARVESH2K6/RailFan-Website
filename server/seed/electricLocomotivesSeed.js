const mongoose = require('mongoose');
const LocomotiveSchema = require('../models/Locomotive').schema;

const ElectricLocomotive = mongoose.model('ElectricLocomotive', LocomotiveSchema, 'electricLocomotives');

const electricLocomotiveData = [
  {
    type: 'electric',
    title: 'WAP-9',
    description: 'The backbone of Indian Railways’ passenger fleet since the 2000s, known for its high power, reliability, and regenerative braking.',
    image: '/Images/Locomotive/electric.jpg',
    longDescription: 'The WAP-7 is a high-speed electric locomotive developed by Chittaranjan Locomotive Works. Introduced in the early 2000s, it is capable of hauling long, heavy express trains at speeds up to 140 km/h. Its advanced features include regenerative braking and microprocessor-based controls, making it a favorite for premium passenger services.',
    history: 'WAP-7 was developed to meet the need for high-speed, high-power electric locomotives. It is based on the WAG-9 freight design but optimized for passenger service.',
    service: 'WAP-7s haul premier trains like Rajdhani, Shatabdi, and Duronto Expresses, providing fast and efficient service across electrified routes.',
    preservation: 'As a modern class, WAP-7s are still in active service, but a few prototypes are displayed at railway exhibitions.',
    status:"active",
    specs: {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 2000,
      "Power Output": "6,350 hp",
      "Max Speed": "140 km/h"
    },
    gallery: [
      '/Images/Locomotive/electric.jpg',
      '/Images/Train/VandeBharat.jpg'
    ],
    classes: [
      { name: 'WAP-7', description: 'High-speed passenger electric locomotive' }
    ]
  }
];

async function seedElectricLocomotives() {
  await ElectricLocomotive.insertMany(electricLocomotiveData);
  console.log('Electric locomotives seeded!');
}

module.exports = seedElectricLocomotives;

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    await seedElectricLocomotives();
    mongoose.disconnect();
  });
} 