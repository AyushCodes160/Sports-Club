import React from 'react';
import { NavLink } from 'react-router-dom';
import { Trophy, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-12 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">NST SportsClub</span>
            </div>
            <p className="text-slate-400 mb-4">
              Empowering students through sports and teamwork since 1985. Join us to discover your potential!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/sports" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/leaders" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Leaders
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Sports</h3>
            <ul className="space-y-2">
              <li>
                <a href="/sports" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Basketball
                </a>
              </li>
              <li>
                <a href="/sports" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Soccer
                </a>
              </li>
              <li>
                <a href="/sports" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Swimming
                </a>
              </li>
              <li>
                <a href="/sports" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Tennis
                </a>
              </li>
              <li>
                <a href="/sports" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Volleyball
                </a>
              </li>
              <li>
                <a href="/sports" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Track & Field
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                <span className="text-slate-400">123 University Ave, College Town, CT 10101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <span className="text-slate-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-slate-400">info@nst-sports.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} NST SportsClub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;