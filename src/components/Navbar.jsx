import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/20 py-3"
          : "bg-white/80 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/25">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                Corporate
              </span>
              <span className="text-[11px] font-bold text-blue-600 tracking-[0.2em] uppercase leading-tight">
                Business
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-1">
              {navigationLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-5 py-2 text-sm font-semibold tracking-wider transition-all duration-300 rounded-lg ${
                    isActive(path)
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <button className="group relative flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:bg-blue-600 shadow-lg shadow-slate-900/10 hover:shadow-blue-600/30">
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div
                className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl">
          <div className="px-6 py-8 space-y-2">
            {navigationLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-5 py-4 rounded-xl text-base font-bold tracking-wider transition-all duration-300 ${
                  isActive(path)
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full group flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-blue-600/30">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
