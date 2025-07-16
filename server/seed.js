const mongoose = require('mongoose');
const History = require('./models/History');
const Locomotive = require('./models/Locomotive');
const Train = require('./models/Train');
const Zone = require('./models/Zone');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');
  
  try {
    // Clear existing data
    await History.deleteMany({});
    await Locomotive.deleteMany({});
    await Train.deleteMany({});
    await Zone.deleteMany({});
    
    // Seed History data
    const historyData = [
      {
        date: 'April 16, 1853',
        title: 'First Passenger Train in India',
        description: 'The first passenger train in India ran from Bombay (now Mumbai) to Thane, covering a distance of 34 kilometers. This marked the beginning of the Indian Railways.',
        image: '/Images/index/image1.jpg',
        order: 1
      },
      {
        date: '1862',
        title: 'First Railway Bridge',
        description: 'The first major railway bridge was constructed over the Godavari River at Rajahmundry, showcasing early engineering marvels in Indian Railways.',
        image: '/Images/index/image2.jpg',
        order: 2
      },
      {
        date: '1874',
        title: 'Introduction of Steam Locomotives',
        description: 'Steam locomotives became the backbone of Indian Railways, with various classes serving different purposes across the vast network.',
        image: '/Images/Locomotive/Steam.jpg',
        order: 3
      },
      {
        date: '1925',
        title: 'Electrification Begins',
        description: 'The first electric train ran between Bombay Victoria Terminus and Kurla, marking the beginning of electrification in Indian Railways.',
        image: '/Images/Locomotive/electric.jpg',
        order: 4
      },
      {
        date: '1951',
        title: 'Nationalization of Railways',
        description: 'Indian Railways was nationalized, bringing all railway systems under government control and creating a unified network.',
        image: '/Images/index/image3.jpg',
        order: 5
      },
      {
        date: '1969',
        title: 'Introduction of Diesel Locomotives',
        description: 'Diesel locomotives were introduced, providing more efficient and powerful alternatives to steam engines.',
        image: '/Images/Locomotive/Diesel.jpg',
        order: 6
      },
      {
        date: '1986',
        title: 'Computerized Reservation System',
        description: 'The Computerized Reservation System (CRS) was introduced, revolutionizing ticket booking across the country.',
        image: '/Images/index/image4.jpg',
        order: 7
      },
      {
        date: '2002',
        title: 'Konkan Railway Completion',
        description: 'The Konkan Railway was completed, connecting Mumbai to Mangalore through one of the most challenging terrains in India.',
        image: '/Images/index/image5.jpg',
        order: 8
      },
      {
        date: '2014',
        title: 'Dedicated Freight Corridors',
        description: 'The first dedicated freight corridor project was launched, aiming to separate freight and passenger traffic for better efficiency.',
        image: '/Images/index/image6.jpeg',
        order: 9
      },
      {
        date: '2019',
        title: 'Vande Bharat Express',
        description: 'The first Vande Bharat Express was introduced, marking India\'s entry into the era of semi-high-speed trains.',
        image: '/Images/Train/VandeBharat.jpg',
        order: 10
      },
      {
        date: '2023',
        title: 'Bullet Train Project',
        description: 'Construction began on the Mumbai-Ahmedabad High-Speed Rail Corridor, India\'s first bullet train project.',
        image: '/Images/Train/Tejas.jpg',
        order: 11
      },
      {
        date: '2024',
        title: 'Modernization Era',
        description: 'Indian Railways continues to modernize with advanced signaling systems, station redevelopment, and sustainable initiatives.',
        image: '/Images/index/Kerala.jpg',
        order: 12
      }
    ];

    // Seed Locomotive data
    const locomotiveData = [
      {
        type: 'steam',
        title: 'WP Class',
        description: 'The iconic post-independence passenger steam locomotive designed for high-speed service on broad gauge.',
        image: '/Images/Locomotive/Steam.jpg',
        longDescription: 'The WP class was introduced in 1947 and became the backbone of Indian Railways passenger services. Known for its bullet-nosed design and high speed, the WP class was a symbol of post-independence engineering prowess. These locomotives hauled prestigious trains and are remembered for their reliability and performance. Some units are preserved for heritage runs today.',
        history: 'The WP class was developed post-independence to meet the growing demand for fast passenger trains. It was manufactured by several companies, including Chittaranjan Locomotive Works, and served on prestigious routes across India.',
        service: 'WP locomotives hauled important express trains such as the Howrah–Delhi Mail and the Grand Trunk Express. They were known for their speed and reliability, serving Indian Railways for several decades.',
        preservation: 'A few WP class locomotives have been preserved in railway museums and are occasionally used for heritage runs, showcasing the legacy of Indian steam power.',
        specs: {
          "Gauge": "Broad Gauge (5 ft 6 in)",
          "Wheel Arrangement": "4-6-2 Pacific",
          "Builder": "Chittaranjan Locomotive Works, Baldwin, Canadian Locomotive Company",
          "Year Introduced": 1947,
          "Max Speed": "110 km/h",
          "Tractive Effort": "27,000 lbf"
        },
        gallery: [
          '/Images/Locomotive/Steam.jpg',
          '/Images/Train/Steam.jpg'
        ],
        classes: [
          { name: 'WP', description: 'Standard passenger steam locomotive' }
        ]
      },
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
      },
      {
        type: 'electric',
        title: 'WAP-7',
        description: 'The backbone of Indian Railways’ passenger fleet since the 2000s, known for its high power, reliability, and regenerative braking.',
        image: '/Images/Locomotive/electric.jpg',
        longDescription: 'The WAP-7 is a high-speed electric locomotive developed by Chittaranjan Locomotive Works. Introduced in the early 2000s, it is capable of hauling long, heavy express trains at speeds up to 140 km/h. Its advanced features include regenerative braking and microprocessor-based controls, making it a favorite for premium passenger services.',
        history: 'WAP-7 was developed to meet the need for high-speed, high-power electric locomotives. It is based on the WAG-9 freight design but optimized for passenger service.',
        service: 'WAP-7s haul premier trains like Rajdhani, Shatabdi, and Duronto Expresses, providing fast and efficient service across electrified routes.',
        preservation: 'As a modern class, WAP-7s are still in active service, but a few prototypes are displayed at railway exhibitions.',
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

    // Seed Train data
    const trainData = [
      {
        title: 'Rajdhani Express',
        description: 'Premium long-distance trains connecting state capitals to Delhi',
        image: '/Images/Train/Rajdhani.jpg',
        category: 'express'
      },
      {
        title: 'Shatabdi Express',
        description: 'Day journey trains connecting major cities',
        image: '/Images/Train/Shatabdi.jpg',
        category: 'express'
      },
      {
        title: 'Duronto Express',
        description: 'Non-stop trains connecting major cities',
        image: '/Images/Train/Duronto.jpg',
        category: 'express'
      },
      {
        title: 'Vande Bharat Express',
        description: 'India\'s first semi-high-speed train',
        image: '/Images/Train/VandeBharat.jpg',
        category: 'premium'
      },
      {
        title: 'Tejas Express',
        description: 'Premium trains with modern amenities',
        image: '/Images/Train/Tejas.jpg',
        category: 'premium'
      },
      {
        title: 'Garib Rath',
        description: 'Affordable AC trains for budget travelers',
        image: '/Images/Train/GaribRath.jpg',
        category: 'budget'
      },
      {
        title: 'Passenger Trains',
        description: 'Local trains serving short distances',
        image: '/Images/Train/Passenger.jpeg',
        category: 'local'
      },
      {
        title: 'Goods Trains',
        description: 'Freight trains carrying cargo across India',
        image: '/Images/Train/goods.jpg',
        category: 'freight'
      }
    ];

    // Seed Zone data
    const zoneData = [
      {
        name: 'Northern Railway',
        description: 'Serving the northern states of India',
        image: '/Images/Railways/NorthCentralRailway.jpg',
        region: 'north'
      },
      {
        name: 'Western Railway',
        description: 'Connecting western India with modern infrastructure',
        image: '/Images/Railways/WesternRailway.jpg',
        region: 'west'
      },
      {
        name: 'Eastern Railway',
        description: 'Serving the eastern region with heritage stations',
        image: '/Images/Railways/SouthEasternRailway.jpg',
        region: 'east'
      },
      {
        name: 'Southern Railway',
        description: 'Connecting southern states with scenic routes',
        image: '/Images/Railways/SouthCentralRailway.jpg',
        region: 'south'
      },
      {
        name: 'Central Railway',
        description: 'Heart of India\'s railway network',
        image: '/Images/Railways/SouthEastCentralRailway.jpg',
        region: 'central'
      },
      {
        name: 'North Eastern Railway',
        description: 'Serving the northeastern states',
        image: '/Images/Railways/NorthEasternRailway.jpg',
        region: 'northeast'
      },
      {
        name: 'South Western Railway',
        description: 'Modern railway zone with advanced facilities',
        image: '/Images/Railways/SouthWesternRailway.jpg',
        region: 'southwest'
      },
      {
        name: 'North Western Railway',
        description: 'Connecting northwestern India',
        image: '/Images/Railways/NorthWesternRailway.jpg',
        region: 'northwest'
      },
      {
        name: 'East Central Railway',
        description: 'Serving central and eastern India',
        image: '/Images/Railways/EastCentralRailway.png',
        region: 'eastcentral'
      },
      {
        name: 'East Coast Railway',
        description: 'Coastal railway network',
        image: '/Images/Railways/EastCoastRailway.jpg',
        region: 'eastcoast'
      },
      {
        name: 'South Eastern Railway',
        description: 'Connecting southeastern states',
        image: '/Images/Railways/SouthEasternRailway.jpg',
        region: 'southeast'
      },
      {
        name: 'South Coast Railway',
        description: 'Serving the southern coastal region',
        image: '/Images/Railways/SouthCoastRailway.jpg',
        region: 'southcoast'
      },
      {
        name: 'North East Frontier Railway',
        description: 'Frontier railway serving remote areas',
        image: '/Images/Railways/NortheastFrontierRailway.jpg',
        region: 'frontier'
      },
      {
        name: 'West Central Railway',
        description: 'Central western railway network',
        image: '/Images/Railways/WestCentralRailway.jpg',
        region: 'westcentral'
      },
      {
        name: 'Kolkata Metro Railway',
        description: 'Metropolitan railway system',
        image: '/Images/Railways/KolkataMetroRailway.jpg',
        region: 'metro'
      }
    ];

    // Insert data
    await History.insertMany(historyData);
    await Locomotive.insertMany(locomotiveData);
    await Train.insertMany(trainData);
    await Zone.insertMany(zoneData);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}); 