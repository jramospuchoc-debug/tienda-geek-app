import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ cartCount = 0, cartTotal = 0, wishlistCount = 0 }) {
  const location = useLocation();

  return (
    <header className="bg-[#0b0f19] border-b border-purple-500/20 sticky top-0 z-50 backdrop-blur-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-950 text-white text-[11px] py-1.5 font-bold text-center tracking-wider uppercase">
        ⚡ ENVIOS A TODO EL PERÚ • PROMO SETUP 2026 • 10% OFF CON EL CÓDIGO: <span className="bg-white/20 px-2 py-0.5 rounded text-cyan-300">GEEKMODE</span>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-br from-purple-600 to-cyan-500 p-2.5 rounded-xl shadow-lg shadow-purple-500/30 group-hover:scale-105 transition transform">
            <span className="text-xl">👾</span>
          </div>
          <div>
            <div className="text-xl font-black text-white tracking-wider flex items-center gap-1">
              GEEK<span className="text-purple-400">STORE</span>
            </div>
            <div className="text-[9px] font-semibold text-cyan-400 tracking-widest uppercase -mt-1">
              Tech • Gaming • Culture
            </div>
          </div>
        </Link>

        {/* Acciones del Usuario */}
        <div className="flex items-center gap-3">
          
          {/* Favoritos */}
          <Link 
            to="/favoritos" 
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-red-400 transition bg-slate-900/60 px-3 py-2 rounded-xl border border-white/5"
          >
            <span>❤️</span>
            <span className="hidden sm:inline">Favoritos</span>
            {wishlistCount > 0 && (
              <span className="bg-red-500 text-white text-[10px] font-black px-1.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Soporte */}
          <Link 
            to="/contacto" 
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-cyan-400 transition bg-slate-900/60 px-3 py-2 rounded-xl border border-white/5"
          >
            <span>💬</span> <span className="hidden sm:inline">Soporte</span>
          </Link>

          {/* Carrito */}
          <Link 
            to="/carrito" 
            className="flex items-center gap-3 bg-gradient-to-r from-purple-900/50 to-slate-900 border border-purple-500/40 hover:border-cyan-400/60 px-3.5 py-2 rounded-xl transition shadow-md shadow-purple-950/40"
          >
            <div className="relative">
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-400 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="text-left leading-tight hidden sm:block">
              <div className="text-[9px] text-slate-400 font-bold uppercase">Carrito</div>
              <div className="text-xs font-black text-cyan-300">S/ {cartTotal.toFixed(2)}</div>
            </div>
          </Link>

        </div>
      </div>

      {/* Menú por Páginas */}
      <nav className="bg-slate-950/90 border-t border-white/5 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex gap-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300">
          <Link to="/" className={`whitespace-nowrap transition ${location.pathname === '/' ? 'text-cyan-400 font-extrabold' : 'hover:text-purple-400'}`}>
            🔥 Tienda Principal (25 productos)
          </Link>
          <Link to="/contacto" className={`whitespace-nowrap transition ${location.pathname === '/contacto' ? 'text-cyan-400 font-extrabold' : 'hover:text-purple-400'}`}>
            💬 Soporte & Envíos
          </Link>
          <Link to="/favoritos" className={`whitespace-nowrap transition ${location.pathname === '/favoritos' ? 'text-cyan-400 font-extrabold' : 'hover:text-purple-400'}`}>
            ❤️ Mis Favoritos ({wishlistCount})
          </Link>
          <Link to="/carrito" className={`whitespace-nowrap transition ${location.pathname === '/carrito' ? 'text-cyan-400 font-extrabold' : 'hover:text-purple-400'}`}>
            🛒 Carrito ({cartCount})
          </Link>
        </div>
      </nav>
    </header>
  );
}