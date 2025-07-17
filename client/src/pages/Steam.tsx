import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Locomotive {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const Steam: React.FC = () => {
  const [locomotives, setLocomotives] = useState<Locomotive[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/steam-locomotives')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch locomotives');
        return res.json();
      })
      .then(data => {
        setLocomotives(data);
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
    <div className="min-h-screen bg-neutral-800 py-16 relative font-['Merriweather',serif]">
      <section className="py-16 relative" id="steam">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Steam Locomotives</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            Steam locomotives powered Indian Railways for over a century, with iconic engines like the <strong>Fairy Queen (1855), WP Class, and YP Class</strong> shaping the country’s railway history. Phased out by the <strong>1990s</strong> in favour of diesel and electric trains, a few steam engines still operate for <strong>heritage and tourism</strong>, preserving their legacy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {locomotives.map(loco => (
              <Link key={loco._id} to={`/steam/${loco._id}`}>
                <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg grayscale hover:grayscale-0 transform hover:scale-105 transition duration-300 cursor-pointer">
                  <img alt={loco.title} className="w-full h-40 object-cover rounded-t-lg" src={loco.image} />
                  <h3 className="text-2xl font-bold mb-2 text-center">{loco.title}</h3>
                  <p className="text-center text-neutral-800">{loco.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steam; 