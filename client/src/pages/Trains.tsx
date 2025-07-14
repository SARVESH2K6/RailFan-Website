import React from 'react';

const Trains: React.FC = () => {
  const trainCategories = [
    {
      title: 'Rajdhani Express',
      description: 'Premium long-distance trains connecting state capitals to Delhi',
      image: '/Images/Train/Rajdhani.jpg'
    },
    {
      title: 'Shatabdi Express',
      description: 'Day journey trains connecting major cities',
      image: '/Images/Train/Shatabdi.jpg'
    },
    {
      title: 'Duronto Express',
      description: 'Non-stop trains connecting major cities',
      image: '/Images/Train/Duronto.jpg'
    },
    {
      title: 'Vande Bharat Express',
      description: 'India\'s first semi-high-speed train',
      image: '/Images/Train/VandeBharat.jpg'
    },
    {
      title: 'Tejas Express',
      description: 'Premium trains with modern amenities',
      image: '/Images/Train/Tejas.jpg'
    },
    {
      title: 'Garib Rath',
      description: 'Affordable AC trains for budget travelers',
      image: '/Images/Train/GaribRath.jpg'
    },
    {
      title: 'Passenger Trains',
      description: 'Local trains serving short distances',
      image: '/Images/Train/Passenger.jpeg'
    },
    {
      title: 'Goods Trains',
      description: 'Freight trains carrying cargo across India',
      image: '/Images/Train/goods.jpg'
    }
  ];

  return (
    <div className="relative overflow-y-auto scroll-smooth bg-neutral-800 min-h-screen">
      <section className="py-16 relative" id="archive">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-3 text-center text-white">
            <strong>Trains</strong>
          </h2>
          <p className="text-xl mt-4 text-center text-white">
            Discover the diverse fleet of trains that form the backbone of Indian Railways. From luxurious express trains 
            to humble passenger services, each train serves a unique purpose in connecting the vast expanse of India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {trainCategories.map((train, index) => (
              <div key={index} className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 archive-card">
                <img 
                  alt={`Image of ${train.title}`} 
                  className="w-full h-40 object-cover grayscale hover:grayscale-0 rounded-t-lg" 
                  src={train.image} 
                />
                <h3 className="text-2xl font-bold mb-2 text-center">{train.title}</h3>
                <p className="text-center text-neutral-800">
                  {train.description}
                </p>
                <div className="text-center mt-12">
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-6 py-2 transition duration-300 animate-bounce">
                    Learn More
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

export default Trains; 