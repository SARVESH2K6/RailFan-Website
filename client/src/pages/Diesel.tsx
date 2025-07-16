import React from 'react';

interface LocoData {
  key: string;
  image: string;
  name: string;
  description: string;
}

const locomotiveData: Record<string, LocoData> = {
  WDS1: {
  key: 'WDS1',
  image: 'https://i.ibb.co/4g2J4NML/WDS1.jpg',
  name: 'WDS-1',
  description: 'India’s first diesel shunting locomotive, introduced in the 1950s for station yard operations and light-duty work.',
},
WDM1: {
  key: 'WDM1',
  image: 'https://i.ibb.co/whHSpt5w/WDM1.jpg',
  name: 'WDM-1',
  description: 'India’s first mainline diesel-electric locomotive, imported from ALCO in the late 1950s, marking the transition from steam.',
},
WDM4: {
  key: 'WDM4',
  image: 'https://i.ibb.co/RGCYhMjv/WDM4.jpg',
  name: 'WDM-4',
  description: 'One of the earliest diesel locomotives in India, imported from GM-EMD in the 1960s, known for its speed but limited production.',
},
WDM2: {
  key: 'WDM2',
  image: 'https://i.ibb.co/C5Sx8yPr/WDM2.jpg',
  name: 'WDM-2',
  description: 'India’s most successful and iconic diesel locomotive, built by ALCO and produced in large numbers by DLW from 1962 onwards.',
},
WDP1: {
  key: 'WDP1',
  image: 'https://i.ibb.co/q34YtvCd/WDP1.jpg',
  name: 'WDP-1',
  description: 'A passenger variant of the WDM series introduced in the 1990s, used for short-distance and light express services.',
},
WDM3A: {
  key: 'WDM3A',
  image: 'https://i.ibb.co/XxQP2kwP/WDM3A.jpg',
  name: 'WDM-3A',
  description: 'An upgraded version of WDM-2 with higher horsepower and better reliability, widely used for mixed traffic.',
},
WDG3A: {
  key: 'WDG3A',
  image: 'https://i.ibb.co/LDgZJsf9/WDG3A.jpg',
  name: 'WDG-3A',
  description: 'A freight-focused variant of the WDM3 series with enhanced tractive effort, used for hauling heavy loads across India.',
},
WDM3D: {
  key: 'WDM3D',
  image: 'https://i.ibb.co/d0f7nxcX/WDM3D.jpg',
  name: 'WDM-3D',
  description: 'An advanced version of WDM-3A with digital controls and improved cab ergonomics, built in the 2000s.',
},
WDP3A: {
  key: 'WDP3A',
  image: 'https://i.ibb.co/ycHvZBQm/WDP3A.jpg',
  name: 'WDP-3A',
  description: 'A high-speed passenger diesel locomotive derived from WDM3A, used for express and superfast trains.',
},
WDS6: {
  key: 'WDS6',
  image: 'https://i.ibb.co/9mhVftzS/WDS6.jpg',
  name: 'WDS-6',
  description: 'A powerful shunting locomotive used in large yards and industrial sidings for moving heavy rakes.',
},
WDP4: {
  key: 'WDP4',
  image: 'https://i.ibb.co/3mQs6LMv/WDP4.jpg',
  name: 'WDP-4',
  description: 'A high-horsepower passenger locomotive built by DLW based on EMD design, known for speed and fuel efficiency.',
},
WDG4: {
  key: 'WDG4',
  image: 'https://i.ibb.co/QvRrF07y/WDG4.jpg',
  name: 'WDG-4',
  description: 'A freight version of WDP-4 with improved traction, widely used for heavy freight corridors.',
},
WDG5: {
  key: 'WDG5',
  image: 'https://i.ibb.co/WNxTjfB5/WDG5.jpg',
  name: 'WDG-5',
  description: 'Also known as GT50AC, this high-horsepower freight locomotive offered enhanced haulage but saw limited production.',
},
WDG6G: {
  key: 'WDG6G',
  image: 'https://i.ibb.co/mFrJRt4t/WDG6G.jpg',
  name: 'WDG-6G',
  description: 'India’s next-gen green freight locomotive based on GE Evolution series, known for its fuel efficiency and low emissions.',
},
WDAP5: {
  key: 'WDAP5',
  image: 'https://i.ibb.co/h52RzQj/WDAP5.jpg',
  name: 'WDAP-5',
  description: 'A dual-mode (diesel + electric) passenger locomotive developed under the Make in India initiative for semi-high-speed trains.',
},

};

export default function Diesel() {
  return (
    <div className="min-h-screen bg-neutral-800 py-16 relative font-['Merriweather',serif]">
      {/* Main Section */}
      <section className="py-16 relative" id="diesel">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-3xl font-bold mb-8 mt-3 text-center text-white"><strong>Diesel Locomotives</strong></h2>
          <p className="text-xl mt-4 text-center text-justify text-white">
            Diesel locomotives revolutionized Indian Railways, with workhorses like the <strong>WDM-2, WDP-4, and WDG-4</strong> powering both passenger and freight services. While electric traction is replacing them in many regions, diesel engines remain crucial for <strong>remote routes, heavy haulage, and strategic operations</strong> across the country.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {Object.values(locomotiveData).map(loco => (
              <div
                key={loco.key}
                className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg grayscale hover:grayscale-0 transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                <img alt={loco.name} className="w-full h-40 object-cover rounded-t-lg" src={loco.image} />
                <h3 className="text-2xl font-bold mb-2 text-center">{loco.name}</h3>
                <p className="text-center text-neutral-800">{loco.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 