import React from 'react';

interface LocoData {
  key: string;
  image: string;
  name: string;
  description: string;
}

const locomotiveData: Record<string, LocoData> = {
  WDM1: {
    key: 'WDM1',
    image: 'https://i.ibb.co/whHSpt5w/WDM1.jpg',
    name: 'WDM-1',
    description: 'India’s first mainline diesel locomotive, marking the transition from steam.',
  },
  WDM2: {
    key: 'WDM2',
    image: 'https://i.ibb.co/C5Sx8yPr/WDM2.jpg',
    name: 'WDM-2',
    description: 'The most widely used diesel locomotive in India, serving for decades.',
  },
  WDM3A: {
    key: 'WDM3A',
    image: 'https://i.ibb.co/XxQP2kwP/WDM3A.jpg',
    name: 'WDM-3A',
    description: 'An upgraded version of WDM-2, designed for better efficiency and performance.',
  },
  WDM4: {
    key: 'WDM4',
    image: 'https://i.ibb.co/RGCYhMjv/WDM4.jpg',
    name: 'WDM-4',
    description: 'An early diesel locomotive, later overshadowed by the more successful WDM-2.',
  },
  WDS1: {
    key: 'WDS1',
    image: 'https://i.ibb.co/4g2J4NML/WDS1.jpg',
    name: 'WDS-1',
    description: 'One of India\'s first diesel shunters, used for yard and station operations.',
  },
  WDM3D: {
    key: 'WDM3D',
    image: 'https://i.ibb.co/d0f7nxcX/WDM3D.jpg',
    name: 'WDM-3D',
    description: 'A powerful and modern diesel locomotive used for both freight and passenger trains.',
  },
  WDP1: {
    key: 'WDP1',
    image: 'https://i.ibb.co/q34YtvCd/WDP1.jpg',
    name: 'WDP-1',
    description: 'One of the earliest diesel locomotives, known for its reliability and long operational life.',
  },
  WDG3A: {
    key: 'WDG3A',
    image: 'https://i.ibb.co/LDgZJsf9/WDG3A.jpg',
    name: 'WDG-3A',
    description: 'A versatile diesel locomotive, designed for high-haul operations across various terrains.',
  },
  WDP3A: {
    key: 'WDP3A',
    image: 'https://i.ibb.co/ycHvZBQm/WDP3A.jpg',
    name: 'WDP-3A',
    description: 'A powerful diesel locomotive used for both passenger and express trains.',
  },
  WDP4: {
    key: 'WDP4',
    image: 'https://i.ibb.co/3mQs6LMv/WDP4.jpg',
    name: 'WDP-4',
    description: 'A high-performance diesel locomotive designed for long-distance trains.',
  },
  WDG4: {
    key: 'WDG4',
    image: 'https://i.ibb.co/QvRrF07y/WDG4.jpg',
    name: 'WDG-4',
    description: 'A heavy-duty diesel locomotive known for its power and ability to haul large loads.',
  },
  WDG5: {
    key: 'WDG5',
    image: 'https://i.ibb.co/WNxTjfB5/WDG5.jpg',
    name: 'WDG-5',
    description: 'A more advanced diesel locomotive used for high-capacity freight operations.',
  },
  WDS6: {
    key: 'WDS6',
    image: 'https://i.ibb.co/9mhVftzS/WDS6.jpg',
    name: 'WDS-6',
    description: 'Used for light-duty freight and industrial operations in yards and workshops.',
  },
  WDG6G: {
    key: 'WDG6G',
    image: 'https://i.ibb.co/mFrJRt4t/WDG6G.jpg',
    name: 'WDG-6G',
    description: 'A next-generation freight locomotive, known for its energy efficiency and reduced emissions.',
  },
  WDAP5: {
    key: 'WDAP5',
    image: 'https://i.ibb.co/h52RzQj/WDAP5.jpg',
    name: 'WDAP-5',
    description: 'A modern diesel-electric locomotive designed for high-speed passenger trains.',
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