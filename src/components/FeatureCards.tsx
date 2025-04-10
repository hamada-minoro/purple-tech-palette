
import React from 'react';
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Monitor,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'purple' | 'blue';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color
}) => {
  return (
    <Card className={`
      border-${color === 'purple' ? 'hamada-purple' : 'hamada-blue'}/20 
      bg-hamada-tech-dark 
      transition-transform duration-300 
      hover:scale-105 
      hover:shadow-lg
      hover:shadow-${color === 'purple' ? 'hamada-purple' : 'hamada-blue'}/10
    `}>
      <CardHeader className="pb-2">
        <div className={`
          w-12 h-12 
          rounded-lg 
          flex items-center justify-center 
          mb-4
          bg-${color === 'purple' ? 'hamada-purple' : 'hamada-blue'}/10
          text-${color === 'purple' ? 'hamada-purple' : 'hamada-blue'}-light
        `}>
          {icon}
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className={`
            p-0 
            text-${color === 'purple' ? 'hamada-purple' : 'hamada-blue'}-light
            hover:text-${color === 'purple' ? 'hamada-purple-light' : 'hamada-blue-light'}
            hover:bg-transparent
          `}
        >
          <span className="mr-2">Saiba mais</span>
          <ArrowRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeatureCards = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-hamada-tech-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Recursos <span className="purple-gradient-text">Tecnológicos</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore nossa coleção de recursos tecnológicos avançados projetados para impulsionar sua empresa para o futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Zap size={24} />}
            title="Desempenho Otimizado"
            description="Aumente a velocidade e eficiência dos seus sistemas com nossa tecnologia de ponta."
            color="purple"
          />
          
          <FeatureCard
            icon={<Shield size={24} />}
            title="Segurança Avançada"
            description="Proteja seus dados com nossa tecnologia de segurança empresarial."
            color="blue"
          />
          
          <FeatureCard
            icon={<TrendingUp size={24} />}
            title="Escalabilidade"
            description="Cresça sem limites com infraestrutura que se adapta às suas necessidades."
            color="purple"
          />
          
          <FeatureCard
            icon={<Monitor size={24} />}
            title="Interface Intuitiva"
            description="Experiência do usuário simplificada e rica em recursos visuais."
            color="blue"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
