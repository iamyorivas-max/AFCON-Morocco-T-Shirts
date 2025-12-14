import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TShirtCanvas } from '../components/TShirtCanvas';
import { Button } from '../components/Button';
import { TShirtConfig, TShirtColor, TextColor } from '../types';
import { AVAILABLE_COLORS, AVAILABLE_TEXT_COLORS } from '../constants';
import { Palette, Type, CheckCircle } from 'lucide-react';

export const Customize: React.FC = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<TShirtConfig>({
    color: TShirtColor.RED,
    name: 'HAKIMI',
    number: '2',
    textColor: TextColor.WHITE,
    size: 'L'
  });

  const handleOrder = () => {
    // Pass state to order page via standard navigation state
    navigate('/order', { state: { config } });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900">DESIGN YOUR KIT</h1>
          <p className="text-slate-500 mt-2">Personalize every detail. Wear it with pride.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Preview Area (Sticky on Desktop) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24 bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <TShirtCanvas config={config} />
            <div className="mt-6 flex justify-center gap-4 text-sm text-slate-400">
               <span className="flex items-center gap-1"><CheckCircle size={14} /> Front View</span>
               <span className="flex items-center gap-1"><CheckCircle size={14} /> Premium Fabric</span>
            </div>
          </div>

          {/* Controls Area */}
          <div className="w-full lg:w-1/2 space-y-8">
            
            {/* Color Selection */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="text-morocco-red" size={20} />
                <h3 className="font-bold text-lg text-slate-900">1. Choose Base Color</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {AVAILABLE_COLORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setConfig({ ...config, color: c.value })}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                      config.color === c.value 
                        ? 'border-morocco-green bg-green-50' 
                        : 'border-transparent hover:bg-slate-50'
                    }`}
                  >
                    <div 
                      className="w-10 h-10 rounded-full shadow-sm border border-black/10" 
                      style={{ backgroundColor: c.value }}
                    />
                    <span className="text-xs font-medium text-slate-600">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Customization */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <Type className="text-morocco-red" size={20} />
                <h3 className="font-bold text-lg text-slate-900">2. Personalize</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name on Back</label>
                  <input 
                    type="text" 
                    maxLength={12}
                    value={config.name}
                    onChange={(e) => setConfig({ ...config, name: e.target.value.toUpperCase() })}
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:border-transparent uppercase font-bold tracking-widest"
                    placeholder="YOUR NAME"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/3">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Number</label>
                    <input 
                      type="number" 
                      max={99}
                      min={0}
                      value={config.number}
                      onChange={(e) => setConfig({ ...config, number: e.target.value })}
                      className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-morocco-red focus:border-transparent font-display font-bold text-xl"
                    />
                  </div>
                  <div className="w-2/3">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Text Color</label>
                    <div className="flex gap-2 bg-slate-100 p-2 rounded-md">
                      {AVAILABLE_TEXT_COLORS.map((tc) => (
                        <button
                          key={tc.value}
                          onClick={() => setConfig({ ...config, textColor: tc.value })}
                          className={`w-8 h-8 rounded-full border-2 shadow-sm ${
                            config.textColor === tc.value ? 'border-indigo-500 scale-110' : 'border-white'
                          }`}
                          style={{ backgroundColor: tc.value }}
                          title={tc.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
               <h3 className="font-bold text-lg text-slate-900 mb-4">3. Select Size</h3>
               <div className="flex flex-wrap gap-3">
                 {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                   <button
                    key={size}
                    onClick={() => setConfig({ ...config, size: size as any })}
                    className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold transition-colors ${
                      config.size === size 
                        ? 'bg-morocco-red text-white shadow-md' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                   >
                     {size}
                   </button>
                 ))}
               </div>
            </div>

            {/* Action */}
            <div className="pt-4">
              <Button onClick={handleOrder} variant="primary" fullWidth className="h-16 text-xl shadow-lg shadow-red-200">
                Proceed to Order
              </Button>
              <p className="text-center text-xs text-slate-400 mt-4">
                Secure checkout via WhatsApp. Pay on delivery available in major cities.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};