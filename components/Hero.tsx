import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de2929450a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900"></div>
        {/* Abstract Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF8C00] rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-[#FF8C00] text-sm font-medium mb-8 animate-fade-in-up">
          <BarChart2 size={16} />
          <span>Especialistas em Varejo Alimentar</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          Gestão Inteligente para <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#ffb347]">
            Supermercados e Atacados
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Nosso propósito é transformar dados em decisões estratégicas. Combinamos tecnologia, 
          automação e inteligência analítica para promover organização, rentabilidade e 
          crescimento sustentável do seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5571983032979"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#FF8C00] hover:bg-[#e07b00] text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(255,140,0,0.3)] hover:shadow-[0_0_30px_rgba(255,140,0,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border border-transparent"
          >
            Falar com Especialista
            <ArrowRight size={20} />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-bold text-lg rounded-full hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
          >
            Conhecer Soluções
          </a>
        </div>
      </div>
    </section>
  );
};