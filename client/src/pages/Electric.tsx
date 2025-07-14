import React from 'react';
import Navbar from '../components/Navbar';

const electricLocos = [
  { name: 'WCM-1', image: 'https://i.ibb.co/0VWg8Y0f/WCM1.jpg', description: 'India\'s first electric locomotive, paving the way for electrification.' },
  { name: 'WCM-5', image: 'https://i.ibb.co/7dMFWVLc/WCM5.jpg', description: 'A powerful DC locomotive that ruled Mumbai’s electrified tracks.' },
  { name: 'WAG-1', image: 'https://i.ibb.co/SDQxFVrW/WAG1.jpg', description: 'India’s first electric freight locomotive, setting the standard for cargo haulage.' },
  { name: 'WAG-4', image: 'https://i.ibb.co/Fv32Dc9/WAG4.jpg', description: 'A rare electric locomotive that contributed to early freight operations.' },
  { name: 'WAM-1', image: 'https://i.ibb.co/bcwy7B6/WAM1.jpg', description: 'India\'s first AC electric passenger locomotive, bringing faster travel.' },
  { name: 'WAG-5', image: '/Images/Locomotive/electric.jpg', description: 'The workhorse of Indian Railways freight for decades.' },
  { name: 'WAG-7', image: '/Images/Locomotive/electric.jpg', description: 'A freight powerhouse, still hauling goods across India.' },
  { name: 'WAP-1', image: '/Images/Locomotive/electric.jpg', description: 'India’s first dedicated passenger electric locomotive.' },
  { name: 'WAP-3', image: '/Images/Locomotive/electric.jpg', description: 'An experimental high-speed locomotive, ahead of its time.' },
  { name: 'WAP-4', image: '/Images/Locomotive/electric.jpg', description: 'The most trusted passenger locomotive for decades.' },
  { name: 'WAP-5', image: '/Images/Locomotive/electric.jpg', description: 'India’s high-speed star, powering Rajdhani and Gatimaan Express.' },
  { name: 'WAP-7', image: '/Images/Locomotive/electric.jpg', description: 'The king of passenger locomotives, hauling premier trains today.' },
  { name: 'WAG-9', image: '/Images/Locomotive/electric.jpg', description: 'India’s most powerful freight workhorse for decades.' },
  { name: 'WAG-12B', image: '/Images/Locomotive/electric.jpg', description: 'India’s mightiest freight engine(12000HP), built under Make in India.' },
  { name: 'WAG-11', image: '/Images/Locomotive/electric.jpg', description: 'A powerful twin-section freight locomotive designed for heavy cargo hauling.' }
];

const Electric: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-neutral-800">
      <Navbar />
      <section className="py-16 relative" id="electric">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Electric Locomotives</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            Electric locomotives are the backbone of modern rail transport, offering <strong>high efficiency, speed, and environmental benefits</strong> over diesel and steam engines. Used for both <strong>passenger and freight services</strong>, they operate on overhead electric lines, providing <strong>higher acceleration, reduced maintenance costs, and lower emissions</strong>. With advancements like <strong>WAP-7 for high-speed trains</strong> and <strong>WAG-12B for heavy freight</strong>, Indian Railways is rapidly expanding its electric fleet to enhance connectivity and sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {electricLocos.map((loco) => (
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

export default Electric; 