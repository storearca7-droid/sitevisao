import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 bg-gray-950">
        {/* Camada 1: Supermercado/Estoque */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        {/* Camada 2: Tecnologia/Dados (CRM/Fiscal) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-color-dodge"></div>
        {/* Camada 3: Abstrato/Tech Network */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        
        {/* Gradientes para mesclagem premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950"></div>
        
        {/* Abstract Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF8C00] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600 rounded-full filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
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
            href="https://diagnosticovisao.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-bold text-lg rounded-full hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          >
            Fazer um diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
};