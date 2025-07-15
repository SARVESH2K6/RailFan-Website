import React from 'react';

interface LocoData {
  key: string;
  image: string;
  name: string;
  description: string;
}

const locomotiveData: Record<string, LocoData> = {
  WAP7: {
    key: 'WAP7',
    image: 'Images/Electric/WAP7.jpg',
    name: 'WAP-7',
    description: 'It is the backbone of India\'s electric passenger fleet.',
  },
  WAP1: {
    key: 'WAP1',
    image: 'Images/Electric/WAP1.jpg',
    name: 'WAP-1',
    description: 'India\'s first dedicated electric passenger locomotive.',
  },
  WAP4: {
    key: 'WAP4',
    image: 'Images/Electric/WAP4.jpg',
    name: 'WAP-4',
    description: 'A reliable workhorse for express and superfast trains.',
  },
  WCM1: {
    key: 'WCM1',
    image: 'https://i.ibb.co/0VWg8Y0f/WCM1.jpg',
    name: 'WCM-1',
    description: 'India\'s first AC/DC electric locomotive, introduced for Mumbai-Pune routes.',
  },
  WCM5: {
    key: 'WCM5',
    image: 'https://i.ibb.co/7dMFWVLc/WCM5.jpg',
    name: 'WCM-5',
    description: 'A more powerful variant of WCM-1, used for express trains.',
  },
  WAG1: {
    key: 'WAG1',
    image: 'https://i.ibb.co/SDQxFVrW/WAG1.jpg',
    name: 'WAG-1',
    description: 'India\'s first dedicated electric freight locomotive, built for heavy haulage.',
  },
  WAG4: {
    key: 'WAG4',
    image: 'https://i.ibb.co/Fv32Dc9/WAG4.jpg',
    name: 'WAG-4',
    description: 'An improved freight locomotive with better hauling capacity.',
  },
  WAM1: {
    key: 'WAM1',
    image: 'https://i.ibb.co/bcwy7B6/WAM1.jpg',
    name: 'WAM-1',
    description: 'India\'s first AC electric locomotive, marking the shift to 25 kV AC traction.',
  },
  WAG5: {
    key: 'WAG5',
    image: 'Images/Electric/WAG5.jpg',
    name: 'WAG-5',
    description: 'One of the most widely used electric freight locomotives in India.',
  },
  WAG7: {
    key: 'WAG7',
    image: 'Images/Electric/WAG7.jpg',
    name: 'WAG-7',
    description: 'A reliable and powerful freight locomotive used extensively across India.',
  },
  WAP3: {
    key: 'WAP3',
    image: 'Images/Electric/WAP3.jpg',
    name: 'WAP-3',
    description: 'An experimental high-speed passenger locomotive with limited production.',
  },
  WAP5: {
    key: 'WAP5',
    image: 'Images/Electric/WAP5.jpg',
    name: 'WAP-5',
    description: 'India’s first high-speed electric locomotive, known for hauling premium trains.',
  },
  WAG9: {
    key: 'WAG9',
    image: 'Images/Electric/WAG9.jpg',
    name: 'WAG-9',
    description: 'India’s most powerful freight locomotive, designed for heavy haulage.',
  },
  WAG12B: {
    key: 'WAG12B',
    image: 'Images/Electric/WAG12B.jpg',
    name: 'WAG-12B',
    description: 'India’s most powerful freight locomotive, designed for Dedicated Freight Corridors.',
  },
  WAG11: {
    key: 'WAG11',
    image: 'Images/Electric/WAG11.jpg',
    name: 'WAG-11',
    description: 'A high-power freight locomotive developed for heavy haul operations.',
  },
};

export default function Electric() {
  return (
    <div className="min-h-screen bg-neutral-800 py-16 relative font-['Merriweather',serif]">
      {/* Main Section */}
      <section className="py-16 relative" id="electric">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Electric Locomotives</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            Electric locomotives are the backbone of modern rail transport, offering <strong>high efficiency, speed, and environmental benefits</strong> over diesel and steam engines. Used for both <strong>passenger and freight services</strong>, they operate on overhead electric lines, providing <strong>higher acceleration, reduced maintenance costs, and lower emissions</strong>. With advancements like <strong>WAP-7 for high-speed trains</strong> and <strong>WAG-12B for heavy freight</strong>, Indian Railways is rapidly expanding its electric fleet to enhance connectivity and sustainability.
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