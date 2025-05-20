import React from 'react';
import Timeline from './Timeline';
import { Button } from './ui/button';
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-violet font-medium mb-2">Um Pouco Sobre Mim</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-4">Minha Journada & Expertise</h2>
          <div className="w-20 h-1 bg-portfolio-indigo mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full max-w-[800px] h-[650px] rounded-lg overflow-hidden shadow-xl mb-12">
                <img 
                  src="/src/1741032172529.jpg" 
                  alt="Working on design" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 md:p-6">
                <div className="text-center">
                  <p className="text-portfolio-blue font-bold text-lg md:text-xl mb-1">7+ Anos</p>
                  <p className="text-gray-600 text-sm md:text-base">Experiencia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              Designer Gráfico&Desenvolvedor Full Stack.
            </h3>
            <p className="text-gray-600 mb-6">
              Sou freelancer como Full Stack developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO,Sistemas de Mvp,Pdv,Erp,E-commerce,Landing Pages E Muito Mais.
            </p>
            <p className="text-gray-600 mb-6">
             Minha abordagem combina criatividade com conhecimento técnico, garantindo que cada projeto não apenas tenha uma aparência bonita, mas também proporcione uma experiência de usuário intuitiva e envolvente. Acredito que um bom design deve ser esteticamente agradável e funcional.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Nome:</h4>
                <p className="text-gray-600">Robson Alex</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Email:</h4>
                <p className="text-gray-600">robsonmmfata@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">localização:</h4>
                <p className="text-gray-600">São Paulo, Brazil</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Disponibilidade:</h4>
                <p className="text-gray-600">Freelancer e em tempo integral</p>
              </div>
            </div>
            
            <Button className="bg-portfolio-indigo hover:bg-portfolio-violet text-white transition-all">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold inline-block">Resumo De Minha Experiências E Cursos</h2>
        </div>
        <Timeline
          courses={[
            { title: 'ANÁLISE DESENVOLVIMENTO DE SISTEMAS', period: '2014 - 2017', description: '' },
            { title: 'ENGENHARIA DE SOFTWARE', period: '2025 (Cursando)', description: '' },
          ]}
          experiences={[
            {
              title: 'FREELANCER 99FREELAS',
              period: '2025 Atual',
              description: 'desenvolvendo Projetos, Pra Diversos Clientes Que Tem Demanda Na Plataforma De Freelancer.',
            },
            {
              title: 'KAIRÓS MALHARIA',
              period: '2017',
              description: 'Designer Gráfico',
            },
            {
              title: 'GLOBAL WEBSITES',
              period: '2010 - 2015',
              description: 'Desenvolvedor Front-End',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default About;
