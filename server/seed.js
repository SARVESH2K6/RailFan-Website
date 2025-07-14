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
        title: 'Steam',
        description: 'This section showcases India\'s iconic steam locomotives, their legacy, engineering brilliance, and role in shaping Indian railway history.',
        image: '/Images/Locomotive/Steam.jpg',
        classes: [
          { name: 'Class A', description: 'Early passenger locomotives' },
          { name: 'Class B', description: 'Mixed traffic locomotives' },
          { name: 'Class C', description: 'Heavy freight locomotives' }
        ]
      },
      {
        type: 'diesel',
        title: 'Diesel',
        description: 'This section highlights powerful Diesel Locomotives that revolutionized Indian Railways, bridging the gap between steam and electric eras.',
        image: '/Images/Locomotive/Diesel.jpg',
        classes: [
          { name: 'WDM Series', description: 'Mixed traffic locomotives' },
          { name: 'WDP Series', description: 'Passenger locomotives' },
          { name: 'WDS Series', description: 'Shunting locomotives' }
        ]
      },
      {
        type: 'electric',
        title: 'Electric',
        description: 'This section showcases advanced, eco-friendly engines that enhance speed, efficiency, and sustainability across India\'s vast railway network.',
        image: '/Images/Locomotive/electric.jpg',
        classes: [
          { name: 'WAP Series', description: 'Passenger locomotives' },
          { name: 'WAG Series', description: 'Freight locomotives' },
          { name: 'WAM Series', description: 'Mixed traffic locomotives' }
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