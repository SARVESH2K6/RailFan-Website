import React from 'react';

interface LocoData {
  key: string;
  image: string;
  name: string;
  description: string;
}

const locomotiveData: Record<string, LocoData> = {
  WAM1: {
  key: 'WAM1',
  image: 'https://i.ibb.co/bcwy7B6/WAM1.jpg',
  name: 'WAM-1',
  description: 'India\'s first AC electric locomotive, introduced in 1959, marking the shift to 25 kV AC traction. Built by European consortium and imported from Japan.',
},
WCM1: {
  key: 'WCM1',
  image: 'https://i.ibb.co/0VWg8Y0f/WCM1.jpg',
  name: 'WCM-1',
  description: 'One of India\'s earliest AC/DC mixed electric locomotives introduced in 1960 for Mumbai–Pune operations under the then dual-voltage system.',
},
WAG1: {
  key: 'WAG1',
  image: 'https://i.ibb.co/SDQxFVrW/WAG1.jpg',
  name: 'WAG-1',
  description: 'India\'s first dedicated electric freight locomotive introduced in 1963, based on European designs and built by CLW.',
},
WCM5: {
  key: 'WCM5',
  image: 'https://i.ibb.co/7dMFWVLc/WCM5.jpg',
  name: 'WCM-5',
  description: 'A more powerful and refined version of WCM series built by CLW in the 1960s for use in dual-voltage sections like Mumbai.',
},
WAP1: {
  key: 'WAP1',
  image: 'Images/Electric/WAP1.jpg',
  name: 'WAP-1',
  description: 'India\'s first dedicated electric passenger locomotive introduced in late 1980s. Used for express trains and built by CLW.',
},
WAG4: {
  key: 'WAG4',
  image: 'https://i.ibb.co/Fv32Dc9/WAG4.jpg',
  name: 'WAG-4',
  description: 'Introduced in the late 1980s, an improved freight locomotive designed to replace earlier WAG variants with better hauling capacity.',
},
WAP3: {
  key: 'WAP3',
  image: 'Images/Electric/WAP3.jpg',
  name: 'WAP-3',
  description: 'An experimental high-speed passenger locomotive developed in early 1990s with limited production and usage.',
},
WAP4: {
  key: 'WAP4',
  image: 'Images/Electric/WAP4.jpg',
  name: 'WAP-4',
  description: 'Introduced in 1994, this workhorse passenger locomotive became a mainstay for hauling express and superfast trains across India.',
},
WAG5: {
  key: 'WAG5',
  image: 'Images/Electric/WAG5.jpg',
  name: 'WAG-5',
  description: 'One of the most widely used freight locomotives in India since the 1990s, known for its robust performance and versatility.',
},
WAG7: {
  key: 'WAG7',
  image: 'Images/Electric/WAG7.jpg',
  name: 'WAG-7',
  description: 'Developed as a powerful successor to WAG-5, used extensively since the late 1990s for freight across the country.',
},
WAP5: {
  key: 'WAP5',
  image: 'Images/Electric/WAP5.jpg',
  name: 'WAP-5',
  description: 'India’s first truly high-speed electric locomotive, introduced in the late 1990s. Capable of speeds up to 160 km/h, it hauls premium trains like Shatabdi and Gatimaan.',
},
WAP7: {
  key: 'WAP7',
  image: 'Images/Electric/WAP7.jpg',
  name: 'WAP-7',
  description: 'The backbone of Indian Railways’ passenger fleet since the 2000s, known for its high power, reliability, and regenerative braking.',
},
WAG9: {
  key: 'WAG9',
  image: 'Images/Electric/WAG9.jpg',
  name: 'WAG-9',
  description: 'Introduced in the late 1990s, it is India\'s first high-horsepower 3-phase AC freight locomotive with superior hauling capability.',
},
WAG11: {
  key: 'WAG11',
  image: 'Images/Electric/WAG11.jpg',
  name: 'WAG-11',
  description: 'A prototype high-power twin-section freight locomotive, developed to meet increasing freight demands. Very limited units built.',
},
WAG12B: {
  key: 'WAG12B',
  image: 'Images/Electric/WAG12B.jpg',
  name: 'WAG-12B',
  description: 'India’s most powerful freight locomotive, built under Make in India initiative for Dedicated Freight Corridors. Twin-section and capable of hauling over 6000 tonnes.',
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