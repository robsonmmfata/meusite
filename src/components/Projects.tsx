
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projectCategories = ['All', 'Web Design', 'UI/UX', 'App Design', 'Branding'];

const projectsData = [
  {
    id: 1,
    title: "Brasil Predial",
    category: "Web Design",
    imageUrl: "/src/imgportfolio/brp1.png",
    link: "#",
    github: "#",
    description: "Uma plataforma de Registro eletrônico responsiva com interface de usuário moderna e pra uma empresa privada,cadastros de fluxo de caixas."
  },
  {
    id: 2,
    title: "Portfolio Daniel Willians Mucheirone",
    category: "UI/UX",
    imageUrl: "/src/imgportfolio/port1.png",
    link: "https://viniciosmucheirone.com/",
    github: "#",
    description: "Cliente pediu um portfólio para ele, e eu fiz um portfólio simples, mas com uma boa responsividade e com uma boa usabilidade. Ele disse que ficou perfeito e atendeu a todas as necessidades dele."
  },
  {
    id: 3,
    title: "Meus Saas Em Andamento",
    category: "App Design",
    imageUrl: "/src/imgportfolio/saas1.png",
    link: "#",
    github: "#",
    description: "Futuramente,Sera  Um Saaas Agente De Ia,Com Painel Administrativo E Um App Para O Cliente,Com Funcionalidades De Chat E Outros Recursos."
  },
  {
    id: 4,
    title: "Loja De Acai",
    category: "Branding",
    imageUrl: "/src/imgportfolio/acai1.png",
    link: "https://acai.deliverits.com.br/",
    github: "#",
    description: "Design Completo De Indentidade De Marca Para Uma Rede De Lojas Sofisticadas. Inclui Logotipo, Paleta De Cores E Tipografia,E,Site Em Si."
  },
  {
    id: 5,
    title: "Sistema Nativos Lanches",
    category: "App Design",
    imageUrl: "/src/imgportfolio/lanchesdelivery.png",
    link: "https://www.nativosdelivery.com.br/",
    github: "#",
    description: "Sistema completo de pedidos online desenvolvido para a lanchonete Nativos Lanches. A aplicação permite que os clientes realizem pedidos de forma prática, visualizem o cardápio atualizado, personalizem seus lanches e acompanhem o status do pedido em tempo real."
  },
  {
    id: 6,
    title: "Sistema DE Pdv Simples",
    category: "Web Design",
    imageUrl: "/src/imgportfolio/cesta1.png",
    link: "https://cestajob-robsonalex-projects.vercel.app",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-violet font-medium mb-2">Meus Projetos</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-4">Projetos Em Destaque</h2>
          <p className="text-gray-600">
           Explore meu trabalho mais recente mostrando minhas habilidades em design e desenvolvimento.
          </p>
          <div className="w-20 h-1 bg-portfolio-indigo mx-auto mt-4"></div>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-portfolio-indigo text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.github}
                        className="text-white bg-portfolio-indigo p-2 rounded-full hover:bg-portfolio-violet transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a 
                        href={project.link}
                        className="text-white bg-portfolio-indigo p-2 rounded-full hover:bg-portfolio-violet transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs bg-portfolio-indigo/10 text-portfolio-violet font-medium rounded-full mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-portfolio-blue mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-portfolio-indigo hover:text-portfolio-violet transition-colors font-medium"
                  target="_blank" rel="noopener noreferrer"
                >
                  Ver Projeto
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-portfolio-indigo hover:bg-portfolio-violet text-white transition-all">
           Ver Todos Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
