import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Train {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const Trains: React.FC = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/trains')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch trains');
        return res.json();
      })
      .then(data => {
        setTrains(data);
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
      <section className="py-16 relative" id="trains">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white"><strong>Trains</strong></h2>
          <p className="text-xl mt-4 text-center text-white">
            The <strong>Trains</strong> highlights the diverse range of Indian Railways, from the luxurious <strong>Rajdhani and Shatabdi Express</strong> to the futuristic <strong>Vande Bharat and RRTS</strong>. Explore the evolution of passenger and freight trains that connect the nation with speed, comfort, and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {trains.map(train => (
              <Link key={train._id} to={`/trains/${train._id}`} className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg grayscale hover:grayscale-0 transform hover:scale-105 transition duration-300 cursor-pointer block">
                <img alt={train.title} className="w-full h-40 object-cover rounded-t-lg" src={train.image} />
                <h3 className="text-2xl font-bold mb-2 text-center">{train.title}</h3>
                <p className="text-center text-neutral-800">{train.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trains; 