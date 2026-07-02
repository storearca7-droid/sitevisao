import React from 'react';
import { Database, Laptop, Radio, Settings, Users, Receipt, Package, CircleDollarSign, CheckSquare } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Equipes Especializadas",
      description: "Profissionais treinados para inventários presenciais e digitais de alta precisão."
    },
    {
      icon: Database,
      title: "Integração de Dados",
      description: "Conexão nativa com Supabase, SQL Server, MySQL e Oracle."
    },
    {
      icon: Laptop,
      title: "Dashboards em Tempo Real",
      description: "Visualize seus indicadores estratégicos instantaneamente."
    },
    {
      icon: Radio,
      title: "Conectividade Total",
      description: "Integração fluida com Excel, XML de cupons e diversos sistemas ERP."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF8C00] rounded-full filter blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content & Features */}
          <div className="w-full lg:w-1/2">
            <div className="mb-12">
              <h2 className="text-[#FF8C00] font-bold tracking-widest uppercase text-xs mb-3">Por que nos escolher?</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white max-w-xl leading-tight">
                Tecnologia e Inteligência para Resultados Superiores
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-[#FF8C00] transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF8C00] transition-colors duration-300 shadow-lg">
                    <feature.icon size={24} className="text-[#FF8C00] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Illustration & Effects */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-[#FF8C00] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
            
            <div className="relative z-10 w-full max-w-md aspect-square rounded-full border-2 border-gray-800 bg-gray-900 shadow-2xl flex items-center justify-center overflow-visible">
              
              {/* Main Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-gray-800/50 group">
                <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Equipe trabalhando" 
                  className="w-full h-full object-cover object-center transform scale-110 group-hover:scale-100 transition-transform duration-700 filter contrast-125 saturate-50"
                />
                
                {/* Overlay Text "INVENTARIO" as requested on shirts (simulated via badge on image) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 bg-black/80 backdrop-blur-md px-6 py-2 rounded-full border border-gray-700 shadow-[0_0_20px_rgba(255,140,0,0.3)]">
                  <span className="text-[#FF8C00] font-black tracking-[0.3em] text-sm">INVENTÁRIO</span>
                </div>
              </div>

              {/* Floating Element: Invoice / Sped Fiscal */}
              <div className="absolute -top-6 -left-6 bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="bg-[#FF8C00]/20 p-3 rounded-lg mb-2">
                  <Receipt className="text-[#FF8C00]" size={28} />
                </div>
                <p className="text-xs font-bold text-gray-300 text-center">SPED Fiscal</p>
              </div>

              {/* Floating Element: Stock Box / ICMS */}
              <div className="absolute top-20 -right-8 bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="bg-blue-500/20 p-3 rounded-lg mb-2">
                  <Package className="text-blue-400" size={28} />
                </div>
                <p className="text-xs font-bold text-gray-300 text-center">Estoque</p>
              </div>

              {/* Floating Element: CRM / Dollar */}
              <div className="absolute bottom-10 -left-10 bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
                <div className="bg-green-500/20 p-3 rounded-lg mb-2">
                  <CircleDollarSign className="text-green-400" size={28} />
                </div>
                <p className="text-xs font-bold text-gray-300 text-center">Lucro</p>
              </div>

              {/* Floating Element: Checklist / Tablet */}
              <div className="absolute -bottom-8 right-0 bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
                <div className="bg-purple-500/20 p-3 rounded-lg mb-2">
                  <CheckSquare className="text-purple-400" size={28} />
                </div>
                <p className="text-xs font-bold text-gray-300 text-center">CRM</p>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};