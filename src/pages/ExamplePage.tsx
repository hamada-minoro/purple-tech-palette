
import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import FeatureCards from '@/components/FeatureCards';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const ExamplePage = () => {
  return (
    <div className="min-h-screen bg-hamada-tech-black text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="bg-tech-gradient relative py-20 px-6 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-hamada-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-hamada-blue/20 rounded-full blur-3xl"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="purple-gradient-text">Tecnologia</span> para o futuro
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Explore nossa plataforma de soluções tecnológicas inovadoras para transformar sua empresa.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="tech-button-primary animate-pulse-purple">Começar agora</button>
                <button className="tech-button-outline">Saiba mais</button>
              </div>
            </div>
          </div>
          
          <FeatureCards />
          
          <StatsSection />
          
          {/* Additional content could go here */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ExamplePage;
