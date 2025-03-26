
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern-light p-4">
      <div className="text-center max-w-md">
        <div className="mb-8 relative">
          <div className="text-8xl font-yatra text-gradient-primary">404</div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-india-saffron/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-india-green/10 rounded-full blur-xl animate-pulse"></div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 rounded-full bg-india-saffron text-white font-medium transition-all hover:shadow-lg hover:shadow-india-saffron/20 hover:-translate-y-1"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
