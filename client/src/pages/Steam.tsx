import React from 'react';
import Navbar from '../components/Navbar';

const steamLocos = [
  {
    name: 'B class',
    image: 'https://i.ibb.co/Q3V88MV6/B.jpg',
    description: 'The B Class steam locomotive powers the Darjeeling Himalayan Railway, conquering steep hills since 1889 and still running today.'
  },
  {
    name: 'WG class',
    image: 'https://i.ibb.co/qLGyhpXM/WG.jpg',
    description: 'The WG class steam locomotive was India\'s most powerful broad-gauge freight engine, serving as the backbone of goods transport from the 1950s to the 1980s.'
  },
  {
    name: 'WL class',
    image: 'https://i.ibb.co/KjXQJLfQ/WL.jpg',
    description: 'The WL class steam locomotive was a sleek broad-gauge passenger engine, known for hauling prestigious trains like the Frontier Mail in the 1950s.'
  },
  {
    name: 'WP class',
    image: 'https://i.ibb.co/Q73k1HS7/WP.jpg',
    description: 'The WP class steam locomotive was India’s iconic broad-gauge passenger engine, known for its speed, power, and service on premium express trains from 1947 to the 1980s.'
  },
  {
    name: 'X class',
    image: 'https://i.ibb.co/NndP4dwy/X.jpg',
    description: 'The X class steam locomotive is a powerful rack-and-pinion narrow-gauge engine, still hauling trains on the Nilgiri Mountain Railway since 1914.'
  },
  {
    name: 'XD class',
    image: 'https://i.ibb.co/w3Hv4MN/XD.jpg',
    description: 'The XD class steam locomotive was a rugged broad-gauge freight engine, widely used for heavy goods transport across India from the 1920s to the 1970s.'
  },
  {
    name: 'XE class',
    image: 'https://i.ibb.co/9HLysG9b/XE.jpg',
    description: 'The XE class steam locomotive was one of India\'s most powerful broad-gauge freight engines, built for hauling heavy loads from the 1930s to the 1970s.'
  },
  {
    name: 'YG class',
    image: 'https://i.ibb.co/WvKvx79y/YG.jpg',
    description: 'The YG class steam locomotive was a sturdy meter-gauge freight engine, widely used across India from the 1950s to the 1990s.'
  },
  {
    name: 'YP class',
    image: 'https://i.ibb.co/BVQLQJJQ/YP.jpg',
    description: 'The YP class steam locomotive was India’s standard meter-gauge passenger engine, serving express and mail trains from the 1940s to the 1990s.'
  },
  {
    name: 'ZB class',
    image: 'https://i.ibb.co/tTMFHmYD/ZB.jpg',
    description: 'The ZB class steam locomotive was a narrow-gauge engine, used on hill railways like the Kangra Valley Railway from the 1950s to the 1980s.'
  },
  {
    name: 'ZE class',
    image: 'https://i.ibb.co/Rp00f8Q8/ZE.jpg',
    description: 'The ZE class steam locomotive was a rare narrow-gauge engine, built for light passenger and freight services on select Indian hill railways.'
  },
  {
    name: 'ZP class',
    image: 'https://i.ibb.co/W4TK7dJt/ZP.jpg',
    description: 'The ZP class steam locomotive was a powerful narrow-gauge engine, designed for hauling passenger trains on steep hill railway routes in India.'
  }
];

const Steam: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-neutral-800">
      <Navbar />
      <section className="py-16 relative" id="steam">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Steam Locomotives</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            Steam locomotives powered Indian Railways for over a century, with iconic engines like the <strong>Fairy Queen (1855), WP Class, and YP Class</strong> shaping the country’s railway history. Phased out by the <strong>1990s</strong> in favour of diesel and electric trains, a few steam engines still operate for <strong>heritage and tourism</strong>, preserving their legacy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {steamLocos.map((loco) => (
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

export default Steam; 