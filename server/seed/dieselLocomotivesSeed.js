const mongoose = require('mongoose');
const LocomotiveSchema = require('../models/Locomotive').schema;

const DieselLocomotive = mongoose.model('DieselLocomotive', LocomotiveSchema, 'dieselLocomotives');

const dieselLocomotiveData = [
  {
    "type": "diesel",
    "title": "WDM-1",
    "description": "India’s first mainline diesel-electric locomotive, built for mixed traffic.",
    "image": "https://i.ibb.co/whHSpt5w/WDM1.jpg",
    "longDescription": "The WDM-1 (Wide gauge Diesel Mixed class 1) was the first generation of mainline diesel-electric locomotives introduced in Indian Railways in the late 1950s. Built by ALCo (USA), these 1,950 hp locomotives marked India's first large-scale transition from steam to diesel traction. Characterized by a boxy body, Co-Co wheel arrangement, and a noticeable roof-mounted dynamic brake fan housing, they were capable of mixed traffic duties including passenger and freight services. Despite their modest power by modern standards, they symbolized modernity in post-independence India.",
    "history": "Introduced in 1957-58 under the World Bank aid program, WDM-1 units were imported from ALCo, USA. Only around 100 units were built. These locomotives initiated Indian Railways' dieselization era. Their success led to further collaborations with ALCo and the eventual production of WDM-2. Although operationally limited by reliability and parts availability over time, they remained in service for nearly three decades.",
    "service": "WDM-1 units served primarily on the Eastern and Northern Railway zones, often used on prestigious mail and express services in their early years. They were later relegated to shunting and departmental duties before retirement.",
    "preservation": "At least one WDM-1 unit, numbered 17000, has been preserved at the National Rail Museum, New Delhi. It's a significant part of Indian diesel locomotive heritage.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "ALCo (USA)",
      "Year Introduced": "1957",
      "Power Output": "1,950 hp",
      "Max Speed": "120 km/h",
      "Tractive Effort": "240 kN",
      "Locoweight": "111 t"
    },
    "gallery": ["https://i.ibb.co/whHSpt5w/WDM1.jpg"],
    "classes": [
      { "name": "WDM-1", "description": "First-generation diesel locomotive used for mixed traffic" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDM-2",
    "description": "Iconic workhorse diesel-electric locomotive with over 2,800 units built.",
    "image": "https://i.ibb.co/C5Sx8yPr/WDM2.jpg",
    "longDescription": "The WDM-2 is the most recognized and widely used diesel locomotive in Indian Railways history. Developed under license from ALCo and built by DLW Varanasi from 1962 onwards, it became the backbone of Indian diesel operations for over five decades. Powered by a 2,600 hp ALCo 251-B engine, it was versatile enough for both passenger and freight services. Known for its ruggedness and adaptability across India’s diverse terrain, it was a true all-rounder.",
    "history": "Introduced in 1962, the WDM-2 was first built by ALCo and later produced in large numbers by DLW under license. More than 2,800 units were built by the late 1990s. It spawned multiple sub-variants and served as the basis for many diesel classes in India.",
    "service": "WDM-2s operated across the country, hauling everything from mail/express trains to freight and departmental services. Many were modified and continue to serve in limited roles.",
    "preservation": "Several WDM-2 units are preserved in railway museums and zonal heritage parks.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "1962",
      "Power Output": "2,600 hp",
      "Max Speed": "120 km/h",
      "Tractive Effort": "275 kN",
      "Locoweight": "112 t"
    },
    "gallery": ["https://i.ibb.co/C5Sx8yPr/WDM2.jpg"],
    "classes": [
      { "name": "WDM-2", "description": "India’s most successful diesel mixed-traffic locomotive" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDM-3A",
    "description": "Upgraded ALCo design with higher horsepower and improved reliability.",
    "image": "https://i.ibb.co/XxQP2kwP/WDM3A.jpg",
    "longDescription": "The WDM-3A is an enhanced version of the WDM-2, with an uprated ALCo 251 engine producing 3,100 hp. Designed for mixed-traffic duties, the WDM-3A was among the most reliable locomotives of its class and featured various improvements over its predecessor including better air brakes, electronics, and cooling. It remains one of the most numerous diesel classes in the Indian Railways fleet.",
    "history": "Initially introduced as WDM-2C in the 1990s, it was later reclassified as WDM-3A. DLW Varanasi produced several hundred units, many of which were rebuilds of older WDM-2s. These were later upgraded further under IR's rehabilitation programs.",
    "service": "WDM-3As have served across every zone, known for hauling both heavy freight and long-distance express trains. They continue to be active in both mainline and regional services.",
    "preservation": "A few WDM-3A units may be preserved in the future; currently most are still in use.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "1993",
      "Power Output": "3,100 hp",
      "Max Speed": "120 km/h",
      "Tractive Effort": "310 kN",
      "Locoweight": "117 t"
    },
    "gallery": ["https://i.ibb.co/XxQP2kwP/WDM3A.jpg"],
    "classes": [
      { "name": "WDM-3A", "description": "Uprated mixed-traffic ALCo diesel locomotive" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDM-3D",
    "description": "Modernized high-power ALCo-based diesel locomotive with microprocessor control.",
    "image": "https://i.ibb.co/d0f7nxcX/WDM3D.jpg",
    "longDescription": "The WDM-3D is a modern 3,300 hp diesel-electric locomotive developed by Indian Railways, based on the proven ALCo 251 platform but with significant upgrades including microprocessor control, enhanced braking, improved crew amenities, and modular electronics. It offers improved fuel efficiency and reliability over older ALCo designs.",
    "history": "Introduced in the early 2000s, WDM-3Ds were built by DLW as a part of efforts to modernize diesel traction. They were originally given new body styling and better cabs, though later versions reused standard ALCo shells. Hundreds were built and deployed nationwide.",
    "service": "WDM-3Ds are seen on express trains, mail services, and regional routes. Their better traction control and speed regulation made them ideal for premium services on non-electrified routes.",
    "preservation": "Still in widespread use; preservation yet to begin.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "2005",
      "Power Output": "3,300 hp",
      "Max Speed": "120 km/h",
      "Tractive Effort": "320 kN",
      "Locoweight": "118 t"
    },
    "gallery": ["https://i.ibb.co/d0f7nxcX/WDM3D.jpg"],
    "classes": [
      { "name": "WDM-3D", "description": "Modern 3,300 hp diesel locomotive with microprocessor control" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDM-4",
    "description": "EMD-powered high-speed diesel locomotive used primarily for express trains.",
    "image": "https://i.ibb.co/RGCYhMjv/WDM4.jpg",
    "longDescription": "The WDM-4 was an early high-speed diesel locomotive imported from EMD (USA) during the 1960s. It was capable of speeds up to 120 km/h and offered 2,600 hp. With its full-width cab, streamlined body, and superior acceleration, it became a preferred choice for hauling express trains including prestigious services like the Rajdhani Express. Although overshadowed by the more widely produced WDM-2, the WDM-4 was mechanically superior in many respects.",
    "history": "Introduced in 1962-63, WDM-4s were part of a batch imported from Electro-Motive Division (GM-EMD) as part of IR’s comparative trials. However, due to licensing constraints and cost, Indian Railways chose ALCo-based WDM-2 for mass production. Only about 100 units of WDM-4 were imported.",
    "service": "WDM-4s served on Northern and Western zones and pulled high-speed passenger trains. Some were also used as VIP specials and during trials with higher-speed rolling stock.",
    "preservation": "WDM-4 #18001 has been preserved at the National Rail Museum, Delhi. Others have been retired and scrapped.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "EMD (USA)",
      "Year Introduced": "1962",
      "Power Output": "2,600 hp",
      "Max Speed": "120 km/h",
      "Tractive Effort": "280 kN",
      "Locoweight": "115 t"
    },
    "gallery": ["https://i.ibb.co/RGCYhMjv/WDM4.jpg"],
    "classes": [
      { "name": "WDM-4", "description": "Imported high-speed diesel locomotive by EMD" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDM-5",
    "description": "EMD-built high-horsepower trial unit; never mass-produced.",
    "image": "/Images/Locomotive/wdm5.jpg",
    "longDescription": "The WDM-5 was a high-horsepower experimental diesel locomotive built by EMD (USA) in the 1970s for Indian Railways. It featured a power output of 3,300 hp—making it among the most powerful diesel locos of its time in India. However, due to high costs and lack of local manufacturing capability, the class never went into mass production. Only 3 units were ever imported, and they remained experimental throughout their life.",
    "history": "Introduced around 1977, only 3 WDM-5 locomotives were procured from EMD as a testbed for high-power Co-Co locomotives. Despite their superior performance, the focus remained on ALCo-based designs due to existing infrastructure and technology sharing agreements.",
    "service": "The WDM-5 units were based in Jhansi and Tughlakabad for most of their lives, used in trial runs, and occasionally in premium freight services.",
    "preservation": "No units are officially preserved. All were scrapped by the early 2000s.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "EMD (USA)",
      "Year Introduced": "1977",
      "Power Output": "3,300 hp",
      "Max Speed": "130 km/h",
      "Tractive Effort": "300 kN",
      "Locoweight": "118 t"
    },
    "gallery": ["/Images/Locomotive/wdm5.jpg"],
    "classes": [
      { "name": "WDM-5", "description": "High-horsepower trial diesel locomotive by EMD" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDM-7",
    "description": "Low-powered shunting and light-passenger diesel loco derived from WDM-2.",
    "image": "/Images/Locomotive/wdm7.jpg",
    "longDescription": "The WDM-7 is a low-powered version of the WDM-2, designed for branch-line, shunting, and light passenger duties. Built by ICF (later DLW) starting in the late 1980s, these 2,000 hp locomotives had a Co-Co wheel arrangement and used a derated ALCo 251 engine. They offered better fuel economy for less demanding routes and are known for their distinctive short hood and lighter frame.",
    "history": "WDM-7s were developed to handle secondary routes where WDM-2s were overpowered. Their production began in the late 1980s and continued through the 1990s. The class remained small, with around 15–20 units built, mostly deployed in Southern Railway.",
    "service": "WDM-7s served in Tamil Nadu and nearby states for suburban and local passenger services. Many are still used for yard shunting and departmental movements.",
    "preservation": "One unit is expected to be preserved by SR for heritage shunting; however, no official confirmation as of 2025.",
    "status": "preserved",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "1987",
      "Power Output": "2,000 hp",
      "Max Speed": "100 km/h",
      "Tractive Effort": "225 kN",
      "Locoweight": "105 t"
    },
    "gallery": ["/Images/Locomotive/wdm7.jpg"],
    "classes": [
      { "name": "WDM-7", "description": "Low-powered mixed traffic and shunting locomotive" }
    ]
  },
  {
  "type": "diesel",
  "title": "WDP-1",
  "description": "Lightweight diesel passenger locomotive designed for low-density routes.",
  "image": "https://i.ibb.co/q34YtvCd/WDP1.jpg",
  "longDescription": "The WDP-1 is a lightweight passenger diesel locomotive developed by Diesel Locomotive Works (DLW), Varanasi, for low-density passenger routes. Introduced in the 1990s, it was designed with a Bo-Bo wheel arrangement and delivered moderate horsepower with improved fuel efficiency. Its compact size and low axle load made it suitable for lightly built branch lines.",
  "history": "Developed in the early 1990s by DLW, the WDP-1 was a passenger variant of the WDM-2 family, with gear ratios and power settings optimized for passenger services. Only a few units were produced, and it was not widely adopted across zones due to its lower power.",
  "service": "WDP-1 locomotives served mainly in Eastern and Northern Railways on regional and branch line services, hauling 8–10 coach passenger trains. Their lower axle load allowed them to operate on routes unsuitable for heavier locomotives.",
  "preservation": "A few units may remain operational, but most are withdrawn or scrapped. No known preserved unit is officially recorded.",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "Bo-Bo",
    "Builder": "DLW, Varanasi",
    "Year Introduced": "1995",
    "Power Output": "2,300 hp",
    "Max Speed": "120 km/h",
    "Tractive Effort": "210 kN",
    "Locoweight": "72 t"
  },
  "gallery": ["https://i.ibb.co/q34YtvCd/WDP1.jpg"],
  "classes": [
    { "name": "WDP-1", "description": "Light-duty passenger diesel locomotive for regional trains" }
  ]
},
{
  "type": "diesel",
  "title": "WDP-3A",
  "description": "High-speed diesel passenger locomotive nicknamed 'Toaster' due to overheating issues.",
  "image": "https://i.ibb.co/ycHvZBQm/WDP3A.jpg",
  "longDescription": "The WDP-3A was a high-speed diesel passenger locomotive developed by DLW. Derived from the ALCo WDM-2 platform, it was optimized for passenger trains with higher gear ratios and streamlined front-end design. Though powerful, the class earned the nickname 'Toaster' for its tendency to overheat. Despite reliability concerns, it served many premier express trains.",
  "history": "Introduced in the early 2000s as a passenger version of the WDM-3A, it was designed for high-speed services but failed to live up to expectations in hot Indian conditions. Production remained limited to around 60–70 units.",
  "service": "Used for premium services such as Shatabdis and Jan Shatabdis in Southern and Western zones. Later relegated to secondary express duties before being phased out.",
  "preservation": "Most WDP-3As are retired. No official unit has been preserved.",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "Co-Co",
    "Builder": "DLW, Varanasi",
    "Year Introduced": "2001",
    "Power Output": "3,100 hp",
    "Max Speed": "160 km/h",
    "Tractive Effort": "320 kN",
    "Locoweight": "117 t"
  },
  "gallery": ["https://i.ibb.co/ycHvZBQm/WDP3A.jpg"],
  "classes": [
    { "name": "WDP-3A", "description": "Passenger diesel loco with high-speed gearing and a streamlined cab" }
  ]
},
{
  "type": "diesel",
  "title": "WDP-4",
  "description": "EMD-built diesel passenger locomotive known for speed, reliability, and fuel efficiency.",
  "image": "https://i.ibb.co/3mQs6LMv/WDP4.jpg",
  "longDescription": "The WDP-4 is a powerful diesel locomotive built by EMD (USA) under license by DLW for hauling long-distance express trains. Known for its high power-to-weight ratio, the WDP-4 and its variants (WDP-4B, WDP-4D) became the backbone of Indian Railways' diesel passenger fleet. Its sleek single cab design and fuel efficiency set it apart from older ALCo locomotives.",
  "history": "Introduced in 2002 as part of the EMD technology transfer agreement, the WDP-4 was customized to Indian conditions. Later versions included dual cab (WDP-4D) and upgraded horsepower (WDP-4B).",
  "service": "Used across Indian Railways for hauling Rajdhani, Shatabdi, and other superfast trains. WDP-4Ds continue to serve on key routes with heavy-duty performance and minimal maintenance needs.",
  "preservation": "Still in active service with hundreds of units across zones. No preservation yet as it's a current class.",
  "status": "active",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "Co-Co",
    "Builder": "EMD (USA), DLW Varanasi",
    "Year Introduced": "2002",
    "Power Output": "4,000 hp",
    "Max Speed": "160 km/h",
    "Tractive Effort": "360 kN",
    "Locoweight": "120 t"
  },
  "gallery": ["https://i.ibb.co/3mQs6LMv/WDP4.jpg"],
  "classes": [
    { "name": "WDP-4", "description": "High-power EMD passenger diesel locomotive" },
    { "name": "WDP-4B", "description": "Improved variant with better electronics and visibility" },
    { "name": "WDP-4D", "description": "Dual-cab version for bidirectional operation" }
  ]
},{
    "type": "diesel",
    "title": "WDG-3A",
    "description": "Versatile ALCo-based freight locomotive used across India.",
    "image": "https://i.ibb.co/LDgZJsf9/WDG3A.jpg",
    "longDescription": "The WDG-3A is one of Indian Railways' most widely used diesel freight locomotives, developed from the WDM-2/3A platform. Built by DLW (Varanasi), it features ALCo 251C technology and is renowned for its rugged performance, ease of maintenance, and adaptability to both freight and occasional passenger operations. Though designed for freight, its robust traction has made it a workhorse on mixed-traffic duties across India.",
    "history": "Introduced in the late 1990s as a freight-dedicated version of the WDM-3A, the WDG-3A was developed by modifying the gear ratio and boosting the locomotive’s hauling capacity. These locomotives continued the ALCo legacy and were produced in large numbers until EMD designs began replacing them.",
    "service": "WDG-3As serve in every zone of Indian Railways and are used for hauling freight, especially in non-electrified territories. They can also be seen on mail and express trains, particularly in hilly and difficult terrains due to their tractive power and braking capacity.",
    "preservation": "Still in widespread use across various sheds, although many units are being phased out in favor of newer, more efficient models like the WDG-4 and WAG-9. A few might be preserved eventually as part of ALCo legacy fleets.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "1995",
      "Power Output": "3,100 hp",
      "Max Speed": "100 km/h",
      "Tractive Effort": "350 kN",
      "Locoweight": "123 t"
    },
    "gallery": ["https://i.ibb.co/LDgZJsf9/WDG3A.jpg"],
    "classes": [
      { "name": "WDG-3A", "description": "ALCo-based freight diesel locomotive derived from WDM-3A" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDG-4",
    "description": "High-horsepower EMD freight locomotive with robust hauling capabilities.",
    "image": "https://i.ibb.co/QvRrF07y/WDG4.jpg",
    "longDescription": "The WDG-4 is a powerful freight diesel locomotive based on the EMD GT46MAC platform and built by DLW under license from General Motors (USA). It features a single-cab design with a high horsepower rating and superior fuel economy. Known for its rugged performance and high-speed hauling capability, the WDG-4 has transformed freight operations on Indian Railways.",
    "history": "Introduced in the early 2000s as part of Indian Railways’ modernization program, the WDG-4 represented a leap in power and technology over ALCo locomotives. It was derived from the same platform as the WDP-4 but optimized for freight with a different gear ratio and dynamic braking systems.",
    "service": "WDG-4s are primarily used for long-distance heavy freight trains, including coal, iron ore, and container rakes. Their deployment has improved turnaround times and reduced the number of locomotives needed per train. They operate extensively in both electrified and non-electrified sections.",
    "preservation": "No preservation efforts as the class is still in active use, though older units are slowly being replaced or upgraded to newer variants like WDG-4D or WDG-4G.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "EMD (USA), DLW Varanasi",
      "Year Introduced": "2002",
      "Power Output": "4,000 hp",
      "Max Speed": "100 km/h",
      "Tractive Effort": "560 kN",
      "Locoweight": "126 t"
    },
    "gallery": ["https://i.ibb.co/QvRrF07y/WDG4.jpg"],
    "classes": [
      { "name": "WDG-4", "description": "Freight version of the EMD GT46MAC locomotive" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDG-4D",
    "description": "Dual-cab version of the WDG-4 with improved visibility and safety.",
    "image": "/Images/Locomotive/wdg4d.jpg",
    "longDescription": "The WDG-4D is an enhanced dual-cab version of the EMD WDG-4 locomotive, introduced to improve driver visibility and enable bidirectional operations without turning the locomotive. Equipped with microprocessor controls and improved ergonomics, it retains the same core performance while offering greater operational flexibility.",
    "history": "To overcome the limitations of the single-cab WDG-4, Indian Railways commissioned a dual-cab variant in the mid-2010s. Built by DLW, the WDG-4D retained the EMD 16-710 engine but added safety and operational enhancements.",
    "service": "Deployed across India for hauling heavy freight trains, the WDG-4D is particularly useful in routes where locomotive reversal is impractical. It offers reliable performance on gradients and long hauls with reduced crew fatigue due to better ergonomics.",
    "preservation": "Still in full-scale operation with no current preservation plans, though it's expected to remain in service for the foreseeable future.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "2015",
      "Power Output": "4,500 hp",
      "Max Speed": "100 km/h",
      "Tractive Effort": "560 kN",
      "Locoweight": "132 t"
    },
    "gallery": ["/Images/Locomotive/wdg4d.jpg"],
    "classes": [
      { "name": "WDG-4D", "description": "Dual-cab version of WDG-4 for bidirectional freight hauling" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDG-4G",
    "description": "GE-built dual-cab diesel freight locomotive with cutting-edge features.",
    "image": "/Images/Locomotive/wdg4g.jpg",
    "longDescription": "The WDG-4G, based on GE's Evolution Series (GE ES43ACmi), is a dual-cab, heavy-haul diesel freight locomotive with modern electronics, crew amenities, and emissions control. It offers improved efficiency, safety features, and a more sustainable footprint, making it a key component of Indian Railways' modernization strategy.",
    "history": "Introduced in 2018 as part of the joint venture between Indian Railways and GE Transportation, the WDG-4G was manufactured at the Madhepura Electric Locomotive Pvt. Ltd. facility in Bihar. It was part of a major Make-in-India initiative to modernize the freight fleet.",
    "service": "Primarily used for hauling long, heavy freight trains across Indian Railways' network, especially in high-tonnage sectors. Its dual-cab design, noise reduction, and real-time monitoring systems offer both operational efficiency and crew comfort.",
    "preservation": "Too recent for preservation; all units are in regular service. Their advanced diagnostics and low emissions ensure longevity and relevance in future operations.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "GE Transportation, Madhepura (India)",
      "Year Introduced": "2018",
      "Power Output": "4,500 hp",
      "Max Speed": "100 km/h",
      "Tractive Effort": "550 kN",
      "Locoweight": "135 t"
    },
    "gallery": ["/Images/Locomotive/wdg4g.jpg"],
    "classes": [
      { "name": "WDG-4G", "description": "GE Evolution Series dual-cab diesel freight locomotive" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDG-5",
    "description": "Prototype high-power freight locomotive from EMD with limited deployment.",
    "image": "https://i.ibb.co/WNxTjfB5/WDG5.jpg",
    "longDescription": "The WDG-5 is an experimental freight locomotive developed by EMD for Indian Railways based on the SD80MAC platform. It is the most powerful diesel locomotive produced for Indian Railways, featuring high horsepower and advanced cooling systems. Despite its potential, only a few prototypes were built due to practical limitations and operational constraints.",
    "history": "Unveiled in 2012 by EMD and DLW as an ultra-heavy freight locomotive, the WDG-5 (nicknamed ‘Beast’) had a power output of 5,500 hp. However, high axle load and infrastructure compatibility issues limited its rollout, and the project was not expanded beyond initial units.",
    "service": "Used sparingly on select routes for high-tonnage freight. Its use has been experimental and mostly confined to trials and occasional deployments due to its weight and maintenance needs.",
    "preservation": "As a prototype class, WDG-5 units are likely candidates for future preservation due to their uniqueness and limited numbers.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi, EMD (USA)",
      "Year Introduced": "2012",
      "Power Output": "5,500 hp",
      "Max Speed": "105 km/h",
      "Tractive Effort": "600 kN",
      "Locoweight": "135 t"
    },
    "gallery": ["https://i.ibb.co/WNxTjfB5/WDG5.jpg"],
    "classes": [
      { "name": "WDG-5", "description": "Prototype high-horsepower EMD freight locomotive" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDG-6G",
    "description": "Ultra-modern, high-powered diesel-electric freight locomotive by GE.",
    "image": "https://i.ibb.co/mFrJRt4t/WDG6G.jpg",
    "longDescription": "The WDG-6G is a powerful next-generation freight locomotive developed by GE as part of Indian Railways' modernization efforts. Designed for high-speed and high-axle-load freight service, it features advanced traction control, low emissions, and a modular, service-friendly design. Its six-axle Co-Co configuration enables superior adhesion and tractive effort.",
    "history": "Introduced as a follow-up to the successful WDG-4G class, the WDG-6G was developed with enhanced capabilities, including better software, monitoring, and emissions systems. Though few units exist, it showcases the future of heavy freight hauling in India.",
    "service": "Currently deployed for testing and specific heavy freight assignments. It is capable of handling long-haul, high-tonnage trains with reduced fuel consumption and emissions, positioning it as a long-term replacement for older diesel locomotives.",
    "preservation": "Not under preservation as it's still under evaluation and limited service, but may be preserved in future for its advanced design and rarity.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "GE Transportation",
      "Year Introduced": "2020",
      "Power Output": "6,000 hp",
      "Max Speed": "105 km/h",
      "Tractive Effort": "620 kN",
      "Locoweight": "138 t"
    },
    "gallery": ["https://i.ibb.co/mFrJRt4t/WDG6G.jpg"],
    "classes": [
      { "name": "WDG-6G", "description": "Next-gen GE freight locomotive for heavy-duty operations" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDS-1",
    "description": "India's first diesel-electric shunter, imported from the USA.",
    "image": "https://i.ibb.co/4g2J4NML/WDS1.jpg",
    "longDescription": "The WDS-1 was Indian Railways' first diesel-electric shunting locomotive, imported from the United States shortly after independence. These locomotives were built by ALCo and later reclassified under the WDS-1 designation. Compact and lightweight, they were ideal for yard work, light freight duties, and station shunting, serving as a critical bridge from steam to diesel traction.",
    "history": "Imported between 1944 and 1945 as part of World War II support, these locomotives were originally classified as Class DS and later re-designated WDS-1 under the 1960s classification scheme. They were instrumental in helping Indian Railways transition from steam to diesel technology.",
    "service": "Primarily deployed for shunting duties at large junctions, loco sheds, and industrial sidings. Their reliability made them a fixture in shunting operations until phased out in favor of newer models.",
    "preservation": "Most units have been withdrawn. A few have been preserved in museums and heritage parks, such as at the National Rail Museum in New Delhi.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "ALCo (USA)",
      "Year Introduced": "1944",
      "Power Output": "386 hp",
      "Max Speed": "56 km/h",
      "Tractive Effort": "92 kN",
      "Locoweight": "60 t"
    },
    "gallery": ["https://i.ibb.co/4g2J4NML/WDS1.jpg"],
    "classes": [
      { "name": "WDS-1", "description": "First-generation diesel shunter imported from ALCo USA" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDS-2",
    "description": "Early diesel shunter based on ALCo designs, built in India.",
    "image": "/Images/Locomotive/wds2.jpg",
    "longDescription": "The WDS-2 class was a locally produced diesel-electric shunting locomotive, modeled on early ALCo road switchers. Developed post-independence, it was one of the first indigenous efforts to produce diesel traction for shunting and yard duties. Although less powerful than mainline locomotives, the WDS-2 was a dependable choice for light-duty operations.",
    "history": "Produced by CLW and DLW in the 1950s and early 1960s, the WDS-2 served as a follow-up to the imported WDS-1 class. It marked an early phase of Indian Railways' efforts at self-reliance in locomotive manufacturing.",
    "service": "Used mainly for shunting rakes at yards, station sidings, and workshops. Though later overshadowed by more powerful classes, it remained in service for decades.",
    "preservation": "Most WDS-2 units have been scrapped. At least one unit survives at the National Rail Museum, preserved as a representative of early Indian dieselization.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "CLW/DLW (India)",
      "Year Introduced": "1954",
      "Power Output": "440 hp",
      "Max Speed": "65 km/h",
      "Tractive Effort": "110 kN",
      "Locoweight": "62 t"
    },
    "gallery": ["/Images/Locomotive/wds2.jpg"],
    "classes": [
      { "name": "WDS-2", "description": "Early indigenous diesel shunter based on ALCo platform" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDS-4",
    "description": "Medium-duty diesel shunter based on ALCo 251 engine.",
    "image": "/Images/Locomotive/wds4.jpg",
    "longDescription": "The WDS-4 is a mid-sized diesel-electric shunter widely used by Indian Railways for yard operations. Equipped with the proven ALCo 251 engine, it combined reliability with ease of maintenance, making it a staple at loco sheds, marshalling yards, and even ports and industrial sidings. The class offered better performance than its predecessors while maintaining mechanical simplicity.",
    "history": "Introduced in the 1960s and built by CLW, the WDS-4 used the ALCo prime mover and was a step up in terms of power and ruggedness. It saw deployment across all zones, especially in metropolitan and industrial areas.",
    "service": "Commonly used in busy yards for shunting passenger and freight rakes. The class was also frequently used in thermal power plants and steel factories for internal haulage.",
    "preservation": "Some units are preserved in railway heritage sites or still serving in industrial/private use. Most units in mainline railway service have been withdrawn.",
    "status": "preserved",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "CLW",
      "Year Introduced": "1967",
      "Power Output": "600 hp",
      "Max Speed": "75 km/h",
      "Tractive Effort": "160 kN",
      "Locoweight": "65 t"
    },
    "gallery": ["/Images/Locomotive/wds4.jpg"],
    "classes": [
      { "name": "WDS-4", "description": "Medium-duty diesel shunter with ALCo 251 engine" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDS-5",
    "description": "Heavy-duty shunter derived from ALCo WDM-2 design.",
    "image": "/Images/Locomotive/wds5.jpg",
    "longDescription": "The WDS-5 is a heavy-duty diesel-electric shunter developed by Indian Railways based on the WDM-2 platform. Featuring a shortened chassis and optimized for high tractive effort at low speeds, the WDS-5 is ideal for heavy rakes, hump yards, and long shunting operations. It combines the robust ALCo engine with excellent load-handling ability, making it popular in high-traffic yards.",
    "history": "Introduced in the 1970s, the WDS-5 was built at DLW as a derivative of the WDM-2 with modifications to suit yard duties. Its success led to widespread deployment in both passenger and freight yards.",
    "service": "Used in large marshalling yards, major junctions, and industrial complexes where longer trains and heavier loads required greater traction. It remains in use in some yards and private sidings.",
    "preservation": "Some units may be preserved or continue to serve in non-mainline roles. The majority are being phased out as newer, more efficient shunters are introduced.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "1976",
      "Power Output": "1,400 hp",
      "Max Speed": "105 km/h",
      "Tractive Effort": "250 kN",
      "Locoweight": "113 t"
    },
    "gallery": ["/Images/Locomotive/wds5.jpg"],
    "classes": [
      { "name": "WDS-5", "description": "Heavy-duty diesel shunter based on WDM-2" }
    ]
  },
  {
    "type": "diesel",
    "title": "WDS-6",
    "description": "Powerful shunting locomotive widely used in industrial and mainline yards.",
    "image": "https://i.ibb.co/9mhVftzS/WDS6.jpg",
    "longDescription": "The WDS-6 is a powerful and versatile diesel-electric shunter designed for heavy shunting operations. Equipped with a reliable ALCo 251C engine, it offers excellent low-speed control, making it ideal for marshalling yards and industrial loading points. It is one of the most popular shunters used by both Indian Railways and private industries for high-load tasks.",
    "history": "Introduced in the 1970s by DLW, the WDS-6 was an evolution of the WDS-4 and WDS-5 series, designed to provide more power and better performance in heavy shunting. Over time, it became a mainstay in both government and private sectors.",
    "service": "Extensively used across Indian Railways and in sectors like petroleum, steel, ports, and cement industries. Its robustness allows it to operate continuously in harsh industrial conditions with minimal downtime.",
    "preservation": "Still in active service in both public and private domains. Given its widespread use, selected units may be preserved in the future for their long-standing contribution to Indian shunting operations.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "1975",
      "Power Output": "1,200 hp",
      "Max Speed": "97 km/h",
      "Tractive Effort": "260 kN",
      "Locoweight": "112 t"
    },
    "gallery": ["https://i.ibb.co/9mhVftzS/WDS6.jpg"],
    "classes": [
      { "name": "WDS-6", "description": "High-power ALCo-based shunting locomotive used in rail yards and industry" }
    ]
  },{
    "type": "diesel",
    "title": "YDM-1",
    "description": "First mainline metre-gauge diesel locomotive in India.",
    "image": "/Images/Locomotive/ydm1.jpg",
    "longDescription": "The YDM-1 was the first diesel-electric locomotive designed for Indian metre-gauge operations. Built by MaK (Germany) and later by MLW (Canada), it marked the beginning of diesel traction on metre-gauge routes. Compact and reliable for its time, it replaced steam locomotives on key sections and offered higher speeds and reduced maintenance.",
    "history": "Introduced in 1955, the initial batch of YDM-1s was imported from Maschinenbau Kiel (MaK) and later from Montreal Locomotive Works. These were among the earliest diesel locomotives in India and featured a B-B wheel arrangement. Though low-powered by modern standards, they were revolutionary at the time.",
    "service": "YDM-1 locomotives served mainly in Western and Southern India, particularly in Gujarat, Tamil Nadu, and Kerala. They handled both freight and passenger trains on lightly loaded metre-gauge lines.",
    "preservation": "Most have been retired or scrapped. One or two units have been preserved at heritage locations such as the National Rail Museum.",
    "status": "retired",
    "specs": {
      "Gauge": "Metre Gauge (1,000 mm)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "MaK (Germany), MLW (Canada)",
      "Year Introduced": "1955",
      "Power Output": "750 hp",
      "Max Speed": "75 km/h",
      "Tractive Effort": "100 kN",
      "Locoweight": "48 t"
    },
    "gallery": ["/Images/Locomotive/ydm1.jpg"],
    "classes": [
      { "name": "YDM-1", "description": "India's first metre-gauge diesel locomotive" }
    ]
  },
  {
    "type": "diesel",
    "title": "YDM-2",
    "description": "Second-generation metre-gauge diesel shunter with limited production.",
    "image": "/Images/Locomotive/ydm2.jpg",
    "longDescription": "The YDM-2 was a short-lived metre-gauge diesel shunting locomotive used for yard and light freight duties. With a limited number produced, the class saw restricted service and was mainly deployed in Southern Railways. It was not as successful or widespread as the YDM-1 or YDM-4 classes.",
    "history": "Built in the late 1950s by Chittaranjan Locomotive Works (CLW), only a handful of YDM-2 locomotives were ever manufactured. They were equipped with the Maybach engine, later found less suitable for Indian operating conditions.",
    "service": "Used briefly for yard shunting and light duties. Due to mechanical and maintenance issues, they were phased out quickly and replaced by more robust classes.",
    "preservation": "No known preserved units. The class was scrapped completely by the late 1980s.",
    "status": "retired",
    "specs": {
      "Gauge": "Metre Gauge (1,000 mm)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "CLW",
      "Year Introduced": "1957",
      "Power Output": "700 hp",
      "Max Speed": "60 km/h",
      "Tractive Effort": "90 kN",
      "Locoweight": "44 t"
    },
    "gallery": ["/Images/Locomotive/ydm2.jpg"],
    "classes": [
      { "name": "YDM-2", "description": "Early metre-gauge shunting diesel with limited deployment" }
    ]
  },
  {
    "type": "diesel",
    "title": "YDM-3",
    "description": "Prototype metre-gauge locomotive from ALCo with limited use.",
    "image": "/Images/Locomotive/ydm3.jpg",
    "longDescription": "YDM-3 was a one-off experimental diesel locomotive built by ALCo (USA) for metre-gauge operations. While technically sound, it never entered mass production and remained a prototype class. It helped Indian Railways in evaluating technologies for future diesel development on metre-gauge lines.",
    "history": "Built in the early 1960s and imported for testing, the YDM-3 was based on the ALCo design philosophy and served briefly in operational trials. Its failure to scale into production was mainly due to the preference for YDM-4, which had better operational characteristics.",
    "service": "Used only in trials and light services. Eventually retired without expansion into a larger fleet.",
    "preservation": "Not preserved; the prototype was withdrawn and scrapped after limited use.",
    "status": "retired",
    "specs": {
      "Gauge": "Metre Gauge (1,000 mm)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "ALCo (USA)",
      "Year Introduced": "1962",
      "Power Output": "1,000 hp",
      "Max Speed": "80 km/h",
      "Tractive Effort": "120 kN",
      "Locoweight": "52 t"
    },
    "gallery": ["/Images/Locomotive/ydm3.jpg"],
    "classes": [
      { "name": "YDM-3", "description": "Prototype metre-gauge diesel locomotive by ALCo" }
    ]
  },
  {
    "type": "diesel",
    "title": "YDM-4",
    "description": "Most successful and longest-serving metre-gauge diesel locomotive in India.",
    "image": "/Images/Locomotive/ydm4.jpg",
    "longDescription": "The YDM-4 is the backbone of Indian Railways' metre-gauge diesel operations. Built originally by ALCo and then by DLW under license, it has been used extensively for both passenger and freight services. With its ALCo 251-D engine and high reliability, the YDM-4 enabled the replacement of steam locomotives across metre-gauge networks, especially in Rajasthan, Tamil Nadu, and Assam.",
    "history": "First introduced in 1961, more than 550 units were produced until the 1990s. It became the default choice for metre-gauge dieselization and continued operating for decades, even after Project Unigauge started phasing out metre-gauge lines.",
    "service": "Used on major metre-gauge lines across India. Several units were exported or loaned to Sri Lanka, Bangladesh, and Nepal. Some YDM-4s are still operational on heritage and isolated lines.",
    "preservation": "A few units have been preserved in operational heritage lines like Mhow-Kalakund and in museums. Several others are still in working condition in Nepal.",
    "status": "active",
    "specs": {
      "Gauge": "Metre Gauge (1,000 mm)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "ALCo (USA), DLW Varanasi",
      "Year Introduced": "1961",
      "Power Output": "1,350 hp",
      "Max Speed": "100 km/h",
      "Tractive Effort": "190 kN",
      "Locoweight": "74 t"
    },
    "gallery": ["/Images/Locomotive/ydm4.jpg"],
    "classes": [
      { "name": "YDM-4", "description": "Workhorse of the metre-gauge diesel fleet" }
    ]
  },
  {
    "type": "diesel",
    "title": "YDM-5",
    "description": "Experimental high-speed metre-gauge diesel locomotive.",
    "image": "/Images/Locomotive/ydm5.jpg",
    "longDescription": "The YDM-5 was an experimental class built in small numbers for high-speed passenger services on metre-gauge lines. Though technically sound, the class never saw mass production due to shifting priorities towards broad gauge. Its high-speed capabilities and improved power output made it a rare but advanced locomotive in the metre-gauge fleet.",
    "history": "Manufactured in the 1990s by DLW, only a few units were built. It was one of the last attempts to modernize the metre-gauge network before Project Unigauge took full effect.",
    "service": "Used on select fast passenger trains in Southern and Western India. Due to their limited number and gauge conversion, they were retired early.",
    "preservation": "No known preserved units due to low production numbers. Mostly scrapped after gauge conversion.",
    "status": "retired",
    "specs": {
      "Gauge": "Metre Gauge (1,000 mm)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "DLW Varanasi",
      "Year Introduced": "1994",
      "Power Output": "1,800 hp",
      "Max Speed": "110 km/h",
      "Tractive Effort": "200 kN",
      "Locoweight": "76 t"
    },
    "gallery": ["/Images/Locomotive/ydm5.jpg"],
    "classes": [
      { "name": "YDM-5", "description": "High-speed diesel prototype for metre-gauge passenger trains" }
    ]
  },
  {
    "type": "diesel",
    "title": "ZDM-1",
    "description": "First-generation narrow-gauge diesel locomotive.",
    "image": "/Images/Locomotive/zdm1.jpg",
    "longDescription": "ZDM-1 was the first class of diesel locomotives introduced for 2 ft 6 in narrow-gauge operations. Developed for low-speed and light-duty haulage, it marked the dieselization of narrow-gauge lines in India, replacing steam engines. Its simple design made it easy to maintain, though power output was modest.",
    "history": "Introduced in the early 1960s and built by CLW, ZDM-1 locomotives were mainly used in Central and Western India on branch lines and hilly routes. Only a small number were produced.",
    "service": "Deployed for light passenger and freight services on NG sections such as Gwalior–Sheopur and Kalka–Shimla.",
    "preservation": "Several ZDM-1 units are preserved or operational in heritage NG lines like Darjeeling or Kalka–Shimla.",
    "status": "heritage",
    "specs": {
      "Gauge": "Narrow Gauge (2 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "CLW",
      "Year Introduced": "1961",
      "Power Output": "300 hp",
      "Max Speed": "40 km/h",
      "Tractive Effort": "55 kN",
      "Locoweight": "24 t"
    },
    "gallery": ["/Images/Locomotive/zdm1.jpg"],
    "classes": [
      { "name": "ZDM-1", "description": "Early diesel for narrow-gauge operations" }
    ]
  },
  {
    "type": "diesel",
    "title": "ZDM-2",
    "description": "Improved narrow-gauge diesel with higher power and reliability.",
    "image": "/Images/Locomotive/zdm2.jpg",
    "longDescription": "ZDM-2 was a successor to ZDM-1 with increased horsepower and improved hauling capacity. Designed for use on 2 ft 6 in lines, it served in hilly and curved terrain where steam was inefficient. Its longer frame and Co-Co arrangement gave better stability and traction.",
    "history": "Introduced in the late 1960s, built by CLW, it replaced aging steam locomotives in several NG sections. It marked the start of full-scale dieselization in narrow-gauge territories.",
    "service": "Used extensively in Madhya Pradesh, Himachal Pradesh, and West Bengal. Particularly useful in hill lines like Kalka–Shimla.",
    "preservation": "Several are still operational or restored for heritage railways. Others have been scrapped post gauge conversion.",
    "status": "active",
    "specs": {
      "Gauge": "Narrow Gauge (2 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "CLW",
      "Year Introduced": "1968",
      "Power Output": "450 hp",
      "Max Speed": "50 km/h",
      "Tractive Effort": "75 kN",
      "Locoweight": "30 t"
    },
    "gallery": ["/Images/Locomotive/zdm2.jpg"],
    "classes": [
      { "name": "ZDM-2", "description": "Improved narrow-gauge diesel with better performance" }
    ]
  },
  {
    "type": "diesel",
    "title": "ZDM-3",
    "description": "Enhanced NG loco with dynamic braking and superior traction.",
    "image": "/Images/Locomotive/zdm3.jpg",
    "longDescription": "The ZDM-3 class was a further advancement in narrow-gauge diesel technology with more efficient braking and tractive performance. These locos were designed to tackle steeper gradients and were often deployed in mountainous regions. The addition of dynamic brakes made them ideal for safe descent in hilly terrain.",
    "history": "Introduced in the 1970s by CLW, they were mainly developed to replace ZDM-2s on tougher terrains. Their high reliability made them a staple in heritage lines.",
    "service": "Extensively used on Kalka–Shimla, Kangra Valley, and Gwalior–Sheopur lines.",
    "preservation": "Still operational in several NG heritage lines.",
    "status": "active",
    "specs": {
      "Gauge": "Narrow Gauge (2 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "CLW",
      "Year Introduced": "1975",
      "Power Output": "550 hp",
      "Max Speed": "60 km/h",
      "Tractive Effort": "80 kN",
      "Locoweight": "34 t"
    },
    "gallery": ["/Images/Locomotive/zdm3.jpg"],
    "classes": [
      { "name": "ZDM-3", "description": "Mountain-grade narrow-gauge loco with dynamic braking" }
    ]
  },
  {
    "type": "diesel",
    "title": "ZDM-4",
    "description": "Powerful NG locomotive for freight and passenger service.",
    "image": "/Images/Locomotive/zdm4.jpg",
    "longDescription": "ZDM-4 was designed to haul heavier rakes and improve the freight capabilities of narrow-gauge operations. With greater horsepower and rugged components, it ensured smoother operation on longer routes and rough terrain.",
    "history": "Built by CLW during the 1980s as NG lines grew in traffic density. ZDM-4 provided a step up from earlier generations, especially in payload capacity.",
    "service": "Used widely in Central India and Himachal Pradesh. Some exported to Bangladesh and Nepal.",
    "preservation": "Operational in a few heritage railways. Others retired during gauge conversion.",
    "status": "heritage",
    "specs": {
      "Gauge": "Narrow Gauge (2 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "CLW",
      "Year Introduced": "1983",
      "Power Output": "700 hp",
      "Max Speed": "60 km/h",
      "Tractive Effort": "90 kN",
      "Locoweight": "38 t"
    },
    "gallery": ["/Images/Locomotive/zdm4.jpg"],
    "classes": [
      { "name": "ZDM-4", "description": "High-powered narrow-gauge loco for freight/passenger" }
    ]
  },
  {
    "type": "diesel",
    "title": "ZDM-5",
    "description": "Last-generation NG diesel locomotive with improved cab comfort.",
    "image": "/Images/Locomotive/zdm5.jpg",
    "longDescription": "ZDM-5 was the most modern narrow-gauge diesel-electric locomotive introduced in India. It featured improved ergonomics, better cab visibility, and digital control systems. Designed for use on premium NG services and in hilly terrain, it represented the final phase before narrow-gauge routes began conversion to broad gauge.",
    "history": "Introduced in the late 1990s, ZDM-5 was manufactured in limited numbers as NG routes started diminishing. It offered modern features like improved crew comfort and fuel efficiency.",
    "service": "Primarily used in Kalka–Shimla section and export to neighboring countries. Limited to tourist and heritage operations post-gauge conversion.",
    "preservation": "Operational on select NG heritage routes. Others stored or transferred to museums.",
    "status": "heritage",
    "specs": {
      "Gauge": "Narrow Gauge (2 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "CLW",
      "Year Introduced": "1996",
      "Power Output": "750 hp",
      "Max Speed": "60 km/h",
      "Tractive Effort": "85 kN",
      "Locoweight": "36 t"
    },
    "gallery": ["/Images/Locomotive/zdm5.jpg"],
    "classes": [
      { "name": "ZDM-5", "description": "Final generation NG loco with modern controls" }
    ]
  },
  {
    "type": "diesel",
    "title": "NDM-5",
    "description": "Narrow gauge diesel hydraulic locomotive for the Matheran Hill Railway.",
    "image": "/Images/Locomotive/ndm5.jpg",
    "longDescription": "The NDM-5 is a diesel-hydraulic locomotive built specifically for the narrow gauge (2 ft or 610 mm) Matheran Hill Railway in Maharashtra, India. It replaced aging steam locomotives and was designed for tight curves, steep gradients, and lighter track infrastructure. The locomotive has a distinct look with a compact body and a single cab, optimized for hilly terrain operations.",
    "history": "NDM-5 locomotives were introduced in the 1980s by the Chittaranjan Locomotive Works (CLW) to modernize the operations of hill railways like the Matheran Light Railway. Built with a hydraulic transmission and smaller profile, these locomotives became essential for hauling short-distance passenger services on narrow gauge routes.",
    "service": "Primarily used on the Matheran Hill Railway, the NDM-5 handled passenger rakes along the scenic and winding hill route. Their low axle load and short wheelbase made them perfect for the sharp curves and inclines of the terrain.",
    "preservation": "Several NDM-5 units are still in operational or semi-operational condition and are used occasionally during special services on the Matheran line. Some units have been preserved in railway museums and workshops.",
    "status": "heritage",
    "specs": {
      "Gauge": "Narrow Gauge (2 ft / 610 mm)",
      "Wheel Arrangement": "B-B",
      "Builder": "CLW",
      "Year Introduced": "1980s",
      "Power Output": "350 hp",
      "Max Speed": "30 km/h",
      "Tractive Effort": "65 kN",
      "Locoweight": "18 t"
    },
    "gallery": ["/Images/Locomotive/ndm5.jpg"],
    "classes": [
      {
        "name": "NDM-5",
        "description": "Narrow gauge diesel-hydraulic locomotive used on hill railways like Matheran."
      }
    ]
  },
  {
    "type": "diesel",
    "title": "NDM-6",
    "description": "Powerful diesel-hydraulic loco used for Neral–Matheran hill line operations.",
    "image": "/Images/Locomotive/ndm6.jpg",
    "longDescription": "The NDM-6 is a diesel-hydraulic locomotive built for the 2 ft narrow gauge Neral–Matheran hill railway. Designed to be more powerful and robust than its predecessor NDM-5, it features enhanced braking systems for mountain safety, and higher tractive effort for improved hauling capacity on steep gradients. Its rugged and simple design made it ideal for hill railway conditions.",
    "history": "Developed and introduced in the 1990s, the NDM-6 was part of Indian Railways’ effort to maintain viable hill railway operations as steam traction was phased out. It retained a compact structure with modernized hydraulic transmission suited for the sharp curves and 1 in 20 gradients on the Neral–Matheran route.",
    "service": "Used exclusively on the Neral–Matheran railway, the NDM-6 remains critical for daily train operations and hauling supplies to remote hill stations. It can pull both passenger and maintenance trains with ease through the challenging terrain.",
    "preservation": "NDM-6 is still in service and maintained actively by Central Railway’s Neral shed. Due to its essential role, there are no preserved static units yet.",
    "status": "active",
    "specs": {
      "Gauge": "Narrow Gauge (2 ft / 610 mm)",
      "Wheel Arrangement": "B-B",
      "Builder": "Golden Rock Workshop",
      "Year Introduced": "1990s",
      "Power Output": "500 hp",
      "Max Speed": "35 km/h",
      "Tractive Effort": "85 kN",
      "Locoweight": "22 t"
    },
    "gallery": ["/Images/Locomotive/ndm6.jpg"],
    "classes": [
      {
        "name": "NDM-6",
        "description": "Enhanced hill narrow gauge loco for Neral–Matheran route with better power and traction."
      }
    ]
  }
];

async function seedDieselLocomotives() {
  await DieselLocomotive.deleteMany({});
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