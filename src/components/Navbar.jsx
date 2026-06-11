import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  // State to toggle mobile navigation menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to handle navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  // Hook to get current route path
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Add scroll event listener to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Brand Identity Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                Corporate
              </span>
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
                Business
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <Link
                to="/"
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive("/")
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive("/about")
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                About Us
              </Link>
            </div>

            {/* Primary Call to Action Button */}
            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-600/30">
              Get in Touch
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`md:hidden absolute w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider ${
              isActive("/")
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider ${
              isActive("/about")
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            About Us
          </Link>
          <div className="pt-4">
            <button className="w-full flex justify-center items-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg">
              Get in Touch
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
