import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="fixed top-4 w-full px-4 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo container */}
        <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
          <img
            src="/placeholder.svg"
            alt="Logo"
            className="w-8 h-8"
          />
        </div>
        
        {/* Navigation links */}
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