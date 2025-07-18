import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const images = [
    '/Images/index/image1.jpg',
    '/Images/index/image2.jpg',
    '/Images/index/image3.jpg',
    '/Images/index/image4.jpg',
    '/Images/index/image5.jpg',
    '/Images/index/image6.jpeg'
  ];

  const archiveData = [
    {
      title: 'Locomotives',
      description: 'Featuring powerful steam, diesel, and electric engines that have driven India\'s railway network over a century.',
      image: '/Images/index/Locomotive.jpg',
      link: '/locomotives'
    },
    {
      title: 'Trains',
      description: 'Highlighting iconic passenger and freight trains, from luxurious coaches to high-speed advancements, all in one place.',
      image: '/Images/index/Tejas.jpg',
      link: '/trains'
    },
    {
      title: 'Scenic Routes',
      description: 'Capturing stunning landscapes as trains pass through mountains, valleys, deserts, urban areas and coastlines.',
      image: '/Images/index/routes.jpg',
      link: '/scenic-routes'
    },
    {
      title: 'Zones',
      description: 'Exploring the vast network, historical significance, operational structure, and unique characteristics of Indian Railway Zones.',
      image: '/Images/index/Zones.jpg',
      link: '/zones'
    },
    {
      title: 'Locomotive Sheds',
      description: 'Exploring the role, maintenance processes, operational efficiency, and strategic importance of locomotive sheds in Indian Railways.',
      image: '/Images/LocoSheds/TopicLogo.jpeg',
      link: '/loco-sheds'
    },
    {
      title: 'Locomotive Manufacturers',
      description: 'Understanding the production, technological advancements, and contributions of locomotive manufacturers in India.',
      image: '/Images/LocoManufacturers/CLW.jpg',
      link: '/manufacturers'
    },
    {
      title: 'Rolling Stock Factories',
      description: 'Understanding the manufacturing, design innovations, and technological advancements in railway coach and wagon production.',
      image: '/Images/RollingStock/ICF.png',
      link: '/rolling-stock'
    },
    {
      title: 'Workshops/ Depots',
      description: 'Exploring the overhaul, maintenance, and refurbishment processes that ensure the longevity and efficiency of rolling stock in Indian Railways.',
      image: '/Images/Workshops/Jamalpur.jpg',
      link: '/workshops'
    }
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  // Update the carousel data to include title, date, and detailed info
  const historyCarouselImages = [
    { src: '/Images/Train/Steam.jpg', title: 'First Train in India', date: '1853', info: 'The first passenger train in India ran from Bombay to Thane on April 16, 1853, covering 34 km and marking the birth of Indian Railways.' },
    { src: '/Images/Train/electric.jpg', title: 'First Electric Train', date: '1925', info: 'India’s first electric train ran between Bombay VT and Kurla on February 3, 1925, ushering in a new era of railway technology.' },
    { src: '/Images/Train/Shatabdi.jpg', title: 'Shatabdi Express', date: '1988', info: 'The Shatabdi Express, introduced in 1988, set new standards for speed and comfort in Indian Railways, connecting major cities with fast, premium service.' },
    { src: '/Images/Train/VandeBharat.jpg', title: 'Vande Bharat Express', date: '2019', info: 'Launched in 2019, the Vande Bharat Express is India’s first semi-high-speed, fully air-conditioned train, representing a leap in indigenous train technology.' },
  ];
  const [historyCarouselIdx, setHistoryCarouselIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHistoryCarouselIdx((prev) => (prev + 1) % historyCarouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [historyCarouselImages.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to navigate and scroll to top
  const goToHistoryPage = () => {
    navigate('/history');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 50);
  };

  return (
    <div className="relative overflow-y-auto scroll-smooth bg-neutral-800">
      {/* Home Section */}
      <section className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center relative" id="home">
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <img
              key={index}
              alt={`Background image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              src={image}
            />
          ))}
        </div>
        <h1 className="text-5xl font-bold relative z-10">RailFan</h1>
        <p className="text-2xl mt-4 relative z-10">From Steam to Speed – A Rail Enthusiast's Haven</p>
        <p className="text-xl mt-2 relative z-10">Made By a RailFan, for a RailFan</p>
        <button 
          className="cursor-pointer absolute bottom-10 z-10"
          onClick={scrollToAbout}
        >
          <i className="fas fa-arrow-down text-3xl animate-bounce"></i>
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-800" id="about">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-white fade-in">About</h2>
          <p className="mb-8 text-center text-lg leading-relaxed text-justify text-white fade-in">
            Dive into the rich heritage and vast network of Indian Railways with RailFan! From legendary trains like the Rajdhani, Shatabdi, 
            and Vande Bharat to breathtaking routes through the Western Ghats, Himalayas, and Konkan coast, we bring you closer to the 
            heartbeat of India's railway system. Discover fascinating facts, historical milestones, and the engineering marvels that 
            connect millions across the nation. If you have any question, you can contact me or chat with me on my official
            <a className="text-blue-500" href="https://x.com/SarveshM_2006"> Twitter page</a>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start w-full fade-in">
              <img alt="Icon representing a powerful locomotive" className="w-16 h-16 mr-4" src="https://storage.googleapis.com/a1aa/image/G7dxo53bnJic71Tk3j3ILMY7k9XxQnjIDDlo7cVY2_A.jpg" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Discover India's Mighty Locomotives</h3>
                <p className="text-white">
                  Explore the heart of Indian Railways—its powerful locomotives! From classic steam engines to modern electric and 
                  diesel beasts, dive into detailed specs, history, and fun facts about the engines that drive India's vast rail 
                  network.
                </p>
              </div>
            </div>
            <div className="flex items-start w-full ml-8 fade-in">
              <img alt="Icon representing a scenic route" className="w-16 h-16 mr-4" src="https://storage.googleapis.com/a1aa/image/7VC4i3y9HIKgpajlG1mCQunu3v2gU3B9vs_bPr0duOM.jpg" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Scenic Routes & Breathtaking Journeys</h3>
                <p className="text-white">
                  Experience India's most picturesque train journeys, from the Himalayan toy trains to the Konkan coastline. 
                  Find travel tips, best routes, and must-visit destinations to make your next rail adventure unforgettable.
                </p>
              </div>
            </div>
            <div className="flex items-start w-full fade-in">
              <img alt="Icon representing a connecting train" className="w-16 h-16 mr-4" src="https://storage.googleapis.com/a1aa/image/_KBBhexbAm5MQVNCC8qex__GyqzOEqt2d9qAtYSMOEQ.jpg" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Trains That Connect the Nation</h3>
                <p className="text-white">
                  From the legendary <strong>Rajdhani Express</strong> to the humble passenger trains, get insights into India's most 
                  iconic trains. Learn about their routes, onboard experiences, and historical significance, making every journey a 
                  memorable one.
                </p>
              </div>
            </div>
            <div className="flex items-start w-full ml-8 fade-in">
              <img alt="Icon representing a community of rail enthusiasts" className="w-16 h-16 mr-4" src="https://storage.googleapis.com/a1aa/image/m2jGpJJZvbF-kOPky7Sk_Tbpo27bNOqDwBL7IFg9TMs.jpg" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">RailFan History & Community Stories</h3>
                <p className="text-white">
                  Join a passionate community of train lovers! Explore the rich history of Indian Railways, read exciting travelogues, 
                  and expert reviews from fellow RailFans. Share your experiences, discover hidden gems, and celebrate the magic of Indian Railways together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      
      <section
        className="relative w-full py-24 flex items-center justify-center overflow-hidden"
        id="history"
        style={{ minHeight: '600px' }}>
        {/* Crossfade background images */}
        <div className="absolute inset-0 w-full h-full z-0">
          {historyCarouselImages.map((img, idx) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === historyCarouselIdx ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: 1 }}
            />
          ))}
          {/* Overlay for darkening */}
          <div className="absolute inset-0 bg-black bg-opacity-60" style={{zIndex: 3}}></div>
        </div>
        <div className="container mx-auto px-4 max-w-5xl flex flex-row items-stretch min-h-[400px] relative z-10">
          {/* Left (empty for background effect) */}
          <div className="flex-1 hidden md:block"></div>
          {/* Right overlay */}
          <div className="w-full md:w-1/2 bg-black bg-opacity-70 rounded-xl shadow-2xl flex flex-col justify-center p-10 ml-auto min-h-[400px]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">{historyCarouselImages[historyCarouselIdx].title}</h2>
            <div className="text-lg md:text-2xl text-blue-200 font-bold mb-2">{historyCarouselImages[historyCarouselIdx].date}</div>
            <p className="text-lg md:text-xl text-white mb-8">{historyCarouselImages[historyCarouselIdx].info}</p>
            <button
              onClick={goToHistoryPage}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold py-4 px-10 rounded-full text-xl transform hover:scale-105 transition duration-300 shadow-lg mt-2 w-fit"
            >
              <i className="fas fa-train mr-3"></i>
              Explore Railway History
            </button>
            {/* Carousel dots */}
            <div className="flex space-x-2 mt-8">
              {historyCarouselImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === historyCarouselIdx ? 'bg-blue-400' : 'bg-gray-300'} transition`}
                  onClick={() => setHistoryCarouselIdx(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archives Section */}
      <section className="py-16 relative" id="archive">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center text-white fade-in">Archives</h2>
          <p className="text-xl mt-4 text-center text-white fade-in">
            The Archives section of our website showcases the rich diversity of Indian Railways through carefully curated categories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {archiveData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white bg-opacity-80 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full min-h-[420px]"
                style={{ minHeight: '420px' }}
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl bg-neutral-200 flex items-center justify-center">
                  <img
                    alt={`Image of ${item.title}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                    src={item.image}
                  />
                </div>
                <div className="flex flex-col flex-1 px-4 py-2 w-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-center text-neutral-900">{item.title}</h3>
                    <p className="text-center text-neutral-800 mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-center mt-auto mb-4">
                    {item.link === '/locomotives' ? (
                      <Link to="/locomotives">
                        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-7 py-2 transition duration-300 shadow-lg">
                          Explore
                        </button>
                      </Link>
                    ) : item.link === '/trains' ? (
                      <Link to="/trains">
                        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-7 py-2 transition duration-300 shadow-lg">
                          Explore
                        </button>
                      </Link>
                    ) : (
                      <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-7 py-2 transition duration-300 shadow-lg">
                        Explore
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-neutral-800 py-16 px-2" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-white tracking-tight">Contact & Credits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 shadow-2xl rounded-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-blue-400 transition-all duration-300">
              <h3 className="font-bold text-xl text-center text-blue-900 mb-2">Indian Railways</h3>
              <p className="text-md text-center text-neutral-800 mb-4">
                Note: This site is not officially affiliated with Indian Railways. The official web site of Indian Railways is:
              </p>
              <a href="http://www.indianrailways.gov.in" className="text-blue-600 text-center block font-semibold underline hover:text-blue-800 transition">Visit Indian Railways</a>
            </div>
            <div className="bg-white/90 shadow-2xl rounded-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-purple-400 transition-all duration-300">
              <h3 className="font-bold text-xl text-center text-purple-900 mb-2">IRFCA</h3>
              <p className="text-md text-center text-neutral-800 mb-4">
                A big inspiration to this site is IRFCA.
              </p>
              <a href="https://www.irfca.org" className="text-blue-600 text-center block font-semibold underline hover:text-blue-800 transition">Visit IRFCA</a>
            </div>
            <div className="bg-white/90 shadow-2xl rounded-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-pink-400 transition-all duration-300">
              <h3 className="font-bold text-xl text-center text-pink-900 mb-2">Get in Touch</h3>
              <p className="text-md text-center text-neutral-800 mb-4">Have feedback, suggestions, or want to collaborate?</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=msarvesh2k6@gmail.com&su=RailFan%20Contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 text-center block font-semibold underline hover:text-pink-800 transition"
              >
                msarvesh2k6@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center mb-8">
            <img alt="Logo" className="mx-auto mb-4 rounded-full shadow-lg border-4 border-white" height="100" src="/LOGO.png" width="100"/>
            <div className="flex space-x-6 mt-2">
              <a href="https://www.linkedin.com/in/sarvesh-mudaliar/" className="hover:scale-125 transition-transform" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-4xl text-sky-700 hover:text-sky-500 transition"></i>
              </a>
              <a href="https://x.com/SarveshM_2006" className="hover:scale-125 transition-transform" aria-label="Twitter">
                <i className="fab fa-twitter text-4xl text-blue-400 hover:text-blue-300 transition"></i>
              </a>
              <a href="https://github.com/SARVESH2K6" className="hover:scale-125 transition-transform" aria-label="GitHub">
                <i className="fab fa-github text-4xl text-neutral-800 hover:text-black transition"></i>
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-700 pt-6 mt-8">
            <p className="text-neutral-300 text-center">Copyright © 2025, RailFan</p>
            <p className="text-neutral-400 text-center mt-2">Created by Sarvesh Mudaliar</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 