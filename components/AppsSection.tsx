import React from 'react';
import { ArrowRight, Smartphone, Database, CheckCircle2 } from 'lucide-react';

export const AppsSection = () => {
  return (
    <section id="apps" className="py-24 bg-gray-50 overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: Vídeo Player (Mobile Portrait 1080x1920 - 9:16) */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1 flex justify-center">
            {/* Container estilo Galeria, mas com proporção vertical */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group max-w-[320px] w-full mx-auto border border-gray-800">
              <div className="aspect-[9/16]">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  poster="fotoapp.png"
                >
                  <source src="appsvideo.mp4" type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
            </div>
            {/* Sombra decorativa sutil atrás */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[300px] h-[95%] bg-black/20 rounded-full -z-10 blur-xl"></div>
          </div>

          {/* Lado Direito: Conteúdo */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="p-2 bg-orange-100 text-[#FF8C00] rounded-lg">
                <Smartphone size={24} />
              </span>
              <span className="text-sm font-bold text-[#FF8C00] tracking-wider uppercase">
                Automação Mobile
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Apps que Conectam ao <span className="text-[#FF8C00]">Varejo</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed border-l-4 border-[#FF8C00] pl-4 bg-white py-4 rounded-r-lg shadow-sm">
              Desenvolvemos e integramos aplicativos personalizados para automação de rotinas: inventário, checklist, pedidos, cotação, formação de preço e controle de desempenho — tudo conectado ao seu banco de dados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Database size={18} className="text-[#FF8C00]" />
                <span>Integração DB em tempo real</span>
              </div>
               <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 size={18} className="text-[#FF8C00]" />
                <span>Checklists automatizados</span>
              </div>
               <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 size={18} className="text-[#FF8C00]" />
                <span>Cotação e Pedidos</span>
              </div>
               <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 size={18} className="text-[#FF8C00]" />
                <span>Controle de Desempenho</span>
              </div>
            </div>

            <a
              href="https://wa.me/5571983032979"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF8C00] hover:bg-[#e07b00] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
            >
              OBTER APLICATIVOS
              <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};