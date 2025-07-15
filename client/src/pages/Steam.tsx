import React from 'react';

interface LocoData {
  key: string;
  image: string;
  name: string;
  description: string;
}

const locomotiveData: Record<string, LocoData> = {
  B: {
    key: 'B',
    image: 'https://i.ibb.co/Q3V88MV6/B.jpg',
    name: 'B class',
    description: 'A class of steam locomotives used primarily for short-distance passenger trains.',
  },
  WG: {
    key: 'WG',
    image: 'https://i.ibb.co/qLGyhpXM/WG.jpg',
    name: 'WG class',
    description: 'Locomotive class designed to be widely used in both plains and hilly areas.',
  },
  WL: {
    key: 'WL',
    image: 'https://i.ibb.co/KjXQJLfQ/WL.jpg',
    name: 'WL class',
    description: 'Locomotive class designed to manage steep gradients effectively.',
  },
  WP: {
    key: 'WP',
    image: 'https://i.ibb.co/Q73k1HS7/WP.jpg',
    name: 'WP',
    description: 'Locomotive class known for its high speed and reliability.',
  },
  X: {
    key: 'X',
    image: 'https://i.ibb.co/NndP4dwy/X.jpg',
    name: 'X',
    description: 'Locomotive class used primarily in the post-war period.',
  },
  XD: {
    key: 'XD',
    image: 'https://i.ibb.co/w3Hv4MN/XD.jpg',
    name: 'XD',
    description: 'Locomotive class widely used during the early 20th century.',
  },
  XE: {
    key: 'XE',
    image: 'https://i.ibb.co/9HLysG9b/XE.jpg',
    name: 'XE',
    description: 'Locomotive class used for inter-city travel, known for their robustness and long lifespan.',
  },
  YG: {
    key: 'YG',
    image: 'https://i.ibb.co/WvKvx79y/YG.jpg',
    name: 'YG',
    description: 'Locomotive class used for passenger trains in hilly regions, designed for steep gradients.',
  },
  YP: {
    key: 'YP',
    image: 'https://i.ibb.co/BVQLQJJQ/YP.jpg',
    name: 'YP',
    description: 'Locomotive class used for passenger and freight services, especially in remote areas.',
  },
  ZB: {
    key: 'ZB',
    image: 'https://i.ibb.co/tTMFHmYD/ZB.jpg',
    name: 'ZB',
    description: 'Locomotive class used for freight hauling, known for its power and durability in demanding operations.',
  },
  ZE: {
    key: 'ZE',
    image: 'https://i.ibb.co/Rp00f8Q8/ZE.jpg',
    name: 'ZE',
    description: 'Locomotive class used for both operations, often deployed for medium-distance services.',
  },
  ZP: {
    key: 'ZP',
    image: 'https://i.ibb.co/W4TK7dJt/ZP.jpg',
    name: 'ZP',
    description: 'Locomotive class known for its reliability in both suburban and long-distance travel.',
  },
};

export default function Steam() {
  return (
    <div className="min-h-screen bg-neutral-800 py-16 relative font-['Merriweather',serif]">
      {/* Main Section */}
      <section className="py-16 relative" id="steam">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Steam Locomotives</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            Steam locomotives powered Indian Railways for over a century, with iconic engines like the <strong>Fairy Queen (1855), WP Class, and YP Class</strong> shaping the country’s railway history. Phased out by the <strong>1990s</strong> in favour of diesel and electric trains, a few steam engines still operate for <strong>heritage and tourism</strong>, preserving their legacy.
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