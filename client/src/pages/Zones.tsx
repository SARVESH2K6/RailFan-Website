import React from 'react';

const Zones: React.FC = () => {
  const railwayZones = [
    {
      name: 'Northern Railway',
      image: '/Images/Railways/NorthCentralRailway.jpg',
      description: 'Serving the northern states of India'
    },
    {
      name: 'Western Railway',
      image: '/Images/Railways/WesternRailway.jpg',
      description: 'Connecting western India with modern infrastructure'
    },
    {
      name: 'Eastern Railway',
      image: '/Images/Railways/SouthEasternRailway.jpg',
      description: 'Serving the eastern region with heritage stations'
    },
    {
      name: 'Southern Railway',
      image: '/Images/Railways/SouthCentralRailway.jpg',
      description: 'Connecting southern states with scenic routes'
    },
    {
      name: 'Central Railway',
      image: '/Images/Railways/SouthEastCentralRailway.jpg',
      description: 'Heart of India\'s railway network'
    },
    {
      name: 'North Eastern Railway',
      image: '/Images/Railways/NorthEasternRailway.jpg',
      description: 'Serving the northeastern states'
    },
    {
      name: 'South Western Railway',
      image: '/Images/Railways/SouthWesternRailway.jpg',
      description: 'Modern railway zone with advanced facilities'
    },
    {
      name: 'North Western Railway',
      image: '/Images/Railways/NorthWesternRailway.jpg',
      description: 'Connecting northwestern India'
    },
    {
      name: 'East Central Railway',
      image: '/Images/Railways/EastCentralRailway.png',
      description: 'Serving central and eastern India'
    },
    {
      name: 'East Coast Railway',
      image: '/Images/Railways/EastCoastRailway.jpg',
      description: 'Coastal railway network'
    },
    {
      name: 'South Eastern Railway',
      image: '/Images/Railways/SouthEasternRailway.jpg',
      description: 'Connecting southeastern states'
    },
    {
      name: 'South Coast Railway',
      image: '/Images/Railways/SouthCoastRailway.jpg',
      description: 'Serving the southern coastal region'
    },
    {
      name: 'North East Frontier Railway',
      image: '/Images/Railways/NortheastFrontierRailway.jpg',
      description: 'Frontier railway serving remote areas'
    },
    {
      name: 'West Central Railway',
      image: '/Images/Railways/WestCentralRailway.jpg',
      description: 'Central western railway network'
    },
    {
      name: 'Kolkata Metro Railway',
      image: '/Images/Railways/KolkataMetroRailway.jpg',
      description: 'Metropolitan railway system'
    }
  ];

  return (
    <div className="relative overflow-y-auto scroll-smooth bg-neutral-800 min-h-screen">
      <section className="py-16 relative" id="archive">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white">
            <strong>Indian Railway Zones</strong>
          </h2>
          <p className="text-xl mt-4 text-center text-white">
            Indian Railways is divided into multiple zones, each responsible for managing and operating railway services 
            in their respective regions. Each zone has its own unique characteristics, heritage, and operational challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {railwayZones.map((zone, index) => (
              <div key={index} className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 archive-card">
                <img 
                  alt={`Image of ${zone.name}`} 
                  className="w-full h-40 object-cover grayscale hover:grayscale-0 rounded-t-lg" 
                  src={zone.image} 
                />
                <h3 className="text-2xl font-bold mb-2 text-center">{zone.name}</h3>
                <p className="text-center text-neutral-800">
                  {zone.description}
                </p>
                <div className="text-center mt-12">
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-6 py-2 transition duration-300 animate-bounce">
                    Explore Zone
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zones; 