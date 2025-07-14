import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const History: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const navigate = useNavigate();

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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-800 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl font-bold mb-8 text-center text-white">History of Indian Railways</h1>
        <p className="text-xl text-center text-white leading-relaxed mb-12">
          Embark on a journey through time as we explore the remarkable evolution of Indian Railways. 
          From the first steam locomotive to the modern high-speed trains, discover the milestones that 
          shaped the world's largest railway network.
        </p>
        
        <div className="history-timeline">
          <div className="relative">
            {/* Train Track */}
            <div className="timeline-track"></div>
            
            {/* History Events */}
            <div className="space-y-8">
              <div className={`history-card left ${visibleCards.has(0) ? 'visible' : ''}`}>
                <div className="history-card-content">
                  <img src="/Images/index/image1.jpg" alt="First Passenger Train" className="history-card-image" />
                  <div className="history-card-date">April 16, 1853</div>
                  <div className="history-card-title">First Passenger Train in India</div>
                  <div className="history-card-description">
                    The first passenger train in India ran from Bombay (now Mumbai) to Thane, covering a distance of 34 kilometers. This marked the beginning of the Indian Railways.
                  </div>
                </div>
              </div>
              
              <div className={`history-card right ${visibleCards.has(1) ? 'visible' : ''}`}>
                <div className="history-card-content">
                  <img src="/Images/Locomotive/Steam.jpg" alt="Steam Locomotives" className="history-card-image" />
                  <div className="history-card-date">1874</div>
                  <div className="history-card-title">Introduction of Steam Locomotives</div>
                  <div className="history-card-description">
                    Steam locomotives became the backbone of Indian Railways, with various classes serving different purposes across the vast network.
                  </div>
                </div>
              </div>
              
              <div className={`history-card left ${visibleCards.has(2) ? 'visible' : ''}`}>
                <div className="history-card-content">
                  <img src="/Images/Locomotive/electric.jpg" alt="Electrification" className="history-card-image" />
                  <div className="history-card-date">1925</div>
                  <div className="history-card-title">Electrification Begins</div>
                  <div className="history-card-description">
                    The first electric train ran between Bombay Victoria Terminus and Kurla, marking the beginning of electrification in Indian Railways.
                  </div>
                </div>
              </div>
              
              <div className={`history-card right ${visibleCards.has(3) ? 'visible' : ''}`}>
                <div className="history-card-content">
                  <img src="/Images/Train/VandeBharat.jpg" alt="Vande Bharat" className="history-card-image" />
                  <div className="history-card-date">2019</div>
                  <div className="history-card-title">Vande Bharat Express</div>
                  <div className="history-card-description">
                    The first Vande Bharat Express was introduced, marking India's entry into the era of semi-high-speed trains.
                  </div>
                </div>
              </div>
              
              <div className={`history-card left ${visibleCards.has(4) ? 'visible' : ''}`}>
                <div className="history-card-content">
                  <img src="/Images/Train/Rajdhani.jpg" alt="Rajdhani Express" className="history-card-image" />
                  <div className="history-card-date">1969</div>
                  <div className="history-card-title">Rajdhani Express</div>
                  <div className="history-card-description">
                    The first Rajdhani Express was introduced between New Delhi and Howrah, offering premium air-conditioned service connecting the capital with major cities.
                  </div>
                </div>
              </div>
              
              <div className={`history-card right ${visibleCards.has(5) ? 'visible' : ''}`}>
                <div className="history-card-content">
                  <img src="/Images/Train/Shatabdi.jpg" alt="Shatabdi Express" className="history-card-image" />
                  <div className="history-card-date">1988</div>
                  <div className="history-card-title">Shatabdi Express</div>
                  <div className="history-card-description">
                    The Shatabdi Express was introduced, providing high-speed day journey services with modern amenities and faster travel times.
                  </div>
                </div>
              </div>
              
              <div className={`history-card left ${visibleCards.has(6) ? 'visible' : ''}`}>
                <div className="history-card-content">
                  <img src="/Images/Train/Duronto.jpg" alt="Duronto Express" className="history-card-image" />
                  <div className="history-card-date">2009</div>
                  <div className="history-card-title">Duronto Express</div>
                  <div className="history-card-description">
                    The Duronto Express was introduced, offering non-stop point-to-point services between major cities, reducing travel time significantly.
                  </div>
                </div>
              </div>
              
              <div className={`history-card right ${visibleCards.has(7) ? 'visible' : ''}`}>
                <div className="history-card-content">
                  <img src="/Images/Train/Gatimaan.jpg" alt="Gatimaan Express" className="history-card-image" />
                  <div className="history-card-date">2016</div>
                  <div className="history-card-title">Gatimaan Express</div>
                  <div className="history-card-description">
                    India's first semi-high-speed train, Gatimaan Express, was introduced between New Delhi and Agra, reaching speeds of 160 km/h.
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default History; 