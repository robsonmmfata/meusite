import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contatato', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif font-bold text-portfolio-blue">
          Robson<span className="text-portfolio-accent"> Alex</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-portfolio-violet transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/mycvde atualizado.pdf"
            download
            className="bg-portfolio-indigo hover:bg-portfolio-violet text-white transition-colors px-4 py-2 rounded inline-block text-center"
          >
            Download CV
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-portfolio-violet transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          <a
            href="/mycvde atualizado.pdf"
            download
            className="bg-portfolio-indigo hover:bg-portfolio-violet text-white transition-colors w-full mt-2 px-4 py-2 rounded inline-block text-center"
          >
            Download CV
          </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
