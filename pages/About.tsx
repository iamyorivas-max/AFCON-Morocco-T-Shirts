import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-morocco-red py-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Kingdom of Football</h1>
        <p className="mt-4 text-xl opacity-90 max-w-2xl mx-auto px-4">Celebrating the 2025 Africa Cup of Nations on home soil.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
           <div className="w-full md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80" 
               alt="Moroccan Football" 
               className="rounded-lg shadow-xl"
             />
           </div>
           <div className="w-full md:w-1/2">
             <h2 className="text-2xl font-bold text-slate-900 mb-4">A Historic Return</h2>
             <p className="text-slate-600 leading-relaxed">
               Morocco welcomes Africa! As hosts of the 35th edition of the Africa Cup of Nations, we are ready to showcase our world-class stadiums, vibrant culture, and unparalleled passion for the beautiful game. This isn't just a tournament; it's a celebration of African unity.
             </p>
           </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
           <div className="w-full md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&q=80" 
               alt="Atlas Lions Fans" 
               className="rounded-lg shadow-xl"
             />
           </div>
           <div className="w-full md:w-1/2">
             <h2 className="text-2xl font-bold text-slate-900 mb-4">The Atlas Lions</h2>
             <p className="text-slate-600 leading-relaxed">
               Following our historic run at the World Cup, expectations are high. Our custom jerseys are designed to embody the spirit of the Atlas Lions – fierce, proud, and determined. When you wear this shirt, you carry the hopes of a nation.
             </p>
           </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-slate-100">
           <div>
             <span className="block text-4xl font-display font-bold text-morocco-red">24</span>
             <span className="text-sm text-slate-500 uppercase tracking-wide">Nations</span>
           </div>
           <div>
             <span className="block text-4xl font-display font-bold text-morocco-green">6</span>
             <span className="text-sm text-slate-500 uppercase tracking-wide">Host Cities</span>
           </div>
           <div>
             <span className="block text-4xl font-display font-bold text-morocco-gold">1</span>
             <span className="text-sm text-slate-500 uppercase tracking-wide">Champion</span>
           </div>
        </div>
      </div>
    </div>
  );
};