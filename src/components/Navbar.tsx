
import React, { useState } from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HamadaLogo from './HamadaLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-hamada-tech-black border-b border-hamada-purple/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <HamadaLogo size="sm" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Dashboard</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Projetos</a>
                <a href="#" className="text-gray-300 hover:bg-hamada-purple/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Recursos</a>
                <a href="#" className="text-gray-300 hover:bg-hamada-purple/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Suporte</a>
              </div>
            </div>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center">
            <div className="relative mr-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Buscar..."
                className="pl-10 bg-hamada-tech-dark border-hamada-purple/20 focus:border-hamada-purple text-sm rounded-md"
              />
            </div>
            
            {/* Notification */}
            <Button variant="ghost" size="icon" className="mr-2 text-gray-300 hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
            
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                  <div className="w-8 h-8 rounded-full bg-hamada-purple flex items-center justify-center">
                    <span className="text-white text-sm font-medium">HT</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-hamada-tech-dark border-hamada-purple/20">
                <DropdownMenuItem className="hover:bg-hamada-purple/10 cursor-pointer">
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-hamada-purple/10 cursor-pointer">
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-hamada-purple/10 text-red-400 cursor-pointer">
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-hamada-tech-dark border-b border-hamada-purple/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-hamada-purple">Dashboard</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-hamada-purple/10">Projetos</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-hamada-purple/10">Recursos</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-hamada-purple/10">Suporte</a>
          </div>
          <div className="pt-4 pb-3 border-t border-hamada-purple/20">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-hamada-purple flex items-center justify-center">
                  <span className="text-white font-medium">HT</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Hamada Tech</div>
                <div className="text-sm font-medium text-gray-400">contato@hamada.tech</div>
              </div>
            </div>
            <div className="mt-3 px-2">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-hamada-purple/10">Perfil</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-hamada-purple/10">Configurações</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-red-300 hover:bg-hamada-purple/10">Sair</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
