import React from 'react';
import { 
  ClipboardList, 
  BarChart4, 
  TrendingUp, 
  ShieldAlert, 
  Percent, 
  FileSpreadsheet, 
  Network, 
  Tag, 
  GraduationCap, 
  FileCheck, 
  Calculator, 
  SearchCheck, 
  FileInput 
} from 'lucide-react';

interface ServiceItem {
  icon: any;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceItem> = ({ icon: Icon, title, description }) => (
  <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#FF8C00]/30 transition-all duration-300 flex flex-col items-start h-full">
    <div className="mb-4 p-3 bg-orange-50 rounded-xl group-hover:bg-[#FF8C00] transition-colors duration-300">
      <Icon size={24} className="text-[#FF8C00] group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF8C00] transition-colors">
      {title}
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export const Services = () => {
  const services: ServiceItem[] = [
    {
      icon: ClipboardList,
      title: "Inventário e Contagem",
      description: "Contagem física e digital com metodologia ágil. Controle de divergências e relatórios consolidados para precisão total."
    },
    {
      icon: BarChart4,
      title: "Gestão de Estoque",
      description: "Monitoramento de giro, rupturas e excessos. Dashboards automatizados para o equilíbrio entre disponibilidade e capital."
    },
    {
      icon: TrendingUp,
      title: "Relatórios Gerenciais",
      description: "Análise personalizada cruzando vendas, custos e metas. Transformamos indicadores em ações de melhoria."
    },
    {
      icon: ShieldAlert,
      title: "Prevenção de Perdas",
      description: "Planos de ação para reduzir perdas operacionais e comerciais, com acompanhamento setorizado."
    },
    {
      icon: Percent,
      title: "Recuperação de ICMS",
      description: "Identificação e recuperação de créditos tributários sobre mercadorias e insumos dentro das normas vigentes."
    },
    {
      icon: FileSpreadsheet,
      title: "Ajuste de SPED Fiscal",
      description: "Correção e parametrização para garantir consistência entre estoque e tributos, evitando autuações."
    },
    {
      icon: Network,
      title: "Árvore Mercadológica",
      description: "Estruturação completa por departamento e categoria, base essencial para precificação eficiente."
    },
    {
      icon: Tag,
      title: "Preços e Margens",
      description: "Políticas de precificação baseadas em custos e impostos. Simulação para preços competitivos e sustentáveis."
    },
    {
      icon: GraduationCap,
      title: "Treinamento Excel/BI",
      description: "Capacitação de equipes para dominar a análise de vendas e estoques na prática."
    },
    {
      icon: FileCheck,
      title: "Acompanhamento Fiscal",
      description: "Validação contínua de CFOP, NCM, PIS, COFINS e ICMS para conformidade legal."
    },
    {
      icon: Calculator,
      title: "Gestão Financeira (DRE)",
      description: "Controle de receitas e despesas com visão clara da lucratividade real através do DRE Gerencial."
    },
    {
      icon: SearchCheck,
      title: "Revisão de Cadastros",
      description: "Correção de cadastros de produtos e tributações para integridade fiscal."
    },
    {
      icon: FileInput,
      title: "Escrituração de Notas",
      description: "Entrada e conferência de notas fiscais, assegurando a correta integração contábil."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#FF8C00] font-bold tracking-widest uppercase text-xs mb-3">Nossas Soluções</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Do Estoque ao Fiscal: <br/> Controle Total do Negócio
          </h3>
          <p className="text-gray-600 text-lg">
            Otimizamos resultados em todas as áreas, do chão de loja à análise tributária e financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};