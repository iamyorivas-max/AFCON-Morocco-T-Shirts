import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-slate-900">GET IN TOUCH</h1>
          <p className="text-slate-500 mt-2">Questions about orders, sizing, or bulk purchases? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="bg-morocco-red/10 p-3 rounded-full text-morocco-red">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">WhatsApp / Phone</h3>
                <p className="text-slate-600">+212 600 000 000</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="bg-morocco-green/10 p-3 rounded-full text-morocco-green">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="text-slate-600">contact@canmorocco.ma</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="bg-morocco-gold/10 p-3 rounded-full text-morocco-gold">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Location</h3>
                <p className="text-slate-600">Maarif, Casablanca, Morocco</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-8">
             <h2 className="text-xl font-bold mb-6">Send us a message</h2>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                   <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                   <input type="email" className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none" />
                 </div>
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none"></textarea>
               </div>
               <Button type="button" className="w-full md:w-auto flex items-center gap-2">
                 <Send size={18} /> Send Message
               </Button>
             </form>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-12 w-full h-80 bg-slate-200 rounded-xl overflow-hidden relative">
           <div className="absolute inset-0 flex items-center justify-center text-slate-500">
              <div className="text-center">
                 <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                 <p>Google Maps Integration Placeholder</p>
              </div>
           </div>
           {/* In production, embed Google Maps iframe here */}
           <img 
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80" 
            alt="Map Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
           />
        </div>
      </div>
    </div>
  );
};