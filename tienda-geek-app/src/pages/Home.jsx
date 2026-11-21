import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTOS_GEEK } from '../data/productos';

export default function Home({ onAddToCart, onAddToWishlist }) {
  const [productos, setProductos] = useState(PRODUCTOS_GEEK);
  const [categoriaSel, setCategoriaSel] = useState('Todos');
  const [orden, setOrden] = useState('default');

  useEffect(() => {
    fetch('http://localhost:5174/productos')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setProductos(data);
      })
      .catch(() => setProductos(PRODUCTOS_GEEK));
  }, []);

  const categorias = ['Todos', 'Setup & Tech', 'Gaming', 'Manga & Anime', 'Coleccionables'];

  // Filtrado
  let filtrados = categoriaSel === 'Todos'
    ? productos
    : productos.filter(p => p.categoria.toLowerCase() === categoriaSel.toLowerCase());

  // Ordenamiento
  if (orden === 'precio-menor') {
    filtrados = [...filtrados].sort((a, b) => a.precio - b.precio);
  } else if (orden === 'precio-mayor') {
    filtrados = [...filtrados].sort((a, b) => b.precio - a.precio);
  }

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100 pb-20">
      
      {/* Hero Banner Pro */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-purple-950/50">
          <div className="max-w-xl z-10">
            <span className="text-xs font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/30">
              ⚡ GEEK SETUP 2026 • PERÚ
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4 leading-tight tracking-wide">
              EQUIPA TU ESPACIO CON LO MEJOR DEL <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">MUNDO GEEK</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base mb-6 font-medium leading-relaxed">
              Catálogo completo con 25 periféricos custom, mangas de edición coleccionista, iluminación RGB y figuras de anime.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalogo" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-purple-600/30 transition">
                Explorar 25 Productos
              </a>
              <Link to="/contacto" className="bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-200 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition">
                Soporte & Envíos
              </Link>
            </div>
          </div>

          <div className="text-9xl opacity-30 select-none animate-pulse hidden md:block">
            🕹️⚡⌨️
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 pt-14">
        
        {/* Barra de Filtros y Ordenamiento */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-purple-500/20 pb-5 mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-wide flex items-center gap-2">
              <span>🔥</span> CATÁLOGO COMPLETO ({filtrados.length} ITEMS)
            </h2>
            <p className="text-xs text-slate-400">Selecciona una categoría o filtra por precio</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Tabs Categorías */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 md:pb-0">
              {categorias.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoriaSel(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    categoriaSel === cat 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30' 
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Selector de Orden */}
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              className="bg-slate-950 border border-white/10 text-xs text-slate-200 font-bold px-3 py-1.5 rounded-xl focus:outline-none focus:border-cyan-400"
            >
              <option value="default">Orden por Defecto</option>
              <option value="precio-menor">Precio: Menor a Mayor</option>
              <option value="precio-mayor">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>

        {/* Tarjetas de Productos (Grid de 25 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtrados.map((item) => (
            <div key={item.id} className="bg-[#131926] border border-purple-500/20 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 group shadow-xl">
              
              {/* Imagen */}
              <div className="h-52 bg-slate-950 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={item.imagen} 
                  alt={item.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-purple-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                  {item.tag || item.categoria}
                </span>
                
                <button
                  onClick={() => onAddToWishlist && onAddToWishlist(item)}
                  className="absolute top-3 right-3 bg-slate-950/80 text-slate-300 hover:text-red-400 text-xs p-1.5 rounded-full border border-white/10 transition"
                  title="Añadir a Favoritos"
                >
                  ❤️
                </button>
              </div>

              {/* Detalle */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">
                    {item.categoria}
                  </span>
                  <h3 className="font-bold text-xs mt-1 text-white leading-snug line-clamp-2 h-8">
                    {item.titulo}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="flex items-baseline gap-2 mb-3">
                    {item.precioAnterior && (
                      <span className="text-[11px] text-slate-500 line-through">
                        S/ {item.precioAnterior.toFixed(2)}
                      </span>
                    )}
                    <span className="text-base font-black text-cyan-300">
                      S/ {item.precio.toFixed(2)}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <Link 
                      to={`/producto/${item.id}`} 
                      className="col-span-3 text-center bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold py-2 rounded-xl border border-white/10 transition flex items-center justify-center"
                    >
                      👁️ Ver Detalle
                    </Link>
                    <button 
                      onClick={() => onAddToCart && onAddToCart(item)}
                      className="col-span-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl flex items-center justify-center text-sm shadow-md transition"
                      title="Añadir al Carrito"
                    >
                      🛒
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}