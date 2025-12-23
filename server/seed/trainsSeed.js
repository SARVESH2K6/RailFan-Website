const mongoose = require('mongoose');
const Train = require('../models/Train');

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
    title: 'Gatimaan Express',
    description: "India's first semi-high-speed train with luxury services and impressive speeds, enhancing rail travel between Delhi and Jhansi.",
    image: '/Images/Train/GatimaanExpress.jpg',
    category: 'premium',
    fullDescription: [
      "Launched in 2016, the Gatimaan Express is India's first semi-high-speed train, designed to provide fast and luxurious travel experiences. It operates between New Delhi and Jhansi.",
      "It can reach a top speed of 160 km/h and is equipped with premium amenities like onboard catering, infotainment, and executive-class services.",
      "Gatimaan features a modern LHB coach design, offering a smooth and comfortable ride with minimal vibration at high speeds."
    ],
    features: [
      'Top speed of 160 km/h',
      'Catering by IRCTC with curated menus',
      'Large windows and elegant interiors',
      'Onboard infotainment and WiFi',
      'Bio-toilets and onboard housekeeping',
      'Executive and Chair Car options',
      'GPS-based information system'
    ],
    specifications: [
      ['Manufacturer', 'Rail Coach Factory (RCF), Kapurthala'],
      ['Train Configuration', '10 coaches (2 Executive, 8 Chair Car)'],
      ['Seating Capacity', '716 passengers'],
      ['Maximum Speed', '160 km/h'],
      ['Power', 'Electric Locomotive (WAP-5)'],
      ['Traction', 'Electric (25 kV AC)'],
      ['Year Introduced', '2016'],
      ['Route Distance', '188 km (Delhi to Jhansi)']
    ],
    routes: ['New Delhi - Jhansi (via Agra Cantt)'],
    history: 'Gatimaan Express was introduced as India’s first step into semi-high-speed rail travel, offering premium comfort and efficiency.',
    service: 'Known for punctuality and comfort, it serves tourists traveling to Taj Mahal and nearby destinations.',
    preservation: 'Gatimaan is in active service and continues to be a benchmark for quality express trains in India.',
    gallery: ['/Images/Train/GatimaanExpress.jpg'],
    infobox: {
      type: 'Semi-high-speed express',
      manufacturer: 'RCF, Kapurthala',
      introduced: 2016,
      maxSpeed: '160 km/h',
      power: 'WAP-5 Electric Locomotive',
      traction: 'Electric (25 kV)',
      configuration: '10 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Rajdhani Express',
    description: "India's premier long-distance train service connecting major cities with New Delhi, offering high-speed and comfort since 1969.",
    image: '/Images/Train/RajdhaniExpress.jpg',
    category: 'premium',
    fullDescription: [
      "Introduced in 1969, the Rajdhani Express is one of India's fastest and most prestigious train services, connecting major state capitals with New Delhi.",
      "It offers high-speed, long-distance travel with superior onboard services including meals, bedding, and AC coaches only.",
      "It has consistently set benchmarks for punctuality, safety, and hospitality in Indian Railways."
    ],
    features: [
      'High priority on Indian Railways network',
      'Fully air-conditioned coaches',
      'Meals included in fare',
      'Sleeping berths for overnight travel',
      'LHB coaches for enhanced safety and comfort',
      'WiFi and reading lights',
      'Bio-toilets and clean restrooms'
    ],
    specifications: [
      ['Manufacturer', 'Multiple (ICF & RCF)'],
      ['Train Configuration', '18–22 coaches'],
      ['Seating Capacity', 'Varies (approx. 1,000+)'],
      ['Maximum Speed', '130–140 km/h'],
      ['Power', 'Electric Locomotive'],
      ['Traction', 'Electric (25 kV AC)'],
      ['Year Introduced', '1969'],
      ['Classes Available', '1AC, 2AC, 3AC']
    ],
    routes: [
      'Mumbai - New Delhi',
      'Howrah - New Delhi',
      'Chennai - New Delhi',
      'Bangalore - New Delhi',
      'Many other capital cities to Delhi'
    ],
    history: 'Rajdhani Express was launched to provide swift and comfortable connectivity between Delhi and other state capitals.',
    service: 'It is one of the most reliable long-distance trains, preferred for business and official travel.',
    preservation: 'Rajdhani remains operational and continues to expand with newer variants and upgraded services.',
    gallery: ['/Images/Train/RajdhaniExpress.jpg'],
    infobox: {
      type: 'Long-distance premium express',
      manufacturer: 'ICF / RCF',
      introduced: 1969,
      maxSpeed: '140 km/h',
      power: 'Electric Locomotive',
      traction: 'Electric (25 kV)',
      configuration: '18–22 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Shatabdi Express',
    description: "Fast, daytime intercity trains offering quick travel with onboard meals and comfort between major cities.",
    image: '/Images/Train/ShatabdiExpress.jpg',
    category: 'premium',
    fullDescription: [
      "Shatabdi Express trains are high-speed, short-distance intercity trains introduced in 1988 to mark the centenary of Pandit Nehru's birth.",
      "They connect metro cities with important towns and cities, operating during the day and returning the same day.",
      "Known for punctuality and speed, Shatabdi trains offer premium chair car seating, meals, and quick boarding."
    ],
    features: [
      'High-speed intercity travel',
      'AC Chair Car and Executive Chair Car options',
      'Meals included in ticket fare',
      'Daily return schedule',
      'LHB coaches with modern facilities',
      'Onboard WiFi and reading lights',
      'Clean and hygienic toilets'
    ],
    specifications: [
      ['Manufacturer', 'Multiple (ICF / RCF)'],
      ['Train Configuration', '12–16 coaches'],
      ['Seating Capacity', 'Varies (~900+)'],
      ['Maximum Speed', '130–150 km/h'],
      ['Power', 'Electric Locomotive'],
      ['Traction', 'Electric (25 kV AC)'],
      ['Year Introduced', '1988'],
      ['Classes Available', 'Chair Car, Executive Chair Car']
    ],
    routes: [
      'New Delhi - Bhopal',
      'New Delhi - Chandigarh',
      'Howrah - Puri',
      'Chennai - Mysuru',
      'Bangalore - Chennai'
    ],
    history: 'Launched in 1988, Shatabdi trains set a new standard for day travel in India.',
    service: 'Popular among business travelers and tourists for its speed and convenience.',
    preservation: 'Continues to operate on multiple major routes with upgraded coaches and services.',
    gallery: ['/Images/Train/ShatabdiExpress.jpg'],
    infobox: {
      type: 'Intercity day express',
      manufacturer: 'ICF / RCF',
      introduced: 1988,
      maxSpeed: '150 km/h',
      power: 'Electric Locomotive',
      traction: 'Electric (25 kV)',
      configuration: '12–16 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Tejas Express',
    description: "India's first fully private train service with modern features and airline-like services, redefining train travel luxury.",
    image: '/Images/Train/TejasExpress.jpg',
    category: 'premium',
    fullDescription: [
      "Tejas Express is a semi-high-speed, fully air-conditioned train service introduced to provide luxury and modern amenities on Indian Railways.",
      "It was the first Indian train to be operated by IRCTC and includes features such as LED screens, vending machines, CCTV, and airline-style services.",
      "Tejas represents a shift towards privatization and customer-focused rail travel."
    ],
    features: [
      'Onboard entertainment via seatback screens',
      'Airline-style meals and services',
      'Bio-toilets with touch-free features',
      'CCTV surveillance and fire detection',
      'Modern interiors and LED lighting',
      'WiFi, charging ports, reading lights',
      'Travel insurance for passengers'
    ],
    specifications: [
      ['Manufacturer', 'Integral Coach Factory (ICF), Chennai'],
      ['Train Configuration', '12–16 coaches'],
      ['Seating Capacity', '758 (typical)'],
      ['Maximum Speed', '160 km/h'],
      ['Power', 'Electric Locomotive (WAP-7)'],
      ['Traction', 'Electric (25 kV AC)'],
      ['Year Introduced', '2017'],
      ['Operator', 'IRCTC']
    ],
    routes: [
      'Mumbai - Ahmedabad',
      'Lucknow - New Delhi',
      'Chennai - Madurai',
      'And others operated by IRCTC'
    ],
    history: 'Introduced in 2017, Tejas set a new benchmark in luxury and semi-private train operations.',
    service: 'Famous for its airline-style experience and punctuality guarantees.',
    preservation: 'Actively running under IRCTC with expanding routes.',
    gallery: ['/Images/Train/TejasExpress.jpg'],
    infobox: {
      type: 'Semi-high-speed luxury express',
      manufacturer: 'ICF, Chennai',
      introduced: 2017,
      maxSpeed: '160 km/h',
      power: 'WAP-7 Electric Locomotive',
      traction: 'Electric (25 kV)',
      configuration: '12–16 coaches',
      operator: 'IRCTC'
    }
  },
  {
    title: 'Duronto Express',
    description: "Non-stop long-distance trains with minimal halts, offering fast overnight travel across India.",
    image: '/Images/Train/DurontoExpress.jpg',
    category: 'premium',
    fullDescription: [
      "Duronto Express trains are long-distance, non-stop trains introduced in 2009 to connect major cities quickly and efficiently.",
      "These trains offer minimal halts and are faster than Rajdhani on some routes due to reduced stoppages.",
      "Duronto trains feature full AC services with meals and bedding included."
    ],
    features: [
      'Non-stop or minimal-stop routes',
      'AC and Sleeper classes available',
      'Meals included in fare',
      'Faster than traditional express trains',
      'Modern LHB coaches',
      'Sleeping berths and clean washrooms',
      'Silent travel experience with fewer interruptions'
    ],
    specifications: [
      ['Manufacturer', 'Multiple (ICF / RCF)'],
      ['Train Configuration', '18–22 coaches'],
      ['Seating Capacity', 'Varies by route'],
      ['Maximum Speed', '130–140 km/h'],
      ['Power', 'Electric or Diesel Locomotive'],
      ['Traction', 'Electric / Diesel'],
      ['Year Introduced', '2009'],
      ['Classes Available', '1AC, 2AC, 3AC, SL']
    ],
    routes: [
      'Sealdah - New Delhi',
      'Mumbai - Howrah',
      'Chennai - Delhi',
      'Ernakulam - Nizamuddin',
      'Pune - Howrah'
    ],
    history: 'Duronto trains were launched in 2009 as long-distance, no-halt trains for faster travel.',
    service: 'Ideal for overnight intercity travel with comfort and speed.',
    preservation: 'Still operational and being upgraded with LHB coaches and enhanced facilities.',
    gallery: ['/Images/Train/DurontoExpress.jpg'],
    infobox: {
      type: 'Long-distance superfast express',
      manufacturer: 'ICF / RCF',
      introduced: 2009,
      maxSpeed: '140 km/h',
      power: 'Electric / Diesel Locomotive',
      traction: 'Electric / Diesel',
      configuration: '18–22 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Humsafar Express',
    description: 'A fully 3-tier AC express train with modern facilities for affordable long-distance travel in comfort.',
    image: '/Images/Train/HumsafarExpress.jpg',
    category: 'premium',
    fullDescription: [
      "Humsafar Express trains are fully AC 3-tier trains introduced in 2016 by Indian Railways for long-distance travel.",
      "These trains feature upgraded LHB coaches with modern interiors and passenger-friendly facilities like bio-toilets, vending machines, and CCTV.",
      "They are designed for affordability with luxury, and serve both major and emerging destinations."
    ],
    features: [
      'AC 3-tier only coaches',
      'LED screen for station and speed display',
      'Vending machines for tea, coffee, and milk',
      'CCTV surveillance and fire detection',
      'Modern toilets with bio-vacuum system',
      'Curtains and reading lights for privacy',
      'Charging ports for every berth'
    ],
    specifications: [
      ['Manufacturer', 'Integral Coach Factory (ICF), Chennai'],
      ['Train Configuration', '16–22 coaches (All 3AC)'],
      ['Seating Capacity', 'Approx. 1,200+'],
      ['Maximum Speed', '130 km/h'],
      ['Power', 'Electric Locomotive'],
      ['Traction', 'Electric (25 kV AC)'],
      ['Year Introduced', '2016'],
      ['Fare', 'Slightly higher than regular 3AC']
    ],
    routes: [
      'Gorakhpur - Anand Vihar',
      'Bengaluru - Agartala',
      'Sealdah - Jammu Tawi',
      'And many more'
    ],
    history: 'Launched in 2016 with a vision to offer affordable yet luxurious 3AC travel across India.',
    service: 'Popular among middle-class passengers seeking AC comfort on long journeys.',
    preservation: 'Continues to expand across routes with regular upgrades.',
    gallery: ['/Images/Train/HumsafarExpress.jpg'],
    infobox: {
      type: 'Long-distance AC express',
      manufacturer: 'ICF',
      introduced: 2016,
      maxSpeed: '130 km/h',
      power: 'Electric Locomotive',
      traction: 'Electric (25 kV)',
      configuration: 'All AC 3-tier',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Garib Rath Express',
    description: 'An affordable AC train aimed at providing budget travelers access to air-conditioned comfort.',
    image: '/Images/Train/GaribRath.jpg',
    category: 'budget',
    fullDescription: [
      "Garib Rath (meaning 'Poor Man's Chariot') is a series of fully AC trains introduced in 2005 to provide low-cost air-conditioned travel.",
      "These trains offer high-density 3-tier AC and Chair Car coaches with fewer frills to reduce fare costs.",
      "Despite lower fares, Garib Rath trains offer reliable and timely service on important routes."
    ],
    features: [
      'Cheaper AC travel option',
      '3AC and Chair Car coaches',
      'No bedding included in fare (can be purchased)',
      'High-capacity seating arrangement',
      'Modern LHB coaches in many rakes',
      'Charging ports and reading lights',
      'Minimal onboard catering'
    ],
    specifications: [
      ['Manufacturer', 'Multiple (ICF / RCF)'],
      ['Train Configuration', '18–22 coaches'],
      ['Seating Capacity', 'Varies (~1,300+)'],
      ['Maximum Speed', '130–140 km/h'],
      ['Power', 'Electric / Diesel Locomotive'],
      ['Traction', 'Electric / Diesel'],
      ['Year Introduced', '2005'],
      ['Classes Available', '3AC, Chair Car']
    ],
    routes: [
      'Howrah - Yeshvantpur',
      'Mumbai - Hazrat Nizamuddin',
      'Chennai - Hazrat Nizamuddin',
      'And more pan-India routes'
    ],
    history: 'Introduced by Lalu Prasad Yadav in 2005 to democratize AC travel.',
    service: 'Ideal for budget-conscious travelers seeking cool, comfortable journeys.',
    preservation: 'Still running on many important routes across India.',
    gallery: ['/Images/Train/GaribRath.jpg'],
    infobox: {
      type: 'Budget AC express',
      manufacturer: 'ICF / RCF',
      introduced: 2005,
      maxSpeed: '140 km/h',
      power: 'Electric / Diesel Locomotive',
      traction: 'Electric / Diesel',
      configuration: '3AC and Chair Car',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Double Decker Express',
    description: 'Bi-level coaches designed to accommodate more passengers on short to medium intercity routes.',
    image: '/Images/Train/DoubleDecker.jpg',
    category: 'day',
    fullDescription: [
      "Double Decker Express trains feature bi-level seating coaches, designed to increase passenger capacity on busy intercity routes.",
      "They are mostly day trains with Chair Car seating and air conditioning, running on routes with high demand.",
      "The trains are popular among daily commuters and short-distance travelers."
    ],
    features: [
      'Double-deck AC Chair Cars',
      'Large windows and comfortable seating',
      'LHB coaches with anti-roll design',
      'Onboard vending and water dispensers',
      'LED display and route info screens',
      'CCTV for enhanced security',
      'Charging points at each seat'
    ],
    specifications: [
      ['Manufacturer', 'Integral Coach Factory (ICF), Chennai'],
      ['Train Configuration', '10–12 coaches (Double-decker Chair Car)'],
      ['Seating Capacity', 'Around 120 passengers per coach'],
      ['Maximum Speed', '110–130 km/h'],
      ['Power', 'Electric Locomotive (WAP-7/WAP-4)'],
      ['Traction', 'Electric (25 kV)'],
      ['Year Introduced', '2011'],
      ['Classes Available', 'AC Chair Car']
    ],
    routes: [
      'Mumbai - Ahmedabad',
      'Jaipur - Delhi Sarai Rohilla',
      'Bangalore - Chennai',
      'Visakhapatnam - Tirupati'
    ],
    history: 'Launched in 2011 to handle increased short-distance demand with higher capacity per rake.',
    service: 'Popular on busy routes with frequent travelers and office-goers.',
    preservation: 'In operation with modern coaches and selected upgrades.',
    gallery: ['/Images/Train/DoubleDecker.jpg'],
    infobox: {
      type: 'Daytime intercity express',
      manufacturer: 'ICF',
      introduced: 2011,
      maxSpeed: '130 km/h',
      power: 'WAP-7 Electric Locomotive',
      traction: 'Electric (25 kV)',
      configuration: 'Double-decker AC Chair Car',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Deccan Queen',
    description: 'One of the oldest iconic trains in India, linking Mumbai and Pune with elegance and heritage since 1930.',
    image: '/Images/Train/DeccanQueen.jpg',
    category: 'heritage',
    fullDescription: [
      "Deccan Queen is a historic train introduced in 1930, connecting Mumbai and Pune and known for its punctuality, scenic route, and long-standing legacy.",
      "It was the first superfast train in India and also the first to introduce a dining car, offering high-quality service and comfort.",
      "Over the decades, it has been modernized but retains its heritage charm."
    ],
    features: [
      'Daily service between Mumbai and Pune',
      'AC Chair Car and Second Class seating',
      'Pantry car and onboard catering',
      'Large panoramic windows',
      'Reserved seating with good legroom',
      'Clean and well-maintained interiors',
      'Historic importance and loyal passenger base'
    ],
    specifications: [
      ['Manufacturer', 'Various (ICF / RCF)'],
      ['Train Configuration', '14–16 coaches'],
      ['Seating Capacity', 'Varies (~1,000+)'],
      ['Maximum Speed', '105–110 km/h'],
      ['Power', 'Electric Locomotive'],
      ['Traction', 'Electric (25 kV)'],
      ['Year Introduced', '1930'],
      ['Classes Available', 'AC Chair Car, Second Sitting']
    ],
    routes: ['Mumbai CST - Pune Junction (Daily)'],
    history: 'Commissioned in 1930 by the Great Indian Peninsula Railway, it is India\'s oldest superfast train.',
    service: 'A symbol of pride and punctuality, catering to daily commuters between Mumbai and Pune.',
    preservation: 'Upgraded over time but retains its original prestige.',
    gallery: ['/Images/Train/DeccanQueen.jpg'],
    infobox: {
      type: 'Daily heritage express',
      manufacturer: 'ICF / RCF',
      introduced: 1930,
      maxSpeed: '110 km/h',
      power: 'Electric Locomotive',
      traction: 'Electric (25 kV)',
      configuration: 'Chair Car, Second Sitting',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Superfast Express',
    description: 'Trains classified with higher average speeds and fewer halts, ensuring quicker intercity travel.',
    image: '/Images/Train/SuperfastExpress.jpg',
    category: 'general',
    fullDescription: [
      "Superfast Express trains are one of the most important backbones of Indian Railways, providing faster travel options across long and medium distances. Defined by their ability to maintain an average speed exceeding 55 km/h (including halts), they are given high priority on railway tracks compared to regular mail or express trains.",
      "These trains are ideal for passengers looking for swift intercity movement without the added luxury and cost of premium trains like Rajdhani or Shatabdi. Superfast Expresses generally make fewer stops, and passengers are charged an additional superfast surcharge in their fare. They are widely accessible with various classes including Sleeper, AC 3-tier, 2-tier, 1st class AC, and General compartments.",
      "Operating on thousands of kilometers of track every day, these trains ensure punctuality, moderate comfort, and cost-efficiency. Major examples include Kerala SF Express, Tamil Nadu SF Express, and Vaishali SF Express among others."
    ],
    features: [
      'Average speed above 55 km/h',
      'Fewer halts than regular express or mail trains',
      'Wide class availability: SL, 3AC, 2AC, 1AC, General',
      'Superfast surcharge in ticket fare',
      'LHB coaches on upgraded rakes',
      'Onboard catering and pantry in selected trains',
      'Biometric attendance of staff and safety monitoring systems'
    ],
    specifications: [
      ['Manufacturer', 'ICF / RCF'],
      ['Train Configuration', 'Typically 18–24 coaches'],
      ['Seating Capacity', 'Typically 1,000–1,200 passengers'],
      ['Maximum Speed', '130 km/h'],
      ['Power', 'Electric / Diesel Locomotive'],
      ['Traction', '25 kV AC Electric / Diesel'],
      ['Category Introduced', '1980s'],
      ['Classes Available', 'SL, 3AC, 2AC, 1AC, General']
    ],
    routes: [
      'New Delhi - Chennai (Tamil Nadu SF Express)',
      'Gorakhpur - Mumbai LTT (Godan SF Express)',
      'Thiruvananthapuram - Nizamuddin (Kerala SF Express)',
      'Howrah - Mumbai CST (Gitanjali SF Express)'
    ],
    history: 'The Superfast Express category was introduced in the late 20th century as part of Indian Railways\' effort to streamline intercity transport. It catered to middle-class travelers who wanted faster services at slightly higher fares but without the full luxury of Rajdhani/Shatabdi.',
    service: 'Superfast trains serve a major share of Indian Railways passengers and are reliable, timely, and cost-effective.',
    preservation: 'Many Superfast trains are being upgraded with LHB coaches and better locomotive traction for higher speeds and safety.',
    gallery: ['/Images/Train/SuperfastExpress.jpg'],
    infobox: {
      type: 'Long-distance express',
      manufacturer: 'ICF / RCF',
      introduced: '1980s',
      maxSpeed: '130 km/h',
      power: 'Electric / Diesel',
      traction: '25 kV AC / Diesel',
      configuration: '18–24 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Mail Express',
    description: 'The traditional lifeline of Indian Railways that transports both passengers and postal mail across vast distances.',
    image: '/Images/Train/MailExpress.jpg',
    category: 'general',
    fullDescription: [
      "Mail Express trains are among the oldest types of train services in India and were originally introduced to prioritize the transport of government mail along with passengers. Over time, they have become synonymous with budget-friendly, long-distance travel with frequent stops at smaller towns and junctions.",
      "These trains generally travel at average speeds lower than Superfast trains (below 55 km/h) and serve as essential connectors between tier-2 and tier-3 towns and major cities. They stop at more stations than superfast counterparts, making them slower but more accessible for regional travelers.",
      "Mail Express trains operate in a wide range of classes — from unreserved General coaches to AC compartments — and are often equipped with SLR coaches (seating cum luggage vans), pantry services, and postal vans. Examples include Punjab Mail, Howrah Mail, and Chennai Mail."
    ],
    features: [
      'Frequent stops across small and large stations',
      'Combination of mail and passenger services',
      'Affordable ticket pricing',
      'Wider reach into rural and semi-urban areas',
      'Multiple classes including General, SL, and AC tiers',
      'Baggage and luggage van availability',
      'Essential link for postal and passenger movement'
    ],
    specifications: [
      ['Manufacturer', 'Various (ICF, RCF, MCF)'],
      ['Train Configuration', '16–22 coaches'],
      ['Seating Capacity', 'Varies (~1,000 passengers)'],
      ['Maximum Speed', '90–110 km/h'],
      ['Power', 'Diesel / Electric Locomotive'],
      ['Traction', 'Diesel / Electric'],
      ['Introduced', 'Colonial Era – Ongoing'],
      ['Classes Available', 'General, SL, 3AC, 2AC, 1AC']
    ],
    routes: [
      'Mumbai - Amritsar (Punjab Mail)',
      'Howrah - Mumbai (Howrah Mail)',
      'Chennai - Mumbai (Chennai Mail)',
      'Delhi - Kozhikode (Kerala Mail)'
    ],
    history: 'Mail trains have existed since the British era, originally focused on delivering government communications. Later, they were merged with passenger services and today form an essential travel option.',
    service: 'Economical travel option with broad coverage across rural and urban India.',
    preservation: 'Still very much in use, many Mail Express trains are being retrofitted with modern coaches.',
    gallery: ['/Images/Train/MailExpress.jpg'],
    infobox: {
      type: 'Long-distance mixed-use',
      manufacturer: 'ICF / RCF / MCF',
      introduced: 'Colonial Era',
      maxSpeed: '110 km/h',
      power: 'Diesel / Electric',
      traction: '25 kV AC / Diesel',
      configuration: '16–22 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Express',
    description: 'Standard long-distance trains connecting cities, towns, and villages with balanced speed, affordability, and frequency.',
    image: '/Images/Train/Express.jpg',
    category: 'general',
    fullDescription: [
      "Express trains are the most common type of long-distance trains in India and form the core of Indian Railways' operations. They typically stop at more stations than superfast trains but fewer than passenger trains, offering a good balance between speed and accessibility.",
      "These trains serve millions of people every day and provide connectivity to even the remotest towns. Most Express trains are equipped with various classes, including General (Unreserved), Sleeper (SL), and different levels of AC classes. They are preferred for affordability and availability.",
      "Despite their lower speeds and higher number of halts, Express trains are relatively punctual and have consistent operational frequencies. Examples include Raptisagar Express, Gorakhpur Express, and Tapti Ganga Express."
    ],
    features: [
      'Most widespread rail service category',
      'Balanced number of halts and speed',
      'Affordable fares',
      'Available in all major classes',
      'SLR and luggage vans included',
      'Accessible to rural and suburban areas',
      'Some have pantry or e-catering services'
    ],
    specifications: [
      ['Manufacturer', 'ICF / RCF'],
      ['Train Configuration', '16–20 coaches'],
      ['Seating Capacity', '1,000+ passengers'],
      ['Maximum Speed', '90–110 km/h'],
      ['Power', 'Diesel / Electric Locomotive'],
      ['Traction', 'Electric / Diesel'],
      ['Introduced', 'Pre-Independence era – Ongoing'],
      ['Classes Available', 'General, SL, 3AC, 2AC, 1AC']
    ],
    routes: [
      'Howrah - Gorakhpur (Gorakhpur Express)',
      'Mumbai - Rameswaram (Raptisagar Express)',
      'Surat - Chhapra (Tapti Ganga Express)'
    ],
    history: 'Express trains were introduced as a faster and more direct service compared to passenger trains, enabling long-distance travel with fewer halts.',
    service: 'Daily or weekly trains operating in both long and mid-range sectors, crucial to passenger movement.',
    preservation: 'Continuously modernized with LHB coaches and better locomotives.',
    gallery: ['/Images/Train/Express.jpg'],
    infobox: {
      type: 'Standard intercity express',
      manufacturer: 'ICF / RCF',
      introduced: 'Pre-Independence era',
      maxSpeed: '110 km/h',
      power: 'Diesel / Electric',
      traction: 'Electric / Diesel',
      configuration: '16–20 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Jan Shatabdi Express',
    description: 'Economical version of Shatabdi trains offering fast, seated daytime travel between cities at affordable rates.',
    image: '/Images/Train/JanShatabdi.jpg',
    category: 'day',
    fullDescription: [
      "Jan Shatabdi Express trains were launched in 2002 as a budget-friendly counterpart to Shatabdi Expresses. Unlike their elite counterparts, Jan Shatabdis operate with a mix of AC Chair Cars and Second Class (Non-AC) seating.",
      "Designed for high-speed daytime travel, these trains run on important intercity routes and are highly popular among office-goers, students, and middle-class commuters. They have fewer halts and maintain relatively high speeds, often reaching up to 130 km/h.",
      "Some Jan Shatabdis also feature Vistadome coaches for scenic routes like Mumbai–Goa and Siliguri–Alipurduar. They are equipped with clean toilets, reserved seating, and mobile charging ports but lack onboard meals by default."
    ],
    features: [
      'AC Chair Car and Second Class reserved seating',
      'No overnight travel — daytime only',
      'Affordable fares with speed',
      'Charging points and clean washrooms',
      'Vistadome coaches on scenic routes',
      'Less halts and faster travel',
      'Ideal for middle-class intercity travelers'
    ],
    specifications: [
      ['Manufacturer', 'ICF / RCF'],
      ['Train Configuration', '10–16 coaches'],
      ['Seating Capacity', '750–1,000'],
      ['Maximum Speed', '110–130 km/h'],
      ['Power', 'Electric Locomotive'],
      ['Traction', 'Electric (25 kV AC)'],
      ['Year Introduced', '2002'],
      ['Classes Available', 'Second Sitting, AC Chair Car']
    ],
    routes: [
      'Mumbai - Goa (Dadar–Madgaon Jan Shatabdi)',
      'Howrah - Bhubaneswar',
      'Chennai - Vijayawada',
      'Ernakulam - Trivandrum'
    ],
    history: 'Introduced in 2002 under the vision of then Railway Minister Nitish Kumar to make high-speed travel affordable for the common man.',
    service: 'Popular among working-class commuters, business travelers, and tourists for short-day journeys.',
    preservation: 'Still expanding and often receives upgraded coaches and Vistadome facilities.',
    gallery: ['/Images/Train/JanShatabdi.jpg'],
    infobox: {
      type: 'Daytime budget express',
      manufacturer: 'ICF / RCF',
      introduced: 2002,
      maxSpeed: '130 km/h',
      power: 'Electric Locomotive',
      traction: 'Electric (25 kV)',
      configuration: 'AC Chair Car + Second Sitting',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Intercity Express',
    description: 'Short to medium-distance daily trains that connect nearby cities with quick, affordable day travel.',
    image: '/Images/Train/IntercityExpress.jpg',
    category: 'day',
    fullDescription: [
      "Intercity Express trains are designed to connect nearby cities and districts for daily commuters. These trains typically cover distances between 100–500 km and return the same day, making them ideal for office-goers, students, and traders.",
      "Most Intercity trains operate daily with unreserved as well as reserved seating, usually in Second Sitting, Sleeper, and sometimes AC Chair Car configurations. They have limited halts and good punctuality compared to local or passenger trains.",
      "These trains act as the economic lifeline between smaller cities and metros, running early morning and returning by night, and are generally not equipped with pantry cars but may offer e-catering options."
    ],
    features: [
      'Connects neighboring cities and towns',
      'Runs daily with fixed departure/return',
      'Available in Second Sitting and SL classes',
      'Low fares and reserved seating',
      'Good punctuality and moderate speed',
      'Important for daily and weekly commuters'
    ],
    specifications: [
      ['Manufacturer', 'ICF / RCF'],
      ['Train Configuration', '12–18 coaches'],
      ['Seating Capacity', '800–1,100'],
      ['Maximum Speed', '90–110 km/h'],
      ['Power', 'Electric / Diesel Locomotive'],
      ['Traction', 'Electric / Diesel'],
      ['Year Introduced', 'Ongoing'],
      ['Classes Available', '2S, SL, CC']
    ],
    routes: [
      'Delhi - Ambala',
      'Howrah - Dhanbad',
      'Chennai - Bangalore',
      'Ernakulam - Kozhikode'
    ],
    history: 'Developed to support fast regional travel for professionals and students across state and district borders.',
    service: 'Reliable and daily services meant for short-haul fast commutes.',
    preservation: 'Widely used and frequently upgraded with LHB coaches.',
    gallery: ['/Images/Train/IntercityExpress.jpg'],
    infobox: {
      type: 'Daily intercity',
      manufacturer: 'ICF / RCF',
      introduced: 'Ongoing',
      maxSpeed: '110 km/h',
      power: 'Electric / Diesel',
      traction: 'Electric / Diesel',
      configuration: 'Second Sitting, Sleeper',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'MEMU (Mainline Electric Multiple Unit)',
    description: 'MEMU trains are suburban and regional rail services powered by electricity, widely used for short-distance travel across mainline routes in India.',
    image: '/Images/Train/MEMU.jpg',
    category: 'regular',
    fullDescription: [
      'The Mainline Electric Multiple Unit (MEMU) is a class of electric multiple units used extensively by Indian Railways for short to medium-distance routes. Designed primarily to serve commuters and regional travelers, MEMU trains operate on electrified mainline tracks and are capable of rapid acceleration and deceleration, making them ideal for routes with frequent stops.',
      'MEMU trains are typically unreserved and are known for their high passenger capacity and minimal turnaround time. They play a crucial role in decongesting major cities and towns by offering an affordable, efficient, and fast means of daily transport. Over the years, Indian Railways has introduced upgraded MEMU coaches with better interiors and modern amenities to improve the passenger experience.'
    ],
    features: [
      'Electric traction using 25 kV overhead lines',
      'High frequency of stops for commuter accessibility',
      'Driver cabins at both ends, allowing bi-directional operation',
      'Basic seating and standing arrangements',
      'Large entry/exit doors for quick boarding',
      'Modern MEMUs come with improved ventilation and LED lighting'
    ],
    specifications: [
      ['Manufacturer', 'Various ICF and RCF units'],
      ['Train Configuration', '8 to 12 coaches'],
      ['Traction', 'Electric (25 kV)'],
      ['Purpose', 'Suburban and regional services'],
      ['Speed', 'Up to 110 km/h'],
      ['Operation Zones', 'Throughout electrified routes in India']
    ],
    routes: [
      'Mumbai Suburban - Virar - Dahanu Road',
      'Howrah - Bardhaman',
      'Lucknow - Kanpur',
      'Chennai - Arakkonam',
      'Delhi - Rewari',
      'Many routes across electrified zones'
    ],
    history: 'MEMUs were introduced to replace traditional locomotive-hauled passenger trains on short routes, allowing for better frequency and cost-efficiency. The introduction of MEMU services marked a major shift in regional rail mobility.',
    service: 'MEMU trains operate with high frequency, especially during peak hours, serving as a backbone of suburban and intercity connectivity in electrified zones.',
    preservation: 'MEMUs are in active service and continually being upgraded with newer models.',
    gallery: ['/Images/Train/MEMU.jpg'],
    infobox: {
      type: 'Electric Multiple Unit',
      manufacturer: 'ICF, RCF',
      introduced: '1980s onwards',
      maxSpeed: '110 km/h',
      power: 'Electric (25 kV)',
      traction: 'Electric',
      configuration: '8-12 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'DEMU (Diesel Electric Multiple Unit)',
    description: 'DEMU trains are similar to MEMUs but powered by onboard diesel engines, used on non-electrified routes for regional and suburban services.',
    image: '/Images/Train/DEMU.jpg',
    category: 'regular',
    fullDescription: [
      'Diesel Electric Multiple Units (DEMUs) are trainsets powered by diesel engines and designed for short to medium-distance travel in areas lacking electrified tracks. Each coach typically has its own diesel generator and electric traction motors, allowing the train to function without a separate locomotive.',
      'DEMUs are essential in providing rail connectivity in remote and semi-urban areas. These trains are optimized for frequent stops and operate on routes where MEMU trains are not feasible due to the absence of electrification. Over time, Indian Railways has introduced modern DEMU variants like the Solar DEMU, promoting energy efficiency and sustainability in public transport.'
    ],
    features: [
      'Diesel-powered electric traction system',
      'Quick acceleration and deceleration for frequent stops',
      'Unreserved seating suitable for short journeys',
      'Onboard engines eliminate the need for locomotives',
      'Suitable for non-electrified and rural routes',
      'Some models include hybrid or solar-powered coaches'
    ],
    specifications: [
      ['Manufacturer', 'ICF, RCF'],
      ['Train Configuration', '4 to 10 coaches'],
      ['Traction', 'Diesel-Electric'],
      ['Purpose', 'Non-electrified regional services'],
      ['Speed', 'Up to 100 km/h'],
      ['Operation Zones', 'Non-electrified routes across India']
    ],
    routes: [
      'Rohtak - Panipat',
      'Siliguri - New Jalpaiguri',
      'Guntur - Tenali',
      'Barmer - Jodhpur',
      'Nangaldam - Amb Andaura',
      'Many rural and semi-urban routes'
    ],
    history: 'Introduced to address the lack of electrification in many parts of India, DEMUs have served as an affordable and efficient solution for regional mobility since the late 20th century.',
    service: 'DEMUs are commonly used for rural and semi-urban travel and are indispensable for maintaining rail access in non-electrified zones.',
    preservation: 'DEMUs are currently in use across many zones and are undergoing modernization efforts.',
    gallery: ['/Images/Train/DEMU.jpg'],
    infobox: {
      type: 'Diesel-Electric Multiple Unit',
      manufacturer: 'ICF, RCF',
      introduced: '1990s onwards',
      maxSpeed: '100 km/h',
      power: 'Diesel',
      traction: 'Diesel-Electric',
      configuration: '4-10 coaches',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Passenger Trains',
    description: 'Conventional trains that serve as the most basic mode of train travel in India, connecting towns and rural areas with affordable unreserved services.',
    image: '/Images/Train/PassengerTrain.jpg',
    category: 'regular',
    fullDescription: [
      'Passenger trains are the oldest and most widespread category of trains operated by Indian Railways. These trains stop at almost every station along their routes and cater to daily commuters, rural passengers, and those seeking low-cost travel options.',
      'These trains typically have only unreserved coaches and operate at slower speeds. Despite their basic facilities, they play a critical role in ensuring mobility for millions, especially in underdeveloped regions. The affordability of these services makes them essential for inclusive transport development in India.'
    ],
    features: [
      'Frequent stops at all stations',
      'Unreserved coaches with basic seating',
      'Low fares for widespread accessibility',
      'Operated with locomotive-hauled coaches',
      'Essential for rural and small-town connectivity',
      'Often scheduled at non-peak times'
    ],
    specifications: [
      ['Manufacturer', 'ICF coaches, LHB upgrades'],
      ['Train Configuration', 'Varies (8-22 coaches)'],
      ['Traction', 'Diesel or Electric'],
      ['Purpose', 'Local and rural transportation'],
      ['Speed', 'Up to 60-80 km/h'],
      ['Coverage', 'Nationwide']
    ],
    routes: [
      'Saharsa - Barauni Passenger',
      'Madurai - Rameswaram Passenger',
      'Howrah - Barddhaman Local (Passenger)',
      'Ernakulam - Kayankulam Passenger',
      'Hundreds of regional connections across India'
    ],
    history: 'Passenger trains have existed since the inception of Indian Railways in 1853. They remain an enduring symbol of mass mobility, serving the grassroots of the country.',
    service: 'Operating daily across thousands of kilometers, passenger trains offer a lifeline to people in remote areas and help facilitate daily commuting.',
    preservation: 'Passenger trains are still widely in use, though slowly being replaced by MEMUs and DEMUs where possible.',
    gallery: ['/Images/Train/PassengerTrain.jpg'],
    infobox: {
      type: 'Conventional Train',
      manufacturer: 'ICF',
      introduced: '1850s onwards',
      maxSpeed: '80 km/h',
      power: 'Diesel or Electric',
      traction: 'Locomotive-hauled',
      configuration: 'Variable',
      operator: 'Indian Railways'
    }
  },
  {
    title: 'Antyodaya Express',
    description: 'A long-distance fully unreserved superfast train introduced for the common man, with modern facilities and enhanced safety features.',
    image: '/Images/Train/Antyodaya.jpg',
    category: 'budget',
    fullDescription: [
      'Antyodaya Express trains were introduced by Indian Railways with the objective of providing better facilities for unreserved passengers, especially for long-distance travel. These trains combine affordability with enhanced comfort through modern, LHB-type coaches.',
      'Despite being unreserved, Antyodaya coaches feature amenities such as LED lighting, mobile charging points, bio-toilets, and enhanced security systems. Their introduction has helped bridge the gap between basic passenger trains and premium services, ensuring that the economically weaker sections of society also benefit from modern rail facilities.'
    ],
    features: [
      'Fully unreserved but equipped with modern LHB coaches',
      'Mobile charging points and LED lighting',
      'CCTV surveillance and fire detection systems',
      'Bio-toilets with improved sanitation',
      'Enhanced luggage racks and drinking water facilities',
      'Stainless steel interiors for better hygiene'
    ],
    specifications: [
      ['Manufacturer', 'Integral Coach Factory (ICF)'],
      ['Train Configuration', 'Up to 22 unreserved coaches'],
      ['Traction', 'Diesel or Electric'],
      ['Purpose', 'Long-distance unreserved travel'],
      ['Speed', 'Up to 130 km/h'],
      ['Year Introduced', '2016']
    ],
    routes: [
      'Darbhanga - Jalandhar Antyodaya',
      'Ernakulam - Howrah Antyodaya',
      'Santragachi - Chennai Antyodaya',
      'Raxaul - Anand Vihar Terminal Antyodaya',
      'Many more across underserved corridors'
    ],
    history: 'The Antyodaya Express was launched in 2016 under the Railway Budget to fulfill the long-standing demand for upgraded unreserved travel. It reflects Indian Railways’ aim to offer dignity and comfort to all passengers.',
    service: 'These trains run across multiple states and regions, especially connecting high-migration routes and underserved long-distance corridors.',
    preservation: 'Antyodaya trains are actively being operated and expanded to more routes.',
    gallery: ['/Images/Train/Antyodaya.jpg'],
    infobox: {
      type: 'Unreserved Long-Distance Superfast',
      manufacturer: 'ICF',
      introduced: 2016,
      maxSpeed: '130 km/h',
      power: 'Diesel or Electric',
      traction: 'Locomotive-hauled',
      configuration: 'LHB Coaches',
      operator: 'Indian Railways'
    }
  },
  {
    "title": "Palace on Wheels",
    "description": "A luxury tourist train that recreates the opulence of royal travel in India, offering a regal experience on wheels.",
    "image": "/Images/Train/PalaceOnWheels.jpg",
    "category": "luxury",
    "fullDescription": [
      "The Palace on Wheels is India's first luxury tourist train, launched in 1982 to promote tourism in Rajasthan. Designed to replicate the personal coaches of former Maharajas and Nizams, the train showcases royal heritage, plush interiors, and traditional hospitality.",
      "Each coach is named after former princely states, with rich décor, period furniture, and world-class facilities. The train boasts two fine dining restaurants, a lounge bar, and a spa.",
      "It is widely recognized globally and has won several awards for offering one of the most memorable train journeys, blending heritage with luxury tourism."
    ],
    "features": [
      "Royal-themed interiors with period furniture",
      "Two onboard restaurants serving Indian and international cuisine",
      "Bar lounge with a wide selection of beverages",
      "Spa, gym, and salon services onboard",
      "Luxury cabins with attached bathrooms",
      "24x7 butler service",
      "Wi-Fi in select areas and infotainment systems",
      "Cultural performances and guided tours at destinations"
    ],
    "specifications": [
      ["Inauguration Year", "1982"],
      ["Total Coaches", "14 saloon cars"],
      ["Cabin Types", "Deluxe Cabins and Super Deluxe Suite"],
      ["Passenger Capacity", "82 guests"],
      ["Operator", "Rajasthan Tourism and Indian Railways"],
      ["Facilities", "Spa, Lounge, Bar, Dining Cars"],
      ["Speed", "Up to 80 km/h"]
    ],
    "routes": [
      "Delhi – Jaipur – Sawai Madhopur – Chittorgarh – Udaipur – Jaisalmer – Jodhpur – Bharatpur – Agra – Delhi"
    ],
    "history": "The train was conceived to promote royal heritage tourism and reflects the lifestyle of Indian royalty. It has played a pivotal role in luxury tourism in India.",
    "service": "Operates between September and April annually with fixed departures.",
    "preservation": "Fully operational and maintained in partnership with RTDC and Indian Railways.",
    "gallery": ["/Images/Train/PalaceOnWheels.jpg"],
    "infobox": {
      "type": "Luxury Tourist Train",
      "manufacturer": "Indian Railways",
      "introduced": 1982,
      "maxSpeed": "80 km/h",
      "power": "Diesel-Electric",
      "traction": "Electric/Diesel",
      "configuration": "14 saloon cars + restaurant, lounge, utility",
      "operator": "RTDC & Indian Railways"
    }
  },
  {
    "title": "Deccan Odyssey",
    "description": "An award-winning luxury train offering curated journeys across Maharashtra and other Indian states with unmatched opulence and cultural immersion.",
    "image": "/Images/Train/DeccanOdyssey.jpg",
    "category": "luxury",
    "fullDescription": [
      "Launched in 2004, the Deccan Odyssey reflects the regal heritage of the Maratha rulers. With lavish interiors, modern comforts, and curated off-board excursions, it presents an unparalleled way to explore India’s cultural richness.",
      "This luxury train has 21 coaches, each decked in royal blue and gold and fitted with modern amenities. It includes Presidential Suites, spa, bar lounge, and business center.",
      "It has received multiple global awards and is often likened to the Orient Express of India for its blend of royal elegance and high-end tourism."
    ],
    "features": [
      "Presidential Suite with plush interiors",
      "Multi-cuisine fine dining restaurants",
      "Onboard spa, gym, and beauty salon",
      "Bar and lounge with exclusive selections",
      "Wi-Fi and modern entertainment system",
      "24x7 personal butler service",
      "Conference car for corporate events",
      "Medical assistance and laundry facilities"
    ],
    "specifications": [
      ["Inauguration Year", "2004"],
      ["Total Coaches", "21"],
      ["Cabin Types", "Deluxe Cabins, Presidential Suites"],
      ["Passenger Capacity", "88 guests"],
      ["Operator", "Maharashtra Tourism and Indian Railways"],
      ["Facilities", "Spa, Bar, Restaurants, Business Center"],
      ["Speed", "90 km/h (max)"]
    ],
    "routes": [
      "Mumbai – Nashik – Aurangabad – Ajanta – Kolhapur – Goa – Ratnagiri – Mumbai",
      "Alternative routes: Sasan Gir, Udaipur, Vadodara, Hyderabad, and more"
    ],
    "history": "Created to boost luxury tourism across Maharashtra, inspired by the Palace on Wheels model, with enhancements in comfort and coverage.",
    "service": "Runs from October to May on weekly departures across six themed journeys.",
    "preservation": "Operational with world-class maintenance standards.",
    "gallery": ["/Images/Train/DeccanOdyssey.jpg"],
    "infobox": {
      "type": "Luxury Tourist Train",
      "manufacturer": "Integral Coach Factory",
      "introduced": 2004,
      "maxSpeed": "90 km/h",
      "power": "Diesel-Electric",
      "traction": "Electric/Diesel",
      "configuration": "21 coaches including dining, spa, and suite coaches",
      "operator": "MTDC & Indian Railways"
    }
  },
  {
    "title": "Maharajas' Express",
    "description": "The epitome of luxury train travel in India, offering royal treatment, curated excursions, and opulence beyond imagination.",
    "image": "/Images/Train/MaharajasExpress.jpg",
    "category": "luxury",
    "fullDescription": [
      "The Maharajas' Express is India’s most premium luxury train, launched in 2010 by IRCTC. With international-level service and extravagant interiors, it has earned accolades like ‘World’s Leading Luxury Train’ multiple times.",
      "Designed to evoke the opulence of Indian royalty, it features Presidential Suites that span an entire carriage, multiple gourmet restaurants, a full-service bar, and a boutique.",
      "The train offers four distinct itineraries covering heritage sites, palaces, and natural wonders across India, catering to luxury-seeking travelers from around the world."
    ],
    "features": [
      "Presidential Suite covering an entire coach",
      "Two fine-dining restaurants: Rang Mahal and Mayur Mahal",
      "Bar lounge 'Safari Bar' with curated wine collection",
      "Lounge coach with library and games",
      "Boutique shopping onboard",
      "Wi-Fi and climate-controlled cabins",
      "Valet and 24x7 concierge service",
      "Custom excursions with private guides"
    ],
    "specifications": [
      ["Inauguration Year", "2010"],
      ["Total Coaches", "23"],
      ["Cabin Types", "Deluxe, Junior Suite, Suite, Presidential Suite"],
      ["Passenger Capacity", "84 guests"],
      ["Operator", "IRCTC"],
      ["Facilities", "Restaurants, Bar, Lounge, Boutique"],
      ["Speed", "90 km/h (max)"]
    ],
    "routes": [
      "Delhi – Agra – Ranthambore – Jaipur – Bikaner – Jodhpur – Udaipur – Balasinor – Mumbai",
      "Alternative: Delhi – Khajuraho – Varanasi – Lucknow – Agra – Delhi"
    ],
    "history": "Conceptualized to cater to the ultra-luxury segment in global rail tourism. It combines India’s royal past with modern luxury standards.",
    "service": "Operates from October to April with pre-planned itineraries and limited seats.",
    "preservation": "India's flagship luxury train with regular enhancements.",
    "gallery": ["/Images/Train/MaharajasExpress.jpg"],
    "infobox": {
      "type": "Ultra-Luxury Train",
      "manufacturer": "Integral Coach Factory",
      "introduced": 2010,
      "maxSpeed": "90 km/h",
      "power": "Electric",
      "traction": "Electric",
      "configuration": "23 coaches",
      "operator": "IRCTC"
    }
  },
  {
    "title": "Golden Chariot",
    "description": "Southern India’s premium luxury train showcasing the culture, history, and landscapes of Karnataka and beyond.",
    "image": "/Images/Train/GoldenChariot.jpg",
    "category": "luxury",
    "fullDescription": [
      "Golden Chariot, launched in 2008, is South India’s only luxury train operated by Karnataka Tourism and Indian Railways. Designed with influences from Hoysala and Mysore architecture, the interiors reflect southern royal heritage.",
      "It offers two distinct journeys: 'Pride of Karnataka' and 'Jewels of South', covering cities like Mysore, Hampi, Goa, Kochi, and Mahabalipuram.",
      "Each coach is named after a dynasty or kingdom of South India and equipped with modern amenities, fine dining options, spa, and gym."
    ],
    "features": [
      "Cabins themed after southern dynasties",
      "Fine dining restaurants 'Ruchi' and 'Nala'",
      "Bar lounge 'Madira' serving premium spirits",
      "Ayurvedic Spa and Fitness Center",
      "Business center and conference facilities",
      "Dedicated tour guides for each destination",
      "Complimentary Wi-Fi and entertainment systems"
    ],
    "specifications": [
      ["Inauguration Year", "2008"],
      ["Cabin Types", "Single, Double, Suites"],
      ["Passenger Capacity", "84 guests"],
      ["Operator", "Karnataka Tourism & IRCTC"],
      ["Facilities", "Spa, Gym, Dining, Lounge"],
      ["Speed", "70 km/h (operational)"]
    ],
    "routes": [
      "Bengaluru – Mysore – Hampi – Badami – Goa – Bengaluru",
      "Bengaluru – Chennai – Mahabalipuram – Puducherry – Thanjavur – Kochi – Bengaluru"
    ],
    "history": "Initiated to promote luxury tourism across Karnataka and South India, with architectural homage to regional dynasties.",
    "service": "Runs during peak tourism season (Oct to Mar) with themed packages.",
    "preservation": "Fully functional and recently refurbished in collaboration with IRCTC.",
    "gallery": ["/Images/Train/GoldenChariot.jpg"],
    "infobox": {
      "type": "Luxury Train",
      "manufacturer": "ICF, Chennai",
      "introduced": 2008,
      "maxSpeed": "70 km/h",
      "power": "Diesel-Electric",
      "traction": "Electric",
      "configuration": "19 coaches",
      "operator": "IRCTC & Karnataka Tourism"
    }
  },
  {
    "title": "Royal Rajasthan on Wheels",
    "description": "A regal journey through Rajasthan with luxurious amenities and curated royal experiences onboard and offboard.",
    "image": "/Images/Train/RoyalRajasthan.jpg",
    "category": "luxury",
    "fullDescription": [
      "Introduced in 2009, Royal Rajasthan on Wheels is modeled after the successful Palace on Wheels train. It enhances the travel experience with upgraded luxury features, world-class hospitality, and new destinations.",
      "Each coach is tastefully designed with royal themes and includes luxury suites, lounges, spa, and gourmet dining.",
      "It covers important heritage cities in Rajasthan along with Varanasi and Khajuraho, combining spiritual, architectural, and cultural richness."
    ],
    "features": [
      "Heritage-themed luxury suites",
      "Spa coach offering Ayurveda treatments",
      "Two fine-dining restaurants: Sheesh Mahal and Swarn Mahal",
      "Bar lounge with royal ambiance",
      "Personal valet service",
      "Guided excursions with air-conditioned coaches"
    ],
    "specifications": [
      ["Inauguration Year", "2009"],
      ["Passenger Capacity", "82 guests"],
      ["Coach Configuration", "13 passenger coaches + restaurant, spa, lounge"],
      ["Operator", "RTDC & Indian Railways"],
      ["Speed", "90 km/h"]
    ],
    "routes": [
      "Delhi – Jodhpur – Udaipur – Chittorgarh – Sawai Madhopur – Jaipur – Khajuraho – Varanasi – Agra – Delhi"
    ],
    "history": "Built on the success of Palace on Wheels, it offers refined luxury travel with extended itineraries and international appeal.",
    "service": "Operational seasonally from October to March.",
    "preservation": "In operation with ongoing upgrades in services.",
    "gallery": ["/Images/Train/RoyalRajasthan.jpg"],
    "infobox": {
      "type": "Luxury Tourist Train",
      "manufacturer": "Indian Railways",
      "introduced": 2009,
      "maxSpeed": "90 km/h",
      "power": "Diesel",
      "traction": "Electric",
      "configuration": "13+ coaches",
      "operator": "RTDC & Indian Railways"
    }
  },
  {
    "title": "Fairy Queen",
    "description": "The world's oldest working steam locomotive, offering a vintage rail experience in India with historical grandeur.",
    "image": "/Images/Train/FairyQueen.jpg",
    "category": "heritage",
    "fullDescription": [
      "The Fairy Queen is a UNESCO-certified heritage train, originally built in 1855 by Kitson, Thompson & Hewitson, England. It holds the Guinness World Record for being the oldest steam locomotive in regular service.",
      "Refurbished and reintroduced as a heritage train in 1997, it offers a nostalgic journey from Delhi to Alwar with cultural programs and palace visits.",
      "It features a single AC coach with limited seating, vintage charm, and an open viewing area for steam engine photography."
    ],
    "features": [
      "Steam-hauled train with heritage engine",
      "Single luxury AC coach with 50 seats",
      "Onboard refreshments and heritage experience",
      "Escorted cultural tour in Alwar and Sariska",
      "Photography-friendly layout",
      "World’s oldest working steam engine"
    ],
    "specifications": [
      ["Original Build Year", "1855"],
      ["Reintroduced", "1997"],
      ["Engine Type", "Steam (2-2-2 configuration)"],
      ["Passenger Capacity", "50"],
      ["Operator", "Indian Railways"],
      ["Speed", "40 km/h"]
    ],
    "routes": [
      "Delhi – Rewari – Alwar – Sariska – Delhi (Heritage Circuit)"
    ],
    "history": "Preserved after retirement in 1909 and re-launched for heritage tourism in the late 20th century. It is a symbol of India’s rail heritage.",
    "service": "Operates on scheduled departures between October and March.",
    "preservation": "Maintained as a national heritage asset by Indian Railways.",
    "gallery": ["/Images/Train/FairyQueen.jpg"],
    "infobox": {
      "type": "Steam Heritage Train",
      "manufacturer": "Kitson & Co., Leeds",
      "introduced": 1855,
      "maxSpeed": "40 km/h",
      "power": "Steam",
      "traction": "Steam",
      "configuration": "1 AC coach + Steam Engine",
      "operator": "Indian Railways"
    }
  },
  {
    "title": "Kavi Guru Express",
    "description": "A series of trains launched in honor of Rabindranath Tagore, reflecting cultural heritage and connecting regions significant to his life and legacy.",
    "image": "/Images/Train/KaviGuru.jpg",
    "category": "special",
    "fullDescription": [
      "Kavi Guru Express trains were introduced by Indian Railways in 2011 to commemorate the 150th birth anniversary of Rabindranath Tagore, India’s first Nobel laureate and one of the greatest literary figures in history. These trains not only honor his contributions to literature, art, and nationalism but also aim to connect places associated with his life and philosophy.",
      "Operated by Indian Railways on multiple routes, Kavi Guru Express trains focus on cultural significance and inclusivity. Though not equipped with high-end amenities like premium trains, they provide dependable service to long-distance travelers, especially on less frequented but historically rich routes.",
      "These trains are emblematic of Indian Railways’ attempt to blend transport with tribute, allowing passengers to metaphorically trace the footsteps of the poet while experiencing the regions that shaped his worldview and writings."
    ],
    "features": [
      "Express category service with reserved classes",
      "Named to honor Rabindranath Tagore",
      "Operates on culturally significant routes",
      "Regular sleeper and general coaches",
      "Affordable fares",
      "Operated on weekly or bi-weekly frequency"
    ],
    "specifications": [
      ["Category", "Express"],
      ["Inauguration Year", "2011"],
      ["Routes", "Multiple, including Porbandar – Santragachi"],
      ["Operator", "Indian Railways"]
    ],
    "routes": [
      "Porbandar – Santragachi",
      "Howrah – Bhagalpur",
      "Howrah – Azimganj",
      "Howrah – Radhikapur"
    ],
    "history": "The Kavi Guru Express series was launched in 2011 by Indian Railways to honor the legacy of Rabindranath Tagore. The initiative aligned with the cultural movement to celebrate his 150th birth anniversary nationwide.",
    "service": "These trains operate on selected routes weekly or bi-weekly, serving regions with literary and cultural significance.",
    "preservation": "Active and operational, these trains are maintained as part of regular express services.",
    "gallery": ["/Images/Train/KaviGuru.jpg"],
    "infobox": {
      "type": "Express Train Series",
      "introduced": 2011,
      "operator": "Indian Railways",
      "configuration": "General + Sleeper",
      "category": "Special Commemorative Train"
    }
  },
  {
    "title": "Bharat Gaurav Trains",
    "description": "Themed tourist trains introduced to showcase India’s rich heritage, culture, and pilgrimage circuits under the Bharat Gaurav scheme.",
    "image": "/Images/Train/BharatGaurav.jpg",
    "category": "tourist",
    "fullDescription": [
      "Launched under Indian Railways' 'Bharat Gaurav' scheme, these themed trains aim to showcase India’s diverse cultural and spiritual heritage. They are operated under a public-private partnership (PPP) model, where private operators lease trains and customize them to suit tourism circuits.",
      "Bharat Gaurav trains cover various themes such as pilgrimage, historical journeys, or cultural circuits. Operators can modify the interior and exterior to reflect the chosen theme, providing tourists with a unique, immersive rail experience through India’s sacred temples, historical monuments, and scenic landscapes.",
      "Equipped with clean, comfortable seating, catering, and guided tours, these trains offer an all-inclusive package to travelers, especially domestic tourists exploring spiritual and cultural roots. Routes include South India pilgrimage tours, Ramayana Circuit, and more."
    ],
    "features": [
      "Themed carriages with customized interiors",
      "Public-private partnership model",
      "Catering, lodging, and guide services included",
      "Pilgrimage, heritage, and cultural tour packages",
      "Onboard infotainment and announcements",
      "Multilingual guides and interpreters"
    ],
    "specifications": [
      ["Category", "Tourist/Theme Train"],
      ["Inauguration Year", "2021"],
      ["Model", "PPP (Public-Private Partnership)"],
      ["Operator", "Private Operators (under IR supervision)"]
    ],
    "routes": [
      "Southern India Pilgrimage Circuit",
      "Ramayana Circuit",
      "Jyotirlinga Circuit",
      "Kashi – Rameswaram via Tirupati"
    ],
    "history": "Indian Railways introduced Bharat Gaurav Trains in 2021 to promote tourism using rail infrastructure. It allows private players to operate theme-based trains, offering cultural and religious experiences under government supervision.",
    "service": "All-inclusive tourist service with boarding, meals, guided tours, and overnight stays on certain routes.",
    "preservation": "A modern initiative currently in expansion, more private players are being encouraged to operate such trains.",
    "gallery": ["/Images/Train/BharatGaurav.jpg"],
    "infobox": {
      "type": "Tourist Theme Train",
      "introduced": 2021,
      "model": "PPP (Private Operators + Indian Railways)",
      "operator": "Various Private Operators",
      "category": "Cultural, Pilgrimage"
    }
  },
  {
    "title": "Mahaparinirvan Express",
    "description": "A Buddhist pilgrimage circuit train that takes passengers through key sites related to the life of Gautama Buddha across India and Nepal.",
    "image": "/Images/Train/Mahaparinirvan.jpg",
    "category": "pilgrimage",
    "fullDescription": [
      "The Mahaparinirvan Express is a special tourist train introduced by IRCTC to facilitate spiritual journeys for Buddhist pilgrims. The name refers to Buddha’s final state of liberation, symbolizing the train’s mission to guide travelers through the Buddha’s life journey and teachings.",
      "The itinerary includes the most sacred Buddhist pilgrimage sites such as Lumbini (birthplace), Bodhgaya (enlightenment), Sarnath (first sermon), and Kushinagar (Mahaparinirvan site). The train caters to international and domestic pilgrims, especially from countries like Sri Lanka, Japan, Thailand, and Myanmar.",
      "The train is equipped with air-conditioned coaches, vegetarian meals, and tour guides, with hotel stays at key destinations. It exemplifies Indian Railways’ commitment to spiritual tourism, offering a seamless and reflective experience for devotees and culture enthusiasts."
    ],
    "features": [
      "Covers the Buddhist pilgrimage circuit",
      "Onboard guide services in multiple languages",
      "Air-conditioned coaches with sleeping berths",
      "Vegetarian catering service",
      "Hotel stays at key pilgrimage sites",
      "Spiritual documentaries and onboard announcements"
    ],
    "specifications": [
      ["Category", "Pilgrimage"],
      ["Introduced", "2007"],
      ["Operator", "IRCTC"],
      ["Target Audience", "International and Indian pilgrims"]
    ],
    "routes": [
      "Delhi – Gaya – Rajgir – Nalanda – Varanasi – Lumbini – Kushinagar – Sravasti – Agra – Delhi"
    ],
    "history": "The Mahaparinirvan Express was launched by IRCTC in 2007 to promote Buddhist heritage tourism by connecting all major sites of Buddha’s life in one spiritual circuit.",
    "service": "Provides all-inclusive Buddhist spiritual tours with accommodation, food, and guided experiences across India and Nepal.",
    "preservation": "The train continues to operate seasonally, often from October to March, with high popularity among international Buddhist pilgrims.",
    "gallery": ["/Images/Train/Mahaparinirvan.jpg"],
    "infobox": {
      "type": "Pilgrimage Tourist Train",
      "introduced": 2007,
      "operator": "IRCTC",
      "category": "Buddhist Tourism",
      "routeCoverage": "India and Nepal"
    }
  },
  {
    "title": "Vivek Express",
    "description": "India’s longest-running train route in terms of distance, symbolizing Swami Vivekananda’s enduring vision of unity and journey.",
    "image": "/Images/Train/VivekExpress.jpg",
    "category": "long-distance",
    "fullDescription": [
      "Vivek Express refers to a series of trains introduced by Indian Railways in 2011 to commemorate the 150th birth anniversary of Swami Vivekananda, the great Indian philosopher and spiritual reformer. The most famous of the series is the Dibrugarh – Kanyakumari Vivek Express, which is the longest train route in India.",
      "Covering a staggering distance of over 4,200 km in nearly 80 hours, it connects the northeastern tip of Assam to the southernmost point of Tamil Nadu. This symbolic journey reflects Swami Vivekananda’s pan-Indian vision of national integration and cultural unity.",
      "The train includes sleeper, general, and AC coaches and passes through multiple states, offering a moving mosaic of India’s diversity. It serves as a vital link between remote regions and the mainland while inspiring a sense of unity in travelers."
    ],
    "features": [
      "Longest route in Indian Railways (Dibrugarh – Kanyakumari)",
      "Covers 8 states and over 4000 km",
      "Runs weekly",
      "Equipped with sleeper, AC, and general coaches",
      "Tribute to Swami Vivekananda’s legacy",
      "Essential for long-distance inter-region travel"
    ],
    "specifications": [
      ["Category", "Long-distance Express"],
      ["Introduced", "2011"],
      ["Longest Route", "Dibrugarh – Kanyakumari (4,233 km)"],
      ["Journey Time", "Approx. 80 hours"],
      ["Operator", "Indian Railways"]
    ],
    "routes": [
      "Dibrugarh – Kanyakumari",
      "Santragachi – Mangalore",
      "Okha – Tuticorin",
      "Bandra Terminus – Jammu Tawi"
    ],
    "history": "The Vivek Express series was launched in 2011 to celebrate Swami Vivekananda’s 150th birth anniversary. The Dibrugarh – Kanyakumari train was especially noted for its unmatched route length.",
    "service": "Offers extensive connectivity between distant regions, especially for travelers seeking budget long-distance transport.",
    "preservation": "Vivek Express trains continue to run on all designated routes, maintaining their legacy and connectivity importance.",
    "gallery": ["/Images/Train/VivekExpress.jpg"],
    "infobox": {
      "type": "Express Train",
      "introduced": 2011,
      "routeLength": "4,233 km",
      "operator": "Indian Railways",
      "frequency": "Weekly"
    }
  },
  {
    "title": "Mumbai Local Trains",
    "description": "The lifeline of Mumbai, carrying millions daily with unmatched frequency and reach.",
    "image": "/Images/Train/MumbaiLocal.jpg",
    "category": "suburban",
    "fullDescription": [
      "The Mumbai Local Trains form one of the busiest suburban railway networks in the world. Operated jointly by the Central and Western Railways, the system serves the Mumbai Metropolitan Region with an extensive and dense network of tracks that interconnect suburbs to the city center. The trains run from early morning till late night, often at intervals of just a few minutes during peak hours.",
      "Serving over 7.5 million passengers daily, these trains are an essential part of daily life in Mumbai. The system includes fast and slow trains, with designated ladies' compartments and newly introduced air-conditioned coaches for comfort. The rakes are built to handle high-density crush loads, making them uniquely engineered for the fast-paced lifestyle of the city.",
      "Despite the extreme crowding during rush hours, the Mumbai local train network is known for its punctuality and reliability. Continuous upgrades like new AC rakes, automatic doors, and better crowd control mechanisms are enhancing the experience for passengers."
    ],
    "features": [
      "Over 2,300 services daily",
      "Fast and slow train variants",
      "Air-conditioned local trains",
      "Designated ladies and senior citizen compartments",
      "Real-time information displays",
      "High-capacity rakes with longitudinal seating",
      "Station modernization with escalators and CCTV surveillance"
    ],
    "specifications": [
      ["Operator", "Central & Western Railway"],
      ["Number of Lines", "6 major lines"],
      ["Rolling Stock", "EMU and AC EMU"],
      ["Daily Ridership", "7.5 million+"],
      ["Top Speed", "80-100 km/h"],
      ["Coach Capacity", "Up to 6,000 passengers per train (crush load)"],
      ["Electrification", "25 kV AC overhead"],
      ["Year Introduced", "1853 (First line), modern EMUs from 1925"]
    ],
    "routes": [
      "Churchgate - Virar",
      "CST - Kalyan",
      "Panvel - Thane",
      "Andheri - Goregaon",
      "Dahanu - Borivali"
    ],
    "history": "The system began with India's first passenger train journey in 1853. Since then, it has evolved into a vast suburban railway with continuous infrastructure upgrades.",
    "service": "Round-the-clock suburban travel with some of the highest train frequencies in the world.",
    "preservation": "Modernization projects are ongoing with phased replacement of old rakes by AC EMUs and integration with metro lines.",
    "gallery": ["/Images/Train/MumbaiLocal.jpg"],
    "infobox": {
      "type": "Suburban EMU",
      "operator": "Central and Western Railways",
      "introduced": 1925,
      "maxSpeed": "100 km/h",
      "power": "Electric",
      "traction": "25 kV AC",
      "configuration": "9, 12, and 15-coach EMUs"
    }
  },
  {
    "title": "Chennai Suburban Trains",
    "description": "Connecting the cultural capital of South India, the Chennai suburban rail serves commuters across the Chennai Metropolitan Region.",
    "image": "/Images/Train/ChennaiSuburban.jpg",
    "category": "suburban",
    "fullDescription": [
      "The Chennai Suburban Railway network serves as the backbone of daily transportation in the city. Operated by Southern Railway, this extensive network connects Chennai with its surrounding suburbs like Tambaram, Chengalpattu, Gummidipoondi, and Avadi. With origins dating back to 1931, it is one of the oldest and most robust suburban systems in India.",
      "It comprises multiple corridors—North, South, West, and the MRTS—each catering to different regions. The trains run frequently during rush hours and are preferred for their affordability, speed, and direct connectivity across residential and industrial areas. The integration with MRTS and Chennai Metro is further improving accessibility.",
      "Upgrades like automatic signaling, better station infrastructure, and plans for additional lines and elevated corridors are underway to accommodate the growing passenger base."
    ],
    "features": [
      "Four main suburban corridors",
      "Non-AC and limited AC EMUs",
      "Integration with MRTS and Metro",
      "Dedicated ladies' coaches",
      "Affordable fares and high frequency",
      "Oldest electrified suburban line in the South"
    ],
    "specifications": [
      ["Operator", "Southern Railway"],
      ["Number of Corridors", "4"],
      ["Rolling Stock", "EMU and MEMU"],
      ["Daily Ridership", "1.2 million+"],
      ["Top Speed", "90-100 km/h"],
      ["Coach Types", "9-car and 12-car EMUs"],
      ["Electrification", "25 kV AC"],
      ["Year Introduced", "1931"]
    ],
    "routes": [
      "Chennai Beach - Tambaram",
      "Chennai Central - Arakkonam",
      "Chennai Central - Gummidipoondi",
      "Chennai Beach - Velachery (MRTS)"
    ],
    "history": "Started in 1931, it was among the earliest electrified railways in India and has since evolved into a well-integrated system.",
    "service": "Key daily transportation mode for office-goers, students, and factory workers across Chennai.",
    "preservation": "Active system with modernization in signaling, new EMUs, and expanded stations.",
    "gallery": ["/Images/Train/ChennaiSuburban.jpg"],
    "infobox": {
      "type": "Suburban EMU/MEMU",
      "operator": "Southern Railway",
      "introduced": 1931,
      "maxSpeed": "100 km/h",
      "power": "Electric",
      "traction": "25 kV AC",
      "configuration": "9/12-coach"
    }
  },
  {
    "title": "Kolkata Local Trains",
    "description": "The Kolkata Suburban Railway network serves as the arterial transit system across West Bengal’s urban and semi-urban regions.",
    "image": "/Images/Train/KolkataLocal.jpg",
    "category": "suburban",
    "fullDescription": [
      "Operated by Eastern and South Eastern Railways, the Kolkata Suburban Railway network is one of the oldest and largest suburban networks in India. Connecting Kolkata to distant suburbs like Bardhaman, Howrah, Sealdah, and Kharagpur, it plays an essential role in daily commutes.",
      "The network spans over 1,500 km, with over 1,200 services running daily. It's known for its affordability and wide reach, covering both densely populated urban areas and emerging towns. Integration with metro and tram systems further enhances commuter flexibility.",
      "With automatic signaling, well-maintained EMUs, and growing AC rake usage, the Kolkata local system is continuously adapting to handle the burgeoning population of commuters."
    ],
    "features": [
      "One of the largest suburban rail networks in India",
      "Serves both urban and rural commuters",
      "Fast and slow local services",
      "Integration with Kolkata Metro and trams",
      "AC EMUs introduced",
      "Large number of halts and terminals"
    ],
    "specifications": [
      ["Operator", "Eastern and South Eastern Railway"],
      ["Lines", "Howrah and Sealdah divisions"],
      ["Rolling Stock", "EMU and MEMU"],
      ["Daily Ridership", "3 million+"],
      ["Top Speed", "90-100 km/h"],
      ["Coach Types", "9 and 12-car formations"],
      ["Electrification", "25 kV AC"],
      ["Year Introduced", "1960s"]
    ],
    "routes": [
      "Howrah - Bardhaman",
      "Sealdah - Krishnanagar",
      "Howrah - Kharagpur",
      "Sealdah - Sonarpur",
      "Santragachi - Shalimar"
    ],
    "history": "Emerging in the post-Independence era, it has grown into an extensive system with daily mass transit support.",
    "service": "Crucial for Kolkata’s workforce, connecting far-flung suburbs with the metro city.",
    "preservation": "Ongoing EMU replacement, digital upgrades, and AC rake deployment.",
    "gallery": ["/Images/Train/KolkataLocal.jpg"],
    "infobox": {
      "type": "Suburban EMU",
      "operator": "Eastern & South Eastern Railway",
      "introduced": "1960s",
      "maxSpeed": "100 km/h",
      "power": "Electric",
      "traction": "25 kV AC",
      "configuration": "9/12-coach"
    }
  },
  {
    "title": "RRTS (Regional Rapid Transit System)",
    "description": "India’s new-age regional high-speed rail system aimed at seamless intercity travel within economic corridors.",
    "image": "/Images/Train/RRTS.jpg",
    "category": "semi-high-speed",
    "fullDescription": [
      "The RRTS is a transformative public transport initiative under the National Capital Region Transport Corporation (NCRTC). It aims to decongest Delhi by connecting it with nearby urban centers through high-speed, reliable, and frequent trains operating on dedicated corridors.",
      "The first phase includes the Delhi–Meerut corridor, with trains reaching operational speeds of 160 km/h and offering premium amenities like WiFi, luggage racks, automatic doors, and priority seating. The system is designed for rapid boarding, enhanced safety, and minimal travel time, cutting journeys that once took hours down to minutes.",
      "Each RRTS corridor will serve thousands of passengers hourly, with trains at a frequency as high as 5–10 minutes. The system is expected to revolutionize daily commutes across NCR with environment-friendly electric trains."
    ],
    "features": [
      "High-speed travel up to 160 km/h",
      "AC coaches with automatic doors",
      "Dedicated tracks with elevated and underground sections",
      "WiFi, mobile charging, and infotainment",
      "Priority and women seating",
      "Safety systems including CBTC signaling",
      "Multi-modal integration with metro and bus"
    ],
    "specifications": [
      ["Operator", "NCRTC"],
      ["Corridors", "Delhi–Meerut, Delhi–Alwar, Delhi–Panipat (planned)"],
      ["Top Speed", "180 km/h (design), 160 km/h (operational)"],
      ["Electrification", "25 kV AC"],
      ["Coach Configuration", "6-coach and 8-coach sets"],
      ["Manufacturer", "Alstom (formerly Bombardier)"],
      ["Expected Ridership", "800,000+ daily on Delhi–Meerut"]
    ],
    "routes": [
      "Sahibabad - Ghaziabad - Meerut",
      "Planned: Delhi - Alwar, Delhi - Panipat"
    ],
    "history": "Conceived under the National Capital Region Planning Board, the RRTS aims to provide rapid intercity rail solutions by 2030.",
    "service": "Futuristic, metro-style trains with intercity focus and high comfort.",
    "preservation": "Active construction and rollout phase, with Meerut corridor operational by phases from 2024 onwards.",
    "gallery": ["/Images/Train/RRTS.jpg"],
    "infobox": {
      "type": "Semi-high-speed Regional Train",
      "operator": "NCRTC",
      "introduced": 2023,
      "maxSpeed": "160 km/h",
      "power": "Electric",
      "traction": "25 kV AC",
      "configuration": "6/8 coaches"
    }
  },
  {
    "title": "Vande Metro",
    "description": "India's upcoming urban-transit solution modeled on Vande Bharat technology, designed for city-to-suburb and metro-region connectivity.",
    "image": "/Images/Train/VandeMetro.jpg",
    "category": "metro",
    "fullDescription": [
      "The Vande Metro is a new class of urban transit trains being developed by Indian Railways for short-distance, high-frequency city-region operations. Envisioned as a mini version of the Vande Bharat, these EMU trains aim to provide metro-style travel for distances up to 100 km.",
      "Designed to replace MEMUs and passenger trains on high-density city corridors, Vande Metro trains will feature air-conditioned coaches, fast acceleration, and modern interiors. They will serve major metro regions like Delhi NCR, Bengaluru, and Mumbai with intercity and suburban connectivity in under an hour.",
      "With indigenous technology and lightweight design, Vande Metro will ensure efficient and environmentally friendly transport with modern comforts. It represents the next big leap in suburban rail infrastructure in India."
    ],
    "features": [
      "AC coaches based on Vande Bharat platform",
      "Top speed of 130–160 km/h",
      "Quick acceleration for frequent stops",
      "WiFi, infotainment, and modern passenger displays",
      "Driverless and automation-ready systems",
      "Low entry height and modern bogies",
      "Fully indigenous design under Make in India"
    ],
    "specifications": [
      ["Operator", "Indian Railways"],
      ["Manufacturer", "Integral Coach Factory (ICF)"],
      ["Top Speed", "130–160 km/h"],
      ["Coach Configuration", "8–12 coaches"],
      ["Electrification", "25 kV AC"],
      ["Purpose", "Short-distance metro-regional routes"],
      ["Launch Timeline", "Expected 2024-2025"]
    ],
    "routes": [
      "Delhi NCR",
      "Bengaluru Suburban Network",
      "Mumbai Suburban Extensions",
      "Kolkata - Howrah EMU corridor"
    ],
    "history": "Proposed as part of modernization efforts to replace slow, outdated suburban stock with fast AC EMUs.",
    "service": "Will connect major stations with high-frequency, metro-like operations for city commuters.",
    "preservation": "Prototype rollout and trials expected across multiple cities before national adoption.",
    "gallery": ["/Images/Train/VandeMetro.jpg"],
    "infobox": {
      "type": "Urban-Regional EMU",
      "operator": "Indian Railways",
      "introduced": "Expected 2024",
      "maxSpeed": "160 km/h",
      "power": "Electric",
      "traction": "25 kV AC",
      "configuration": "8–12 coaches"
    }
  },
  {
    "title": "Amrit Bharat Express",
    "description": "A newly introduced long-distance train with non-AC sleeper coaches, offering modern amenities and a significant upgrade over conventional mail and express trains.",
    "image": "/Images/Train/AmritBharatExpress.jpg",
    "category": "express",
    "fullDescription": [
      "The Amrit Bharat Express is an initiative under Indian Railways to provide better travel experience to passengers who prefer non-AC sleeper class travel. It is part of the 'Amrit Bharat Station Scheme' and reflects the modernization of regular long-distance trains.",
      "Designed to be cost-effective yet comfortable, the train features modern LHB coaches with better safety features, upgraded interiors, and higher speed potential. It also aims to decongest waiting lists by introducing more coaches and larger capacity.",
      "Launched in 2024, the Amrit Bharat Express is expected to replace and upgrade many conventional express services across India. It runs on popular and highly congested routes, serving the needs of middle and lower-income passengers with dignity and efficiency."
    ],
    "features": [
      "LHB-style non-AC sleeper and general coaches",
      "Higher speed potential than conventional express trains",
      "LED lighting and improved interior aesthetics",
      "Bio-toilets and modern sanitary fittings",
      "GPS-enabled display boards for station updates",
      "Affordable ticketing with mass-access focus",
      "Automatic fire and smoke detection systems"
    ],
    "specifications": [
      ["Manufacturer", "Integral Coach Factory (ICF), Chennai"],
      ["Train Configuration", "22-24 non-AC sleeper/general coaches"],
      ["Seating Capacity", "More than 1,300 passengers per rake"],
      ["Maximum Speed", "130 km/h"],
      ["Traction", "Electric/Diesel depending on route"],
      ["Launched", "2024"],
      ["Category", "Non-AC Superfast Express"],
      ["Purpose", "Mass-accessible long-distance travel"]
    ],
    "routes": [
      "Darbhanga - Anand Vihar Terminal",
      "Malda Town - SMVT Bengaluru",
      "More routes expected to be added"
    ],
    "history": "The Amrit Bharat Express is part of Indian Railways' long-term vision to modernize older trains, offering affordable and safe travel for long distances while meeting increasing demand in rural and urban sectors.",
    "service": "Currently serving key inter-regional corridors, the train is popular among the working class, students, and families who seek budget-friendly travel without compromising basic comfort.",
    "preservation": "Being a modern category introduced in 2024, the trains are in active deployment with continued expansion planned.",
    "gallery": ["/Images/Train/AmritBharatExpress.jpg"],
    "infobox": {
      "type": "Non-AC Superfast Express",
      "manufacturer": "ICF, Chennai",
      "introduced": 2024,
      "maxSpeed": "130 km/h",
      "power": "Electric/Diesel",
      "configuration": "22+ coaches (Sleeper/General)",
      "operator": "Indian Railways"
    }
  },
  {
    "title": "Toy Trains",
    "description": "Heritage narrow-gauge mountain railways that traverse scenic routes, offering a nostalgic and picturesque journey through India's hill regions.",
    "image": "/Images/Train/ToyTrain.jpg",
    "category": "heritage",
    "fullDescription": [
      "Toy Trains are small-gauge heritage trains operating in India’s mountainous regions, preserving a legacy of British-era engineering. These trains are known for their slow-paced journeys, breathtaking views, and historical importance.",
      "These include the Darjeeling Himalayan Railway (DHR), Kalka–Shimla Railway (KSR), Nilgiri Mountain Railway (NMR), and Matheran Hill Railway (MHR), many of which are UNESCO World Heritage Sites. The charming whistling, tiny engines, and serpentine tracks through valleys and tunnels captivate tourists and rail enthusiasts alike.",
      "The trains still use steam or diesel engines and operate on narrow gauge tracks, often hugging the contours of rugged landscapes. Despite modern transportation alternatives, these trains remain vital for local connectivity and tourism."
    ],
    "features": [
      "Narrow-gauge tracks (typically 2 ft or 2 ft 6 in)",
      "Steam and diesel locomotives",
      "Operates in hilly terrains with scenic landscapes",
      "UNESCO World Heritage status (for some lines)",
      "Vintage carriages and wooden interiors",
      "Multiple loops and sharp curves",
      "Popular with tourists and families"
    ],
    "specifications": [
      ["Lines", "DHR, KSR, NMR, MHR"],
      ["Track Gauge", "2 ft / 2 ft 6 in (narrow gauge)"],
      ["Average Speed", "10–20 km/h"],
      ["Traction", "Steam and Diesel"],
      ["Coach Types", "Open-view and heritage wooden cars"],
      ["Introduced", "1880s – early 1900s"],
      ["Route Length", "Ranges from 19 km (Matheran) to 96 km (Kalka–Shimla)"]
    ],
    "routes": [
      "Darjeeling - New Jalpaiguri (DHR)",
      "Kalka - Shimla (KSR)",
      "Mettupalayam - Ooty (NMR)",
      "Neral - Matheran (MHR)"
    ],
    "history": "The Toy Trains were constructed by the British in the late 19th and early 20th centuries to access hill stations. These marvels of civil engineering used loops, tunnels, and zig-zag alignments to ascend steep gradients.",
    "service": "Primarily operated for tourism, these trains continue to be popular with both domestic and international travelers, offering a romantic and nostalgic experience of mountain rail travel.",
    "preservation": "Efforts are ongoing to preserve and maintain these heritage lines under UNESCO and Indian Railways. Steam locomotives are occasionally run for heritage rides.",
    "gallery": ["/Images/Train/ToyTrain.jpg"],
    "infobox": {
      "type": "Narrow-Gauge Heritage Train",
      "manufacturer": "British Colonial Engineers",
      "introduced": "1881 (DHR), others followed",
      "maxSpeed": "20 km/h approx.",
      "power": "Steam and Diesel",
      "configuration": "2-6 coaches per train",
      "operator": "Indian Railways / Heritage Divisions"
    }
  }
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