import React from 'react';

interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

interface TimelineProps {
  courses: TimelineItem[];
  experiences: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ courses, experiences }) => {
  return (
    <section className="mt-12">
      

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Sumario</h3>
        <div className="border-l-2 border-portfolio-indigo pl-4 space-y-6">
          <div>
            <h4 className="font-bold">UNIP</h4>
            <p className="italic text-gray-600">
              Fiz Analise Desenvolvimento De Sistemas, onde aprendi manusear frameworks e javascript, React js, C#, html, css entre outras linguagens. Fora outros vídeos que vivo procurando pra especializar e aprofundar mais pq amo Programação.
            </p>
          </div>
          <div>
            <h4 className="font-bold">UNICESUMAR</h4>
            <p className="italic text-gray-600">
              Estou cursando agora Engenharia De Software, vivo procurando pra especializar e aprofundar mais pq amo Programação.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Meus Cursos:</h3>
        <div className="border-l-2 border-portfolio-indigo pl-4 space-y-6">
          {courses.map((course, index) => (
            <div key={index}>
              <h4 className="font-bold">{course.title}</h4>
              <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">{course.period}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Experiências Profissionais:</h3>
        <div className="border-l-2 border-portfolio-indigo pl-4 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index}>
              <h4 className="font-bold">{exp.title}</h4>
              <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">{exp.period}</span>
              <p className="italic text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
