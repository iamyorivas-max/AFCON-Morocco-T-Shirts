import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Home', 'Away', 'Special', 'Training'];

  const filteredProducts = filter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold text-slate-900">OFFICIAL COLLECTION</h1>
            <p className="text-slate-500 mt-2">Authentic designs for the 2025 tournament.</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <Filter size={20} className="text-slate-400 mr-2" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === cat 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} to="/customize" className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 mb-4">
                {product.isNew && (
                  <span className="absolute top-4 left-4 z-10 bg-morocco-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    New
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg shadow-lg hover:bg-morocco-red hover:text-white transition-colors">
                    Customize Now
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-morocco-red font-bold uppercase tracking-wider">{product.category} Kit</p>
                <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                <p className="text-slate-600">{product.price} MAD</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};