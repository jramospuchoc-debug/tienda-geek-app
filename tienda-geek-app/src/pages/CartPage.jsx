import React from 'react';
import { Link } from 'react-router-dom';

export default function CartPage({ cartItems = [], onRemoveItem, onClearCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        
        <h1 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-wide">
          <span>🛒</span> CARRITO GEEK & GAMER 
          <span className="text-xs font-bold bg-purple-600/30 border border-purple-500/40 text-purple-300 px-2.5 py-1 rounded-full">
            {cartItems.length} items
          </span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-[#131926] border border-purple-500/20 rounded-3xl p-12 text-center shadow-xl">
            <span className="text-5xl block mb-3">👾</span>
            <p className="text-slate-400 text-sm mb-6">Tu carrito Geek está vacío por el momento.</p>
            <Link to="/" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-6 py-3 rounded-xl uppercase tracking-wider shadow-lg shadow-purple-600/30 transition">
              Explorar Catálogo Geek
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Lista de productos en carrito */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-[#131926] border border-purple-500/20 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-md">
                  <img src={item.imagen} alt={item.titulo} className="w-16 h-16 object-cover rounded-xl bg-slate-950" />
                  <div className="flex-1">
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">{item.categoria}</span>
                    <h3 className="font-bold text-sm text-white leading-tight">{item.titulo}</h3>
                    <p className="text-xs text-emerald-400 font-bold mt-1">S/ {item.precio.toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem && onRemoveItem(index)}
                    className="text-red-400 hover:text-red-300 text-xs font-bold px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20"
                  >
                    Quitar
                  </button>
                </div>
              ))}
              
              <button 
                onClick={onClearCart} 
                className="text-xs text-slate-400 underline hover:text-slate-200 mt-2 block"
              >
                Vaciar Carrito
              </button>
            </div>

            {/* Resumen de compra */}
            <div className="bg-[#131926] border border-purple-500/20 rounded-2xl p-6 h-fit shadow-xl">
              <h2 className="font-bold text-base mb-4 border-b border-white/10 pb-3 uppercase tracking-wider text-purple-300">Resumen del Pedido</h2>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>S/ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío a provincia</span>
                  <span className="text-cyan-400 font-bold">Gratis por lanzamiento</span>
                </div>
              </div>

              <div className="border-t border-white/10 mt-5 pt-4 flex justify-between font-black text-sm">
                <span>TOTAL</span>
                <span className="text-cyan-300 text-xl">S/ {total.toFixed(2)}</span>
              </div>

              <button 
                onClick={() => alert("¡Pedido Geek confirmado! Redirigiendo a pasarela...")}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition"
              >
                Finalizar Compra
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}