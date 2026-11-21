import React from 'react';
import { Link } from 'react-router-dom';

export default function WishlistPage({ wishlistItems = [], onRemoveFromWishlist, onAddToCart }) {
  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-2xl font-black mb-6 flex items-center gap-3">
          <span>❤️</span> MI LISTA DE DESEOS GEEK
          <span className="text-xs font-bold bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
            {wishlistItems.length} favoritos
          </span>
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="bg-[#131926] border border-purple-500/20 rounded-3xl p-12 text-center shadow-xl">
            <span className="text-5xl block mb-3">💔</span>
            <p className="text-slate-400 text-sm mb-6">Aún no has guardado productos en tu lista de deseos.</p>
            <Link to="/" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-6 py-3 rounded-xl uppercase tracking-wider transition">
              Explorar Productos Geek
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item, index) => (
              <div key={index} className="bg-[#131926] border border-purple-500/20 rounded-2xl p-4 flex flex-col justify-between shadow-md">
                <div>
                  <img src={item.imagen} alt={item.titulo} className="w-full h-40 object-cover rounded-xl bg-slate-950 mb-3" />
                  <span className="text-[10px] text-cyan-400 font-bold uppercase">{item.categoria}</span>
                  <h3 className="font-bold text-xs text-white leading-tight mt-1">{item.titulo}</h3>
                  <p className="text-sm font-black text-cyan-300 mt-2">S/ {item.precio.toFixed(2)}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex gap-2">
                  <button 
                    onClick={() => {
                      onAddToCart(item);
                      onRemoveFromWishlist(item.id);
                    }}
                    className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2 rounded-xl transition"
                  >
                    🛒 Mover al Carrito
                  </button>
                  <button 
                    onClick={() => onRemoveFromWishlist(item.id)}
                    className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-2 rounded-xl hover:bg-red-500/20"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}