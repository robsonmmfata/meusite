import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

// 1. IMPORTE TODAS AS SUAS IMAGENS DE PROJETO AQUI!
// O caminho deve ser ../imgportfolio/ porque Projects.tsx está em src/components/
// e imgportfolio está em src/. Você precisa "subir um nível" para encontrar imgportfolio.
import brp1Image from '../imgportfolio/brp1.png';
import port1Image from '../imgportfolio/port1.png';
import saas1Image from '../imgportfolio/saas1.png';
import acai1Image from '../imgportfolio/acai1.png';
import lanchesdeliveryImage from '../imgportfolio/lanchesdelivery.png';
import cesta1Image from '../imgportfolio/cesta1.png';
import casqueiImage from '../imgportfolio/casquei.png';
import printchacara2 from '../imgportfolio/printchacara2.png'; 
import uma from '../imgportfolio/uma.png'; 
import sistemadentario  from '../imgportfolio/sistemadentario1.png'; 
import appibyteImage from '../imgportfolio/appibyte.jpg';
import ibyteImage from '../imgportfolio/ibyte.jpg';
import megaeletronico from '../imgportfolio/megaeletronico.jpg';
import appmegaeletronico from '../imgportfolio/appmegaeletronico.jpg';
import appnossolar from '../imgportfolio/appnossolar.jpg';
import oribashop from '../imgportfolio/oribashop.jpg';
import eshope from '../imgportfolio/eshop.jpg';
import fastshope from '../imgportfolio/fastshop.jpg';
import appfastshope from '../imgportfolio/appfastshope.jpg';
import gigantec from '../imgportfolio/gigantec.jpg';


// Repetido, mas necessário para o exemplo

// 2. IMPORTE A SUA FOTO DE PERFIL AQUI (se ela estiver em src/imgportfolio)
// AJUSTE 'minhafoto.png' PARA O NOME REAL DO SEU ARQUIVO DE FOTO DE PERFIL
import minhaFotoDePerfil from '../imgportfolio/minhafoto.png'; 


const projectCategories = ['All', 'Web Design', 'UI/UX', 'App Design', 'Branding'];

const projectsData = [
  {
    id: 1,
    title: "Brasil Predial",
    category: "Web Design",
    imageUrl: brp1Image, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "#",
    github: "#",
    description: "Uma plataforma de Registro eletrônico responsiva com interface de usuário moderna e pra uma empresa privada,cadastros de fluxo de caixas."
  },
  {
    id: 2,
    title: "Portfolio Daniel Willians Mucheirone",
    category: "UI/UX",
    imageUrl: port1Image, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://viniciosmucheirone.com/",
    github: "#",
    description: "Cliente pediu um portfólio para ele, e eu fiz um portfólio simples, mas com uma boa responsividade e com uma boa usabilidade. Ele disse que ficou perfeito e atendeu a todas as necessidades dele."
  },
  {
    id: 3,
    title: "Meus Saas Em Andamento",
    category: "App Design",
    imageUrl: saas1Image, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "#",
    github: "#",
    description: "Futuramente,Sera   Um Saaas Agente De Ia,Com Painel Administrativo E Um App Para O Cliente,Com Funcionalidades De Chat E Outros Recursos."
  },
  {
    id: 4,
    title: "Loja De Acai",
    category: "Branding",
    imageUrl: acai1Image, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://acai.deliverits.com.br/",
    github: "#",
    description: "Design Completo De Indentidade De Marca Para Uma Rede De Lojas Sofisticadas. Inclui Logotipo, Paleta De Cores E Tipografia,E,Site Em Si."
  },
  {
    id: 5,
    title: "Sistema Nativos Lanches",
    category: "App Design",
    imageUrl: lanchesdeliveryImage, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://www.nativosdelivery.com.br/",
    github: "#",
    description: "Sistema completo de pedidos online desenvolvido para a lanchonete Nativos Lanches. A aplicação permite que os clientes realizem pedidos de forma prática, visualizem o cardápio atualizado, personalizem seus lanches e acompanhem o status do pedido em tempo real."
  },

  {
    id: 6,
    title: "Sistema DE Pdv Simples",
    category: "Web Design",
    imageUrl: cesta1Image, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://cestainteligente.top/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 7,
    title: "Integração de Pagamento API com o PagSeguro",
    category: "Web Design",
    imageUrl: casqueiImage, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://www.acessoriosoticos.com/",
    github: "#",
    description: "Integração de pagamento com o PagSeguro, onde o cliente pode fazer o pagamento através do cartão de crédito, boleto e outros métodos. O cliente disse que ficou perfeito e atendeu a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 8,
    title: "Sistema DE Alugueis De Chácaras",
    category: "Web Design",
    imageUrl: printchacara2, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://cara-central-hub.vercel.app/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 9,
    title: "Sistema Crm",
    category: "Web Design",
    imageUrl: uma, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://notion-agency-flow.vercel.app/auth",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 10,
    title: "Sistema Agendamento Odontológico",
    category: "Web Design",
    imageUrl: sistemadentario, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://dental-flow-personalizado.vercel.app/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 11,
    title: "App IByte",
    category: "App Design",
    imageUrl: appibyteImage,
    link: "https://play.google.com/store/apps/details?id=com.kobe.ibyte&pcampaignid=web_share",
    github: "#",
    description: "Sistema completo de E-commerce desenvolvido para a IByte, com funcionalidades de catálogo de produtos, carrinho de compras e integração com métodos de pagamento. Interface amigável e responsiva para uma experiência de compra fluida."
  },
  {
    id: 12,
    title: "E-commerce IByte",
    category: "Web Design",
    imageUrl: ibyteImage, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://www.ibyte.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 13,
    title: "E-commerce Mega Eletrônico",
    category: "Web Design",
    imageUrl: megaeletronico, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://megaeletronicos.com/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 14,
    title: "App Mega Eletrônico",
    category: "App Design",
    imageUrl: appmegaeletronico,
    link: "https://play.google.com/store/apps/details?id=com.megaeletronicos.app&pcampaignid=web_share",
    github: "#",
    description: "Sistema completo de E-commerce desenvolvido para a Mega Eletrônico, com funcionalidades de catálogo de produtos, carrinho de compras e integração com métodos de pagamento. Interface amigável e responsiva para uma experiência de compra fluida."
  },
  {
    id: 15,
    title: "App Nosso Lar",
    category: "App Design",
    imageUrl: appnossolar,
    link: "https://play.google.com/store/apps/details?id=br.com.nwsys.lojasnossolar&pcampaignid=web_share",
    github: "#",
    description: "Sistema completo de E-commerce desenvolvido para a Nosso Lar, com funcionalidades de catálogo de produtos, carrinho de compras e integração com métodos de pagamento. Interface amigável e responsiva para uma experiência de compra fluida."
  },
  {
    id: 16,
    title: "E-Commerce Oriba Shop",
    category: "Web Design",
    imageUrl: oribashop, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://www.oriba.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 17,
    title: "E-Commerce EShop",
    category: "Web Design",
    imageUrl: eshope, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://www.eshop.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 18,
    title: "E-Commerce FatShop",
    category: "Web Design",
    imageUrl: fastshope, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://site.fastshop.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 19,
    title: "App FatShop",
    category: "App Design",
    imageUrl: appfastshope,
    link: "https://play.google.com/store/apps/details?id=br.com.fastshop.ecommerce.beta&pcampaignid=web_share",
    github: "#",
    description: "Sistema completo de E-commerce desenvolvido para a FatShop, com funcionalidades de catálogo de produtos, carrinho de compras e integração com métodos de pagamento. Interface amigável e responsiva para uma experiência de compra fluida."
  },
  {
    id: 20,
    title: "E-Commerce Gigantec",
    category: "Web Design",
    imageUrl: gigantec, // <-- USE A VARIÁVEL IMPORTADA AQUI
    link: "https://www.gigantec.com.br/",
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
                  src={project.imageUrl} // Isso já está correto, pois agora imageUrl é uma variável importada
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
        
        {/* Exemplo de onde você pode usar a sua foto de perfil fora da lista de projetos */}
        {/* Você precisará encontrar o componente real onde sua foto está sendo usada */}
        {/* e fazer a importação e uso lá, não necessariamente neste arquivo Projects.jsx */}
        {/* Por exemplo, se for no seu Header ou About Section: */}
        {/* <div className="my-8 text-center">
             <img src={minhaFotoDePerfil} alt="Robson Alex" className="w-32 h-32 rounded-full mx-auto" />
             <p className="mt-4 text-xl font-bold">Robson Alex</p>
           </div> */}

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>
  );
};

export default Projects;