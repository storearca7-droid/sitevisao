import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="inline-block">
              <img 
                src="/logo.png" 
                alt="Inventário Visão Logo" 
                className="h-20 w-auto brightness-0 invert drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em gestão inteligente para o varejo alimentar. 
              Transformamos dados em decisões estratégicas, promovendo organização, 
              rentabilidade e crescimento sustentável para supermercados e atacados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/visaoinventario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF8C00] transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-[#FF8C00] w-12 pb-2">Menu</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-[#FF8C00] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full"></span>Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#FF8C00] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full"></span>Soluções</a></li>
              <li><a href="#apps" className="text-gray-400 hover:text-[#FF8C00] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full"></span>Aplicativos</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-[#FF8C00] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full"></span>Diferenciais</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-[#FF8C00] w-12 pb-2">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <MapPin className="text-[#FF8C00] mt-1 shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>AVENIDA TANCREDO NEVES, Nº 002539 SALA 1603<br />CAMINHO DAS ÁRVORES SALVADOR BAHIA</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <Phone className="text-[#FF8C00] shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>71 98303-2979</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <Mail className="text-[#FF8C00] shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>contato@inventariovisao.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-[#FF8C00] w-12 pb-2">Novidades</h4>
            <p className="text-gray-400 text-sm mb-4">Receba dicas de gestão de estoque.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu e-mail profissional" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-all placeholder-gray-500"
              />
              <button className="bg-[#FF8C00] hover:bg-[#e07b00] text-white font-bold py-3 rounded-lg transition-colors shadow-lg hover:shadow-orange-500/20">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Inventário Visão. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};