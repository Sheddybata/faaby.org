import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 w-full">
        <div className="flex justify-between items-center h-20 gap-2 sm:gap-3">
          <Link to="/" className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0 min-w-0">
            <img 
              src="/faabylogo.png" 
              alt="FAABY Global Services" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain flex-shrink-0"
            />
            <span className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold text-[#028a04] truncate max-w-[120px] sm:max-w-none">
              <span className="hidden sm:inline">FAABY GLOBAL SERVICES</span>
              <span className="sm:hidden">FAABY</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 flex-shrink-0">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-[#028a04]'
                    : 'text-gray-600 hover:text-[#028a04]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#028a04] flex-shrink-0 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-semibold ${
                  location.pathname === link.path
                    ? 'text-[#028a04]'
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
