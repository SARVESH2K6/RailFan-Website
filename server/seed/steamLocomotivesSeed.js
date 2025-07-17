const mongoose = require('mongoose');
const LocomotiveSchema = require('../models/Locomotive').schema;

const SteamLocomotive = mongoose.model('SteamLocomotive', LocomotiveSchema, 'steamLocomotives');

const steamLocomotiveData = [{
  "type": "steam",
  "title": "WP Class",
  "description": "The iconic post‑independence passenger steam locomotive designed for high‑speed broad gauge service.",
  "image": "/Images/Locomotive/Steam.jpg",
  "longDescription": "The WP class, introduced in 1947, became the main passenger steam loco for Indian Railways. Its distinctive bullet‑nose design and top speed of 110 km/h made it a symbol of post‑independence railway advancement. Built across multiple countries and by CLW, 755 units served until the late 1990s. A few preserved examples are displayed in museums and occasionally used in heritage runs. :contentReference[oaicite:1]{index=1}",
  "history": "Developed starting in 1947 by Baldwin, Canadian, Montreal, Austrian and Indian builders to meet India’s growing need for fast passenger service. Production continued until 1967, totaling 755 machines. :contentReference[oaicite:2]{index=2}",
  "service": "WP locomotives hauled top express trains like the Howrah–Delhi Mail and Grand Trunk Express, covering premier broad‑gauge routes reliably through the 1960s to 1980s. :contentReference[oaicite:3]{index=3}",
  "preservation": "Nine units are preserved in museums and locations such as the National Rail Museum; heritage runs. :contentReference[oaicite:4]{index=4}",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "4‑6‑2 Pacific",
    "Builder": "Baldwin, Canadian Locomotive Co., Montreal, Floridsdorf, CLW",
    "Year Introduced": 1947,
    "Max Speed": "110 km/h",
    "Tractive Effort": "30,600 lbf"
  },
  "gallery": [
    "/Images/Locomotive/Steam.jpg",
    "/Images/Train/Steam.jpg"
  ],
  "classes": [
    {
      "name": "WP",
      "description": "Standard broad‑gauge Pacific passenger locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "WL Class (1955)",
  "description": "Light‑axle‑load 4‑6‑2 \"Pacific\" locomotive designed for broad‑gauge passenger service on lighter lines.",
  "image": "https://i.ibb.co/KjXQJLfQ/WL.jpg",
  "longDescription": "The WL Class, introduced in 1955 (initial batch built at Vulcan Foundry, later by CLW), was a lighter version of the Pacific layout intended for routes unsuitable for heavier WP locos. A total of 104 were produced. :contentReference[oaicite:5]{index=5}",
  "history": "Designed to carry express passenger services on lighter track with axle load ≈16.9 LT. First 10 in 1955 (UK-built), remainder built between 1966–69 at Chittaranjan. :contentReference[oaicite:6]{index=6}",
  "service": "Deployed on broad-gauge mail and express routes where WP could not operate. Served reliably until the late 1980s–’90s. :contentReference[oaicite:7]{index=7}",
  "preservation": "WL 15005 preserved; other units may exist in museums as static exhibits. :contentReference[oaicite:8]{index=8}",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "4‑6‑2 Pacific",
    "Builder": "Vulcan Foundry, Chittaranjan Locomotive Works",
    "Year Introduced": 1966,
    "Driver Diameter": "5 ft",
    "Tractive Effort": "27,640 lbf"
  },
  "gallery": [
    "https://i.ibb.co/KjXQJLfQ/WL.jpg",
    "/Images/Train/Steam.jpg"
  ],
  "classes": [
    {
      "name": "WL",
      "description": "Light Pacific passenger locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "WG Class",
  "description": "Most numerous broad‑gauge 2‑8‑2 “Mikado” freight locomotive introduced in 1950.",
  "image": "https://i.ibb.co/qLGyhpXM/WG.jpg",
  "longDescription": "The WG Class was introduced in 1950 as a standardized goods locomotive on 5 ft 6 in broad gauge. With 2,450 built across global manufacturers and CLW up to 1970, it became the mainstay for freight haulage. :contentReference[oaicite:9]{index=9}",
  "history": "Developed using components from WP passenger design, first 100 built by UK firms, then mass-manufactured at CLW. Production spanned 1950–70. :contentReference[oaicite:10]{index=10}",
  "service": "Primarily used for heavy freight; also seen on mixed passenger work. Retired by the late 1990s. :contentReference[oaicite:11]{index=11}",
  "preservation": "Nine preserved examples; remainder scrapped. Some restored for heritage operations. :contentReference[oaicite:12]{index=12}",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "2‑8‑2 Mikado",
    "Builder": "NBL, Vulcan Foundry, AFB, Baldwin, Hitachi, Krupp, CLW, others",
    "Year Introduced": 1950,
    "Driver Diameter": "61.5 in",
    "Tractive Effort": "38,890 lbf",
    "Max Speed": "80 km/h"
  },
  "gallery": [
    "https://i.ibb.co/qLGyhpXM/WG.jpg",
    "/Images/Train/Steam.jpg"
  ],
  "classes": [
    {
      "name": "WG",
      "description": "Heavy goods steam locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "B Class",
  "description": "Iconic 0‑4‑0ST saddle‑tank narrow‑gauge locomotive used on the Darjeeling Himalayan Railway since 1889.",
  "image": "https://i.ibb.co/Q3V88MV6/B.jpg",
  "longDescription": "The DHR B Class was introduced in 1889 for the Darjeeling Himalayan Railway (2 ft / 610 mm gauge). With its small 0‑4‑0 saddle‑tank design, it was ideally suited to steep gradients and sharp curves. Built by multiple manufacturers (Sharp Stewart, Neilson Reid, etc.), dozens remain, some still operational in heritage service. :contentReference[oaicite:1]{index=1}",
  "history": "Developed specifically for the challenging Darjeeling route, the B Class locomotives were built between 1889 and the early 20th century. Their robust design and capability led to widespread use on the line. :contentReference[oaicite:2]{index=2}",
  "service": "Used for everyday passenger and goods haulage on the DHR’s steep terrain. Several B‑class engines like No. 788 “Tusker” still run scheduled “toy train” services. :contentReference[oaicite:3]{index=3}",
  "preservation": "Many preserved: some in running condition (e.g., 788, 795), others display‑only at Darjeeling shed, Eco Park Rajarhat, plus private collections. :contentReference[oaicite:4]{index=4}",
  "status": "heritage",
  "specs": {
    "Gauge": "2 ft (610 mm)",
    "Wheel Arrangement": "0‑4‑0ST",
    "Builder": "Sharp Stewart, Neilson Reid, North British, others",
    "Year Introduced": 1889,
    "Driver Diameter": "26 in",
    "Tractive Effort": "7,750 lbf"
  },
  "gallery": [
    "https://i.ibb.co/Q3V88MV6/B.jpg",
    "/Images/Train/Steam.jpg"
  ],
  "classes": [
    {
      "name": "B",
      "description": "Narrow-gauge saddle-tank locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "X Class",
  "description": "Rack‑and‑pinion 0‑8‑0T tank locomotive designed for the Nilgiri Mountain Railway.",
  "image": "https://i.ibb.co/NndP4dwy/X.jpg",
  "longDescription": "The X Class rack‑and‑pinion locos were designed for the Nilgiri Mountain Railway (metre gauge, rack sections), first built in 1914. Only a few remain; the workshop at Golden Rock recently overhauled one to return to service. :contentReference[oaicite:13]{index=13}",
  "history": "Built as class “X” under the IRS scheme post-WWI for mountain rack use; they use the Abt rack system. Periodic overhauling every four years as per NMR mandates. :contentReference[oaicite:14]{index=14}",
  "service": "Haul trains on the steep Nilgiri Mountain Railway between Mettupalayam and Ooty, managing gradients with rack assistance. :contentReference[oaicite:15]{index=15}",
  "preservation": "One unit recently overhauled (June 2025) at Golden Rock and returned to service. Fully heritage‑operational. :contentReference[oaicite:16]{index=16}",
  "status": "heritage",
  "specs": {
    "Gauge": "Metre Gauge (1 m)",
    "Wheel Arrangement": "0‑8‑0T with rack",
    "Builder": "Dübs & Co, others under IRS X class",
    "Year Introduced": 1914,
    "Rack System": "Abt rack",
    "Periodic Overhaul": "Every 4 years"
  },
  "gallery": [
    "https://i.ibb.co/NndP4dwy/X.jpg",
    "/Images/Train/Steam.jpg"
  ],
  "classes": [
    {
      "name": "X",
      "description": "Rack railway steam locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "XA Class",
  "description": "Light axle‑load broad‑gauge 4‑6‑2 \"Pacific\" experimental passenger locomotive introduced in 1929.",
  "image": "/Images/Locomotive/SG.jpg",
  "longDescription": "The XA class was built by Vulcan Foundry between 1929–31 (100+ units). Designed for branch lines, it featured a 13.1‑ton axle load, 20,960 lbf tractive effort, and served in India and Pakistan post‑Partition. Two examples are preserved. :contentReference[oaicite:0]",
  "history": "Introduced 1929–31 under IRS standards for light branch passenger services. :contentReference[oaicite:0]",
  "service": "Operated branch passenger services on lighter tracks in British India and post‑Partition until retirement in the 1960s. :contentReference[oaicite:0]",
  "preservation": "Two units preserved (No. 22046 at Parel Workshop; No. 22002 at Chandausi). :contentReference[oaicite:0]",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "4‑6‑2",
    "Builder": "Vulcan Foundry",
    "Year Introduced": 1929,
    "Axle Load": "13.1 long tons",
    "Tractive Effort": "20,960 lbf"
  },
  "gallery": [],
  "classes": [
    {
      "name": "XA",
      "description": "Light branch passenger Pacific"
    }
  ]
},
{
  "type": "steam",
  "title": "XB Class",
  "description": "Broad‑gauge 4‑6‑2 \"Pacific\" IRS experimental passenger locomotive introduced circa 1924.",
  "image": "/Images/Locomotive/SG.jpg",
  "longDescription": "The XB class, an IRS 4‑6‑2 design with 17‑ton axle load, had ~99 units built. Experienced initial teething issues but served into the 1980s. One example preserved (#450). :contentReference[oaicite:1]",
  "history": "Designed 1924 by BESA standards to modernize passenger fleet; entered service late 1920s. :contentReference[oaicite:1]",
  "service": "Hauling express and passenger services until gradual withdrawal through the 1980s. :contentReference[oaicite:1]",
  "preservation": "One preserved unit (#450) remains; rest scrapped by 1983. :contentReference[oaicite:1]",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "4‑6‑2",
    "Axle Load": "17 long tons",
    "Tractive Effort": "26,760 lbf",
    "Max Speed": "116 km/h"
  },
  "gallery": [],
  "classes": [
    {
      "name": "XB",
      "description": "Intermediate branch passenger Pacific"
    }
  ]
},
{
  "type": "steam",
  "title": "XC Class",
  "description": "Heavy‑axle‑load broad‑gauge 4‑6‑2 “Pacific” locomotive used from 1928.",
  "image": "/Images/Locomotive/SG.jpg",
  "longDescription": "The XC class was a heavy Pacific (19.5‑t axle load, 6 ft 2 in drivers) built 1928–31; 72 units served in India and Pakistan post‑Partition. None preserved. :contentReference[oaicite:2]",
  "history": "Introduced 1928–31 by Vulcan Foundry and Beardmore as heavy‑load passenger locos. :contentReference[oaicite:2]",
  "service": "Used for mainline passenger runs until phased out; retired without any preservation. :contentReference[oaicite:2]",
  "preservation": "None preserved. :contentReference[oaicite:2]",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge",
    "Wheel Arrangement": "4‑6‑2",
    "Axle Load": "19.5 long tons",
    "Driver Dia": "6 ft 2 in",
    "Units Built": 72
  },
  "gallery": [],
  "classes": [
    {
      "name": "XC",
      "description": "Heavy mainline passenger Pacific"
    }
  ]
},
{
  "type": "steam",
  "title": "XD Class",
  "description": "Broad‑gauge 2‑8‑2 \"Mikado\" goods locomotive, introduced from 1928.",
  "image": "https://i.ibb.co/w3Hv4MN/XD.jpg",
  "longDescription": "The XD Class was Indian Railways’ standard IRS goods locomotive, built from 1928–1948 by Vulcan Foundry, Armstrong Whitworth, Škoda, North British and others. With 194 units, it hauled freight across broad ​gauge networks, delivering around 37,335 lbf tractive effort. :contentReference[oaicite:1]{index=1}",
  "history": "Introduced under the IRS scheme in 1928 as a light‑axle‑load freight engine; widespread production continued through 1948. :contentReference[oaicite:2]{index=2}",
  "service": "Depended on for mixed‑traffic goods duties until phased out in the 1970s–’80s.",
  "preservation": "A few preserved in museums; exact numbers unclear.",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "2‑8‑2 Mikado",
    "Builder": "Vulcan Foundry, Armstrong Whitworth, Škoda, North British",
    "Year Introduced": "1928",
    "Driver Diameter": "5 ft",
    "Tractive Effort": "37,335 lbf"
  },
  "gallery": [
    "https://i.ibb.co/w3Hv4MN/XD.jpg"
  ],
  "classes": [
    {
      "name": "XD",
      "description": "Light goods IRS Mikado locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "XE Class",
  "description": "Heavy broad‑gauge 2‑8‑2 \"Mikado\" goods locomotive, the heaviest non‑articulated steam loco for IR.",
  "image": "https://i.ibb.co/9HLysG9b/XE.jpg",
  "longDescription": "The XE Class, built between 1928–1930 and in 1945 by Beardmore and Vulcan Foundry (93 units), boasted the largest boilers among IRS locos and ~50,920 lbf tractive effort. Known as IR’s heaviest non‑articulated engines. :contentReference[oaicite:3]{index=3}",
  "history": "Developed under IRS standards as the heavy Mikado design; introduced 1928–30 and supplemented post‑war in 1945. :contentReference[oaicite:4]{index=4}",
  "service": "Handled heavy freight tasks; some used for shunting due to high tractive effort.",
  "preservation": "Five preserved including XE 3634 (“Pavandut”) operational at Rewari Steam Shed. :contentReference[oaicite:5]{index=5}",
  "status": "heritage",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "2‑8‑2 Mikado",
    "Builder": "William Beardmore & Co., Vulcan Foundry",
    "Year Introduced": "1928",
    "Driver Diameter": "5 ft",
    "Tractive Effort": "50,920 lbf"
  },
  "gallery": [
    "https://i.ibb.co/9HLysG9b/XE.jpg"
  ],
  "classes": [
    {
      "name": "XE",
      "description": "Heavy goods IRS Mikado locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "YG Class",
  "description": "Metre‑gauge 2‑8‑2 goods locomotive, India’s most mass‑produced MG steam engine.",
  "image": "https://i.ibb.co/WvKvx79y/YG.jpg",
  "longDescription": "The YG Class was built from 1949–1972 with 1,074 units by nine manufacturers, becoming the most numerous metre‑gauge freight locomotive. The last unit (#3573) built in 1972 was also India’s final steam loco. :contentReference[oaicite:6]{index=6}",
  "history": "Designed post‑partition as the main MG freight IRS design; production spanned 23 years. :contentReference[oaicite:7]{index=7}",
  "service": "Used extensively for both freight and some passenger duties until the late 1990s. :contentReference[oaicite:8]{index=8}",
  "preservation": "Last three in WR ran into 1999; several others preserved in sheds. :contentReference[oaicite:9]{index=9}",
  "status": "retired",
  "specs": {
    "Gauge": "Metre Gauge (1 m)",
    "Wheel Arrangement": "2‑8‑2 Mikado",
    "Builder": "Baldwin, MLW, CLC, TELCO, Nippon, Floridsdorf, Škoda, MHI, CLW",
    "Year Introduced": "1949",
    "Tractive Effort": "≈82 kN"
  },
  "gallery": [
    "https://i.ibb.co/WvKvx79y/YG.jpg"
  ],
  "classes": [
    {
      "name": "YG",
      "description": "MG freight IRS Mikado locomotive",
    }
  ]
},
{
  "type": "steam",
  "title": "YP Class",
  "description": "Metre‑gauge 4‑6‑2 \"Pacific\" passenger locomotive, one of the largest MG passenger fleets.",
  "image": "https://i.ibb.co/BVQLQJJQ/YP.jpg",
  "longDescription": "The YP Class, produced from 1949–1970 (871 units from Baldwin, NBL, Krauss‑Maffei, TELCO), was MG’s standard passenger loco, among the last built globally for MG services. :contentReference[oaicite:10]{index=10}",
  "history": "Commissioned post‑partition as MG passenger IRS design; primary production between 1949–1970. :contentReference[oaicite:11]{index=11}",
  "service": "Worked mail, express and passenger trains until MG lines closed in 1990s. :contentReference[oaicite:12]{index=12}",
  "preservation": "Several preserved in Indian rail museums; a few exported and displayed abroad. :contentReference[oaicite:13]{index=13}",
  "status": "retired",
  "specs": {
    "Gauge": "Metre Gauge (1 m)",
    "Wheel Arrangement": "4‑6‑2 Pacific",
    "Builder": "Baldwin, North British, Krauss‑Maffei, TELCO",
    "Year Introduced": "1949",
    "Driver Diameter": "1,372 mm",
    "Tractive Effort": "≈82 kN"
  },
  "gallery": [
    "https://i.ibb.co/BVQLQJJQ/YP.jpg"
  ],
  "classes": [
    {
      "name": "YP",
      "description": "MG passenger IRS Pacific locomotive",
    }
  ]
},
{
  "type": "steam",
  "title": "ZB Class",
  "description": "Narrow‑gauge 2‑6‑2 freight locomotive for Z‑gauge lines.",
  "image": "https://i.ibb.co/tTMFHmYD/ZB.jpg",
  "longDescription": "The ZB Class was a Z‑gauge (2 ft 6 in) 2‑6‑2 mixed locomotive built in the mid‑20th century with a 6‑ton axle load for narrow‑gauge freight routes. :contentReference[oaicite:14]{index=14}",
  "history": "Part of the post‑war Z‑gauge IRS designs; used on Central Railway’s NG lines. :contentReference[oaicite:15]{index=15}",
  "service": "Used for local freight and mixed‑traffic services in narrow‑gauge regions.",
  "preservation": "Few likely remain in static display; detailed records scarce.",
  "status": "retired",
  "specs": {
    "Gauge": "2 ft 6 in (762 mm)",
    "Wheel Arrangement": "2‑6‑2",
    "Builder": "Kawasaki Rolling Stock & others",
    "Year Introduced": "≈1955",
    "Axle Load": "≈6 t"
  },
  "gallery": [
    "https://i.ibb.co/tTMFHmYD/ZB.jpg"
  ],
  "classes": [
    {
      "name": "ZB",
      "description": "NG 2‑6‑2 goods IRS locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "ZE Class",
  "description": "Narrow‑gauge 2‑8‑2 goods locomotive for 2 ft 6 in lines.",
  "image": "https://i.ibb.co/Rp00f8Q8/ZE.jpg",
  "longDescription": "The ZE Class was a narrow‑gauge IRS design (2 ft 6 in) 2‑8‑2 built circa 1955 to handle heavier loads on NG lines. :contentReference[oaicite:16]{index=16}",
  "history": "Built mid‑1950s by Kawasaki and others for Central and SE Railway NG sections. :contentReference[oaicite:17]{index=17}",
  "service": "Employed on freight and mixed‑traffic in NG terrain until NG operations wound down in 1980s.",
  "preservation": "Some units preserved at NG heritage displays, especially in CR territories.",
  "status": "retired",
  "specs": {
    "Gauge": "2 ft 6 in (762 mm)",
    "Wheel Arrangement": "2‑8‑2 Mikado",
    "Builder": "Kawasaki Rolling Stock, etc.",
    "Year Introduced": "c. 1955",
    "Axle Load": "≈8 t"
  },
  "gallery": [
    "https://i.ibb.co/Rp00f8Q8/ZE.jpg"
  ],
  "classes": [
    {
      "name": "ZE",
      "description": "NG goods IRS Mikado locomotive",
    }
  ]
},
{
  "type": "steam",
  "title": "ZP Class",
  "description": "Narrow‑gauge 4‑6‑2 Pacific locomotive for passenger service on Z‑gauge lines.",
  "image": "https://i.ibb.co/W4TK7dJt/ZP.jpg",
  "longDescription": "The ZP Class was a 2 ft 6 in narrow‑gauge Pacific (4‑6‑2) locomotive used for passenger trains in hilly and suburban Z‑gauge sections. :contentReference[oaicite:18]{index=18}",
  "history": "Introduced in the post‑war period as part of IRS Z‑gauge standards to improve passenger services on NG track. :contentReference[oaicite:19]{index=19}",
  "service": "Operated suburban and medium‑distance passenger services on narrow‑gauge routes.",
  "preservation": "Some may be preserved at narrow‑gauge heritage collections.",
  "status": "retired",
  "specs": {
    "Gauge": "2 ft 6 in (762 mm)",
    "Wheel Arrangement": "4‑6‑2 Pacific",
    "Builder": "Kawasaki Rolling Stock & others",
    "Year Introduced": "c. 1955",
    "Axle Load": "≈6 t"
  },
  "gallery": [
    "https://i.ibb.co/W4TK7dJt/ZP.jpg"
  ],
  "classes": [
    {
      "name": "ZP",
      "description": "NG passenger IRS Pacific locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "SP Class",
  "description": "Standard Passenger locomotive developed under BESA standards for light and medium passenger trains.",
  "image": "/Images/Locomotive/SP.jpg",
  "longDescription": "The SP class was introduced in the early 20th century as a BESA standard passenger locomotive for India’s broad gauge network. These 0-6-0 engines balanced speed and efficiency, ideal for hauling medium-speed passenger trains over long distances.",
  "history": "SP locomotives were designed by BESA to unify passenger locomotive types. They were typically built by British manufacturers and became the go-to solution for secondary and mixed services.",
  "service": "Used for regional passenger trains, mail services, and mixed duties. SPs were appreciated for their stability and ease of maintenance.",
  "preservation": "Few SP locomotives have been preserved, with most scrapped post-1950s. Some drawings and frames may exist in archives.",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "0-6-0",
    "Builder": "Various British builders under BESA",
    "Year Introduced": 1904,
    "Max Speed": "65 km/h",
    "Tractive Effort": "17,500 lbf"
  },
  "gallery": [
    "/Images/Locomotive/SP.jpg"
  ],
  "classes": [
    {
      "name": "SP",
      "description": "Standard passenger steam locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "SG Class",
  "description": "A standard goods locomotive designed under BESA standards for freight duties on broad gauge lines.",
  "image": "/Images/Locomotive/SG.jpg",
  "longDescription": "The SG (Standard Goods) class was introduced around 1905 under the British Engineering Standards Association (BESA) recommendations. These robust 0-6-0 locomotives were used extensively for hauling freight across India’s broad gauge network. Known for their reliability and ruggedness, SGs were vital in building the economic infrastructure of colonial India.",
  "history": "Developed to unify and modernize goods locomotive designs across Indian railways, the SG class was produced by several British firms. It became a backbone for heavy freight during the early 20th century and influenced future locomotive designs.",
  "service": "SG locomotives were employed in heavy goods service, transporting coal, minerals, and military supplies across various zones of the subcontinent.",
  "preservation": "Very few SG locomotives survive today. Most were withdrawn from service by the 1960s, but some parts and frames are on display in museums.",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "0-6-0",
    "Builder": "Vulcan Foundry, North British, Robert Stephenson & Hawthorns",
    "Year Introduced": 1905,
    "Max Speed": "60 km/h",
    "Tractive Effort": "18,000 lbf"
  },
  "gallery": [
    "/Images/Locomotive/SG.jpg"
  ],
  "classes": [
    {
      "name": "SG",
      "description": "Standard goods locomotive for freight duties"
    }
  ]
},
{
  "type": "steam",
  "title": "HG Class",
  "description": "Heavy goods locomotive widely used across Indian Railways for freight operations.",
  "image": "/Images/Locomotive/HG.jpg",
  "longDescription": "The HG (Heavy Goods) class was introduced in 1907 to handle increasingly heavy freight loads. These 2-8-0 locomotives were a mainstay of goods traffic and were known for their pulling power and endurance. Several variations like HGS (superheated) and HGC (converted) followed the base design.",
  "history": "HGs were part of early 20th century efforts to introduce heavier goods locomotives. Built by multiple British firms, they became one of the most numerous classes of freight engines before independence.",
  "service": "Used on coal, ore, and military freight routes throughout India, especially on long gradients and tough terrain.",
  "preservation": "A few HG class locomotives survive in museums or static display. One or two are operational on heritage lines.",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "2-8-0",
    "Builder": "Vulcan Foundry, North British, Kitson, Armstrong Whitworth",
    "Year Introduced": 1907,
    "Max Speed": "65 km/h",
    "Tractive Effort": "23,500 lbf"
  },
  "gallery": [
    "/Images/Locomotive/HG.jpg"
  ],
  "classes": [
    {
      "name": "HG",
      "description": "Heavy freight locomotive for broad gauge"
    }
  ]
},
{
  "type": "steam",
  "title": "HT Class",
  "description": "Heavy tank locomotives designed for suburban and industrial services on broad gauge.",
  "image": "/Images/Locomotive/HT.jpg",
  "longDescription": "The HT class was a tank locomotive series used for heavy-duty tasks in suburban and industrial rail networks. Compact yet powerful, these engines featured a tank design which stored water on the locomotive itself, eliminating the need for a tender. They were commonly used in tight-yard movements and short-distance passenger runs.",
  "history": "HT locomotives emerged in the early 1920s and were produced primarily for railways that required short-turnaround suburban services and switching duties.",
  "service": "They were deployed in Bombay and Calcutta suburban lines and shunting yards across major industrial belts.",
  "preservation": "Some HT class locomotives may exist in derelict condition in workshops, but full preservation is rare.",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "0-6-4T or 2-6-4T",
    "Builder": "Various, including North British and Vulcan Foundry",
    "Year Introduced": 1923,
    "Max Speed": "70 km/h",
    "Tractive Effort": "20,000 lbf"
  },
  "gallery": [
    "/Images/Locomotive/HT.jpg"
  ],
  "classes": [
    {
      "name": "HT",
      "description": "Heavy suburban tank locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "AP Class",
  "description": "One of India’s earliest express passenger steam locomotives used on broad gauge routes.",
  "image": "/Images/Locomotive/AP.jpg",
  "longDescription": "The AP (Assam Passenger) class was one of the earliest steam locomotives designed for express passenger services in India. Known for its 4-4-0 wheel arrangement and elegant profile, the AP class helped connect eastern India during the early 20th century.",
  "history": "Introduced in the early 1900s under the British Raj, AP class engines were used to meet increasing demands for faster passenger movement in eastern India.",
  "service": "Deployed primarily on passenger and mail routes in Assam and Bengal, it provided reliable service for several decades.",
  "preservation": "A few units were preserved in railway museums, notably at the National Rail Museum in New Delhi.",
  "status": "retired",
  "specs": {
    "Gauge": "Broad Gauge (5 ft 6 in)",
    "Wheel Arrangement": "4-4-0",
    "Builder": "Vulcan Foundry, England",
    "Year Introduced": 1907,
    "Max Speed": "90 km/h",
    "Tractive Effort": "12,000 lbf"
  },
  "gallery": [
    "/Images/Locomotive/AP.jpg"
  ],
  "classes": [
    {
      "name": "AP",
      "description": "Assam Passenger broad-gauge steam locomotive"
    }
  ]
},
{
  "type": "steam",
  "title": "PT Class",
  "description": "Passenger Tank locomotive for metre gauge services across India.",
  "image": "/Images/Locomotive/PT.jpg",
  "longDescription": "The PT (Passenger Tank) class was a widely used steam locomotive on India’s metre gauge routes. Designed with a tank configuration, it offered good acceleration and agility, making it ideal for commuter and short-distance passenger trains.",
  "history": "The PT class emerged in the mid-20th century to address the demand for reliable metre gauge locomotives capable of efficient turnaround times without a tender.",
  "service": "Extensively used in regions like Rajasthan, Tamil Nadu, and Gujarat for hauling passenger trains on metre gauge lines.",
  "preservation": "Few examples of PT class survive today, with some on static display in regional museums.",
  "status": "retired",
  "specs": {
    "Gauge": "Metre Gauge (1000 mm)",
    "Wheel Arrangement": "2-6-2T",
    "Builder": "North British Locomotive Company",
    "Year Introduced": 1951,
    "Max Speed": "70 km/h",
    "Tractive Effort": "15,200 lbf"
  },
  "gallery": [
    "/Images/Locomotive/PT.jpg"
  ],
  "classes": [
    {
      "name": "PT",
      "description": "Passenger tank locomotive for metre gauge routes",
    }
  ]
}]

async function seedSteamLocomotives() {
  await SteamLocomotive.deleteMany({});
  await SteamLocomotive.insertMany(steamLocomotiveData);
  console.log('Steam locomotives seeded!');
}

module.exports = seedSteamLocomotives;

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    await seedSteamLocomotives();
    mongoose.disconnect();
  });
} 