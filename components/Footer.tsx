import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider">CAN Morocco</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Celebrating African football excellence. The official platform for custom fan gear for the 2025 Africa Cup of Nations hosted in the Kingdom of Morocco.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-morocco-gold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/customize" className="hover:text-white transition-colors">Customize Jersey</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About AFCON</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-morocco-gold mb-4 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-morocco-red" />
                <span>Casablanca, Morocco</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-morocco-red" />
                <span>+212 600 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-morocco-red" />
                <span>support@canmorocco.ma</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-morocco-gold mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-morocco-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-morocco-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-morocco-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} AFCON Morocco Fan Store. All rights reserved. This is a demo project.</p>
        </div>
      </div>
    </footer>
  );
};