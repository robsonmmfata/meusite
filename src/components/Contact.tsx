
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log("Form submitted");
    
    // For now, let's just show a success message
    alert("Obrigado pela sua mensagem! Entrarei em contato com você em breve.");
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-violet font-medium mb-2">Entre Em Contato</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-4">
           Vamos trabalhar juntos
          </h2>
          <p className="text-gray-600">
            Tem um projeto em mente? Sinta-se à vontade para entrar em contato comigo e vamos criar algo incrível juntos.
          </p>
          <div className="w-20 h-1 bg-portfolio-indigo mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-serif font-bold text-portfolio-blue mb-6">
                Informações de contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-portfolio-indigo/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-portfolio-indigo" />
                  </div>
                  <div>
                    <h4 className="font-bold text-portfolio-blue mb-1">Email:</h4>
                    <p className="text-gray-600">robsonmmfata@gmail.com</p>
                    <p className="text-gray-600">(19)97155-6747 (Whatsapp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-portfolio-indigo/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-portfolio-indigo" />
                  </div>
                  <div>
                    <h4 className="font-bold text-portfolio-blue mb-1">Whatsapp:</h4>
                    <p className="text-gray-600">+55 (19)97155-6747</p>
                    
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-portfolio-indigo/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-portfolio-indigo" />
                  </div>
                  <div>
                    <h4 className="font-bold text-portfolio-blue mb-1">Localização:</h4>
                    <p className="text-gray-600">Andradina,São Paulo, Brazil</p>
                 
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-portfolio-blue mb-4">Conecte-se Comigo</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/robsonmmfata" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-portfolio-indigo hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/robson-gomes-3baa6423a/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-portfolio-indigo hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-portfolio-blue mb-6">
                Envie-me uma mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                     Seu Nome
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Seu Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                   Assunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                   Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-portfolio-indigo hover:bg-portfolio-violet text-white transition-all py-6">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
