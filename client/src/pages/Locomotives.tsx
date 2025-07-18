import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Steam',
    description: "This section showcases India's iconic steam locomotives, their legacy, engineering brilliance, and role in shaping Indian railway history.",
    image: '/Images/Locomotive/Steam.jpg',
    link: '/locomotives/steam'
  },
  {
    title: 'Diesel',
    description: 'This section highlights powerful Diesel Locomotives that revolutionized Indian Railways, bridging the gap between steam and electric eras.',
    image: '/Images/Locomotive/Diesel.jpg',
    link: '/locomotives/diesel'
  },
  {
    title: 'Electric',
    description: "This section showcases advanced, eco-friendly engines that enhance speed, efficiency, and sustainability across India's vast railway network.",
    image: '/Images/Locomotive/electric.jpg',
    link: '/locomotives/electric'
  }
];

export default function Locomotives() {
  const [bgImage, setBgImage] = useState<string | null>(null);

  return (
    <div className="relative overflow-y-auto scroll-smooth bg-neutral-800 min-h-screen">
      {/* Blurred background image on hover */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {bgImage && (
          <img
            src={bgImage}
            alt="Blurred background"
            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-lg transition-all duration-500"
            style={{ zIndex: 1 }}
          />
        )}
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40" style={{zIndex: 2}}></div>
      </div>
      <section className="py-16 relative z-10" id="archive">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Locomotives</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            This section showcases the evolution of Indian Railways' engines, from the majestic steam locomotives of the past to 
            the powerful diesel and cutting-edge electric engines of today. Each locomotive played a crucial role in shaping India's vast rail 
            network, driving progress and connectivity across the country.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {categories.map(cat => (
              <div
                key={cat.title}
                className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 archive-card relative z-10"
                onMouseEnter={() => setBgImage(cat.image)}
                onMouseLeave={() => setBgImage(null)}
              >
                <img
                  alt={`WDM-2 Diesel Locomotive`}
                  className="w-full h-40 object-cover grayscale hover:grayscale-0 rounded-t-lg transition duration-300"
                  src={cat.image}
                />
                <h3 className="text-2xl font-bold mb-2 text-center">{cat.title}</h3>
                <p className="text-center text-neutral-800">{cat.description}</p>
                <div className="text-center mt-12">
                  <Link to={cat.link}>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-full text-sm px-6 py-2 transition duration-300 animate-bounce">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 