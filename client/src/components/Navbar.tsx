import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isVisible 
      ? 'opacity-100 transform translate-y-0 bg-black bg-opacity-80 backdrop-blur-sm py-4' 
      : 'opacity-0 transform -translate-y-full py-6'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-4xl font-bold text-white cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => scrollToSection('home')}
          >
            RailFan
          </div>
          
          <ul className="flex space-x-8 text-white">
            <li>
              <button 
                className="text-xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className="text-xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className="text-xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => scrollToSection('history')}
              >
                History
              </button>
            </li>
            <li>
              <button 
                className="text-xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => scrollToSection('archive')}
              >
                Archives
              </button>
            </li>
            <li>
              <button 
                className="text-xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 