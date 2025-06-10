import React, { useState, useEffect } from "react";
import verifactLogo from "../../../assets/verifact-logo.png";
import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = isScrolled
    ? "bg-white/80 backdrop-blur-lg shadow-md border-slate-200"
    : "bg-transparent border-transparent text-white";

  return (
    <header
      id="page-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Verifact */}
          <div className="flex items-center">
            <a
              href="/chat"
              className="flex-shrink-0 flex items-center gap-2 group"
            >
              <img
                className="h-8 w-auto sm:h-9"
                src={verifactLogo}
                alt="Verifact Logo"
              />
              <span
                className={`text-xl sm:text-2xl font-bold transition-colors group-hover:text-blue-600 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Verifact
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8 lg:space-x-10">
            <a
              href="#how-it-works"
              className={`text-sm font-medium ${
                isScrolled ? "text-slate-600" : "text-white"
              } hover:text-blue-600 transition-colors`}
            >
              How It Works
            </a>
            <a
              href="#reason"
              className={`text-sm font-medium ${
                isScrolled ? "text-slate-600" : "text-white"
              } hover:text-blue-600 transition-colors`}
            >
              Why Us?
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium ${
                isScrolled ? "text-slate-600" : "text-white"
              } hover:text-blue-600 transition-colors`}
            >
              Contact
            </a>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-lg h-10 px-5 bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icons toggle based on menu state */}
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg pb-4"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600"
            >
              How It Works
            </a>
            <a
              href="#reason"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600"
            >
              Why Us?
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
          <div className="pt-3 pb-2 px-4 border-t border-slate-200">
            <a
              href="/chat"
              className="block w-full text-center rounded-lg py-2.5 px-4 bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700"
            >
              Verify a Claim
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
