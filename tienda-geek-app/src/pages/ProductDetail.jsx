import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTOS_GEEK } from '../data/productos';

export default function ProductDetail({ onAddToCart, onAddToWishlist }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [tabActiva, setTabActiva] = useState('specs');

  useEffect(() => {
    // Buscar primero en la API de json-server o caer en los 25 productos locales
    fetch(`http://localhost:5174/productos/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data))
      .catch(() => {
        const encontrado = PRODUCTOS_GEEK.find(p => p.id === id);
        setProducto(encontrado || PRODUCTOS_GEEK[0]);
      });
  }, [id]);

  if (!producto) {
    return (
      <div className="min-h-screen bg-[#0b0f17] flex items-center justify-center text-slate-400 text-sm">
        Cargando detalles del producto Geek...
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Migaja de Pan */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link to="/" className="hover:text-cyan-400 transition">Inicio</Link>
          <span>/</span>
          <span className="text-purple-400 font-bold">{producto.categoria}</span>
          <span>/</span>
          <span className="text-slate-200 truncate max-w-xs">{producto.titulo}</span>
        </div>

        {/* Tarjeta Principal */}
        <div className="bg-[#131926] border border-purple-500/20 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-2xl">
          
          {/* Visualizador de Imagen */}
          <div className="space-y-4">
            <div className="bg-slate-950 rounded-2xl overflow-hidden h-80 md:h-96 relative flex items-center justify-center border border-white/5">
              <img src={producto.imagen} alt={producto.titulo} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-md shadow">
                {producto.tag || producto.categoria}
              </span>
            </div>
          </div>

          {/* Información del Producto */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">
                  {producto.categoria}
                </span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                  ⭐ {producto.rating || 4.9} ({producto.reviewsCount || 20} opiniones)
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black mt-2 text-white leading-tight">
                {producto.titulo}
              </h1>

              {/* Precios */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-3xl font-black text-cyan-300">
                  S/ {producto.precio.toFixed(2)}
                </span>
                {producto.precioAnterior && (
                  <span className="text-sm text-slate-500 line-through">
                    S/ {producto.precioAnterior.toFixed(2)}
                  </span>
                )}
                {producto.precioAnterior && (
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                    Ahorras S/ {(producto.precioAnterior - producto.precio).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Descripción Individual */}
              <p className="text-xs text-slate-300 mt-4 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-white/5">
                {producto.descripcion}
              </p>

              {/* Estado de Stock */}
              <div className="mt-4 flex items-center gap-4 text-xs">
                <div className="text-emerald-400 font-bold flex items-center gap-1">
                  <span>✔ Stock Disponible:</span> <span>{producto.stock || 8} unidades</span>
                </div>
                <div className="text-slate-400">
                  <span>🚀 Envío en 24h</span>
                </div>
              </div>
            </div>

            {/* Acciones de Compra y Wishlist */}
            <div className="mt-8 pt-6 border-t border-white/10 flex gap-3">
              <button 
                onClick={() => onAddToCart && onAddToCart(producto)}
                className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition flex items-center justify-center gap-2"
              >
                <span>🛒</span> Añadir al Carrito
              </button>

              <button 
                onClick={() => onAddToWishlist && onAddToWishlist(producto)}
                className="bg-slate-900 border border-purple-500/30 hover:border-cyan-400 text-slate-200 p-3.5 rounded-xl text-lg transition"
                title="Añadir a Favoritos"
              >
                ❤️
              </button>
            </div>

          </div>

        </div>

        {/* Sección de Tabs: Especificaciones y Reseñas */}
        <div className="mt-12 bg-[#131926] border border-purple-500/20 rounded-3xl p-6 md:p-8">
          <div className="flex gap-4 border-b border-white/10 pb-4 mb-6">
            <button
              onClick={() => setTabActiva('specs')}
              className={`text-xs font-bold uppercase tracking-wider transition ${
                tabActiva === 'specs' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white'
              }`}
            >
              Ficha Técnica
            </button>
            <button
              onClick={() => setTabActiva('reviews')}
              className={`text-xs font-bold uppercase tracking-wider transition ${
                tabActiva === 'reviews' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white'
              }`}
            >
              Reseñas de Usuarios ({producto.reviewsCount || 12})
            </button>
          </div>

          {tabActiva === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {producto.specs ? (
                Object.entries(producto.specs).map(([key, val]) => (
                  <div key={key} className="bg-slate-950 p-3.5 rounded-xl flex justify-between border border-white/5">
                    <span className="text-slate-400 font-medium">{key}:</span>
                    <span className="text-white font-bold">{val}</span>
                  </div>
                ))
              ) : (
                <p className="text-slate-400">Especificaciones detalladas según estándar del fabricante Geek.</p>
              )}
            </div>
          )}

          {tabActiva === 'reviews' && (
            <div className="space-y-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-white">Carlos M. (Verificado)</span>
                  <span className="text-amber-400 text-xs">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-xs text-slate-400">Excelente calidad de construccion. Llegó a Huánuco súper rápido en 24 horas.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-white">Liliana R. (Verificado)</span>
                  <span className="text-amber-400 text-xs">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-xs text-slate-400">100% recomendado para regalárselo a un desarrollador o gamer. Muy satisfecho.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}