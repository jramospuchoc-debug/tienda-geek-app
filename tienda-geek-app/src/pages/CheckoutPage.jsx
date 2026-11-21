import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CheckoutPage({ cartItems = [], onClearCart }) {
  const navigate = useNavigate();
  const [metodoPago, setMetodoPago] = useState('yape');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: 'Huánuco'
  });

  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Pedido Confirmado para ${formData.nombre}!\nTotal: S/ ${total.toFixed(2)}\nMétodo: ${metodoPago.toUpperCase()}\nTe enviaremos los detalles al correo ${formData.email}.`);
    onClearCart();
    navigate('/');
  };

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        
        <Link to="/carrito" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 mb-6">
          ← Volver al Carrito
        </Link>

        <h1 className="text-2xl font-black mb-6 flex items-center gap-2">
          <span>💳</span> FINALIZAR COMPRA GEEK
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="md:col-span-2 bg-[#131926] border border-purple-500/20 rounded-3xl p-6 space-y-4 shadow-xl">
            <h2 className="text-base font-bold text-purple-300 border-b border-white/10 pb-2">1. Datos de Envío</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. José Ramos"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                  value={formData.nombre}
                  onChange={e => setFormData({...formData, nombre: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  required
                  placeholder="ejemplo@gmail.com"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  placeholder="987 654 321"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                  value={formData.telefono}
                  onChange={e => setFormData({...formData, telefono: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Ciudad / Región</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                  value={formData.ciudad}
                  onChange={e => setFormData({...formData, ciudad: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Dirección de Entrega</label>
              <input 
                type="text" 
                required
                placeholder="Av. Universitaria 123..."
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                value={formData.direccion}
                onChange={e => setFormData({...formData, direccion: e.target.value})}
              />
            </div>

            <h2 className="text-base font-bold text-purple-300 border-b border-white/10 pb-2 pt-4">2. Método de Pago</h2>
            
            <div className="grid grid-cols-3 gap-3">
              {['yape', 'plin', 'tarjeta'].map(met => (
                <button
                  type="button"
                  key={met}
                  onClick={() => setMetodoPago(met)}
                  className={`py-3 rounded-xl border text-xs font-bold uppercase transition ${
                    metodoPago === met 
                      ? 'bg-purple-600/30 border-cyan-400 text-cyan-300' 
                      : 'bg-slate-950 border-white/10 text-slate-400'
                  }`}
                >
                  {met}
                </button>
              ))}
            </div>

            <button 
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition"
            >
              Confirmar y Pagar S/ {total.toFixed(2)}
            </button>
          </form>

          {/* Resumen Lateral */}
          <div className="bg-[#131926] border border-purple-500/20 rounded-3xl p-6 h-fit shadow-xl space-y-4">
            <h3 className="font-bold text-sm text-purple-300 border-b border-white/10 pb-2 uppercase">Tu Pedido</h3>
            
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <span className="truncate max-w-[150px] text-slate-300">{item.titulo}</span>
                  <span className="font-bold text-emerald-400">S/ {item.precio.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between font-black text-sm">
              <span>Total Final</span>
              <span className="text-cyan-300 text-lg">S/ {total.toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}