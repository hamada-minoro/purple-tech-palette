
import React from 'react';
import { 
  BarChart2, 
  PieChart, 
  LineChart, 
  Activity, 
  Users, 
  HelpCircle, 
  MessagesSquare, 
  Settings 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import HamadaLogo from './HamadaLogo';
import { cn } from '@/lib/utils';

interface AnalyticsSidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const AnalyticsSidebarItem: React.FC<AnalyticsSidebarItemProps> = ({
  icon,
  label,
  active = false,
  onClick
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          className={cn(
            "w-12 h-12 flex flex-col items-center justify-center rounded-full mb-2 transition-all",
            active
              ? "bg-hamada-purple text-white"
              : "text-gray-400 hover:bg-hamada-purple/10 hover:text-white"
          )}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" className="bg-hamada-tech-dark border-hamada-purple/20 text-white">
        {label}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const AnalyticsSidebar = () => {
  const [activeItem, setActiveItem] = React.useState('overview');

  return (
    <div className="h-screen w-20 bg-hamada-tech-black border-r border-hamada-purple/20 flex flex-col items-center py-6">
      {/* Logo */}
      <div className="mb-8">
        <HamadaLogo size="sm" showText={false} />
      </div>

      {/* Primary Navigation */}
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col items-center px-2">
          <AnalyticsSidebarItem
            icon={<Activity size={20} />}
            label="Visão Geral"
            active={activeItem === 'overview'}
            onClick={() => setActiveItem('overview')}
          />
          
          <AnalyticsSidebarItem
            icon={<BarChart2 size={20} />}
            label="Métricas de Uso"
            active={activeItem === 'metrics'}
            onClick={() => setActiveItem('metrics')}
          />
          
          <AnalyticsSidebarItem
            icon={<LineChart size={20} />}
            label="Tendências"
            active={activeItem === 'trends'}
            onClick={() => setActiveItem('trends')}
          />
          
          <AnalyticsSidebarItem
            icon={<PieChart size={20} />}
            label="Distribuição"
            active={activeItem === 'distribution'}
            onClick={() => setActiveItem('distribution')}
          />
          
          <AnalyticsSidebarItem
            icon={<Users size={20} />}
            label="Usuários"
            active={activeItem === 'users'}
            onClick={() => setActiveItem('users')}
          />
          
          {/* Divider */}
          <div className="w-8 h-px bg-hamada-purple/20 my-4"></div>
          
          <AnalyticsSidebarItem
            icon={<MessagesSquare size={20} />}
            label="Feedback"
            active={activeItem === 'feedback'}
            onClick={() => setActiveItem('feedback')}
          />
        </div>
      </ScrollArea>

      {/* Footer Navigation */}
      <div className="mt-4 flex flex-col items-center">
        <AnalyticsSidebarItem
          icon={<HelpCircle size={20} />}
          label="Ajuda"
          active={activeItem === 'help'}
          onClick={() => setActiveItem('help')}
        />
        
        <AnalyticsSidebarItem
          icon={<Settings size={20} />}
          label="Configurações"
          active={activeItem === 'settings'}
          onClick={() => setActiveItem('settings')}
        />
      </div>
    </div>
  );
};

export default AnalyticsSidebar;
