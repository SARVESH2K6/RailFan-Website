import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HistoryEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  period: string;
}

const History: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const navigate = useNavigate();

  const historyEvents: HistoryEvent[] = [
    // 1800-1850
    {
      id: 1,
      date: "1832",
      title: "First Railway Proposal",
      description: "The first proposal for a railway in India was made by a group of British merchants who wanted to build a railway from Madras to Bangalore.",
      image: "/Images/index/image1.jpg",
      period: "1800-1850"
    },
    {
      id: 2,
      date: "1844",
      title: "First Railway Survey",
      description: "The first railway survey was conducted by the East India Company to explore the possibility of building railways in India.",
      image: "/Images/index/image2.jpg",
      period: "1800-1850"
    },
    
    // 1850-1899
    {
      id: 3,
      date: "April 16, 1853",
      title: "First Passenger Train in India",
      description: "The first passenger train in India ran from Bombay (now Mumbai) to Thane, covering a distance of 34 kilometers. This marked the beginning of the Indian Railways.",
      image: "/Images/index/image1.jpg",
      period: "1850-1899"
    },
    {
      id: 4,
      date: "1854",
      title: "First Railway Line in Eastern India",
      description: "The first railway line in Eastern India was opened between Howrah and Hooghly, covering a distance of 37 kilometers.",
      image: "/Images/index/image3.jpg",
      period: "1850-1899"
    },
    {
      id: 5,
      date: "1874",
      title: "Introduction of Steam Locomotives",
      description: "Steam locomotives became the backbone of Indian Railways, with various classes serving different purposes across the vast network.",
      image: "/Images/Locomotive/Steam.jpg",
      period: "1850-1899"
    },
    {
      id: 6,
      date: "1885",
      title: "Formation of Railway Board",
      description: "The Railway Board was established to oversee the construction and operation of railways in India.",
      image: "/Images/index/image4.jpg",
      period: "1850-1899"
    },
    
    // 1900-1950
    {
      id: 7,
      date: "1925",
      title: "Electrification Begins",
      description: "The first electric train ran between Bombay Victoria Terminus and Kurla, marking the beginning of electrification in Indian Railways.",
      image: "/Images/Locomotive/electric.jpg",
      period: "1900-1950"
    },
    {
      id: 8,
      date: "1947",
      title: "Partition and Railway Division",
      description: "Following India's independence and partition, the railway network was divided between India and Pakistan, leading to significant reorganization.",
      image: "/Images/index/image5.jpg",
      period: "1900-1950"
    },
    
    // 1950-Present
    {
      id: 9,
      date: "1951",
      title: "Nationalization of Railways",
      description: "The Indian Railways was nationalized and brought under the control of the Government of India, marking a new era of centralized management.",
      image: "/Images/index/image6.jpeg",
      period: "1950-Present"
    },
    {
      id: 10,
      date: "1956",
      title: "Introduction of Diesel Locomotives",
      description: "The first diesel locomotives were introduced in Indian Railways, providing more efficient and cleaner alternatives to steam locomotives.",
      image: "/Images/Locomotive/Diesel.jpg",
      period: "1950-Present"
    },
    {
      id: 11,
      date: "1969",
      title: "Rajdhani Express",
      description: "The first Rajdhani Express was introduced between New Delhi and Howrah, offering premium air-conditioned service connecting the capital with major cities.",
      image: "/Images/Train/Rajdhani.jpg",
      period: "1950-Present"
    },
    {
      id: 12,
      date: "1988",
      title: "Shatabdi Express",
      description: "The Shatabdi Express was introduced, providing high-speed day journey services with modern amenities and faster travel times.",
      image: "/Images/Train/Shatabdi.jpg",
      period: "1950-Present"
    },
    {
      id: 13,
      date: "1995",
      title: "Konkan Railway",
      description: "The Konkan Railway was completed, connecting Mumbai to Mangalore through the scenic Western Ghats, featuring numerous tunnels and bridges.",
      image: "/Images/index/Kerala.jpg",
      period: "1950-Present"
    },
    {
      id: 14,
      date: "2009",
      title: "Duronto Express",
      description: "The Duronto Express was introduced, offering non-stop point-to-point services between major cities, reducing travel time significantly.",
      image: "/Images/Train/Duronto.jpg",
      period: "1950-Present"
    },
    {
      id: 15,
      date: "2016",
      title: "Gatimaan Express",
      description: "India's first semi-high-speed train, Gatimaan Express, was introduced between New Delhi and Agra, reaching speeds of 160 km/h.",
      image: "/Images/Train/Gatimaan.jpg",
      period: "1950-Present"
    },
    {
      id: 16,
      date: "2019",
      title: "Vande Bharat Express",
      description: "The first Vande Bharat Express was introduced, marking India's entry into the era of semi-high-speed trains with indigenous technology.",
      image: "/Images/Train/VandeBharat.jpg",
      period: "1950-Present"
    },
    {
      id: 17,
      date: "2023",
      title: "Vande Bharat Metro",
      description: "The Vande Bharat Metro was introduced for suburban services, bringing modern technology to daily commuter services.",
      image: "/Images/Train/VandeMetro.jpg",
      period: "1950-Present"
    },
    {
      id: 18,
      date: "2024",
      title: "High-Speed Rail Projects",
      description: "India began construction of its first high-speed rail corridor between Mumbai and Ahmedabad, marking the beginning of bullet train era in India.",
      image: "/Images/Train/Bullet Train.jpg",
      period: "1950-Present"
    }
  ];

  const filteredEvents = selectedPeriod === 'all' 
    ? historyEvents 
    : historyEvents.filter(event => event.period === selectedPeriod);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.history-card');
      const newVisibleCards = new Set<number>();

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          newVisibleCards.add(index);
        }
      });

      setVisibleCards(newVisibleCards);

      // Check scroll position for scroll-to-top button
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowScrollToTop(scrollPercentage > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredEvents]);

  return (
    <div className="min-h-screen bg-neutral-800 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold mb-8 text-center text-white">History of Indian Railways</h1>
        <p className="text-xl text-center text-white leading-relaxed mb-8">
          Embark on a journey through time as we explore the remarkable evolution of Indian Railways. 
          From the first steam locomotive to the modern high-speed trains, discover the milestones that 
          shaped the world's largest railway network.
        </p>
        
        {/* Timeline Filter Dropdown */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="appearance-none bg-white bg-opacity-90 text-gray-800 font-semibold py-3 px-6 pr-10 rounded-lg shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 cursor-pointer transition-all duration-300 hover:bg-opacity-100"
            >
              <option value="all">All Timeline</option>
              <option value="1800-1850">1800-1850</option>
              <option value="1850-1899">1850-1899</option>
              <option value="1900-1950">1900-1950</option>
              <option value="1950-Present">1950-Present</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="history-timeline">
          <div className="relative">
            {/* Train Track */}
            <div className="timeline-track"></div>
            
            {/* History Events */}
            <div className="space-y-12">
              {filteredEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className={`history-card ${index % 2 === 0 ? 'left' : 'right'} ${visibleCards.has(index) ? 'visible' : ''}`}
                >
                  <div className="history-card-content">
                    <img src={event.image} alt={event.title} className="history-card-image" />
                    <div className="history-card-date">{event.date}</div>
                    <div className="history-card-title">{event.title}</div>
                    <div className="history-card-description">
                      {event.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-105 transition duration-300 shadow-lg"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default History; 