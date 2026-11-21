import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#070a10] border-t border-purple-500/20 text-slate-400 text-xs pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-black text-lg tracking-wider">
            <span className="p-2 bg-purple-600 rounded-lg">👾</span>
            <span>GEEK<span className="text-purple-400">STORE</span></span>
          </div>
          <p className="leading-relaxed text-slate-400">
            La tienda definitiva para setups gamer, periféricos custom, mangas y coleccionables geek en todo el Perú.
          </p>
          <div className="flex gap-3 text-base text-purple-400 pt-2">
            <span className="hover:text-cyan-400 cursor-pointer">🌐</span>
            <span className="hover:text-cyan-400 cursor-pointer">💬</span>
            <span className="hover:text-cyan-400 cursor-pointer">📸</span>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-3">Categorías</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-cyan-400 transition">Setup & Desk Tech</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition">Gaming Gear & Periféricos</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition">Manga & Novelas Ligeras</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition">Figuras & Coleccionables</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-3">Soporte y Links</h4>
          <ul className="space-y-2">
            <li><Link to="/contacto" className="hover:text-cyan-400 transition">Centro de Ayuda & FAQ</Link></li>
            <li><Link to="/contacto" className="hover:text-cyan-400 transition">Envíos y Seguimiento</Link></li>
            <li><Link to="/contacto" className="hover:text-cyan-400 transition">Políticas de Garantía Geek</Link></li>
            <li><Link to="/carrito" className="hover:text-cyan-400 transition">Ver mi Carrito</Link></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-3">Pagos Seguros</h4>
          <p className="mb-3">Aceptamos todos los medios de pago locales e internacionales:</p>
          <div className="flex flex-wrap gap-2 font-bold text-[10px]">
            <span className="bg-purple-950/80 border border-purple-500/30 text-purple-300 px-2.5 py-1 rounded">YAPE</span>
            <span className="bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 px-2.5 py-1 rounded">PLIN</span>
            <span className="bg-slate-900 border border-white/10 text-slate-200 px-2.5 py-1 rounded">VISA</span>
            <span className="bg-slate-900 border border-white/10 text-slate-200 px-2.5 py-1 rounded">MASTERCARD</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
        <p>© 2026 GeekStore Perú. Todos los derechos reservados.</p>
        <p>Diseñado para desarrolladores y entusiastas del Gaming.</p>
      </div>
    </footer>
  );
}