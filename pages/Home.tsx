import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shirt, Truck, Star } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-slate-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop" 
            alt="Football Stadium Atmosphere" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
          <div className="inline-block px-4 py-1 mb-6 border border-morocco-gold rounded-full bg-slate-900/50 backdrop-blur-sm">
            <span className="text-morocco-gold font-bold tracking-widest text-xs uppercase">Official Fan Gear • AFCON 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6">
            ROAR WITH <br />
            <span className="text-morocco-red">THE LIONS</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Support Morocco in style. Customize your premium quality jersey with your name and number. 
            Ready for the stands, ready for victory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/customize">
              <Button variant="primary" className="h-14 px-8 text-lg w-full sm:w-auto">
                Create Your Jersey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                View Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">HOW IT WORKS</h2>
            <div className="w-20 h-1 bg-morocco-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-morocco-red/10 text-morocco-red rounded-full flex items-center justify-center mb-6">
                <Shirt size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Customize Design</h3>
              <p className="text-slate-600">Choose your favorite colors, add your name and lucky number. See it in real-time.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-morocco-green/10 text-morocco-green rounded-full flex items-center justify-center mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Fast Delivery</h3>
              <p className="text-slate-600">We ship all across Morocco. Get your gear before the match starts.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-morocco-gold/10 text-morocco-gold/80 rounded-full flex items-center justify-center mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Premium Quality</h3>
              <p className="text-slate-600">Breathable fabric designed for the heat of the game and the passion of the fans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto md:h-80">
           <img src="https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80" alt="Fan 1" className="w-full h-full object-cover" />
           <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80" alt="Fan 2" className="w-full h-full object-cover" />
           <img src="https://images.unsplash.com/photo-1552318415-cc98d49cf3e9?auto=format&fit=crop&q=80" alt="Fan 3" className="w-full h-full object-cover" />
           <div className="bg-morocco-red flex flex-col items-center justify-center p-8 text-white text-center">
             <h3 className="font-display text-3xl font-bold mb-2">JOIN THE PRIDE</h3>
             <p className="mb-6 opacity-90">Be part of the Red Sea in the stadium.</p>
             <Link to="/order">
                <Button variant="outline" className="text-morocco-red border-white bg-white hover:bg-slate-100">Get Yours Now</Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};