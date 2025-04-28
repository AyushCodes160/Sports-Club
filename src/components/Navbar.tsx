import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-slate-900 shadow-md py-2'
      : 'bg-slate-900/95 backdrop-blur-sm py-4'
  }`;

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative block py-2 px-3 transition-all duration-200 ${
      isActive
        ? 'text-blue-400 font-semibold'
        : isScrolled
        ? 'text-slate-200 hover:text-blue-400'
        : 'text-slate-200 hover:text-blue-400'
    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <Trophy className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-slate-200">NST SportsClub</span>
          </NavLink>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-200" />
            ) : (
              <Menu className="w-6 h-6 text-slate-200" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/sports" className={linkClasses}>
              Sports
            </NavLink>
            <NavLink to="/gallery" className={linkClasses}>
              Gallery
            </NavLink>
            <NavLink to="/leaders" className={linkClasses}>
              Leaders
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-slate-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-2 px-4">
            <NavLink
              to="/"
              className="py-2 text-slate-200 hover:text-blue-400 font-medium"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/sports"
              className="py-2 text-slate-200 hover:text-blue-400 font-medium"
              onClick={closeMenu}
            >
              Sports
            </NavLink>
            <NavLink
              to="/gallery"
              className="py-2 text-slate-200 hover:text-blue-400 font-medium"
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/leaders"
              className="py-2 text-slate-200 hover:text-blue-400 font-medium"
              onClick={closeMenu}
            >
              Leaders
            </NavLink>
            <NavLink
              to="/about"
              className="py-2 text-slate-200 hover:text-blue-400 font-medium"
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="py-2 text-slate-200 hover:text-blue-400 font-medium"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;