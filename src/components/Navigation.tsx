import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-8">
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
          className="text-white hover:text-gray-300 transition-colors text-lg"
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
  );
};

export default Navigation;