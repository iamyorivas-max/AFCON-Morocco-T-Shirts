import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS, APP_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="h-8 w-8 bg-morocco-red rounded-full flex items-center justify-center text-morocco-gold font-bold border-2 border-morocco-green">M</span>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 uppercase">
                CAN <span className="text-morocco-red">Morocco</span>
              </span>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-morocco-red' : 'text-slate-600 hover:text-morocco-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/order">
                <button className="p-2 text-slate-600 hover:text-morocco-red transition-colors">
                    <ShoppingBag size={24} />
                </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-morocco-red focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-red-50 text-morocco-red'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-morocco-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
                to="/order"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-3 py-2 mt-4 rounded-md text-base font-medium bg-morocco-green text-white"
            >
                Order Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};