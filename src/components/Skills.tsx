
import React from 'react';
import { Progress } from "@/components/ui/progress";

const skillsData = [
  { name: 'UI/UX Design/Photoshop/Corel/Figma', level: 90 },
  { name: 'HTML/CSS/Tailwind Css/Java', level: 95 },
  { name: 'Postgresql/Node js/Mongo Db', level: 85 },
  { name: 'React/React Native/Next Js/Flutter/kotlin', level: 80 },
  { name: 'Python/C#', level: 90 },
  { name: 'GraphQL', level: 85 },
  { name: 'Design Resposivo', level: 100 },
];

const servicesData = [
  {
    title: 'UI/UX Designer',
    description: 'Criação de interfaces de usuário intuitivas e visualmente atraentes para sites e aplicativos.',
    icon: (
      <svg className="w-12 h-12 text-portfolio-indigo mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    )
  },
  {
    title: 'Desenvolvimento Web',
    description: 'Construindo sites e aplicativos da web responsivos e de alto desempenho usando tecnologias modernas.',
    icon: (
      <svg className="w-12 h-12 text-portfolio-indigo mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    )
  },
  {
    title: 'Design de aplicativos',
    description: 'Projetar aplicativos móveis fáceis de usar com interfaces bonitas e interações suaves.',
    icon: (
      <svg className="w-12 h-12 text-portfolio-indigo mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: 'Identidade da marca',
    description: 'Criação de identidades de marca coesas, incluindo logotipos, esquemas de cores e diretrizes visuais.',
    icon: (
      <svg className="w-12 h-12 text-portfolio-indigo mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
    )
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-violet font-medium mb-2">Minhas Skills</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-4">
            
          </h2>
          <div className="w-20 h-1 bg-portfolio-indigo mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Bars */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-portfolio-blue mb-8">Hard Skills!</h3>
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-portfolio-blue font-medium">{skill.name}</span>
                    <span className="text-portfolio-violet font-medium">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-200" 
                    style={{
                      "--progress-background": "linear-gradient(to right, #4F46E5, #7C3AED)"
                    } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-portfolio-blue mb-8">Descrições de Serviços</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {servicesData.map((service, index) => (
                <div key={index} className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  {service.icon}
                  <h4 className="text-xl font-bold text-portfolio-blue mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
