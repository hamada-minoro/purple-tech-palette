
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Server, Activity, Award } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: {
    value: string;
    positive: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, trend }) => {
  return (
    <Card className="bg-hamada-tech-dark border border-hamada-purple/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-hamada-purple/5 rounded-bl-full"></div>
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="p-2 bg-hamada-purple/10 rounded-md text-hamada-purple-light">
            {icon}
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold text-white">{value}</h3>
              {trend && (
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  trend.positive 
                    ? 'bg-green-100/10 text-green-500' 
                    : 'bg-red-100/10 text-red-500'
                }`}>
                  {trend.positive ? '+' : ''}{trend.value}
                </span>
              )}
            </div>
            <p className="text-gray-400 mt-1">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatsSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-hamada-tech-black to-hamada-tech-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Resultados <span className="text-hamada-purple">Comprovados</span>
          </h2>
          <div className="h-1 w-20 bg-hamada-purple mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nossa tecnologia tem ajudado empresas a alcançar resultados excepcionais em várias métricas de desempenho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Users size={24} />}
            value="2.4M+"
            label="Usuários Ativos"
            trend={{ value: "12%", positive: true }}
          />
          
          <StatCard
            icon={<Server size={24} />}
            value="99.9%"
            label="Tempo de Atividade"
            trend={{ value: "0.5%", positive: true }}
          />
          
          <StatCard
            icon={<Activity size={24} />}
            value="45%"
            label="Aumento de Desempenho"
            trend={{ value: "10%", positive: true }}
          />
          
          <StatCard
            icon={<Award size={24} />}
            value="25+"
            label="Prêmios Recebidos"
            trend={{ value: "5", positive: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
