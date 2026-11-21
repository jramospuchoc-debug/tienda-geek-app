import React, { useState } from 'react';

export default function ContactoPage() {
  const [faqAbierta, setFaqAbierta] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const toggleFaq = (index) => {
    setFaqAbierta(faqAbierta === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  const faqs = [
    {
      q: "🚚 ¿Hacen envíos a Huánuco y otras provincias del Perú?",
      a: "¡Sí! Realizamos despachos diarios a todo el territorio peruano mediante Olva Courier, Shalom o agencia de tu preferencia. Los envíos a provincia demoran entre 24 a 48 horas hábiles."
    },
    {
      q: "⌨️ ¿Los teclados custom y periféricos incluyen garantía?",
      a: "Todos nuestros teclados, componentes de setup y dispositivos gaming cuentan con 12 meses de garantía directa por fallas de fábrica y certificación de prueba previa."
    },
    {
      q: "💳 ¿Qué métodos de pago aceptan?",
      a: "Aceptamos Yape, Plin, transferencias bancarias directas (BCP, Interbank, BBVA) y todas las tarjetas de crédito o débito Visa y Mastercard."
    },
    {
      q: "📚 ¿Los mangas y coleccionables son 100% originales?",
      a: "Garantizamos que todos nuestros mangas provienen de editoriales oficiales (Norma, Ivrea, Panini, Shueisha) y las figuras coleccionables son originales importadas con sellos de autenticidad."
    }
  ];

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera Soporte */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/30">
            💬 CENTRO DE ATENCIÓN Y SOPORTE GEEK
          </span>
          <h1 className="text-3xl md:text-5xl font-black mt-4 mb-3 tracking-wide">
            ¿EN QUÉ TE PODEMOS <span className="text-purple-400">AYUDAR?</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Resuelve tus dudas sobre envíos a provincia, garantías de hardware, estado de pedidos o comunícate directamente con nuestro equipo técnico.
          </p>
        </div>

        {/* Tarjetas Rápidas de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#131926] border border-purple-500/20 p-6 rounded-2xl flex items-center gap-4 shadow-xl hover:border-cyan-400/50 transition">
            <div className="text-4xl bg-purple-600/20 p-3 rounded-xl border border-purple-500/30">📱</div>
            <div>
              <h3 className="font-bold text-sm text-white">WhatsApp Directo</h3>
              <p className="text-xs text-slate-400 mt-0.5">+51 987 654 321</p>
              <span className="text-[10px] text-emerald-400 font-bold">Atención 24/7 en vivo</span>
            </div>
          </div>

          <div className="bg-[#131926] border border-purple-500/20 p-6 rounded-2xl flex items-center gap-4 shadow-xl hover:border-cyan-400/50 transition">
            <div className="text-4xl bg-purple-600/20 p-3 rounded-xl border border-purple-500/30">✉️</div>
            <div>
              <h3 className="font-bold text-sm text-white">Correo Electrónico</h3>
              <p className="text-xs text-slate-400 mt-0.5">soporte@geekstore.pe</p>
              <span className="text-[10px] text-cyan-400 font-bold">Respuesta en menos de 2h</span>
            </div>
          </div>

          <div className="bg-[#131926] border border-purple-500/20 p-6 rounded-2xl flex items-center gap-4 shadow-xl hover:border-cyan-400/50 transition">
            <div className="text-4xl bg-purple-600/20 p-3 rounded-xl border border-purple-500/30">📍</div>
            <div>
              <h3 className="font-bold text-sm text-white">Sede Central</h3>
              <p className="text-xs text-slate-400 mt-0.5">Huánuco, Perú</p>
              <span className="text-[10px] text-purple-400 font-bold">Despacho nacional</span>
            </div>
          </div>
        </div>

        {/* Sección Formulario + FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Formulario de Mensaje */}
          <div className="bg-[#131926] border border-purple-500/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
              <span>📩</span> Envíanos una Consulta
            </h2>
            <p className="text-xs text-slate-400 mb-6">Completa el formulario y un especialista Geek te atenderá de inmediato.</p>

            {enviado && (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-xl text-xs font-bold mb-6 animate-fadeIn">
                ✔ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ej. José Ramos" 
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  required 
                  placeholder="jose@ejemplo.com" 
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Tipo de Consulta</label>
                <select className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition">
                  <option>Estado de Envío de Pedido</option>
                  <option>Consulta de Stock / Disponibilidad</option>
                  <option>Asesoría en Armado de Setup / Teclados Custom</option>
                  <option>Garantía de Producto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Mensaje</label>
                <textarea 
                  rows="4" 
                  required 
                  placeholder="Escribe los detalles de tu pregunta..." 
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition"
              >
                Enviar Mensaje a Soporte
              </button>
            </form>
          </div>

          {/* Acordeón Preguntas Frecuentes */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
              <span>❓</span> Preguntas Frecuentes (FAQ)
            </h2>
            <p className="text-xs text-slate-400 mb-6">Respuestas inmediatas a las dudas más comunes de nuestros clientes.</p>

            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#131926] border border-purple-500/20 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 text-xs font-bold text-white flex justify-between items-center gap-4 hover:text-cyan-300 transition"
                >
                  <span>{faq.q}</span>
                  <span className="text-base text-cyan-400 font-bold">{faqAbierta === index ? '−' : '+'}</span>
                </button>
                
                {faqAbierta === index && (
                  <div className="px-4 pb-4 text-xs text-slate-400 border-t border-white/5 pt-3 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}