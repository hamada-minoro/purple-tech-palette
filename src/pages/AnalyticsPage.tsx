
import React from 'react';
import AnalyticsSidebar from '@/components/AnalyticsSidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-hamada-tech-black text-white flex">
      <AnalyticsSidebar />
      
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Análise de Dados</h1>
            <p className="text-gray-400">Visualize e analise métricas importantes para tomada de decisões</p>
          </header>
          
          <Tabs defaultValue="daily" className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <TabsList className="bg-hamada-tech-dark border border-hamada-purple/20">
                <TabsTrigger value="daily" className="data-[state=active]:bg-hamada-purple data-[state=active]:text-white">
                  Diário
                </TabsTrigger>
                <TabsTrigger value="weekly" className="data-[state=active]:bg-hamada-purple data-[state=active]:text-white">
                  Semanal
                </TabsTrigger>
                <TabsTrigger value="monthly" className="data-[state=active]:bg-hamada-purple data-[state=active]:text-white">
                  Mensal
                </TabsTrigger>
                <TabsTrigger value="yearly" className="data-[state=active]:bg-hamada-purple data-[state=active]:text-white">
                  Anual
                </TabsTrigger>
              </TabsList>
              
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-hamada-tech-dark hover:bg-hamada-purple/10 border border-hamada-purple/20 rounded-md text-sm text-gray-300 transition-colors">
                  Exportar
                </button>
                <button className="px-3 py-1 bg-hamada-tech-dark hover:bg-hamada-purple/10 border border-hamada-purple/20 rounded-md text-sm text-gray-300 transition-colors">
                  Compartilhar
                </button>
              </div>
            </div>
            
            <TabsContent value="daily" className="space-y-6">
              {/* Quick stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Usuários Ativos', value: '2,842', change: '+12%' },
                  { label: 'Novos Cadastros', value: '482', change: '+8%' },
                  { label: 'Tempo Médio', value: '8m 42s', change: '-3%' },
                  { label: 'Taxa de Conversão', value: '3.2%', change: '+0.8%' }
                ].map((stat, i) => (
                  <Card key={i} className="bg-hamada-tech-dark border-hamada-purple/20">
                    <CardContent className="p-6">
                      <p className="text-gray-400 mb-1 text-sm">{stat.label}</p>
                      <div className="flex justify-between items-end">
                        <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                        <span className={`text-sm px-2 rounded-full ${
                          stat.change.startsWith('+') 
                            ? 'text-green-500 bg-green-500/10' 
                            : 'text-red-500 bg-red-500/10'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <Card className="bg-hamada-tech-dark border-hamada-purple/20">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg text-white">Atividades por Hora</CardTitle>
                    <LineChart className="h-5 w-5 text-hamada-purple" />
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-gray-500 flex flex-col items-center">
                      <BarChart className="h-16 w-16 mb-2 text-hamada-purple/40" />
                      <p>Gráfico de linha seria exibido aqui</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-hamada-tech-dark border-hamada-purple/20">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg text-white">Distribuição de Usuários</CardTitle>
                    <PieChart className="h-5 w-5 text-hamada-purple" />
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-gray-500 flex flex-col items-center">
                      <PieChart className="h-16 w-16 mb-2 text-hamada-purple/40" />
                      <p>Gráfico de pizza seria exibido aqui</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Additional content for other tabs would go here */}
            </TabsContent>
            
            <TabsContent value="weekly">
              <div className="h-96 flex items-center justify-center text-gray-500">
                Conteúdo da visão semanal seria exibido aqui
              </div>
            </TabsContent>
            
            <TabsContent value="monthly">
              <div className="h-96 flex items-center justify-center text-gray-500">
                Conteúdo da visão mensal seria exibido aqui
              </div>
            </TabsContent>
            
            <TabsContent value="yearly">
              <div className="h-96 flex items-center justify-center text-gray-500">
                Conteúdo da visão anual seria exibido aqui
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
