import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

interface NavigationProps {
  onShowPasswordModal: () => void;
}

const Navigation = ({ onShowPasswordModal }: NavigationProps) => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    hoverTimer.current = setTimeout(() => {
      onShowPasswordModal();
    }, 3000);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-4 w-full px-4 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div 
          className={`w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${isHovering ? 'scale-110' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/placeholder.svg"
            alt="Logo"
            className="w-8 h-8"
          />
        </div>
        
        {isAboutPage ? (
          <Link 
            to="/" 
            className="text-black hover:text-gray-700 transition-colors text-lg"
          >
            Portfolio
          </Link>
        ) : (
          <Link 
            to="/about" 
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            About & Contact
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;