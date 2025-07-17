const mongoose = require('mongoose');
const LocomotiveSchema = require('../models/Locomotive').schema;

const DieselLocomotive = mongoose.model('DieselLocomotive', LocomotiveSchema, 'dieselLocomotives');

const dieselLocomotiveData = [
  {
    type: 'diesel',
    title: 'WDM-2',
    description: 'India’s most successful and iconic diesel locomotive, built by ALCO and produced in large numbers by DLW from 1962 onwards.',
    image: '/Images/Locomotive/Diesel.jpg',
    longDescription: 'The WDM-2 is the workhorse of Indian Railways, introduced in the early 1960s. Built under license from ALCO, it served both passenger and freight duties for decades. Its robust design and adaptability made it the most numerous mainline diesel locomotive in India. Many units are still operational or used for shunting.',
    history: 'The WDM-2 was introduced to replace aging steam locomotives and modernize Indian Railways. Built in Varanasi, it became the backbone of both passenger and freight services.',
    service: 'WDM-2s were used across India for a variety of services, from express passenger trains to heavy freight. Their versatility and reliability made them a favorite among railway staff.',
    preservation: 'Several WDM-2 units have been preserved in museums and are sometimes used for special events and heritage runs.',
    specs: {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Diesel Locomotive Works (DLW), Varanasi",
      "Year Introduced": 1962,
      "Power Output": "2,600 hp",
      "Max Speed": "120 km/h"
    },
    gallery: [
      '/Images/Locomotive/Diesel.jpg',
      '/Images/Train/goods.jpg'
    ],
    classes: [
      { name: 'WDM-2', description: 'Mainline mixed-traffic diesel locomotive' }
    ]
  }
];

async function seedDieselLocomotives() {
  await DieselLocomotive.insertMany(dieselLocomotiveData);
  console.log('Diesel locomotives seeded!');
}

module.exports = seedDieselLocomotives;

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    await seedDieselLocomotives();
    mongoose.disconnect();
  });
} 