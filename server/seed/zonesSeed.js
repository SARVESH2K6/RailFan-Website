const mongoose = require('mongoose');
const Zone = require('../models/Zone');

const zoneData = [
  {
    "name": "Northern Railway",
    "abbreviation": "NR",
    "image": "/Images/Railways/Delhi.jpg",
    "region": "North",
    "established": "1952",
    "headquarters": "Baroda House, New Delhi",
    "about": "Northern Railway (NR) is one of the largest and most prominent zones in Indian Railways. It covers a vast geographical area and serves densely populated regions across northern India, making it crucial for both civilian and defense logistics. Its headquarters at Baroda House in New Delhi signifies its strategic centrality.\n\nThe zone acts as a crucial artery for the Indian railway system, linking the capital with far-flung regions including the Himalayas. Known for high passenger traffic, NR is also the operator of many premier trains like Shatabdi and Rajdhani.\n\nIt has pioneered modern passenger amenities, digitized ticketing, and real-time tracking services, playing a leadership role in Indian Railways’ modernization journey.",
    "history": "Northern Railway was created in 1952 by merging the Jodhpur, Bikaner, and Eastern Punjab Railways with three divisions of the East Indian Railway. This unification created a cohesive northern network essential for post-independence connectivity.\n\nThroughout its history, NR has played key roles in national movements, military operations, and disaster relief logistics. During wars and emergencies, its broad gauge network enabled rapid mobilization and aid distribution.\n\nTechnological milestones such as early electrification, computerized reservations, and CCTV-based surveillance at stations have marked its progressive evolution.",
    "geography": "The NR zone encompasses seven states: Delhi, Haryana, Punjab, Uttar Pradesh, Uttarakhand, Himachal Pradesh, and Jammu & Kashmir. It spans the Indo-Gangetic plains, river basins, and mountain foothills, making the terrain both challenging and diverse.\n\nFrom snow-bound tracks in Jammu and Katra to agricultural belts in Punjab and UP, NR provides vital links for economic and social development. It also operates lines through religious and tourist hubs, boosting regional tourism.\n\nThe zone's presence in border and mountainous areas adds strategic relevance, especially in maintaining supply routes during adverse weather or security situations.",
    "operations": "NR operates flagship services like Rajdhani, Shatabdi, and Vande Bharat Express, offering speed and comfort for long-distance travel. The New Delhi station is one of the busiest and most modern terminals in India.\n\nIt also maintains suburban and intercity services for daily commuters in cities like Delhi and Lucknow. Dedicated freight corridors and special military movement trains make NR a multi-faceted operator.\n\nModernization initiatives include station redevelopment, AI-powered surveillance, green energy adoption, and real-time train analytics, further reinforcing NR’s leadership role.",
    "divisions": ["Delhi", "Ambala", "Firozpur", "Lucknow NR", "Moradabad"],
    "majorStations": ["New Delhi", "Amritsar", "Lucknow", "Jammu Tawi", "Ambala"],
    "gallery": ["/Images/Railways/Delhi.jpg", "/Images/Railways/NorthCentralRailway.jpg"],
    "website": "https://nr.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/Northern_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/Northern_Railway_zone",
      "https://nr.indianrailways.gov.in"
    ]
  },
  {
    "name": "Central Railway",
    "abbreviation": "CR",
    "image": "/Images/Railways/Mumbai.jpg",
    "region": "West-Central",
    "established": "1951",
    "headquarters": "Chhatrapati Shivaji Maharaj Terminus (CSMT), Mumbai",
    "about": "Central Railway (CR) is one of the oldest zones in Indian Railways and is headquartered at the historic Chhatrapati Shivaji Maharaj Terminus in Mumbai. It is known for operating the very first passenger train in India between Bombay and Thane in 1853 under the Great Indian Peninsula Railway.\n\nAs the backbone of the Mumbai suburban system, CR serves millions of daily commuters. Beyond urban connectivity, it also plays a key role in connecting Maharashtra with central and southern India.\n\nThe zone is a major driver of freight and passenger movement and is recognized for its heritage structures, including UNESCO-listed CSMT and old British-era railway buildings.",
    "history": "Central Railway was formed on 5 November 1951 by merging several state-owned railways including the Great Indian Peninsula Railway (GIPR), Scindia State Railway, and Nizam State Railway. GIPR holds the distinction of operating India’s first rail service.\n\nOver time, CR expanded to include regions from Maharashtra, Madhya Pradesh, and beyond. It played a major role in India's industrial revolution, supporting Mumbai's port trade and textile boom.\n\nIt has also led in electrification, transitioning from steam to modern electric traction well before other zones. The zone continues to evolve with increased focus on high-speed corridors and freight capacity.",
    "geography": "CR spans Maharashtra, Madhya Pradesh, parts of Karnataka, and Chhattisgarh. It connects major cities like Mumbai, Pune, Nagpur, Bhusawal, and Solapur. The topography includes coastal belts, Deccan plateaus, and river valleys.\n\nMumbai's coastal climate contrasts sharply with the dry interiors of Vidarbha and the forested regions of central India. This diverse geography presents both logistical advantages and environmental challenges.\n\nCR’s routes pass through rich agricultural and industrial zones, making it vital for economic flow and rural access. Its alignment with river systems like Godavari, Krishna, and Narmada supports intermodal transport.",
    "operations": "CR operates several iconic trains such as the Deccan Queen, Punjab Mail, and Gitanjali Express. It also manages the Mumbai suburban railway, one of the world's busiest commuter rail systems.\n\nThe freight network of CR is crucial for transporting petroleum, automobiles, fertilizers, and food grains. Its industrial links include connections to major factories, coal mines, and container depots.\n\nModernization efforts include station upgradation, digital ticketing, CCTV networks, and eco-friendly platforms. The zone is also part of the Mumbai-Ahmedabad bullet train corridor planning.",
    "divisions": ["Mumbai", "Bhusawal", "Pune", "Nagpur", "Solapur"],
    "majorStations": ["Mumbai CSMT", "Pune", "Nagpur", "Bhusawal", "Solapur"],
    "gallery": ["/Images/Railways/Mumbai.jpg", "/Images/Railways/CentralRailwayHeritage.jpg"],
    "website": "https://cr.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/Central_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/Central_Railway_zone",
      "https://cr.indianrailways.gov.in"
    ]
  },
  {
    "name": "Western Railway",
    "abbreviation": "WR",
    "image": "/Images/Railways/MumbaiWR.jpg",
    "region": "West",
    "established": "1951",
    "headquarters": "Churchgate, Mumbai",
    "about": "Western Railway (WR) is a major zone of Indian Railways and plays a critical role in connecting the financial capital of India, Mumbai, with the western and north-western regions. It handles massive passenger traffic through suburban and intercity trains and supports a thriving freight corridor.\n\nIt is particularly known for its efficiency, modernization, and historical importance. WR manages an extensive suburban system in Mumbai, which millions of people rely on daily for work and commuting.\n\nIn addition to passenger services, WR supports India’s trade through freight operations between ports, industrial belts, and agricultural markets in Gujarat, Rajasthan, and Madhya Pradesh.",
    "history": "Western Railway was formed in 1951 by merging several railways including the Bombay, Baroda and Central India Railway (BB&CI), Rajputana Malwa Railway, and Saurashtra Railway. BB&CI was a pioneer in rail development in western India and had established rail lines as early as the 1850s.\n\nWR has a long legacy of introducing new technologies and services. It was among the first zones to introduce electrified tracks and advanced coach designs.\n\nIts headquarters at Churchgate is a heritage site, and the zone has maintained a balance between preserving history and adopting innovation.",
    "geography": "WR spans the states of Maharashtra, Gujarat, Madhya Pradesh, and parts of Rajasthan. Its tracks pass through coastal cities, desert landscapes, industrial zones, and agricultural belts.\n\nMumbai to Ahmedabad, Mumbai to Ratlam, and Mumbai to Porbandar are among the major corridors. The region includes natural challenges like salt flats and high-temperature zones, especially in Gujarat and Rajasthan.\n\nWR is instrumental in connecting port cities like Kandla and Mundra with the hinterland, boosting India's import-export economy.",
    "operations": "WR operates prestigious trains such as the Mumbai-Ahmedabad Shatabdi, Gujarat Mail, and Duronto Express. It also runs suburban trains in Mumbai’s western line, which is critical for daily urban mobility.\n\nFreight services include high-value cargo like petroleum, fertilizers, textiles, and automobiles. WR’s container handling is among the highest in Indian Railways.\n\nThe zone is actively working on infrastructure projects like gauge conversion, electrification, and doubling of key routes. It is also a pioneer in green initiatives like solar-powered stations and rainwater harvesting.",
    "divisions": ["Mumbai WR", "Ahmedabad", "Ratlam", "Rajkot", "Bhavnagar"],
    "majorStations": ["Mumbai Central", "Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "gallery": ["/Images/Railways/MumbaiWR.jpg", "/Images/Railways/AhmedabadStation.jpg"],
    "website": "https://wr.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/Western_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/Western_Railway_zone",
      "https://wr.indianrailways.gov.in"
    ]
  },
  {
    "name": "Eastern Railway",
    "abbreviation": "ER",
    "image": "/Images/Railways/Kolkata.jpg",
    "region": "East",
    "established": "1952",
    "headquarters": "Fairlie Place, Kolkata",
    "about": "Eastern Railway (ER) is one of the oldest zones of Indian Railways and is centered in Kolkata, West Bengal. It plays a significant role in regional mobility and freight movement across eastern India.\n\nThe zone connects key agricultural and industrial regions in Bihar, Jharkhand, and West Bengal, including the coal-rich areas of Dhanbad and Asansol. ER also manages a dense suburban network in Kolkata.\n\nKnown for handling heavy passenger and coal traffic, ER has played a pivotal role in industrial development and urban growth across the eastern belt.",
    "history": "Eastern Railway was carved out in 1952 from portions of the East Indian Railway and the Bengal Nagpur Railway. The Howrah–Delhi main line, which passes through ER, was one of the earliest trunk routes in the country.\n\nHistorically, ER was instrumental during the colonial era in facilitating resource extraction, especially coal and jute. Post-independence, it became a backbone of the eastern economic corridor.\n\nOver time, it witnessed major electrification drives and digital upgrades, adapting to growing demand and technology advancements.",
    "geography": "The zone covers densely populated and industrialized states like West Bengal, Bihar, and Jharkhand. Its terrain includes river deltas, floodplains, coalfields, and agricultural zones.\n\nThe Ganges river system intersects many of its routes, with bridges like the Howrah Bridge and the historic Nivedita Setu forming critical junctions.\n\nCoal mining areas in Jharkhand, jute mills in West Bengal, and agriculture in Bihar make the zone economically vital.",
    "operations": "Eastern Railway operates famous trains such as the Howrah Rajdhani, Coalfield Express, and the Black Diamond Express. The Howrah station is one of the oldest and busiest terminals in India.\n\nER handles one of the highest coal freight volumes in the country. It also supports suburban EMU (Electric Multiple Unit) networks in and around Kolkata.\n\nThe zone is expanding under dedicated freight corridors and smart station initiatives. ER has also introduced passenger-friendly steps like retiring rooms, digital ticket counters, and online complaint redressal.",
    "divisions": ["Howrah", "Sealdah", "Asansol", "Malda"],
    "majorStations": ["Howrah", "Sealdah", "Asansol", "Durgapur", "Malda Town"],
    "gallery": ["/Images/Railways/Kolkata.jpg", "/Images/Railways/HowrahBridge.jpg"],
    "website": "https://er.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/Eastern_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/Eastern_Railway_zone",
      "https://er.indianrailways.gov.in"
    ]
  },
  {
    "name": "Southern Railway",
    "abbreviation": "SR",
    "image": "/Images/Railways/Chennai.jpg",
    "region": "South",
    "established": "1951",
    "headquarters": "Park Town, Chennai",
    "about": "Southern Railway (SR) is the oldest railway zone in India, headquartered in Chennai. It has a rich legacy dating back to the 1850s, being the first region where railways were introduced in southern India.\n\nThe zone serves the southern states of Tamil Nadu, Kerala, Puducherry, and parts of Karnataka and Andhra Pradesh. SR plays a crucial role in pilgrimage tourism, urban mobility, and freight movement along the southern coastline.\n\nChennai Egmore, Madurai, Trivandrum, and Coimbatore are among its prominent cities, and the zone is noted for high-speed passenger corridors and scenic rail routes.",
    "history": "Southern Railway was created on 14 April 1951 by merging the Madras and Southern Mahratta Railway, the South Indian Railway, and the Mysore State Railway. It is thus the first zone formed post-independence.\n\nThe earliest rail lines in southern India, such as Royapuram–Arcot and Chennai–Trichy, were part of SR's origin story. The zone witnessed the first electrified meter gauge service in India and early diesel traction.\n\nSR has maintained a strong record in safety, punctuality, and heritage preservation, including the Nilgiri Mountain Railway (a UNESCO site).",
    "geography": "SR spans the southern peninsula, covering coastal belts, Western Ghats, river deltas, and hilly terrain. It includes regions with high rainfall and biodiversity like Kerala’s backwaters and Tamil Nadu’s temple towns.\n\nThe Southern Railway is a vital link to ports like Chennai, Cochin, and Tuticorin. Its geographical location enables critical access to fishing harbors, trade points, and remote tribal areas.\n\nThe network crosses rivers like the Cauvery and Periyar, and includes bridges like the iconic Pamban Bridge to Rameswaram.",
    "operations": "Southern Railway runs famous trains such as the Chennai–Bangalore Shatabdi, Kanyakumari Express, and the Tejas Express. It is known for punctual service and catering to pilgrimage routes like Rameswaram and Madurai.\n\nThe zone also operates suburban trains in Chennai and maintains EMU services that are vital to daily commuters. SR is also exploring green energy and automatic signaling systems.\n\nIt has introduced modern facilities such as Wi-Fi-enabled stations, escalators, solar-powered platforms, and heritage-themed station makeovers.",
    "divisions": ["Chennai", "Madurai", "Salem", "Palakkad", "Trivandrum"],
    "majorStations": ["Chennai Central", "Madurai", "Trivandrum Central", "Coimbatore", "Erode"],
    "gallery": ["/Images/Railways/Chennai.jpg", "/Images/Railways/PambanBridge.jpg"],
    "website": "https://sr.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/Southern_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/Southern_Railway_zone",
      "https://sr.indianrailways.gov.in"
    ]
  },
  {
    "name": "North Eastern Railway",
    "abbreviation": "NER",
    "image": "/Images/Railways/Gorakhpur.jpg",
    "region": "North-East",
    "established": "1952",
    "headquarters": "Gorakhpur, Uttar Pradesh",
    "about": "North Eastern Railway (NER) is an important railway zone in eastern Uttar Pradesh and western Bihar, with its headquarters in Gorakhpur, home to the world’s longest railway platform. It serves the eastern Indo-Gangetic plain and has strategic importance for both domestic and international transit.\n\nThe zone is known for operating trains that connect rural interiors to major cities, acting as a lifeline for millions in low-income and densely populated regions. It facilitates access to education, trade, and employment across northern India.\n\nNER is also responsible for border-area logistics near Nepal, playing a role in cross-border trade and movement.",
    "history": "NER was formed in 1952 through the amalgamation of the Oudh and Tirhut Railway, Assam Railway, and parts of the Bengal and North Western Railway. It inherited the operational responsibility of the Indo-Nepal border region.\n\nSince its formation, NER has expanded its network to serve eastern UP and north Bihar, areas that were previously underserved. The development of railway lines in the Terai region was a landmark in opening up fertile but isolated areas.\n\nIt has steadily progressed in electrification, safety enhancements, and infrastructure development, despite challenges of terrain and population density.",
    "geography": "NER spans across eastern Uttar Pradesh, north Bihar, and connects to the international border with Nepal. It covers floodplains, alluvial soils, and agricultural belts prone to monsoonal floods.\n\nThe region’s low elevation and seasonal rivers pose challenges during the rainy season. Despite this, NER has maintained strong track resilience and has been instrumental in flood relief logistics.\n\nGorakhpur, Basti, Gonda, and Sitapur form major points in its grid, along with new lines being laid to improve regional access and connectivity.",
    "operations": "NER operates important passenger services like Gorakhdham Express, Satyagrah Express, and Bagh Express, catering to long-distance travelers, pilgrims, and students. Trains from NER connect to Delhi, Mumbai, and Kolkata.\n\nIt also handles significant freight movement, particularly food grains, sugar, and coal. The zone supports loading at key industrial sidings and government warehouses.\n\nThe zone continues to modernize stations, introduce energy-efficient rakes, and digitize ticketing and inquiry systems. Safety measures and disaster management capabilities have also been enhanced.",
    "divisions": ["Izzatnagar", "Lucknow NER", "Varanasi"],
    "majorStations": ["Gorakhpur", "Gonda", "Deoria Sadar", "Basti", "Lucknow NER"],
    "gallery": ["/Images/Railways/Gorakhpur.jpg", "/Images/Railways/NorthEasternRailway.jpg"],
    "website": "https://ner.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/North_Eastern_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/North_Eastern_Railway_zone",
      "https://ner.indianrailways.gov.in"
    ]
  },
  {
    "name": "South Eastern Railway",
    "abbreviation": "SER",
    "image": "/Images/Railways/KolkataSER.jpg",
    "region": "East-Central",
    "established": "1955",
    "headquarters": "Garden Reach, Kolkata",
    "about": "South Eastern Railway (SER) is a vital railway zone in eastern India, historically referred to as the 'Blue Chip' zone due to its high earnings and operational efficiency. It plays a central role in transporting minerals and industrial goods from Odisha, Jharkhand, and Chhattisgarh.\n\nSER's legacy includes handling massive freight traffic from mineral-rich regions to ports and steel plants. It is also known for managing prestigious long-distance trains and regional commuter services.\n\nIt contributes significantly to the country's economic logistics, particularly in the steel, coal, and power sectors.",
    "history": "Formed in 1955 by carving out a portion of the Eastern Railway, SER absorbed lines formerly operated by Bengal Nagpur Railway. These lines were crucial in British-era resource extraction from central India.\n\nSER rapidly became a top performer among Indian Railway zones due to its freight revenue. The growth of steel plants in Rourkela, Bokaro, and Jamshedpur was supported by SER’s extensive rail network.\n\nIn later years, divisions like Bilaspur were reassigned to newly created zones like SECR, but SER has maintained its high standards in both freight and passenger service.",
    "geography": "SER covers parts of West Bengal, Odisha, Jharkhand, and a small region of Chhattisgarh. The terrain includes mineral belts, hilly terrain, river valleys, and forested zones.\n\nRail lines run through tribal areas, mining zones, and industrial hubs. Key cities include Kharagpur, Chakradharpur, and Ranchi.\n\nIts strategic location provides crucial links to Haldia Port and facilitates export of raw materials, especially iron ore and bauxite.",
    "operations": "SER operates premier trains like Howrah–Puri Shatabdi, Steel Express, and South Bihar Express. It also manages suburban services in Kharagpur and Howrah regions.\n\nIt handles a high percentage of bulk freight like coal, iron ore, and limestone. The zone supports dedicated industrial sidings and heavy freight corridors.\n\nSER is working on full electrification and modernization of yards. Safety audits, RFID-based tracking, and online crew management are part of its ongoing reforms.",
    "divisions": ["Kharagpur", "Adra", "Chakradharpur", "Ranchi"],
    "majorStations": ["Kharagpur", "Ranchi", "Chakradharpur", "Tatanagar", "Adra"],
    "gallery": ["/Images/Railways/KolkataSER.jpg", "/Images/Railways/SERtrain.jpg"],
    "website": "https://ser.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/South_Eastern_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/South_Eastern_Railway_zone",
      "https://ser.indianrailways.gov.in"
    ]
  },
  {
    "name": "Northeast Frontier Railway",
    "abbreviation": "NFR",
    "image": "/Images/Railways/Guwahati.jpg",
    "region": "North-East Frontier",
    "established": "1958",
    "headquarters": "Maligaon, Guwahati, Assam",
    "about": "Northeast Frontier Railway (NFR) is the most geographically sensitive and strategically crucial zone, operating across the northeastern states of India. It connects remote, hilly, and forested regions with the rest of the country.\n\nNFR acts as a development catalyst, promoting accessibility, tourism, defense, and socio-economic integration in the North-East. It handles tough terrain, landslides, and floods while extending rail services to remote and border regions.\n\nKnown for engineering marvels like the Bogibeel Bridge, NFR also operates heritage services in Assam and Arunachal Pradesh.",
    "history": "NFR was carved out in 1958 from the Eastern Railway and entrusted with the mission of expanding railways in India's northeast. The earlier Assam Railway was merged into this zone.\n\nIt inherited poorly connected meter gauge lines and converted them into broad gauge over the decades. Special focus was placed on improving defense logistics post the Sino-Indian War in 1962.\n\nNFR has been a leader in railway development projects under the Ministry’s Northeast expansion strategy.",
    "geography": "NFR spans Assam, Arunachal Pradesh, Nagaland, Tripura, Meghalaya, Manipur, and Mizoram. It covers river valleys (Brahmaputra), hilly terrains, forests, and earthquake-prone zones.\n\nThe climate is humid and monsoon-heavy, making maintenance and operations difficult. Nonetheless, NFR continues to expand connectivity through bridges, tunnels, and viaducts.\n\nCross-border trade points with Bangladesh are also being integrated into the network.",
    "operations": "NFR runs trains such as Dibrugarh Rajdhani, Saraighat Express, and Arunachal Express. It also operates DEMU and MEMU services in hilly and suburban areas.\n\nIt supports military movements and supply trains in border states. Construction of new lines like the Sivok–Rangpo line to Sikkim and electrification in remote regions is ongoing.\n\nThe zone is actively modernizing infrastructure and improving safety with GPS-based systems and weather alerts.",
    "divisions": ["Tinsukia", "Rangiya", "Alipurduar", "Lumding", "Katihar"],
    "majorStations": ["Guwahati", "Dibrugarh", "Silchar", "Dimapur", "New Jalpaiguri"],
    "gallery": ["/Images/Railways/Guwahati.jpg", "/Images/Railways/BogibeelBridge.jpg"],
    "website": "https://nfr.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/Northeast_Frontier_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/Northeast_Frontier_Railway_zone",
      "https://nfr.indianrailways.gov.in"
    ]
  },
  {
    "name": "East Central Railway",
    "abbreviation": "ECR",
    "image": "/Images/Railways/Patna.jpg",
    "region": "Central-East",
    "established": "2002",
    "headquarters": "Hajipur, Bihar",
    "about": "East Central Railway (ECR) is a relatively new zone that has become a key part of Indian Railways' logistics grid. It was created to improve rail operations in Bihar and Jharkhand, both highly populated and resource-rich states.\n\nThe zone handles dense passenger traffic as well as heavy freight from coalfields, cement plants, and power stations. Its focus is both developmental and strategic.\n\nECR plays a vital role in social mobility, migration, and agricultural transport in the Hindi heartland.",
    "history": "ECR was formed in 2002 by dividing Eastern Railway. With headquarters at Hajipur, it took over major divisions in Bihar and Jharkhand.\n\nThe zone quickly adapted to modern standards, initiating gauge conversions, electrification, and doubling of lines. It serves a critical role during floods, festivals, and elections in the region.\n\nECR has rapidly grown in freight operations, thanks to dedicated industrial sidings and new project funding.",
    "geography": "ECR covers Bihar, Jharkhand, and parts of Uttar Pradesh and Madhya Pradesh. It includes the Indo-Gangetic plains, coal belts, river deltas, and forest zones.\n\nThe Ganga, Son, and Kosi rivers intersect its network. The terrain includes flood-prone areas that require special track maintenance and bridges.\n\nCities like Patna, Dhanbad, and Gaya are key nodes in its operations.",
    "operations": "ECR operates major trains like Patna Rajdhani, Sampoorna Kranti, and Ganga-Damodar Express. The zone is known for managing large-scale festival rush operations.\n\nIt handles coal, cement, and fertilizer freight with high efficiency. Electrification, automatic signaling, and satellite monitoring are part of its ongoing projects.\n\nECR continues to focus on safety, punctuality, and passenger amenities through better infrastructure and digital tools.",
    "divisions": ["Danapur", "Dhanbad", "Mughalsarai", "Sonpur", "Samastipur"],
    "majorStations": ["Patna", "Gaya", "Dhanbad", "Mughalsarai", "Samastipur"],
    "gallery": ["/Images/Railways/Patna.jpg", "/Images/Railways/ECRfreight.jpg"],
    "website": "https://ecr.indianrailways.gov.in",
    "wikipedia": "https://en.wikipedia.org/wiki/East_Central_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/East_Central_Railway_zone",
      "https://ecr.indianrailways.gov.in"
    ]
  },
  {
    "name": "South Coast Railway",
    "abbreviation": "SCoR",
    "image": "/Images/Railways/Vijayawada.jpg",
    "region": "South",
    "established": "2019",
    "headquarters": "Vijayawada, Andhra Pradesh",
    "about": "South Coast Railway (SCoR) is the newest zone of Indian Railways, established to serve the southern coast of Andhra Pradesh. It aims to improve administrative efficiency and enhance connectivity in the region.\n\nWith headquarters in Vijayawada, SCoR manages critical passenger and freight routes along the eastern coastline. The zone is focused on port connectivity and regional development.\n\nSCoR enhances regional connectivity to Vishakhapatnam, Guntur, and Nellore, supporting both agricultural and industrial growth.",
    "history": "Formed in 2019 by bifurcating South Central Railway, SCoR was created to focus on administrative ease and faster project execution in coastal Andhra Pradesh.\n\nThe zone is in its development phase, taking over operations from existing divisions and launching new infrastructure projects.\n\nIt is also envisioned to reduce workload from South Central and enhance attention to local demands in the coastal corridor.",
    "geography": "SCoR covers the southern coast of Andhra Pradesh, including key cities like Vijayawada, Guntur, Tirupati, and Visakhapatnam. It includes both fertile deltas and dry inland belts.\n\nThe Krishna and Godavari rivers intersect the region, and port access to Krishnapatnam, Gangavaram, and Visakhapatnam enhances its logistics role.\n\nThe zone aims to become a gateway for agricultural exports and industrial imports in southern India.",
    "operations": "SCoR operates major passenger trains and handles heavy freight to and from ports. It includes lines to Tirupati (pilgrimage) and Visakhapatnam (industrial hub).\n\nAs the zone develops, projects include track doubling, terminal development, and new sidings for freight.\n\nPlans are underway for dedicated freight corridors and faster EMU/DEMU services between urban centers.",
    "divisions": ["Vijayawada", "Guntur", "Guntakal (partial)", "Visakhapatnam (proposed)"],
    "majorStations": ["Vijayawada", "Tirupati", "Nellore", "Guntur", "Rajahmundry"],
    "gallery": ["/Images/Railways/Vijayawada.jpg", "/Images/Railways/SouthCoast.jpg"],
    "website": "https://scr.indianrailways.gov.in/view_section.jsp?lang=0&id=0,1,291",
    "wikipedia": "https://en.wikipedia.org/wiki/South_Coast_Railway_zone",
    "references": [
      "https://en.wikipedia.org/wiki/South_Coast_Railway_zone",
      "https://scr.indianrailways.gov.in"
    ]
  },
  {
    name: "North Central Railway",
    abbreviation: "NCR",
    image: "/Images/Railways/NorthCentralRailway.jpg",
    region: "North-Central",
    established: "2003",
    headquarters: "Prayagraj (Allahabad), Uttar Pradesh",
    about: `North Central Railway (NCR) is one of the youngest zones of Indian Railways, created in 2003 as a part of the restructuring to enhance operational efficiency and management. It plays a crucial role in connecting North India to the rest of the country.

NCR is often referred to as the “Workhorse of Indian Railways” due to the heavy freight and passenger traffic it handles. The zone has a highly electrified and double-lined track network, ensuring high-speed connectivity across critical routes.`,
    history: `North Central Railway was formed by amalgamating parts of Central and Northern Railways. Its inception aimed to ease congestion and streamline traffic between key junctions such as Kanpur, Agra, and Jhansi.

The zone rapidly expanded with the introduction of modern technology and electrification. It was among the first zones to implement high-speed signaling systems and semi-high-speed train corridors.`,
    geography: `NCR spans parts of Uttar Pradesh, Madhya Pradesh, Rajasthan, and Haryana. Its central location provides vital connectivity between northern, central, and southern regions of India.

The zone covers important industrial and agricultural belts and plays a key role in supporting both economy and tourism, especially to historic destinations like Agra and Jhansi.`,
    operations: `NCR handles major routes like the Delhi–Howrah and Delhi–Mumbai corridors. The zone is home to important stations like Agra Cantt, Kanpur Central, Jhansi Junction, and Prayagraj Junction.

It supports both high-speed passenger services and heavy freight operations. Key trains like the Gatimaan Express and Shatabdi Express operate on its network.`,
    divisions: ["Allahabad", "Jhansi", "Agra"],
    majorStations: ["Prayagraj", "Agra Cantt", "Kanpur Central", "Jhansi"],
    gallery: ["/Images/Railways/NorthCentralRailway.jpg"],
    website: "https://ncr.indianrailways.gov.in",
    wikipedia: "https://en.wikipedia.org/wiki/North_Central_Railway_zone",
    references: [
      "https://en.wikipedia.org/wiki/North_Central_Railway_zone",
      "https://ncr.indianrailways.gov.in"
    ]
  },
  {
    name: "North Western Railway",
    abbreviation: "NWR",
    image: "/Images/Railways/NorthWesternRailway.jpg",
    region: "North-West",
    established: "2002",
    headquarters: "Jaipur, Rajasthan",
    about: `North Western Railway (NWR) is a strategic zone that serves the north-western states of India. It was carved out of the Northern and Western Railway zones in 2002 to improve regional connectivity and administrative control.

NWR operates across areas rich in cultural heritage, deserts, and border zones, making it both economically and strategically important. The zone is known for efficient operations and well-maintained infrastructure.`,
    history: `Established in 2002, NWR incorporated parts of the erstwhile Northern and Western Railway. It brought under its fold the Bikaner and Jodhpur divisions of the earlier system.

Post formation, the zone undertook major modernization, track doubling, and electrification projects, leading to a boost in both freight and passenger services.`,
    geography: `NWR covers the states of Rajasthan, Gujarat, Punjab, and Haryana. It operates in desert terrains, international border regions, and agriculturally productive plains.

The zone supports tourism to major destinations like Jaipur, Jodhpur, Udaipur, and Jaisalmer while also handling sensitive military and freight movements near the Indo-Pak border.`,
    operations: `NWR is known for trains like the Palace on Wheels and Desert Queen that support luxury tourism. It also operates important regional and national express trains.

Major stations under NWR include Jaipur Junction, Jodhpur Junction, Bikaner, and Ajmer. The zone is expanding with initiatives like route electrification and smart station upgrades.`,
    divisions: ["Jaipur", "Bikaner", "Jodhpur", "Ajmer"],
    majorStations: ["Jaipur", "Jodhpur", "Ajmer", "Bikaner"],
    gallery: ["/Images/Railways/NorthWesternRailway.jpg"],
    website: "https://nwr.indianrailways.gov.in",
    wikipedia: "https://en.wikipedia.org/wiki/North_Western_Railway_zone",
    references: [
      "https://en.wikipedia.org/wiki/North_Western_Railway_zone",
      "https://nwr.indianrailways.gov.in"
    ]
  },
  {
    name: "South Central Railway",
    abbreviation: "SCR",
    image: "/Images/Railways/SouthCentralRailway.jpg",
    region: "South-Central",
    established: "1966",
    headquarters: "Secunderabad, Telangana",
    about: `South Central Railway (SCR) is a vital zone connecting southern India with the rest of the country. Established in 1966, SCR has grown into a major transportation backbone for the states it covers.

The zone is known for its excellent record in punctuality, freight loading, and clean station management. It serves a diverse region with booming industries, IT hubs, and pilgrimage centers.`,
    history: `SCR was formed in 1966 by combining parts of the Southern Railway and the Nizam’s Guaranteed State Railway. The initial network included lines from Secunderabad, Vijayawada, and Guntakal divisions.

Over the years, it has undergone expansions and reorganizations to enhance regional accessibility and decongest rail traffic in southern India.`,
    geography: `The zone spans Telangana, Andhra Pradesh, Maharashtra, parts of Madhya Pradesh, and Tamil Nadu. It services coastal regions, interior plains, and hilly zones.

Its geographic diversity demands efficient rail operations across varied terrains. SCR is also central to India’s east-west and north-south railway corridors.`,
    operations: `South Central Railway operates premier trains like the Rajdhani, Duronto, and Vande Bharat Express between major metros. It also supports suburban services in Hyderabad.

Important stations include Secunderabad, Vijayawada, Tirupati, and Guntur. The zone is actively working on infrastructure upgrades, electrification, and passenger amenities.`,
    divisions: ["Secunderabad", "Vijayawada", "Guntakal", "Guntur", "Nanded", "Hyderabad"],
    majorStations: ["Secunderabad", "Vijayawada", "Tirupati", "Guntur", "Nanded"],
    gallery: ["/Images/Railways/SouthCentralRailway.jpg"],
    website: "https://scr.indianrailways.gov.in",
    wikipedia: "https://en.wikipedia.org/wiki/South_Central_Railway_zone",
    references: [
      "https://en.wikipedia.org/wiki/South_Central_Railway_zone",
      "https://scr.indianrailways.gov.in"
    ]
  },
  {
    name: "South Western Railway",
    abbreviation: "SWR",
    image: "/Images/Railways/SouthWesternRailway.jpg",
    region: "South-West",
    established: "2003",
    headquarters: "Hubballi, Karnataka",
    about: `South Western Railway (SWR) was established in 2003 to improve railway services in the southern peninsula, especially Karnataka. The zone plays a vital role in linking the western coast with the heartland of India.

It is noted for its efforts in improving infrastructure and suburban connectivity within Karnataka. SWR also plays an important part in moving agricultural and industrial goods.`,
    history: `SWR was carved out from the Southern and South Central Railway zones in 2003. It brought under its fold the Hubballi, Bengaluru, and Mysuru divisions.

Since its formation, the zone has focused on modernization, doubling of lines, and introducing new rail links to improve mobility in the southern states.`,
    geography: `SWR primarily operates in Karnataka, with parts of Goa, Andhra Pradesh, and Tamil Nadu. It includes regions of the Western Ghats, coastal plains, and interior Deccan Plateau.

The zone is crucial in supporting tourism, port connectivity (like Mangaluru), and inter-state travel between major cities like Bengaluru, Chennai, and Hyderabad.`,
    operations: `SWR operates major trains including Vande Bharat Express, Shatabdi Express, and passenger trains serving pilgrimage centers like Hampi and Shravanabelagola.

Key stations include Bengaluru City Junction, Hubballi, Mysuru, and Vasco-da-Gama. It is actively working on suburban train upgrades and regional connectivity projects.`,
    divisions: ["Bengaluru", "Hubballi", "Mysuru"],
    majorStations: ["Bengaluru", "Hubballi", "Mysuru", "Vasco-da-Gama"],
    gallery: ["/Images/Railways/SouthWesternRailway.jpg"],
    website: "https://swr.indianrailways.gov.in",
    wikipedia: "https://en.wikipedia.org/wiki/South_Western_Railway_zone",
    references: [
      "https://en.wikipedia.org/wiki/South_Western_Railway_zone",
      "https://swr.indianrailways.gov.in"
    ]
  },
  {
    name: "Metro Railway Kolkata",
    abbreviation: "MR",
    image: "/Images/Railways/MetroKolkata.jpg",
    region: "East",
    established: "2010",
    headquarters: "Kolkata, West Bengal",
    about: `Metro Railway Kolkata is the 17th zone of Indian Railways and India's first underground metro system. Originally started as a project under Indian Railways, it later became a standalone zone. It serves as the lifeline of Kolkata's urban transit.

The Kolkata Metro is known for its punctuality, safety, and efficiency in managing the massive daily influx of commuters. Over time, it has evolved from a single-line operation into a multi-corridor network catering to millions.

With a focus on green energy and sustainable infrastructure, Metro Railway Kolkata is continually upgrading its facilities and expanding its network across the city.`,
    history: `The first metro service in India was launched in Kolkata on October 24, 1984. It was a major milestone in urban transport history and was inspired by global metro systems.

Initially run as a project of Indian Railways, it was declared a full-fledged zone in December 2010. Since then, it has been continuously managed by Indian Railways and plans are in motion to bring additional lines into operation.`,
    geography: `The Metro covers the central urban sprawl of Kolkata and its outskirts. The route spans from Dakshineswar in the north to Kavi Subhash in the south, with multiple new corridors like East-West Metro Line under development.

As an urban system, it mainly serves the densely populated regions of Kolkata, facilitating faster movement in congested zones.`,
    operations: `Metro Railway Kolkata currently operates the North-South Line and the partially operational East-West Line. It is known for its high frequency of trains, especially during peak hours.

Trains operate on electric traction, contributing to reduced pollution in the city. The metro maintains advanced signaling systems, automated fare collection, and escalator-enabled stations.`,
    divisions: ["Kolkata Metro Division"],
    majorStations: ["Esplanade", "Kavi Subhash", "Dum Dum", "Salt Lake Sector V", "Dakshineswar"],
    gallery: [
      "/Images/Railways/MetroKolkata.jpg",
      "/Images/Railways/KolkataMetroInterior.jpg"
    ],
    website: "https://mtp.indianrailways.gov.in/",
    wikipedia: "https://en.wikipedia.org/wiki/Metro_Railway,_Kolkata",
    references: [
      "https://en.wikipedia.org/wiki/Metro_Railway,_Kolkata",
      "https://mtp.indianrailways.gov.in/"
    ]
  },
  {
    name: "West Central Railway",
    abbreviation: "WCR",
    image: "/Images/Railways/WestCentralRailway.jpg",
    region: "Central",
    established: "2003",
    headquarters: "Jabalpur, Madhya Pradesh",
    about: `West Central Railway (WCR) is one of the youngest zones of Indian Railways, formed to enhance rail management in central India. It carved out divisions from existing zones to create a more regionally focused administration.

WCR handles both passenger and freight services efficiently, connecting important industrial towns and pilgrimage centers. It plays a significant role in the mineral and agricultural transport from Madhya Pradesh and Rajasthan.

The zone is also known for its electrification drive and modernization of railway stations across its jurisdiction.`,
    history: `WCR was formed on April 1, 2003, by merging Jabalpur and Bhopal divisions of Central Railway with the Kota division of Western Railway. It was part of a major restructuring of Indian Railways.

Since its inception, it has achieved several milestones including 100% electrification of major routes and the introduction of fast, premium trains.`,
    geography: `The zone spans across parts of Madhya Pradesh and Rajasthan. It covers central Indian terrain, including plateaus, river valleys, and forested regions, making it a challenging yet vital zone.

It serves cities like Jabalpur, Bhopal, and Kota, which are significant from both tourism and industry perspectives.`,
    operations: `WCR operates high-speed trains like Shatabdi Express and has an extensive suburban and intercity rail system. It’s also vital for freight movement, especially of limestone, coal, cement, and agricultural produce.

Digital ticketing, station redevelopment projects, and station cleanliness are areas where WCR consistently performs well.`,
    divisions: ["Jabalpur", "Bhopal", "Kota"],
    majorStations: ["Jabalpur", "Bhopal Junction", "Kota Junction", "Itarsi", "Satna"],
    gallery: [
      "/Images/Railways/WestCentralRailway.jpg",
      "/Images/Railways/JabalpurStation.jpg"
    ],
    website: "https://wcr.indianrailways.gov.in/",
    wikipedia: "https://en.wikipedia.org/wiki/West_Central_Railway_zone",
    references: [
      "https://en.wikipedia.org/wiki/West_Central_Railway_zone",
      "https://wcr.indianrailways.gov.in/"
    ]
  },
  {
    name: "South East Central Railway",
    abbreviation: "SECR",
    image: "/Images/Railways/SouthEastCentralRailway.jpg",
    region: "Central-East",
    established: "2003",
    headquarters: "Bilaspur, Chhattisgarh",
    about: `South East Central Railway (SECR) is a crucial zone formed to streamline rail operations in Chhattisgarh and adjoining regions. It plays a major role in coal transportation from mineral-rich regions like Korba and Raigarh.

SECR is considered a freight-heavy zone and contributes significantly to Indian Railways' revenue. It also focuses on improving passenger amenities across its network.

The zone has been at the forefront of infrastructure development with multiple doubling and electrification projects completed.`,
    history: `SECR was formed in 2003 by combining parts of South Eastern Railway to create a more manageable and efficient administrative setup.

Since its formation, the zone has developed rapidly, with its Bilaspur division emerging as one of the highest revenue-earning divisions in the country.`,
    geography: `The zone covers Chhattisgarh, parts of Maharashtra, and Madhya Pradesh. It traverses through dense forests, hilly terrain, and major coal belts.

It acts as a bridge between central and southern India and also connects to eastern ports via mineral corridors.`,
    operations: `The majority of SECR’s operations revolve around coal and mineral freight. Passenger operations are also significant, with daily express and superfast trains connecting Bilaspur to cities like Mumbai, Nagpur, and Raipur.

The zone has invested in station beautification, bio-toilets, and energy-efficient technologies.`,
    divisions: ["Bilaspur", "Raipur", "Nagpur SEC"],
    majorStations: ["Bilaspur Junction", "Raipur Junction", "Durg", "Gondia", "Nagpur"],
    gallery: [
      "/Images/Railways/SouthEastCentralRailway.jpg",
      "/Images/Railways/BilaspurJunction.jpg"
    ],
    website: "https://secr.indianrailways.gov.in/",
    wikipedia: "https://en.wikipedia.org/wiki/South_East_Central_Railway_zone",
    references: [
      "https://en.wikipedia.org/wiki/South_East_Central_Railway_zone",
      "https://secr.indianrailways.gov.in/"
    ]
  },
  {
    name: "South Coast Railway",
    abbreviation: "SCoR",
    image: "/Images/Railways/SouthCoastRailway.jpg",
    region: "South-East",
    established: "2019",
    headquarters: "Visakhapatnam, Andhra Pradesh",
    about: `South Coast Railway (SCoR) is the newest zone of Indian Railways, established to cater to the growing rail demands of Andhra Pradesh and surrounding regions. It was formed by reorganizing parts of South Central Railway.

The zone is strategically located along the eastern coastline of India, enabling better port connectivity and boosting trade and tourism in the region.

SCoR aims to focus on regional development and improving rail infrastructure in underrepresented areas of coastal Andhra Pradesh.`,
    history: `Announced in February 2019, SCoR was carved out to bring administrative focus to coastal Andhra. It includes the Waltair division from East Coast Railway and the Guntur and Guntakal divisions from South Central Railway.

The new zone is envisioned to promote coastal industrialization, and works are underway to complete the transition of assets and responsibilities.`,
    geography: `The zone includes the eastern coast of Andhra Pradesh and parts of southern Odisha. It encompasses urban centers, port towns, and pilgrimage sites like Tirupati.

The region is diverse in landscape, ranging from flat coastal plains to hilly interiors, providing opportunities and challenges for rail expansion.`,
    operations: `SCoR is expected to streamline port connectivity with Visakhapatnam, Gangavaram, and Kakinada. Freight movement, especially agricultural goods and industrial products, will be key.

Passenger services will be enhanced with improved connectivity between Tirupati, Visakhapatnam, Vijayawada, and other major cities.`,
    divisions: ["Guntakal", "Guntur", "Waltair"],
    majorStations: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Nellore"],
    gallery: [
      "/Images/Railways/SouthCoastRailway.jpg",
      "/Images/Railways/VisakhapatnamJunction.jpg"
    ],
    website: "https://scr.indianrailways.gov.in/",
    wikipedia: "https://en.wikipedia.org/wiki/South_Coast_Railway_zone",
    references: [
      "https://en.wikipedia.org/wiki/South_Coast_Railway_zone",
      "https://scr.indianrailways.gov.in/"
    ]
  }
  // Add other zones similarly...
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