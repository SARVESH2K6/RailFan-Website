import React from 'react';
import Navbar from '../components/Navbar';

const dieselLocos = [
  {
    name: 'WDM-1',
    image: 'https://i.ibb.co/whHSpt5w/WDM1.jpg',
    description: 'India’s first diesel workhorse, marking the transition from steam.'
  },
  {
    name: 'WDM-2',
    image: 'https://i.ibb.co/C5Sx8yPr/WDM2.jpg',
    description: 'The backbone of Indian Railways, serving for over five decades.'
  },
  {
    name: 'WDM-3A',
    image: 'https://i.ibb.co/XxQP2kwP/WDM3A.jpg',
    description: 'An upgraded version of WDM-2, built for better efficiency.'
  },
  {
    name: 'WDM-4',
    image: 'https://i.ibb.co/RGCYhMjv/WDM4.jpg',
    description: 'A short-lived diesel giant, later overshadowed by WDM-2.'
  },
  {
    name: 'WDS-1',
    image: 'https://i.ibb.co/4g2J4NML/WDS1.jpg',
    description: 'A pioneer in Indian diesel shunting, built for station yards.'
  },
  {
    name: 'WDM-3D',
    image: 'https://i.ibb.co/d0f7nxcX/WDM3D.jpg',
    description: 'A modernized diesel powerhouse for both freight and passenger use.'
  },
  {
    name: 'WDP-1',
    image: 'https://i.ibb.co/q34YtvCd/WDP1.jpg',
    description: 'Built for speed, this locomotive was designed for express trains.'
  },
  {
    name: 'WDP-3A',
    image: 'https://i.ibb.co/ycHvZBQm/WDP3A.jpg',
    description: 'A high-speed locomotive often seen pulling Rajdhani Express.'
  },
  {
    name: 'WDG-3A',
    image: 'https://i.ibb.co/LDgZJsf9/WDG3A.jpg',
    description: 'A freight locomotive built to haul heavy loads across India.'
  },
  {
    name: 'WDP-4',
    image: 'https://i.ibb.co/3mQs6LMv/WDP4.jpg',
    description: 'India’s first indigenously built high-speed diesel locomotive.'
  },
  {
    name: 'WDG-4',
    image: 'https://i.ibb.co/QvRrF07y/WDG4.jpg',
    description: 'A heavy-haul freight locomotive designed for long distances.'
  },
  {
    name: 'WDG-5',
    image: 'https://i.ibb.co/WNxTjfB5/WDG5.jpg',
    description: 'India\'s most powerful diesel locomotive, built for freight.'
  },
  {
    name: 'WDS-6',
    image: 'https://i.ibb.co/9mhVftzS/WDS6.jpg',
    description: 'A powerful diesel shunter used in major railway yards.'
  },
  {
    name: 'WDG-6G',
    image: 'https://i.ibb.co/mFrJRt4t/WDG6G.jpg',
    description: 'A modern freight locomotive built with American technology.'
  },
  {
    name: 'WDAP-5',
    image: 'https://i.ibb.co/h52RzQj/WDAP5.jpg',
    description: 'An experimental locomotive blending diesel and electric power.'
  }
];

const Diesel: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-neutral-800">
      <Navbar />
      <section className="py-16 relative" id="diesel">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Diesel Locomotives</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            Diesel locomotives revolutionized Indian Railways, with workhorses like the <strong>WDM-2, WDP-4, and WDG-4</strong> powering both passenger and freight services. While electric traction is replacing them in many regions, diesel engines remain crucial for <strong>remote routes, heavy haulage, and strategic operations</strong> across the country.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {dieselLocos.map((loco) => (
              <div key={loco.name} className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg grayscale hover:grayscale-0 transform hover:scale-105 transition duration-300">
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
};

export default Diesel; 