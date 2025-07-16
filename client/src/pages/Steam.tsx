import React from 'react';

interface LocoData {
  key: string;
  image: string;
  name: string;
  description: string;
}

const locomotiveData: Record<string, LocoData> = {
  XD: {
  key: 'XD',
  image: 'https://i.ibb.co/w3Hv4MN/XD.jpg',
  name: 'XD',
  description: 'A World War I-era heavy freight steam locomotive introduced in the 1920s, known for ruggedness and long-distance haulage on broad gauge.',
},
XE: {
  key: 'XE',
  image: 'https://i.ibb.co/9HLysG9b/XE.jpg',
  name: 'XE',
  description: 'One of the most powerful broad-gauge steam freight locomotives used in India during the pre-independence era, introduced in the 1930s.',
},
X: {
  key: 'X',
  image: 'https://i.ibb.co/NndP4dwy/X.jpg',
  name: 'X',
  description: 'A special rack steam locomotive class designed for the Nilgiri Mountain Railway with a rack-and-pinion system, introduced in 1914.',
},
WG: {
  key: 'WG',
  image: 'https://i.ibb.co/qLGyhpXM/WG.jpg',
  name: 'WG',
  description: 'India’s most numerous freight steam locomotive class, introduced in 1950 and used across broad-gauge routes for heavy loads.',
},
WP: {
  key: 'WP',
  image: 'https://i.ibb.co/Q73k1HS7/WP.jpg',
  name: 'WP',
  description: 'Iconic post-independence passenger steam locomotive introduced in 1947, designed for high-speed service on broad gauge.',
},
WL: {
  key: 'WL',
  image: 'https://i.ibb.co/KjXQJLfQ/WL.jpg',
  name: 'WL',
  description: 'A medium-speed broad-gauge passenger steam locomotive designed in the 1950s for mail and express trains on lighter rails.',
},
YP: {
  key: 'YP',
  image: 'https://i.ibb.co/BVQLQJJQ/YP.jpg',
  name: 'YP',
  description: 'The standard metre-gauge passenger steam locomotive introduced in 1950s, widely used across rural and semi-urban India.',
},
YG: {
  key: 'YG',
  image: 'https://i.ibb.co/WvKvx79y/YG.jpg',
  name: 'YG',
  description: 'The standard metre-gauge freight steam locomotive of the 1950s, often paired with YP on mixed-traffic duties in hilly terrain.',
},
B: {
  key: 'B',
  image: 'https://i.ibb.co/Q3V88MV6/B.jpg',
  name: 'B class',
  description: 'Narrow-gauge steam locomotive used on the Darjeeling Himalayan Railway since 1889, known for its resilience and heritage value.',
},
ZB: {
  key: 'ZB',
  image: 'https://i.ibb.co/tTMFHmYD/ZB.jpg',
  name: 'ZB',
  description: 'A 2-6-2 narrow-gauge freight locomotive used on central Indian NG routes, known for its strength in tough terrain.',
},
ZE: {
  key: 'ZE',
  image: 'https://i.ibb.co/Rp00f8Q8/ZE.jpg',
  name: 'ZE',
  description: 'A narrow-gauge mixed-traffic locomotive used for both freight and passengers on hilly routes, introduced in the mid-20th century.',
},
ZP: {
  key: 'ZP',
  image: 'https://i.ibb.co/W4TK7dJt/ZP.jpg',
  name: 'ZP',
  description: 'A powerful narrow-gauge passenger locomotive designed for steep gradients and reliable service, especially in central India.',
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