import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TShirtConfig } from '../types';
import { Button } from '../components/Button';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Order: React.FC = () => {
  const location = useLocation();
  const [orderData, setOrderData] = useState({
    fullName: '',
    phone: '',
    city: '',
    quantity: 1,
    message: ''
  });

  const [prefilledConfig, setPrefilledConfig] = useState<TShirtConfig | null>(null);

  useEffect(() => {
    if (location.state && location.state.config) {
      setPrefilledConfig(location.state.config);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    let msg = `*NEW ORDER - AFCON MOROCCO STORE*%0A%0A`;
    msg += `*Customer Details:*%0A`;
    msg += `Name: ${orderData.fullName}%0A`;
    msg += `Phone: ${orderData.phone}%0A`;
    msg += `City: ${orderData.city}%0A%0A`;
    
    if (prefilledConfig) {
      msg += `*Product Details:*%0A`;
      msg += `Color: ${prefilledConfig.color}%0A`;
      msg += `Name on Shirt: ${prefilledConfig.name}%0A`;
      msg += `Number: ${prefilledConfig.number}%0A`;
      msg += `Size: ${prefilledConfig.size}%0A`;
      msg += `Quantity: ${orderData.quantity}%0A`;
    } else {
        msg += `*Inquiry:*%0AInterested in placing an order.%0A`;
    }

    if (orderData.message) {
      msg += `*Note:* ${orderData.message}`;
    }

    // Redirect to WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-slate-900 p-8 text-center">
            <h1 className="text-3xl font-display font-bold text-white">FINALIZE YOUR ORDER</h1>
            <p className="text-slate-400 mt-2">You are one step away from joining the pride.</p>
          </div>

          <div className="p-8">
            {prefilledConfig && (
              <div className="mb-8 p-4 bg-green-50 border border-green-100 rounded-lg flex items-center gap-4">
                <div className="bg-white p-2 rounded shadow-sm">
                  <ShoppingBag className="text-morocco-green" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Selected Item</h3>
                  <p className="text-sm text-slate-600">
                    Custom Jersey ({prefilledConfig.size}) • {prefilledConfig.name} #{prefilledConfig.number}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none"
                    placeholder="Ahmed Benali"
                    value={orderData.fullName}
                    onChange={e => setOrderData({...orderData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none"
                    placeholder="06 00 00 00 00"
                    value={orderData.phone}
                    onChange={e => setOrderData({...orderData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                  <select 
                    required
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none bg-white"
                    value={orderData.city}
                    onChange={e => setOrderData({...orderData, city: e.target.value})}
                  >
                    <option value="">Select City</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Marrakech">Marrakech</option>
                    <option value="Tangier">Tangier</option>
                    <option value="Fes">Fes</option>
                    <option value="Agadir">Agadir</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                  <input 
                    type="number" 
                    min="1"
                    max="50"
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none"
                    value={orderData.quantity}
                    onChange={e => setOrderData({...orderData, quantity: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Custom Message (Optional)</label>
                <textarea 
                  rows={3}
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:outline-none"
                  placeholder="Special instructions for delivery..."
                  value={orderData.message}
                  onChange={e => setOrderData({...orderData, message: e.target.value})}
                />
              </div>

              <Button variant="whatsapp" fullWidth className="h-14 text-lg font-bold flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                Send Order via WhatsApp
              </Button>
              <p className="text-center text-xs text-slate-500">
                Clicking the button will open WhatsApp with your pre-filled order details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};