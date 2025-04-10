
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ColorBlock = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
  <div className="flex flex-col items-center mb-4">
    <div className={`w-20 h-20 rounded-md ${color} shadow-md`}></div>
    <p className="mt-2 font-medium text-sm">{name}</p>
    <p className="text-xs text-muted-foreground">{hex}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-hamada-tech-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-tech-gradient z-0 opacity-80"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-hamada-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-hamada-blue/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="purple-gradient-text">Hamada</span> Tecnologias
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Paleta de cores tecnológica com foco em tons de roxo
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="tech-button-primary animate-pulse-purple">Botão Primário</Button>
            <Button className="tech-button-secondary">Botão Secundário</Button>
            <Button className="tech-button-outline">Botão Outline</Button>
          </div>
        </div>
      </div>

      {/* Color Palette Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Paleta de Cores</h2>
        
        <Card className="p-8 bg-hamada-tech-dark border-hamada-purple/30">
          <h3 className="text-xl font-bold mb-6 purple-gradient-text">Cores Principais</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <ColorBlock color="bg-hamada-purple" name="Roxo Principal" hex="#6C38C0" />
            <ColorBlock color="bg-hamada-purple-light" name="Roxo Claro" hex="#9B87F5" />
            <ColorBlock color="bg-hamada-purple-dark" name="Roxo Escuro" hex="#4A2082" />
            <ColorBlock color="bg-hamada-blue" name="Azul Tech" hex="#1EAEDB" />
          </div>
          
          <Separator className="my-8 bg-hamada-purple/20" />
          
          <h3 className="text-xl font-bold mb-6 purple-gradient-text">Cores Secundárias</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <ColorBlock color="bg-hamada-blue-light" name="Azul Claro" hex="#6BD4F5" />
            <ColorBlock color="bg-hamada-blue-dark" name="Azul Escuro" hex="#0F5C75" />
            <ColorBlock color="bg-hamada-tech-black" name="Preto Tech" hex="#121212" />
            <ColorBlock color="bg-hamada-tech-dark" name="Fundo Tech" hex="#1A1F2C" />
          </div>
          
          <Separator className="my-8 bg-hamada-purple/20" />
          
          <h3 className="text-xl font-bold mb-6 purple-gradient-text">Tons Neutros</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ColorBlock color="bg-hamada-gray-light" name="Cinza Claro" hex="#F7FAFC" />
            <ColorBlock color="bg-hamada-gray" name="Cinza Médio" hex="#A0AEC0" />
            <ColorBlock color="bg-hamada-gray-dark" name="Cinza Escuro" hex="#4A5568" />
            <ColorBlock color="bg-hamada-tech-gray" name="Cinza Tech" hex="#2D3748" />
          </div>
        </Card>
      </div>

      {/* Component Showcase */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Componentes com a Paleta</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="tech-card">
            <h3 className="text-xl font-bold mb-4 text-hamada-purple">Inovação</h3>
            <p className="text-gray-400 mb-6">Soluções tecnológicas de ponta para seu negócio com nossa paleta vibrante.</p>
            <Button className="tech-button-primary w-full">Saiba mais</Button>
          </Card>
          
          <Card className="tech-card">
            <h3 className="text-xl font-bold mb-4 text-hamada-blue">Performance</h3>
            <p className="text-gray-400 mb-6">Aumente a eficiência com tecnologias avançadas e experiências inovadoras.</p>
            <Button className="tech-button-secondary w-full">Explorar</Button>
          </Card>
          
          <Card className="tech-card">
            <h3 className="text-xl font-bold mb-4 purple-gradient-text">Futuro</h3>
            <p className="text-gray-400 mb-6">Prepare sua empresa para o futuro com soluções digitais personalizadas.</p>
            <Button className="tech-button-outline w-full">Contato</Button>
          </Card>
        </div>
      </div>

      {/* Gradients Showcase */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Gradientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-40 rounded-lg bg-tech-gradient flex items-center justify-center">
            <p className="font-medium">Tech Gradient</p>
          </div>
          <div className="h-40 rounded-lg bg-purple-blue-gradient flex items-center justify-center">
            <p className="font-medium">Purple-Blue Gradient</p>
          </div>
          <div className="h-40 rounded-lg bg-purple-gradient flex items-center justify-center">
            <p className="font-medium">Purple Gradient</p>
          </div>
        </div>
      </div>
      
      <footer className="py-10 mt-16 border-t border-hamada-purple/20 bg-hamada-tech-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">Hamada Tecnologias - Paleta de Cores Tecnológica</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
