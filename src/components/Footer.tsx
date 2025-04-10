
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HamadaLogo from './HamadaLogo';

const Footer = () => {
  return (
    <footer className="bg-hamada-tech-black text-gray-300 border-t border-hamada-purple/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <HamadaLogo />
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              Hamada Tecnologias oferece soluções tecnológicas inovadoras para empresas de todos os portes, com foco em desempenho, segurança e escalabilidade.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-hamada-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hamada-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hamada-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hamada-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hamada-purple transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Empresa
            </h3>
            <ul className="space-y-2">
              {['Sobre', 'Carreiras', 'Clientes', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Recursos
            </h3>
            <ul className="space-y-2">
              {['Documentação', 'Tutoriais', 'API', 'Preços', 'Parceiros'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Assine nossa newsletter para receber atualizações e novidades.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-hamada-tech-dark border-hamada-purple/20 text-sm"
              />
              <Button className="bg-hamada-purple hover:bg-hamada-purple-dark">
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-hamada-purple/10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hamada Tecnologias. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
