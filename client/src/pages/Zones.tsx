import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Zone {
  _id: string;
  name: string;
  image: string;
  description: string;
}

const Zones: React.FC = () => {
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/zones')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch zones');
        return res.json();
      })
      .then(data => {
        setZones(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-white py-16">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-16">{error}</div>;

  return (
    <div className="relative overflow-y-auto scroll-smooth bg-neutral-800 min-h-screen font-['Merriweather',serif]">
      <section className="py-16 relative" id="zones">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Indian Railway Zones</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            The Indian Railways is divided into multiple zones, each playing a crucial role in managing railway operations across the country. 
            These zones ensure smooth connectivity, efficient transportation of passengers and goods, and the seamless functioning of the vast 
            railway network. From the bustling Northern Railway, which connects major cities, to the scenic Konkan Railway, offering 
            breathtaking coastal routes, each zone has its own significance. This page provides insights into the history, key routes, major 
            stations, and operational importance of every Indian Railway Zone, showcasing their role in shaping India's transportation system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {zones.map((zone) => (
              <Link key={zone._id} to={`/zones/${zone._id}`} className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg grayscale hover:grayscale-0 transform hover:scale-105 transition duration-300 block">
                <img 
                  alt={`Image of ${zone.name}`} 
                  className="w-full h-40 object-cover rounded-t-lg" 
                  src={zone.image} 
                />
                <h3 className="text-2xl font-bold mb-2 text-center">{zone.name}</h3>
                <p className="text-center text-neutral-800">{zone.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zones; 