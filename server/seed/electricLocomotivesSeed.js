const mongoose = require('mongoose');
const LocomotiveSchema = require('../models/Locomotive').schema;

const ElectricLocomotive = mongoose.model('ElectricLocomotive', LocomotiveSchema, 'electricLocomotives');

const electricLocomotiveData = [
  {
    "type": "electric",
    "title": "WCP-1",
    "description": "India’s first true mainline electric locomotive, a symbol of early electrification.",
    "image": "/Images/Locomotive/wcp1.jpg",
    "longDescription": "The WCP-1 was India’s pioneering mainline electric locomotive introduced in the late 1920s to support the then-newly electrified Bombay–Pune route. Designed with cutting-edge Swiss engineering, it was built to handle the steep gradients of the Bhor Ghat and ensure faster travel in the Western Ghats. Its compact Bo-Bo design housed advanced traction motors for its time and laid the foundation for decades of electric rail traction in India.",
    "history": "Commissioned in 1928, WCP-1 was built by the Swiss Locomotive and Machine Works (SLM) in collaboration with Brown-Boveri. It was introduced when Indian Railways began electrifying the difficult terrain of the Bombay–Pune route using 1500V DC. These locomotives were part of the first phase of mainline electrification, marking India’s entry into modern electric rail transport. A total of 22 WCP-1 units were delivered and they formed the core of passenger traction for several decades.",
    "service": "Primarily used on the Bombay–Pune route, especially through the Bhor Ghat section. These locomotives hauled iconic express trains and were well-known for their climbing power and reliability on steep inclines. For many years, WCP-1 was the face of electrified railways in Western India until newer classes took over.",
    "preservation": "At least one WCP-1 unit has been preserved at the National Rail Museum in New Delhi, representing the beginning of electric traction in Indian Railways. It remains a prized exhibit for railway historians and enthusiasts.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "Swiss Locomotive and Machine Works (SLM)",
      "Year Introduced": 1928,
      "Power Output": "2,160 hp",
      "Max Speed": "85 km/h"
    },
    "gallery": ["/Images/Locomotive/wcp1.jpg"],
    "classes": [
      { "name": "WCP-1", "description": "Early Swiss-built passenger electric locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WCM-1",
    "description": "India’s first post-independence mixed traffic DC electric locomotive.",
    "image": "/Images/Locomotive/wcm1.jpg",
    "longDescription": "WCM-1 marked the beginning of India’s indigenous electric locomotive era. Built for 1500V DC traction, it was capable of handling both passenger and freight services. These locomotives had a rugged design and were tailored for the Central Railway's mountainous and suburban terrain.",
    "history": "Manufactured in the UK by Vulcan Foundry and English Electric, WCM-1 locomotives were introduced in 1954 to modernize electric traction on Central Railway. They were the first class of locomotives to be introduced after India’s independence and symbolized technological progress in rail infrastructure. A total of 7 units were built, which served as the testbed for future DC traction.",
    "service": "WCM-1s served on Mumbai–Pune and Mumbai–Igatpuri sections and were frequently seen pulling both passenger and freight rakes. Their adaptability made them ideal for both long-haul express trains and slow-moving goods trains, contributing significantly to Central Railway operations during the 1950s and 60s.",
    "preservation": "One preserved WCM-1 unit is maintained at the Kalyan Electric Loco Shed, showcasing the earliest generation of Indian electric locomotive engineering.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Vulcan Foundry / English Electric",
      "Year Introduced": 1954,
      "Power Output": "3,700 hp",
      "Max Speed": "120 km/h"
    },
    "gallery": ["/Images/Locomotive/wcm1.jpg"],
    "classes": [
      { "name": "WCM-1", "description": "Early DC electric locomotive for mixed traffic" }
    ]
  },
  {
    "type": "electric",
    "title": "WCM-2",
    "description": "Refined DC locomotive with improved performance for Central Railway.",
    "image": "/Images/Locomotive/wcm2.jpg",
    "longDescription": "The WCM-2 was introduced as an improved successor to WCM-1 with better control gear and operational reliability. It maintained the same robust design for handling mixed traffic and was optimized for the steep ghats and heavy load operations common in the Western region.",
    "history": "Built by English Electric in 1956, the WCM-2 class included 4 units. These engines incorporated lessons learned from WCM-1 and offered enhanced electrical systems and better adhesion. They were introduced to serve increasingly demanding routes as Indian Railways expanded its electrified network.",
    "service": "The WCM-2 class saw service mainly in the Mumbai-Pune and Mumbai-Igatpuri sectors, hauling both express trains and goods rakes. Known for their low maintenance and dependable operation, these engines remained in service till the early 1990s.",
    "preservation": "Due to limited production, WCM-2 is rare. One unit is believed to be preserved by heritage groups, though most were scrapped by the late 90s.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "English Electric",
      "Year Introduced": 1956,
      "Power Output": "3,700 hp",
      "Max Speed": "120 km/h"
    },
    "gallery": ["/Images/Locomotive/wcm2.jpg"],
    "classes": [
      { "name": "WCM-2", "description": "Second generation DC electric loco for mixed use" }
    ]
  },
  {
    "type": "electric",
    "title": "WCM-3",
    "description": "Rare and powerful DC electric locomotive of the late 1950s.",
    "image": "/Images/Locomotive/wcm3.jpg",
    "longDescription": "WCM-3 was a powerful addition to the growing fleet of DC electric locomotives. Featuring advanced equipment and enhanced traction capabilities, WCM-3 offered improved acceleration and gradient-handling, especially on ghat sections.",
    "history": "Built by English Electric in 1958, only 3 WCM-3 locomotives were produced, making them among the rarest in Indian Railways’ electric loco history. These units were meant to evaluate newer technologies for traction and control systems under Indian operating conditions.",
    "service": "WCM-3s were used for express trains and freight service on the demanding Mumbai–Igatpuri and Pune routes. Their excellent tractive effort made them ideal for use in ghat sections with steep gradients and sharp curves.",
    "preservation": "Due to the extremely limited production, no WCM-3 is known to be officially preserved. All were eventually retired and scrapped.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "English Electric",
      "Year Introduced": 1958,
      "Power Output": "3,800 hp",
      "Max Speed": "120 km/h"
    },
    "gallery": ["/Images/Locomotive/wcm3.jpg"],
    "classes": [
      { "name": "WCM-3", "description": "Third-gen DC electric loco, limited production" }
    ]
  },
  {
    "type": "electric",
    "title": "WCM-4",
    "description": "Japanese-built DC electric locomotives with high reliability.",
    "image": "/Images/Locomotive/wcm4.jpg",
    "longDescription": "WCM-4 was introduced as a high-performance class of DC electric locomotives capable of handling both passenger and freight duties. Built by Hitachi in Japan, these locomotives were appreciated for their robust construction, smooth performance, and low maintenance needs.",
    "history": "Delivered in 1961 by Hitachi, 7 WCM-4 units were acquired to boost DC electric operations of Indian Railways. These locomotives had advanced electrical systems and high traction capacity, contributing to more efficient railway services.",
    "service": "WCM-4s served on the Mumbai–Pune and Mumbai–Igatpuri routes, hauling mail, express, and freight trains. They were frequently assigned to fast intercity trains, making them well-known among rail fans.",
    "preservation": "One WCM-4 is preserved and can occasionally be seen at railway exhibitions or loco sheds.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Hitachi, Japan",
      "Year Introduced": 1961,
      "Power Output": "4,000 hp",
      "Max Speed": "120 km/h"
    },
    "gallery": ["/Images/Locomotive/wcm4.jpg"],
    "classes": [
      { "name": "WCM-4", "description": "High-quality DC electric loco from Japan" }
    ]
  },
  {
    "type": "electric",
    "title": "WCM-5",
    "description": "Indigenously built workhorse of Indian DC electric fleet.",
    "image": "/Images/Locomotive/wcm5.jpg",
    "longDescription": "The WCM-5 class was the first DC electric locomotive fully built in India by Chittaranjan Locomotive Works (CLW). These locomotives were designed for reliability and strength in mixed traffic operations, marking a key milestone in India's self-reliance in railway engineering.",
    "history": "Introduced in 1963, WCM-5 represented India’s push for indigenous electric locomotive development. 21 units were built by CLW to serve on the demanding DC sections of Central Railway. The design was based on previous successful imports but modified for local production and conditions.",
    "service": "WCM-5 locomotives worked across Mumbai’s DC electrified network, regularly hauling both heavy freight trains and express services. Their all-around capability made them highly valuable throughout the 60s, 70s, and 80s.",
    "preservation": "At least one WCM-5 is preserved and housed at the Kalyan shed or displayed on special occasions.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1963,
      "Power Output": "4,000 hp",
      "Max Speed": "120 km/h"
    },
    "gallery": ["/Images/Locomotive/wcm5.jpg"],
    "classes": [
      { "name": "WCM-5", "description": "First fully Indian-built DC electric loco" }
    ]
  },
  {
    "type": "electric",
    "title": "WCM-6",
    "description": "Powerful DC electric locomotive designed for gradient-intensive routes.",
    "image": "/Images/Locomotive/wcm6.jpg",
    "longDescription": "The WCM-6 was the last of the WCM class and was specially designed to handle steep gradients like the Bhor Ghat. It had improved traction motors and better performance under load. Only a few were built, making it a rare and powerful class in Indian Railways' history.",
    "history": "Manufactured by CLW in 1995, only 2 WCM-6 units were built, intended for trial on tough gradient sections. These locomotives had advanced braking systems, reinforced chassis, and higher power output to deal with the difficult terrain on the Mumbai–Pune route.",
    "service": "WCM-6 operated primarily on the Mumbai–Pune route and hauled freight and mail trains. Their service life was short due to the phasing out of 1500V DC traction in favor of AC systems.",
    "preservation": "Both units are believed to be scrapped or stored; no confirmed preservation as of now.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1995,
      "Power Output": "4,600 hp",
      "Max Speed": "105 km/h"
    },
    "gallery": ["/Images/Locomotive/wcm6.jpg"],
    "classes": [
      { "name": "WCM-6", "description": "Heavy DC electric locomotive for ghat service" }
    ]
  },
  {
    "type": "electric",
    "title": "WCG-1",
    "description": "India’s first electric freight locomotive for steep ghat operations.",
    "image": "/Images/Locomotive/wcg1.jpg",
    "longDescription": "The WCG-1 was a class of powerful DC electric locomotives introduced in the 1920s specifically for freight service on the steep Bhor Ghat between Mumbai and Pune. It was engineered to offer strong tractive effort needed for hauling heavy goods trains over hilly terrain. Its rugged body, articulated design, and high-adhesion capability made it an iconic part of India’s early electrification era.",
    "history": "Built by Swiss Locomotive and Machine Works (SLM) in 1928, the WCG-1 was designed to complement the passenger WCP-1 class on the 1500 V DC Mumbai–Pune route. Nicknamed the 'Crocodile' due to its long, jointed nose, it featured a Co+Co wheel arrangement and was equipped with large traction motors and mechanical resistance brakes. Over 40 units were introduced and they played a vital role in handling heavy mineral and freight traffic across the ghats.",
    "service": "WCG-1s were deployed on the Central Railway, mainly on the Mumbai–Pune and Mumbai–Igatpuri sections. These locomotives were synonymous with freight movement across the Western Ghats, often working in pairs or triples. Their loud whine and massive presence made them instantly recognizable to railway enthusiasts.",
    "preservation": "One WCG-1 has been preserved at the National Rail Museum, New Delhi, and is celebrated as India’s earliest freight electric loco. It remains a reminder of India’s early engineering marvels in rail traction.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co+Co",
      "Builder": "Swiss Locomotive and Machine Works (SLM)",
      "Year Introduced": 1928,
      "Power Output": "3,000 hp",
      "Max Speed": "75 km/h"
    },
    "gallery": ["/Images/Locomotive/wcg1.jpg"],
    "classes": [
      { "name": "WCG-1", "description": "Early DC electric freight locomotive, known as 'Crocodile'" }
    ]
  },
  {
    "type": "electric",
    "title": "WCG-2",
    "description": "The backbone of DC freight movement in India for over 40 years.",
    "image": "/Images/Locomotive/wcg2.jpg",
    "longDescription": "The WCG-2 was a class of powerful DC electric locomotives introduced in the 1970s to replace the aging WCG-1s. Designed for superior tractive effort, regenerative braking, and higher speeds, the WCG-2 served as the workhorse of freight haulage in the Central Railway’s DC zones. Its distinctive boxy look and performance made it iconic among rail fans.",
    "history": "Built by Chittaranjan Locomotive Works (CLW) between 1970 and 1972, the WCG-2 was based on modern DC traction technology. A total of 57 units were built. It was intended to handle the ever-growing freight demand in the Western Ghats and operated exclusively on the 1500V DC electrified sections of Central Railway.",
    "service": "WCG-2 locomotives served heavily on the Mumbai–Pune and Mumbai–Igatpuri sections. They were capable of handling both heavy goods and mail trains, often working in multiple units. For decades, they defined freight operations in hilly terrain and were lauded for their regenerative braking in steep descents.",
    "preservation": "One unit, WCG-2 #20158 'Lokmanya', is preserved at the Kalyan Electric Loco Shed. It occasionally appears during heritage events.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1970,
      "Power Output": "4,600 hp",
      "Max Speed": "100 km/h"
    },
    "gallery": ["/Images/Locomotive/wcg2.jpg"],
    "classes": [
      { "name": "WCG-2", "description": "DC freight locomotive with regenerative braking" }
    ]
  },
  {
    "type": "electric",
    "title": "WAM-1",
    "description": "India’s first AC electric locomotive for mixed traffic operations.",
    "image": "/Images/Locomotive/wam1.jpg",
    "longDescription": "The WAM-1 marked India’s shift to 25 kV AC electrification in the 1950s. These locomotives were built to serve both passenger and freight services and introduced India to AC traction systems. Their introduction laid the foundation for standardization of electric traction across Indian Railways.",
    "history": "Manufactured in 1959 by a European consortium including Maschinenfabrik Esslingen (Germany) and Hitachi (Japan), WAM-1 was the first locomotive class in India to operate under 25 kV AC overhead lines. It was introduced when Indian Railways started electrifying sections in Eastern India. A total of 100 units were imported.",
    "service": "Initially deployed on the Howrah–Burdwan and Asansol routes, WAM-1s were used for passenger trains like Howrah Mail and light freight duties. Their mixed-traffic capability allowed flexibility in operations, especially during early electrification stages.",
    "preservation": "One unit is preserved at the National Rail Museum in New Delhi. Others were phased out gradually in the 1990s.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "Hitachi / European Consortium",
      "Year Introduced": 1959,
      "Power Output": "2,970 hp",
      "Max Speed": "112 km/h"
    },
    "gallery": ["/Images/Locomotive/wam1.jpg"],
    "classes": [
      { "name": "WAM-1", "description": "First AC electric locomotive in Indian Railways" }
    ]
  },
  {
    "type": "electric",
    "title": "WAM-2",
    "description": "Successor to WAM-1 with better performance and reliability.",
    "image": "/Images/Locomotive/wam2.jpg",
    "longDescription": "The WAM-2 class was introduced in the early 1960s to improve upon the capabilities of the WAM-1. Built by European firms, these locomotives were robust, fast, and suitable for the growing AC electrification network in India. Their better acceleration and reliability made them preferred over their predecessors.",
    "history": "Built by Mitsubishi, Hitachi, and other European manufacturers in 1960–1962, around 100 WAM-2 locomotives were inducted into service. These featured stronger traction motors and improved bogies for smoother rides.",
    "service": "WAM-2 units served prominently in Eastern Railway and South Eastern Railway zones. They were often seen hauling long-distance express trains like the Kalka Mail and Toofan Express. Their operation later spread to other zones as well.",
    "preservation": "Most WAM-2s were scrapped by the early 2000s. A few units may remain in sheds in poor condition, but no confirmed preserved example exists in a museum.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "Mitsubishi, Hitachi (Japan)",
      "Year Introduced": 1960,
      "Power Output": "3,100 hp",
      "Max Speed": "112 km/h"
    },
    "gallery": ["/Images/Locomotive/wam2.jpg"],
    "classes": [
      { "name": "WAM-2", "description": "Improved AC electric locomotive for express trains" }
    ]
  },
  {
    "type": "electric",
    "title": "WAM-3",
    "description": "Refined and reliable electric locomotive for long-distance operations.",
    "image": "/Images/Locomotive/wam3.jpg",
    "longDescription": "The WAM-3 class brought further upgrades to India's AC electric fleet, incorporating better traction control and braking systems. Designed for express train services, WAM-3s became a common sight across several zones and contributed to reliable operations for over three decades.",
    "history": "Introduced between 1964 and 1966, WAM-3s were manufactured by Hitachi and Mitsubishi. They shared several mechanical and electrical similarities with WAM-2 but incorporated modernized cab controls and safety features.",
    "service": "These locos were predominantly used in Eastern, South Central, and Western Railways. WAM-3s hauled Rajdhani and other prestigious trains in the 70s and 80s before being reassigned to secondary duties.",
    "preservation": "At least one WAM-3 was retained by Chittaranjan Loco Shed for display purposes. Most others were decommissioned by the early 2010s.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "Hitachi / Mitsubishi",
      "Year Introduced": 1964,
      "Power Output": "3,200 hp",
      "Max Speed": "120 km/h"
    },
    "gallery": ["/Images/Locomotive/wam3.jpg"],
    "classes": [
      { "name": "WAM-3", "description": "Third-generation AC mixed-traffic locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WAM-4",
    "description": "India’s most successful and longest-serving AC electric locomotive.",
    "image": "/Images/Locomotive/wam4.jpg",
    "longDescription": "The WAM-4 is the most widely built and longest-serving class of mixed-traffic electric locomotives in Indian Railways. Introduced in the 1970s, it was designed by Chittaranjan Locomotive Works (CLW) and became the standard electric locomotive for over three decades. Known for its reliability, versatility, and ease of maintenance, the WAM-4 could be seen all across the country hauling express, mail, and freight trains.",
    "history": "Developed indigenously by CLW in 1971 based on the proven ALCO and Japanese designs, the WAM-4 incorporated Indian conditions in its build, making it a robust, adaptable loco. Over 500 units were built over two decades. It laid the foundation for later WAG and WAP series with its modular design and high voltage AC compatibility.",
    "service": "WAM-4 served almost every electrified route in India. From pulling Rajdhani Expresses to bulk freight across corridors, WAM-4 was the go-to locomotive until more powerful WAP/WAG units arrived. It was often seen double-heading trains in the 1980s and remained in service well into the 2010s.",
    "preservation": "Several WAM-4s are preserved at sheds across India including Jhansi, Vijayawada, and Itarsi. They are celebrated as the true workhorses of Indian electric traction history.",
    "status": "preserved",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1971,
      "Power Output": "3,850 hp",
      "Max Speed": "120 km/h"
    },
    "gallery": ["/Images/Locomotive/wam4.jpg"],
    "classes": [
      { "name": "WAM-4", "description": "Most successful mixed-traffic electric loco in Indian history" }
    ]
  },
  {
    "type": "electric",
    "title": "WAP-1",
    "description": "India’s first dedicated AC electric passenger locomotive introduced in 1980.",
    "image": "/Images/Locomotive/wap1.jpg",
    "longDescription": "The WAP-1 is India’s first indigenously developed electric locomotive for high-speed passenger services under AC electrification. Designed and built by Chittaranjan Locomotive Works (CLW), it marked the beginning of modern electric traction for express trains in India. Known for its distinctive sharp looks and efficient acceleration, the WAP-1 was a major step forward in Indian Railways’ shift from diesel to electric power.",
    "history": "Introduced in 1980, the WAP-1 was developed in response to the need for faster and more powerful locomotives for India's growing passenger train demands. It was based loosely on the WAG-5 design but optimized for passenger usage. The success of WAP-1 led to the development of more advanced WAP classes.",
    "service": "Initially used to haul premier trains like the Shatabdi and Rajdhani Express, the WAP-1 served major trunk routes across India. Over time, many units were reassigned to haul mail and express services as newer models took over.",
    "preservation": "A few WAP-1 units remain in service in secondary roles or have been preserved in museums, such as the National Rail Museum in Delhi.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1980,
      "Power Output": "3,950 hp",
      "Max Speed": "130 km/h"
    },
    "gallery": ["/Images/Locomotive/wap1.jpg"],
    "classes": [
      { "name": "WAP-1", "description": "India’s first high-speed AC passenger electric locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WAP-3",
    "description": "A short-lived experimental locomotive based on WAP-1 with minor improvements.",
    "image": "/Images/Locomotive/wap3.jpg",
    "longDescription": "The WAP-3 was an experimental class created as a bridge between WAP-1 and WAP-4. Only a small number of units were built to test out performance enhancements over the WAP-1 platform, including slight upgrades in gearing and traction motors.",
    "history": "Developed in the late 1980s by CLW, the WAP-3 was a testbed for features that would later evolve into the WAP-4 class. Due to limited advantages over the WAP-1 and the subsequent success of the WAP-4, the WAP-3 never entered mass production.",
    "service": "Used for hauling express and mail trains primarily in Eastern India. Due to small fleet size, their role was quickly overtaken by more powerful locomotives.",
    "preservation": "No known units are preserved. Most were retired or scrapped by the 2000s.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1987,
      "Power Output": "4,000 hp",
      "Max Speed": "130 km/h"
    },
    "gallery": ["/Images/Locomotive/wap3.jpg"],
    "classes": [
      { "name": "WAP-3", "description": "Experimental version of WAP-1 with performance tweaks" }
    ]
  },
  {
    "type": "electric",
    "title": "WAP-4",
    "description": "One of the most widely used and successful Indian passenger locomotives.",
    "image": "/Images/Locomotive/wap4.jpg",
    "longDescription": "The WAP-4 is a powerful passenger electric locomotive developed by CLW to replace aging WAP-1 and WAP-3 locos. Designed with a more robust frame and better bogies, it provided better ride quality and could haul longer trains at higher speeds. Its legacy includes decades of faithful service hauling almost every major express train in India before WAP-7 took over.",
    "history": "Introduced in 1994, the WAP-4 was developed after evaluating the shortcomings of previous WAP classes. It featured high-adhesion bogies and silicon rectifiers for better performance and reliability. It became the workhorse of Indian Railways for almost two decades.",
    "service": "Served across all zones, hauling major trains like the Kerala Express, Tamil Nadu Express, and more. Even today, some WAP-4s remain in service, especially in southern and eastern India.",
    "preservation": "Several units are still operational, though being slowly phased out. Some may be preserved as part of historical fleets in future.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1994,
      "Power Output": "5,000 hp",
      "Max Speed": "140 km/h"
    },
    "gallery": ["/Images/Locomotive/wap4.jpg"],
    "classes": [
      { "name": "WAP-4", "description": "Highly successful passenger electric locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WAP-5",
    "description": "A high-speed passenger locomotive used in India’s fastest trains.",
    "image": "/Images/Locomotive/wap5.jpg",
    "longDescription": "The WAP-5 is a modern high-speed electric locomotive derived from the Swiss Lok 2000 platform. It features a streamlined body, 3-phase AC motors, regenerative braking, and microprocessor-based controls. It is the preferred choice for high-speed premium trains like Gatimaan Express and Vande Bharat Express.",
    "history": "Introduced in 1995 with technology transfer from ABB (Switzerland), WAP-5 was a technological leap for Indian Railways. It enabled high-speed passenger operations with safety systems like Vigilance Control Device and Slip/Slide control.",
    "service": "Used primarily on high-speed corridors for Shatabdi, Gatimaan, and semi-high-speed trains. It can achieve speeds up to 160 km/h and is still a core part of India’s premium rail fleet.",
    "preservation": "Most WAP-5 units are still in active service, with newer versions continuously being upgraded with Head-On Generation (HOG) technology.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Bo-Bo",
      "Builder": "CLW with ABB technology",
      "Year Introduced": 1995,
      "Power Output": "5,400 hp",
      "Max Speed": "160 km/h"
    },
    "gallery": ["/Images/Locomotive/wap5.jpg", "/Images/Train/gatimaan.jpg"],
    "classes": [
      { "name": "WAP-5", "description": "Modern high-speed passenger locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WAP-6",
    "description": "An experimental class that was never mass-produced.",
    "image": "/Images/Locomotive/wap6.jpg",
    "longDescription": "The WAP-6 was an experimental electric locomotive built as a potential upgrade over WAP-4, focusing on better speed and acceleration. It served as a test platform for design improvements but did not offer significant performance gains, and the project was shelved in favor of the more advanced WAP-7.",
    "history": "Developed around the late 1990s, the WAP-6 shared many components with WAP-4 but had differences in gear ratios and traction control systems. However, due to negligible improvements, Indian Railways decided not to pursue its production.",
    "service": "Only a handful of prototypes were built. These were trialed briefly and then either scrapped or reassigned for internal use.",
    "preservation": "No units were preserved. WAP-6 exists as a historical footnote in the development lineage of Indian electric locos.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co-Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1998,
      "Power Output": "5,000 hp",
      "Max Speed": "140 km/h"
    },
    "gallery": ["/Images/Locomotive/wap6.jpg"],
    "classes": [
      { "name": "WAP-6", "description": "Cancelled high-speed passenger locomotive project" }
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
  },
  {
    "type": "electric",
    "title": "WAG-1",
    "description": "India’s first 25 kV AC goods locomotive, brought from Europe in the 1960s.",
    "image": "/Images/Locomotive/wag1.jpg",
    "longDescription": "The WAG‑1 was India’s pioneering 25 kV AC freight locomotive, introduced between 1963 and 1966. With a B‑B monomotor bogie design, Siemens‑ACEC/Alstom traction motors, and regenerative braking, it established the foundation of electric goods haulage in independent India.",
    "history": "Imported by the “European Group” (Krauss‑Maffei, Krupp, SFAC, La Brugeoise & Nivelle) and assembled at CLW, 112 units entered service from 1964. They symbolized India’s shift to high‑voltage traction.",
    "service": "Worked across the entire Indian Railways network, hauling freight—and occasionally passenger—trains at up to 112 km/h for nearly 40 years.",
    "preservation": "One unit (#20710 ‘Bidhan’) is preserved at the National Rail Museum, Delhi; all others were scrapped as of 2002.",
    "status": "retired",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "B‑B",
      "Builder": "European consortium / CLW",
      "Year Introduced": "1963–66",
      "Power Output": "2,930 hp",
      "Max Speed": "112 km/h"
    },
    "gallery": ["/Images/Locomotive/wag1.jpg"],
    "classes": [
      { "name": "WAG‑1", "description": "First- generation AC freight locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-2",
    "description": "Hitachi-built B‑B AC freight loco, successor to WAG‑1.",
    "image": "/Images/Locomotive/wag2.jpg",
    "longDescription": "WAG‑2 was built by Hitachi in the mid‑1960s. Featuring silicon rectifiers and robust traction motors, it offered improved performance and reliability over WAG‑1.",
    "history": "Approximately 45 units built in 1964–65 to supplement European-built locos, and based initially at Asansol.",
    "service": "Operated on Eastern and Central Railway freight services, also pulled passenger rakes occasionally. Decommissioned by the 1990s.",
    "preservation": "None officially preserved; all units scrapped.",
    "status": "retired",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "B‑B",
      "Builder": "Hitachi",
      "Year Introduced": "1964–65",
      "Power Output": "3,400 hp",
      "Max Speed": "80 km/h"
    },
    "gallery": ["/Images/Locomotive/wag2.jpg"],
    "classes": [
      { "name": "WAG‑2", "description": "Second-generation AC freight locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-3",
    "description": "Indigenous variation of WAG‑1 with CLW-built traction motors.",
    "image": "/Images/Locomotive/wag3.jpg",
    "longDescription": "WAG‑3 (1967–69) featured traction motors manufactured at CLW, making it India’s first truly domestically produced AC freight loco variant.",
    "history": "Around 186 units built between 1967 and 1969, marking a shift from imports toward Indian manufacture :contentReference[oaicite:3]{index=3}.",
    "service": "Served primarily in Central and Northern zones for heavy goods transport. Withdrawn by the late 1990s.",
    "preservation": "None preserved; all scrapped or decommissioned.",
    "status": "retired",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "B‑B",
      "Builder": "CLW",
      "Year Introduced": "1967–69",
      "Power Output": "≈3,400 hp",
      "Max Speed": "80 km/h"
    },
    "gallery": ["/Images/Locomotive/wag3.jpg"],
    "classes": [
      { "name": "WAG‑3", "description": "First indigenously-built AC freight locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-4",
    "description": "Hitachi-built AC freight loco with refined systems.",
    "image": "/Images/Locomotive/wag4.jpg",
    "longDescription": "Introduced alongside WAG‑3, WAG‑4 units delivered by Hitachi offered improved traction control, braking, and reliability.",
    "history": "Imported in small numbers in late 1960s as complement to earlier classes :contentReference[oaicite:4]{index=4}.",
    "service": "Assigned to freight duties across Eastern and Central zones. Withdrawn by the 1990s.",
    "preservation": "No confirmed preservation.",
    "status": "retired",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "B‑B",
      "Builder": "Hitachi",
      "Year Introduced": "late 1960s",
      "Power Output": "≈3,400 hp",
      "Max Speed": "80 km/h"
    },
    "gallery": ["/Images/Locomotive/wag4.jpg"],
    "classes": [
      { "name": "WAG‑4", "description": "Enhanced AC freight locomotive from Hitachi" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-5",
    "description": "India’s most numerous and versatile AC freight locomotive.",
    "image": "/Images/Locomotive/wag5.jpg",
    "longDescription": "The WAG‑5 series, introduced in the late 1970s, became the backbone of IR AC freight haulage. Available in multiple subtypes (5A, 5H, etc.), they featured Co‑Co bogies, silicon rectifiers, and produced reliable performance for decades.",
    "history": "Built extensively by CLW and BHEL, WAG‑5 filled the expanding AC freight network from 1978 onward :contentReference[oaicite:5]{index=5}.",
    "service": "Operated across all electrified corridors pulling coal, iron ore, and container rakes; many remain in secondary service.",
    "preservation": "Several units retained at heritage yards; most gradually retired for newer models.",
    "status": "active",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "CLW / BHEL",
      "Year Introduced": "1978–",
      "Power Output": "≈4,000 hp",
      "Max Speed": "100 km/h"
    },
    "gallery": ["/Images/Locomotive/wag5.jpg"],
    "classes": [
      { "name": "WAG‑5", "description": "Reliable workhorse of Indian freight rail" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-6",
    "description": "ABB/Hitachi-built prototype – early Co‑Co AC loco family.",
    "image": "/Images/Locomotive/wag6.jpg",
    "longDescription": "In the late 1980s, three WAG‑6 variants (6A, 6B, 6C) were tested—exploring 3-phase AC traction. Though promising, they remained prototypes with limited deployment.",
    "history": "Developed via ABB and Hitachi collaborations in 1988–1990; variants differed by traction and control systems.",
    "service": "Trialled in Eastern and South Eastern zones; none entered full fleets.",
    "preservation": "All prototypes eventually retired; no units preserved.",
    "status": "retired",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "ABB / Hitachi",
      "Year Introduced": "1988–90",
      "Power Output": "≈5,000 hp",
      "Max Speed": "100 km/h"
    },
    "gallery": ["/Images/Locomotive/wag6.jpg"],
    "classes": [
      { "name": "WAG‑6", "description": "Experimental 3‑phase AC freight locomotive series" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-7",
    "description": "Robust and reliable freight loco based on WAP‑4 platform.",
    "image": "/Images/Locomotive/wag7.jpg",
    "longDescription": "The WAG‑7, introduced in 1994, became a workhorse version of the WAP‑4, optimized for freight with heavy-duty traction and braking systems.",
    "history": "Developed by CLW to meet demands for reliable high-capacity freight haulage, this Co‑Co locomotive became standard for IR :contentReference[oaicite:7]{index=7}.",
    "service": "Still in wide service, hauling long coal and container rakes across national freight corridors.",
    "preservation": "Numerous units remain active; some early units may be used for heritage demonstration.",
    "status": "active",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "CLW",
      "Year Introduced": "1994",
      "Power Output": "5,000 hp",
      "Max Speed": "100 km/h"
    },
    "gallery": ["/Images/Locomotive/wag7.jpg"],
    "classes": [
      { "name": "WAG‑7", "description": "Versatile freight locomotive standardizing IR haulage" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-9",
    "description": "India’s first 3-phase freight loco, most powerful until WAG‑12.",
    "image": "/Images/Locomotive/wag9.jpg",
    "longDescription": "The WAG‑9 series (since 1996) introduced 3-phase AC traction, IGBT/GTO converters, Adtranz bogies, regenerative braking and power outputs above 6,000 hp. Subtypes include 9H/9i/9HH/EF12K twins.",
    "history": "Developed by ABB and CLW starting 1995; over 5,100 units produced across CLW, BLW, BHEL, and PLW :contentReference[oaicite:8]{index=8}.",
    "service": "Now the predominant freight locomotive class, replacing WAG‑7 in heavy haul duties; some twin units used for high-tonnage DFC sections.",
    "preservation": "Still active; none retired yet.",
    "status": "active",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "CLW / ABB etc.",
      "Year Introduced": "1996–",
      "Power Output": "6,120 hp (standard), 9,000 hp (9HH), 12,000 hp (双 unit)",
      "Max Speed": "100 km/h"
    },
    "gallery": ["/Images/Locomotive/wag9.jpg"],
    "classes": [
      { "name": "WAG‑9", "description": "High‑power 3‑phase freight locomotive of modern IR" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-11",
    "description": "Twin‑section freight locomotive converted from WDG‑4 diesel.",
    "image": "/Images/Locomotive/wag11.jpg",
    "longDescription": "The WAG‑11 is a twin-section Co′Co′+Co′Co′ electric loco introduced from 2018 by BLW, converting WDG‑4 diesel engines into electric heavy-haulers with 12,000 hp combined output.",
    "history": "Built at BLW since 2018; four prototypes assembled by January 2023 and undergoing trials :contentReference[oaicite:9]{index=9}.",
    "service": "Assigned to Bondamunda shed; intended for heavy iron‑ore and coal rakes. Currently in testing with limited operations.",
    "preservation": "Active prototypes; none retired.",
    "status": "preserved",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "Twin Co‑Co",
      "Builder": "BLW (converted)",
      "Year Introduced": "2018– present",
      "Power Output": "12,000 hp (combined)",
      "Max Speed": "105 km/h"
    },
    "gallery": ["/Images/Locomotive/wag11.jpg"],
    "classes": [
      { "name": "WAG‑11", "description": "Twin-section electric loco from diesel rebuilds" }
    ]
  },
  {
    "type": "electric",
    "title": "WAG-12",
    "description": "India’s most powerful freight locomotive at 12,000 hp, built for DFC.",
    "image": "/Images/Locomotive/wag12.jpg",
    "longDescription": "The WAG‑12B, a 12,000 hp loco built by Alstom in the Madhepura facility since 2019, is designed for hauling 6,000 tonne rakes on Dedicated Freight Corridors with electric axle-mounted traction motors and advanced safety systems.",
    "history": "Developed under India–France industrial collaboration; the first unit flagged off in 2019. Highest-powered loco in IR :contentReference[oaicite:10]{index=10}.",
    "service": "Assigned to Western and Eastern Dedicated Freight Corridors to move heavy block rakes at 100 km/h.",
    "preservation": "Active; no preservation needed yet.",
    "status": "active",
    "specs": {
      "Gauge": "5 ft 6 in",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "Alstom (Madhepura)",
      "Year Introduced": "2019",
      "Power Output": "12,000 hp",
      "Max Speed": "100 km/h"
    },
    "gallery": ["/Images/Locomotive/wag12.jpg"],
    "classes": [
      { "name": "WAG‑12", "description": "High‑power freight locomotive built for DFC" }
    ]
  },
  {
    "type": "electric",
    "title": "EF 12K",
    "description": "Twin‑unit 12,000 hp high‑haul freight locomotive—also known as WAG‑9T (Twin) or WAG‑12 equivalent.",
    "image": "/Images/Locomotive/ef12k.jpg",
    "longDescription": "The EF 12K—Electric Freight 12,000 hp—is the twin‑unit evolution of the WAG‑9 series, effectively combining two 6,000 hp WAG‑9 units into a combined 12 MW freight powerhouse. Developed to haul double-stacked container and heavy block rakes on India’s Dedicated Freight Corridors (DFC), it offers unmatched hauling capacity with approximately 1,040 kN starting tractive effort. Built to operate at up to 100–120 km/h, it's capable of hauling 6,000‑tonne loads at higher speeds with advanced regenerative braking and traction control :contentReference[oaicite:1]{index=1}.",
    "history": "Introduced after 2000 as 'WAG‑9 Twin' and eventually reclassified as EF 12K, the locomotive was officially part of the WAG‑9HH concept. While the earlier WAG‑9 variants (9i, 9H, 9HC, 9HH) offered up to 9,000 hp, the twin-unit EF12K doubled that in a single consist. Hundreds are now built across multiple IR factories including CLW, BLW, and BHEL as of mid‑2025 :contentReference[oaicite:2]{index=2}.",
    "service": "EF 12K units are increasingly deployed across the Eastern and Western Dedicated Freight Corridors, handling container and bulk commodity trains at speeds up to 120 km/h. These locos permit long single-link runs without multiple engines, lowering crew and maintenance overhead. They are progressively phasing in on high‑density freight routes nationally :contentReference[oaicite:3]{index=3}.",
    "preservation": "Still in early mass‑deployment phase; no units officially preserved yet. Early prototypes and first-series EF 12K may eventually be preserved to document India’s shift to twin‑section high‑power freight traction.",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co‑Co + Co‑Co (twin‑section)",
      "Builder": "CLW / BLW / BHEL",
      "Year Introduced": "c. 2023–2025",
      "Power Output": "≈12,000 hp combined",
      "Max Speed": "100–120 km/h",
      "Tractive Effort": "≈1,040 kN total",
      "Locoweight": "≈264 t combined (132 t per section)" 
    },
    "gallery": ["/Images/Locomotive/ef12k.jpg"],
    "classes": [
      { "name": "EF 12K", "description": "Twin‑unit 12,000 hp heavy‑haul freight locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "WCAM‑1",
    "description": "First-generation dual‑system mixed-traffic locomotive for Mumbai’s DC/AC network.",
    "image": "/Images/Locomotive/wcam1.jpg",
    "longDescription": "Introduced in 1975, WCAM‑1 was India’s first AC/DC dual-system locomotive designed to haul both passenger and freight trains without changing traction zones. It had separate pantographs for 1.5 kV DC and 25 kV AC, and used a fixed-ratio transformer and silicon rectifiers. Though performance in DC mode was modest, these locos offered operational flexibility across Mumbai’s suburban DC zone and Midland’s AC stretches. Co‑Co bogie design, adapted from ALCO/CLW standards, made them robust handlers on ghat terrain. :contentReference[oaicite:1]{index=1}",
    "history": "Developed by CLW and deployed between 1975–79, 53 units of WCAM‑1 were built. They were built to eliminate loco exchanges at the transition point between DC traction in Mumbai and AC traction beyond. Despite operational teething problems—like fusible links blowing—it remained indispensable through two decades of dual-traction service. :contentReference[oaicite:2]{index=2}",
    "service": "Primarily deployed on Western and Central Railway sections like Mumbai–Vadodara, CSMT–Igatpuri, and Karjat–Pune. Their dual-mode ability made them versatile, though their DC-mode speeds were limited (~75–100 km/h), and AC mode operations were smoother. Some units were later modified for AC‑only use post‑2014 DC system conversion. :contentReference[oaicite:3]{index=3}",
    "preservation": "Many units were eventually condemned or scrapped by the 2000s. A few remain in shed records with traces of their dual-mode design, but none are officially preserved in museums. :contentReference[oaicite:4]{index=4}",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1975,
      "Power Output": "3,840 hp (AC), 2,930 hp (DC)",
      "Max Speed": "100–110 km/h (AC), ~75–105 km/h (DC)"
    },
    "gallery": ["/Images/Locomotive/wcam1.jpg"],
    "classes": [
      { "name": "WCAM‑1", "description": "Dual‑traction mixed traffic locomotive built for Mumbai region" }
    ]
  },
  {
    "type": "electric",
    "title": "WCAM‑2",
    "description": "Improved AC/DC mixed-traffic locomotive built by BHEL in mid‑1990s.",
    "image": "/Images/Locomotive/wcam2.jpg",
    "longDescription": "Introduced in 1995–96 by BHEL, WCAM‑2 (and its passenger-optimized version WCAM‑2P) improved on WCAM‑1 with better traction control and electrical gear. Rated at approximately 2,900 hp in DC and 4,700 hp in AC, they could reach up to 120 km/h under AC and handled express trains like Mumbai Rajdhani and August Kranti with ease. :contentReference[oaicite:5]{index=5}",
    "history": "A small fleet (~20 units) built to support increasing train speeds and payload on Central Railway dual-system networks. These units featured improved braking and gear ratios. While not as numerous as WCAM‑3s, they served as an important bridge before WCAM‑3 introduction. :contentReference[oaicite:6]{index=6}",
    "service": "Used for both passenger and freight mixed duties on Central Railway’s Bombay suburban DC / AC interface routes. Some were used transiently on intercity trains and bankers on steep ghat sections. Eventually phased out post full AC conversion in 2014. :contentReference[oaicite:7]{index=7}",
    "preservation": "Most units have been scrapped; a couple may remain in sheds but no official exhibit is confirmed.",
    "status": "retired",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "BHEL",
      "Year Introduced": 1995,
      "Power Output": "4,700 hp (AC), 2,900 hp (DC)",
      "Max Speed": "120 km/h (AC), 105 km/h (DC)"
    },
    "gallery": ["/Images/Locomotive/wcam2.jpg"],
    "classes": [
      { "name": "WCAM‑2 / 2P", "description": "Upgraded dual‑mode mixed‑traffic locomotives" }
    ]
  },
  {
    "type": "electric",
    "title": "WCAM‑3",
    "description": "Central Railway’s main AC/DC dual‑system locomotive, nicknamed the “Hunk of Mumbai”.",
    "image": "/Images/Locomotive/wcam3.jpg",
    "longDescription": "Introduced in 1997–98, WCAM‑3 was built by BHEL and rated at 4,600 hp in DC and 5,000 hp in AC, combining high adhesion bogies, monocoque chassis, and rheostatic braking in DC mode. Designed specifically for ghat operations on Mumbai–Pune and Mumbai–Igatpuri corridors, it could take sharp gradients and curving terrain with ease. Post-2014 electrification overhaul, many were converted to AC-only; remaining units still serve suburban, intercity and banker roles. :contentReference[oaicite:8]{index=8}",
    "history": "Developed jointly by RDSO and BHEL in response to loco shortages and DC traction phase-out plans. With 53 units produced, WCAM‑3 became the workhorse replacing ageing WCM locos in Central Railway, allowing seamless operations across dual-voltage sections without change. :contentReference[oaicite:9]{index=9}",
    "service": "Deployed throughout Central Railway’s Mumbai suburban and adjoining ghat sections: CSMT–Pune, Diva–Ratnagiri, Kasara–Igatpuri. Used for famous services like Deccan Queen, Pragati Express, Mahalaxmi Express, and as bankers on steep gradients. MU operation (2–4 units) is used for heavy freights. Even into 2025, they remain unique active dual-mode locos in India. :contentReference[oaicite:10]{index=10}",
    "preservation": "While still active, 41 units were converted to WAG‑7M freight versions between 2022–24; a few early units might be preserved post-withdrawal. :contentReference[oaicite:11]{index=11}",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "BHEL",
      "Year Introduced": 1997,
      "Power Output": "5,000 hp (AC), 4,600 hp (DC)",
      "Max Speed": "105 km/h"
    },
    "gallery": ["/Images/Locomotive/wcam3.jpg"],
    "classes": [
      { "name": "WCAM‑3", "description": "High-powered dual-mode locomotive for CR ghats" }
    ]
  },
  {
    "type": "electric",
    "title": "WCAG‑1",
    "description": "Freight variant of WCAM‑3 optimized for heavy freight duties and higher torque.",
    "image": "/Images/Locomotive/wcag1.jpg",
    "longDescription": "Introduced in 1999–2000, WCAG‑1 is essentially a gear-reduced version of WCAM‑3, designed for freight hauling. Rated at similar power (4,600 hp DC, 5,000 hp AC) but geared for more tractive effort and slower speeds (~100 km/h). Weighed ~128 t (vs. 113 t for WCAM‑3), it replaced ageing WCG‑2 loco duties on ghat freight routes around Mumbai. :contentReference[oaicite:12]{index=12}",
    "history": "Built by BHEL specifically for Central Railway freight needs, especially after DC-to-AC transition began. Only 11 units were produced. They retained the dual-system flexibility while focusing on heavy freight tasks in mixed traction zones. :contentReference[oaicite:13]{index=13}",
    "service": "Deployed on Central Railway’s freight corridors in Mumbai region, hauling mineral, container, and bulk rakes on ghat sections. Even after AC conversion, they continued freight operations and banking duties on steep gradients. :contentReference[oaicite:14]{index=14}",
    "preservation": "Still in limited service; considered among the last DC-compatible heavy freight locos. Some may be preserved once retired. :contentReference[oaicite:15]{index=15}",
    "status": "active",
    "specs": {
      "Gauge": "Broad Gauge (5 ft 6 in)",
      "Wheel Arrangement": "Co‑Co",
      "Builder": "BHEL",
      "Year Introduced": 1999,
      "Power Output": "5,000 hp (AC), 4,600 hp (DC)",
      "Max Speed": "100 km/h"
    },
    "gallery": ["/Images/Locomotive/wcag1.jpg"],
    "classes": [
      { "name": "WCAG‑1", "description": "Dual‑mode freight locomotive derived from WCAM‑3" }
    ]
  },
  {
    "type": "electric",
    "title": "YCG‑1",
    "description": "Meter-gauge dual-voltage electric locomotive used on the Gwalior narrow-gauge network.",
    "image": "/Images/Locomotive/ycg1.jpg",
    "longDescription": "The YCG‑1 was a unique twin-cab electric locomotive built by CLW in the late 1960s specifically for the Gwalior Railway’s 2 ft 6 in narrow-gauge system. With dual-voltage capability (660 V DC and 1.5 kV DC), it served both passenger and shunting duties. Its compact design featured a Bo-Bo wheel arrangement and a lightweight frame, ideal for tight curves and low axle load of the hilly Gwalior terrain.",
    "history": "Introduced in 1968, YCG‑1 was part of an effort to modernize and electrify the narrow-gauge rail systems in Madhya Pradesh. Only a small fleet of around 4–5 units was built. These locos were based on meter-gauge YCG-2 prototypes but downsized for narrow gauge operations.",
    "service": "Operated primarily around Gwalior and Guna, hauling local passenger and mixed trains on the narrow-gauge alignments. They also performed yard-shunting and occasional freight duties till the late 1990s.",
    "preservation": "Two units are preserved at the Gwalior heritage museum and the National Rail Museum near Delhi, kept in static display after gauge conversion to broad gauge in early 2000s.",
    "status": "retired",
    "specs": {
      "Gauge": "2 ft 6 in (762 mm)",
      "Wheel Arrangement": "Bo‑Bo",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1968,
      "Power Output": "600 hp",
      "Max Speed": "60 km/h"
    },
    "gallery": [
      "/Images/Locomotive/ycg1.jpg"
    ],
    "classes": [
      { "name": "YCG‑1", "description": "Dual‑voltage narrow‑gauge electric locomotive" }
    ]
  },
  {
    "type": "electric",
    "title": "YAM‑1",
    "description": "Bo‑Bo narrow-gauge electric passenger locomotive for 2 ft 6 in lines.",
    "image": "/Images/Locomotive/yam1.jpg",
    "longDescription": "The YAM-1 was a narrow-gauge electric locomotive developed by CLW in the early 1970s for the Gwalior and Satara 2 ft 6 in lines. Powered by 1.5 kV DC overhead supply, it featured a boxy design with twin driver’s cabs, Siemens traction motors, and mechanical link suspension — suiting it for mixed-traffic work on hilly narrow-gauge terrain.",
    "history": "Introduced in 1972, YAM‑1 aimed to replace aging steam engines on narrow-gauge feeder lines. Less than 10 units were produced, with a few sent to Satara and the rest used around Gwalior region.",
    "service": "Hauling short-distance narrow-gauge passenger trains, mail rakes, and local freight. It operated reliably until the mid-1990s when narrow-gauge closures began.",
    "preservation": "One YAM‑1 is preserved at the Gwalior Railway Heritage Centre; the rest were scrapped during gauge conversion.",
    "status": "retired",
    "specs": {
      "Gauge": "2 ft 6 in (762 mm)",
      "Wheel Arrangement": "Bo‑Bo",
      "Builder": "Chittaranjan Locomotive Works (CLW)",
      "Year Introduced": 1972,
      "Power Output": "750 hp",
      "Max Speed": "65 km/h"
    },
    "gallery": [
      "/Images/Locomotive/yam1.jpg"
    ],
    "classes": [
      { "name": "YAM‑1", "description": "Narrow‑gauge electric passenger locomotive" }
    ]
  }
];

async function seedElectricLocomotives() {
  await ElectricLocomotive.deleteMany({});
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