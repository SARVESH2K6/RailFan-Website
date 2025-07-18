// This file restores the original all-in-one seeder for RailFan.
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
    type: 'steam',
    title: 'XA Class',
    description: 'Light axle‑load broad‑gauge 4‑6‑2 "Pacific" experimental passenger locomotive introduced in 1929.',
    image: '', // add your hosted image if available
    longDescription: 'The XA class was built by Vulcan Foundry between 1929–31 (100+ units). Designed for branch lines, it featured a 13.1‑ton axle load, 20,960 lbf tractive effort, and served in India and Pakistan post‑Partition. Two examples are preserved. :contentReference[oaicite:0]',
    history: 'Introduced 1929–31 under IRS standards for light branch passenger services. :contentReference[oaicite:0]',
    service: 'Operated branch passenger services on lighter tracks in British India and post‑Partition until retirement in the 1960s. :contentReference[oaicite:0]',
    preservation: 'Two units preserved (No. 22046 at Parel Workshop; No. 22002 at Chandausi). :contentReference[oaicite:0]',
    status: 'retired',
    specs: {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "4‑6‑2",
      "Builder": "Vulcan Foundry",
      "Year Introduced": 1929,
      "Axle Load": "13.1 long tons",
      "Tractive Effort": "20,960 lbf"
    },
    gallery: [],
    classes: [{ name: 'XA', description: 'Light branch passenger Pacific' }]
  },
  {
    type: 'steam',
    title: 'XB Class',
    description: 'Broad‑gauge 4‑6‑2 "Pacific" IRS experimental passenger locomotive introduced circa 1924.',
    image: '',
    longDescription: 'The XB class, an IRS 4‑6‑2 design with 17‑ton axle load, had ~99 units built. Experienced initial teething issues but served into the 1980s. One example preserved (#450). :contentReference[oaicite:1]',
    history: 'Designed 1924 by BESA standards to modernize passenger fleet; entered service late 1920s. :contentReference[oaicite:1]',
    service: 'Hauling express and passenger services until gradual withdrawal through the 1980s. :contentReference[oaicite:1]',
    preservation: 'One preserved unit (#450) remains; rest scrapped by 1983. :contentReference[oaicite:1]',
    status: 'retired',
    specs: {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "4‑6‑2",
      "Axle Load": "17 long tons",
      "Tractive Effort": "26,760 lbf",
      "Max Speed": "116 km/h"
    },
    gallery: [],
    classes: [{ name: 'XB', description: 'Intermediate branch passenger Pacific' }]
  },
  {
    type: 'steam',
    title: 'XC Class',
    description: 'Heavy‑axle‑load broad‑gauge 4‑6‑2 “Pacific” locomotive used from 1928.',
    image: '',
    longDescription: 'The XC class was a heavy Pacific (19.5‑t axle load, 6 ft 2 in drivers) built 1928–31; 72 units served in India and Pakistan post‑Partition. None preserved. :contentReference[oaicite:2]',
    history: 'Introduced 1928–31 by Vulcan Foundry and Beardmore as heavy‑load passenger locos. :contentReference[oaicite:2]',
    service: 'Used for mainline passenger runs until phased out; retired without any preservation. :contentReference[oaicite:2]',
    preservation: 'None preserved. :contentReference[oaicite:2]',
    status: 'retired',
    specs: {
      "Gauge": "Broad Gauge",
      "Wheel Arrangement": "4‑6‑2",
      "Axle Load": "19.5 long tons",
      "Driver Dia": "6 ft 2 in",
      "Units Built": 72
    },
    gallery: [],
    classes: [{ name: 'XC', description: 'Heavy mainline passenger Pacific' }]
  },
  {
    type: 'steam',
    title: 'XD Class',
    description: 'Broad‑gauge 2‑8‑2 “Mikado” freight locomotive used from 1928–48.',
    image: '',
    longDescription: 'Built 1928–1948 by multiple builders; 194 units delivered with 37,335 lbf tractive effort. Served freight duties across India; known in Pakistan as CWD. :contentReference[oaicite:3]',
    history: 'IRS goods design introduced 1928 and produced into post‑war period. :contentReference[oaicite:3]',
    service: 'Mainstay freight loco until replaced by newer types; withdrawn in late 20th century. :contentReference[oaicite:3]',
    preservation: 'Several preserved in museums and heritage lines. :contentReference[oaicite:3]',
    status: 'retired',
    specs: {
      "Gauge": "Broad Gauge",
      "Wheel Arrangement": "2‑8‑2",
      "Units Built": 194,
      "Tractive Effort": "37,335 lbf"
    },
    gallery: [],
    classes: [{ name: 'XD', description: 'Standard IRS freight Mikado' }]
  },
  {
    type: 'steam',
    title: 'XE Class',
    description: 'Heavy‑goods broad‑gauge 2‑8‑2 “Mikado” locomotive introduced 1928.',
    image: '',
    longDescription: 'The XE class was India’s heaviest non‑articulated steam loco (50,920 lbf tractive effort), built 1928–30 and 1945; 93 units delivered. Five preserved, including operational XE 3634. :contentReference[oaicite:4]',
    history: 'Developed under IRS standards for heavy freight; built by Beardmore and Vulcan Foundry. :contentReference[oaicite:4]',
    service: 'Heavy freight runs; withdrawn gradually, some used for shunting. :contentReference[oaicite:4]',
    preservation: 'Five preserved (e.g., XE 3634 in Rewari). :contentReference[oaicite:4]',
    status: 'retired',
    specs: {
      "Gauge": "Broad Gauge",
      "Wheel Arrangement": "2‑8‑2",
      "Units Built": 93,
      "Tractive Effort": "50,920 lbf"
    },
    gallery: [],
    classes: [{ name: 'XE', description: 'Heavy freight Mikado' }]
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
    // Sort locomotiveData by Year Introduced
    locomotiveData.sort((a, b) => {
      function extractYear(loco) {
        let year = loco.specs && loco.specs["Year Introduced"];
        if (!year) return 9999;
        if (typeof year === 'number') return year;
        const match = String(year).match(/\d{4}/);
        return match ? parseInt(match[0], 10) : 9999;
      }
      return extractYear(a) - extractYear(b);
    });

    // Seed Train data
    const trainData = [
      {
        title: 'Vande Bharat Express',
        description: "India's first indigenously built semi-high-speed train, known for its sleek design, modern amenities, and rapid acceleration, revolutionizing rail travel.",
        image: '/Images/Train/VandeBharat.jpg',
        category: 'premium',
        fullDescription: [
          'The Vande Bharat Express, also known as Train 18, is India\'s first indigenously built semi-high-speed train. Manufactured by the Integral Coach Factory (ICF) in Chennai, it represents a significant milestone in Indian Railways\' journey toward modernization and self-reliance.',
          'Introduced in 2019, this train can reach speeds of up to 160 km/h, making it one of the fastest trains in India. Its remarkable acceleration capability allows it to reach 100 km/h in just 52 seconds, significantly reducing travel time between major cities.',
          'The train features a sleek, aerodynamic design with a distinctive white and blue exterior. Its advanced engineering includes undercarriage-mounted propulsion systems, eliminating the need for a locomotive and allowing for operation from either end.'
        ],
        features: [
          'Maximum operational speed of 160 km/h',
          '0-100 km/h acceleration in just 52 seconds',
          'Automatic sliding doors and retractable footsteps',
          'Fully sealed gangways for reduced noise and vibration',
          'GPS-based passenger information system',
          'Onboard WiFi and infotainment',
          'Bio-vacuum toilets and touch-free amenities',
          'Rotatable seats in Executive Class',
          'CCTV surveillance and emergency talk-back units',
          'Intelligent air conditioning system'
        ],
        specifications: [
          ['Manufacturer', 'Integral Coach Factory (ICF), Chennai'],
          ['Train Configuration', '16 coaches (2 Executive Class, 14 Chair Car)'],
          ['Seating Capacity', 'Around 1,128 passengers'],
          ['Maximum Speed', '180 km/h (design), 160 km/h (operational)'],
          ['Power', '16,000 HP (distributed)'],
          ['Traction', 'Electric (25 kV)'],
          ['Year Introduced', '2019'],
          ['Manufacturing Cost', 'Approximately ₹100 crore per rake']
        ],
        routes: [
          'New Delhi - Varanasi',
          'New Delhi - Shri Mata Vaishno Devi Katra',
          'Mumbai Central - Gandhinagar Capital',
          'Secunderabad - Visakhapatnam',
          'Chennai - Mysuru',
          'And many more routes across India'
        ],
        history: 'The Vande Bharat Express was developed as part of the Make in India initiative, with the first train flagged off in February 2019. It marked a new era in Indian train travel, offering world-class amenities and speed.',
        service: 'The train operates on several routes, providing fast, comfortable, and efficient service for intercity travel. It is popular among business and leisure travelers alike.',
        preservation: 'As a modern train, Vande Bharat is in active service. Its success has led to plans for more such trains across India.',
        gallery: ['/Images/Train/VandeBharat.jpg'],
        infobox: {
          type: 'Semi-high-speed EMU',
          manufacturer: 'Integral Coach Factory',
          introduced: 2019,
          maxSpeed: '180 km/h (design), 160 km/h (operational)',
          power: '16,000 HP',
          traction: 'Electric (25 kV)',
          configuration: '16 coaches',
          operator: 'Indian Railways'
        }
      },
      {
        title: 'Shatabdi Express',
        description: 'Day journey trains connecting major cities',
        image: '/Images/Train/Shatabdi.jpg',
        category: 'express',
        fullDescription: [
          'The Shatabdi Express is a premium long-distance train service operated by Indian Railways. Known for its comfortable seating, modern amenities, and efficient travel time, it connects major cities across India.',
          'Introduced in 1992, this train offers a luxurious travel experience with features like air conditioning, comfortable berths, and onboard dining. It operates on some of the busiest routes in India, including Delhi-Mumbai, Delhi-Bangalore, and Delhi-Chennai.',
          'The train features a modern design with a sleek, aerodynamic appearance. Its advanced engineering includes undercarriage-mounted propulsion systems and state-of-the-art signaling systems.'
        ],
        features: [
          'Comfortable berths and seating',
          'Air conditioning throughout',
          'Onboard dining and pantry',
          'Power outlets and USB ports',
          'CCTV surveillance',
          'Emergency talk-back system',
          'Advanced signaling systems',
          'Undercarriage-mounted propulsion',
          'High-speed travel capabilities'
        ],
        specifications: [
          ['Train Type', 'Semi-Sleeper'],
          ['Coach Configuration', '16 coaches (1 AC, 15 Sleeper)'],
          ['Seating Capacity', 'Around 1,200 passengers'],
          ['Maximum Speed', '160 km/h'],
          ['Power', '1,200 HP (distributed)'],
          ['Traction', 'Electric (25 kV)'],
          ['Year Introduced', '1992'],
          ['Manufacturing Cost', 'Approximately ₹100 crore per rake']
        ],
        routes: [
          'Delhi - Mumbai',
          'Delhi - Bangalore',
          'Delhi - Chennai',
          'Delhi - Kolkata',
          'Delhi - Lucknow',
          'Delhi - Chandigarh'
        ],
        history: 'The Shatabdi Express was introduced in 1992 as a premium train service to provide a comfortable and luxurious travel experience for passengers. It quickly gained popularity for its speed, comfort, and reliability.',
        service: 'The train operates on various routes, offering fast and comfortable travel for passengers. It is particularly popular for long-distance journeys.',
        preservation: 'As a modern train, Shatabdi is in active service. Its success has led to plans for more such trains across India.',
        gallery: ['/Images/Train/Shatabdi.jpg'],
        infobox: {
          type: 'Semi-Sleeper',
          manufacturer: 'Indian Railways',
          introduced: 1992,
          maxSpeed: '160 km/h',
          power: '1,200 HP',
          traction: 'Electric (25 kV)',
          configuration: '16 coaches',
          operator: 'Indian Railways'
        }
      },
      {
        title: 'Duronto Express',
        description: 'Non-stop trains connecting major cities',
        image: '/Images/Train/Duronto.jpg',
        category: 'express',
        fullDescription: [
          'The Duronto Express is a fast, non-stop train service operated by Indian Railways. Known for its high speed and efficient travel, it connects major cities across India without any intermediate stops.',
          'Introduced in 1997, this train offers a premium travel experience with features like high-speed travel, comfortable berths, and onboard dining. It operates on some of the fastest routes in India, including Delhi-Mumbai, Delhi-Bangalore, and Delhi-Chennai.',
          'The train features a modern design with a sleek, aerodynamic appearance. Its advanced engineering includes undercarriage-mounted propulsion systems and state-of-the-art signaling systems.'
        ],
        features: [
          'High-speed travel without intermediate stops',
          'Comfortable berths and seating',
          'Air conditioning throughout',
          'Onboard dining and pantry',
          'Power outlets and USB ports',
          'CCTV surveillance',
          'Emergency talk-back system',
          'Advanced signaling systems',
          'Undercarriage-mounted propulsion'
        ],
        specifications: [
          ['Train Type', 'Semi-Sleeper'],
          ['Coach Configuration', '16 coaches (1 AC, 15 Sleeper)'],
          ['Seating Capacity', 'Around 1,200 passengers'],
          ['Maximum Speed', '160 km/h'],
          ['Power', '1,200 HP (distributed)'],
          ['Traction', 'Electric (25 kV)'],
          ['Year Introduced', '1997'],
          ['Manufacturing Cost', 'Approximately ₹100 crore per rake']
        ],
        routes: [
          'Delhi - Mumbai',
          'Delhi - Bangalore',
          'Delhi - Chennai',
          'Delhi - Kolkata',
          'Delhi - Lucknow',
          'Delhi - Chandigarh'
        ],
        history: 'The Duronto Express was introduced in 1997 as a fast, non-stop train service to provide premium travel experience for passengers. It quickly gained popularity for its speed and efficiency.',
        service: 'The train operates on various routes, offering fast and comfortable travel for passengers. It is particularly popular for long-distance journeys.',
        preservation: 'As a modern train, Duronto is in active service. Its success has led to plans for more such trains across India.',
        gallery: ['/Images/Train/Duronto.jpg'],
        infobox: {
          type: 'Semi-Sleeper',
          manufacturer: 'Indian Railways',
          introduced: 1997,
          maxSpeed: '160 km/h',
          power: '1,200 HP',
          traction: 'Electric (25 kV)',
          configuration: '16 coaches',
          operator: 'Indian Railways'
        }
      },
      {
        title: 'Tejas Express',
        description: 'Premium trains with modern amenities',
        image: '/Images/Train/Tejas.jpg',
        category: 'premium',
        fullDescription: [
          'The Tejas Express is a premium long-distance train service operated by Indian Railways. Known for its high speed, modern amenities, and efficient travel, it connects major cities across India.',
          'Introduced in 2002, this train offers a luxurious travel experience with features like high-speed travel, comfortable berths, and onboard dining. It operates on some of the fastest routes in India, including Delhi-Mumbai, Delhi-Bangalore, and Delhi-Chennai.',
          'The train features a modern design with a sleek, aerodynamic appearance. Its advanced engineering includes undercarriage-mounted propulsion systems and state-of-the-art signaling systems.'
        ],
        features: [
          'High-speed travel with comfortable berths',
          'Air conditioning throughout',
          'Onboard dining and pantry',
          'Power outlets and USB ports',
          'CCTV surveillance',
          'Emergency talk-back system',
          'Advanced signaling systems',
          'Undercarriage-mounted propulsion',
          'High-speed travel capabilities'
        ],
        specifications: [
          ['Train Type', 'Semi-Sleeper'],
          ['Coach Configuration', '16 coaches (1 AC, 15 Sleeper)'],
          ['Seating Capacity', 'Around 1,200 passengers'],
          ['Maximum Speed', '160 km/h'],
          ['Power', '1,200 HP (distributed)'],
          ['Traction', 'Electric (25 kV)'],
          ['Year Introduced', '2002'],
          ['Manufacturing Cost', 'Approximately ₹100 crore per rake']
        ],
        routes: [
          'Delhi - Mumbai',
          'Delhi - Bangalore',
          'Delhi - Chennai',
          'Delhi - Kolkata',
          'Delhi - Lucknow',
          'Delhi - Chandigarh'
        ],
        history: 'The Tejas Express was introduced in 2002 as a premium train service to provide a luxurious travel experience for passengers. It quickly gained popularity for its speed and comfort.',
        service: 'The train operates on various routes, offering fast and comfortable travel for passengers. It is particularly popular for long-distance journeys.',
        preservation: 'As a modern train, Tejas is in active service. Its success has led to plans for more such trains across India.',
        gallery: ['/Images/Train/Tejas.jpg'],
        infobox: {
          type: 'Semi-Sleeper',
          manufacturer: 'Indian Railways',
          introduced: 2002,
          maxSpeed: '160 km/h',
          power: '1,200 HP',
          traction: 'Electric (25 kV)',
          configuration: '16 coaches',
          operator: 'Indian Railways'
        }
      },
      {
        title: 'Garib Rath',
        description: 'Affordable AC trains for budget travelers',
        image: '/Images/Train/GaribRath.jpg',
        category: 'budget',
        fullDescription: [
          'The Garib Rath is an affordable AC train service operated by Indian Railways. Known for its comfortable seating, modern amenities, and affordable fares, it connects major cities across India.',
          'Introduced in 1997, this train offers a comfortable travel experience with features like air conditioning, comfortable berths, and onboard dining. It operates on some of the busiest routes in India, including Delhi-Mumbai, Delhi-Bangalore, and Delhi-Chennai.',
          'The train features a modern design with a sleek, aerodynamic appearance. Its advanced engineering includes undercarriage-mounted propulsion systems and state-of-the-art signaling systems.'
        ],
        features: [
          'Comfortable berths and seating',
          'Air conditioning throughout',
          'Onboard dining and pantry',
          'Power outlets and USB ports',
          'CCTV surveillance',
          'Emergency talk-back system',
          'Advanced signaling systems',
          'Undercarriage-mounted propulsion',
          'Affordable fares'
        ],
        specifications: [
          ['Train Type', 'AC 3-Tier'],
          ['Coach Configuration', '16 coaches (3 AC, 13 Sleeper)'],
          ['Seating Capacity', 'Around 1,200 passengers'],
          ['Maximum Speed', '110 km/h'],
          ['Power', '1,200 HP (distributed)'],
          ['Traction', 'Electric (25 kV)'],
          ['Year Introduced', '1997'],
          ['Manufacturing Cost', 'Approximately ₹100 crore per rake']
        ],
        routes: [
          'Delhi - Mumbai',
          'Delhi - Bangalore',
          'Delhi - Chennai',
          'Delhi - Kolkata',
          'Delhi - Lucknow',
          'Delhi - Chandigarh'
        ],
        history: 'The Garib Rath was introduced in 1997 as an affordable AC train service to provide comfortable travel for passengers. It quickly gained popularity for its affordability and comfort.',
        service: 'The train operates on various routes, offering comfortable travel for passengers. It is particularly popular for long-distance journeys.',
        preservation: 'As a modern train, Garib Rath is in active service. Its success has led to plans for more such trains across India.',
        gallery: ['/Images/Train/GaribRath.jpg'],
        infobox: {
          type: 'AC 3-Tier',
          manufacturer: 'Indian Railways',
          introduced: 1997,
          maxSpeed: '110 km/h',
          power: '1,200 HP',
          traction: 'Electric (25 kV)',
          configuration: '16 coaches',
          operator: 'Indian Railways'
        }
      },
      {
        title: 'Passenger Trains',
        description: 'Local trains serving short distances',
        image: '/Images/Train/Passenger.jpeg',
        category: 'local',
        fullDescription: [
          'Passenger trains are the backbone of India\'s railway network, serving short distances and connecting local communities.',
          'These trains are typically slower than express trains and offer a more intimate travel experience. They are often the preferred mode of transportation for local commuters and tourists.',
          'The Indian Railways fleet includes various types of passenger trains, from AC 3-tier to AC 2-tier, to AC 1-tier, and even non-AC trains.'
        ],
        features: [
          'Various types of passenger trains',
          'Comfortable seating options',
          'Onboard dining and pantry',
          'Power outlets and USB ports',
          'CCTV surveillance',
          'Emergency talk-back system',
          'Affordable fares',
          'Local connectivity'
        ],
        specifications: [
          ['Train Type', 'Various'],
          ['Coach Configuration', 'Varies'],
          ['Seating Capacity', 'Varies'],
          ['Maximum Speed', 'Varies'],
          ['Power', 'Varies'],
          ['Traction', 'Varies'],
          ['Year Introduced', 'Various'],
          ['Manufacturing Cost', 'Varies']
        ],
        routes: [
          'Local routes within cities',
          'Inter-city routes',
          'Tourist routes'
        ],
        history: 'Passenger trains have been a staple of Indian Railways since its inception. They have evolved from basic wooden coaches to modern, air-conditioned trains.',
        service: 'These trains serve various routes, providing connectivity and convenience for passengers.',
        preservation: 'Many passenger trains are preserved in museums and heritage lines, showcasing the rich history of Indian Railways.',
        gallery: ['/Images/Train/Passenger.jpeg'],
        infobox: {
          type: 'Various',
          manufacturer: 'Indian Railways',
          introduced: 'Various',
          maxSpeed: 'Varies',
          power: 'Varies',
          traction: 'Varies',
          configuration: 'Varies',
          operator: 'Indian Railways'
        }
      },
      {
        title: 'Goods Trains',
        description: 'Freight trains carrying cargo across India',
        image: '/Images/Train/goods.jpg',
        category: 'freight',
        fullDescription: [
          'Goods trains are essential for the transportation of goods across India. They are typically slower than passenger trains and are used for the transportation of raw materials, manufactured goods, and other commodities.',
          'The Indian Railways fleet includes various types of goods trains, from general freight to specialized freight, including liquid cargo, hazardous materials, and oversized cargo.',
          'These trains play a crucial role in the Indian economy, ensuring the timely delivery of goods from one part of the country to another.'
        ],
        features: [
          'Various types of goods trains',
          'Specialized cargo handling',
          'Liquid cargo transportation',
          'Hazardous materials handling',
          'Oversized cargo transportation',
          'GPS tracking and monitoring',
          'Advanced signaling systems',
          'Undercarriage-mounted propulsion',
          'Efficient cargo transportation'
        ],
        specifications: [
          ['Train Type', 'Various'],
          ['Coach Configuration', 'Varies'],
          ['Seating Capacity', 'Varies'],
          ['Maximum Speed', 'Varies'],
          ['Power', 'Varies'],
          ['Traction', 'Varies'],
          ['Year Introduced', 'Various'],
          ['Manufacturing Cost', 'Varies']
        ],
        routes: [
          'Inter-city freight',
          'Intra-state freight',
          'Inter-state freight',
          'National freight'
        ],
        history: 'Goods trains have been a vital part of Indian Railways since its inception. They have evolved from basic freight wagons to modern, specialized freight trains.',
        service: 'These trains serve various routes, ensuring efficient and reliable cargo transportation across India.',
        preservation: 'Many goods trains are preserved in museums and heritage lines, showcasing the rich history of Indian Railways.',
        gallery: ['/Images/Train/goods.jpg'],
        infobox: {
          type: 'Various',
          manufacturer: 'Indian Railways',
          introduced: 'Various',
          maxSpeed: 'Varies',
          power: 'Varies',
          traction: 'Varies',
          configuration: 'Varies',
          operator: 'Indian Railways'
        }
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