import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// *** IMPORTAÇÃO DA SUA FOTO DE PERFIL ***
// Como a foto está diretamente em `src/` e este componente está em `src/components/`,
// o caminho correto é `../1741032172529.jpg` (subir um nível para acessar `src/`).
import minhaFotoPrincipal from '../1741032172529.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-portfolio-violet font-medium mb-4 animate-fade-in">Olá, Eu Sou ...</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-portfolio-blue animate-slide-up">
              Programador <span className="text-gradient">Full Stack  Sênior</span>&<span className="text-gradient">Designer Gráfico.</span> 
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg animate-slide-up" style={{animationDelay: '0.2s'}}>
              Sou Freelancer Como Full Stack developer e UI Designer. Desenvolvo Interfaces Modernas E De Alta Qualidade, Concentrado Em Performance, Animações Criativas E Soluções, Responsividade E SEO,Com Mais De 7 Anos De Experiência.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <a
                href="https://wa.me/5519971556747?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento!!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-portfolio-indigo hover:bg-portfolio-violet text-white px-8 py-6 rounded-md transition-all shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Peça Orçamento Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
            </div>
            <div className="mt-12 flex items-center gap-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-full h-3 w-3 animate-pulse"></div>
                <span className="text-gray-600 text-sm">Totalmente Comprometido Com Prazos! </span>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://github.com/robsonmmfata" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-violet transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/robson-gomes-3baa6423a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-violet transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-portfolio-indigo to-portfolio-violet animate-float"></div>
              <img 
                src={minhaFotoPrincipal} // <-- AGORA USANDO A VARIÁVEL IMPORTADA
                alt="Professional headshot"
                className="absolute top-5 left-5 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl animate-float"
                style={{animationDelay: '0.3s'}}
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-bounce">
                <div className="bg-portfolio-indigo text-white h-14 w-14 flex items-center justify-center rounded-full">
                  <span className="font-bold">7+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;