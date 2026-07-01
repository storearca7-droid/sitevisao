import React from 'react';
import { Database, Laptop, Radio, Settings, Users } from 'lucide-react';

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
    },
    {
      icon: Settings,
      title: "Soluções Personalizadas",
      description: "Projetos desenhados conforme o porte e a realidade da sua loja."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF8C00] rounded-full filter blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-[#FF8C00] font-bold tracking-widest uppercase text-xs mb-3">Por que nos escolher?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            Tecnologia e Inteligência para Resultados Superiores
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-[#FF8C00] transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm">
              <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF8C00] transition-colors duration-300 shadow-lg">
                <feature.icon size={28} className="text-[#FF8C00] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};