
import React, { useState } from 'react';
import { 
  Home, 
  LayoutDashboard, 
  Users, 
  FileText,
  Settings, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import HamadaLogo from './HamadaLogo';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon: Icon, 
  label, 
  active = false,
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left transition-all",
        active 
          ? "bg-hamada-purple text-white" 
          : "text-gray-300 hover:bg-hamada-purple/10 hover:text-white"
      )}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div 
      className={cn(
        "h-screen bg-hamada-tech-black border-r border-hamada-purple/20 transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-hamada-purple/20 flex items-center justify-between">
        {!collapsed && <HamadaLogo size="sm" />}
        {collapsed && <div className="mx-auto"><HamadaLogo size="sm" showText={false} /></div>}
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-300 hover:text-white"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-hamada-purple/20">
        {!collapsed ? (
          <>
            <SidebarItem 
              icon={LayoutDashboard} 
              label="Dashboard" 
              active={activeItem === 'dashboard'} 
              onClick={() => setActiveItem('dashboard')}
            />
            <SidebarItem 
              icon={Home} 
              label="Home" 
              active={activeItem === 'home'} 
              onClick={() => setActiveItem('home')}
            />
            <SidebarItem 
              icon={Users} 
              label="Usuários" 
              active={activeItem === 'users'} 
              onClick={() => setActiveItem('users')}
            />
            <SidebarItem 
              icon={FileText} 
              label="Relatórios" 
              active={activeItem === 'reports'} 
              onClick={() => setActiveItem('reports')}
            />
          </>
        ) : (
          <>
            <div className={cn(
              "flex justify-center p-3 rounded-md",
              activeItem === 'dashboard' ? "bg-hamada-purple text-white" : "text-gray-300 hover:bg-hamada-purple/10 hover:text-white"
            )}>
              <LayoutDashboard size={24} />
            </div>
            <div className={cn(
              "flex justify-center p-3 rounded-md",
              activeItem === 'home' ? "bg-hamada-purple text-white" : "text-gray-300 hover:bg-hamada-purple/10 hover:text-white"
            )}>
              <Home size={24} />
            </div>
            <div className={cn(
              "flex justify-center p-3 rounded-md",
              activeItem === 'users' ? "bg-hamada-purple text-white" : "text-gray-300 hover:bg-hamada-purple/10 hover:text-white"
            )}>
              <Users size={24} />
            </div>
            <div className={cn(
              "flex justify-center p-3 rounded-md",
              activeItem === 'reports' ? "bg-hamada-purple text-white" : "text-gray-300 hover:bg-hamada-purple/10 hover:text-white"
            )}>
              <FileText size={24} />
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-hamada-purple/20 p-4">
        {!collapsed ? (
          <div className="space-y-1">
            <SidebarItem 
              icon={Settings} 
              label="Configurações" 
              active={activeItem === 'settings'} 
              onClick={() => setActiveItem('settings')}
            />
            <SidebarItem 
              icon={HelpCircle} 
              label="Ajuda & Suporte" 
              active={activeItem === 'help'} 
              onClick={() => setActiveItem('help')}
            />
          </div>
        ) : (
          <div className="space-y-3">
            <div className={cn(
              "flex justify-center p-3 rounded-md",
              activeItem === 'settings' ? "bg-hamada-purple text-white" : "text-gray-300 hover:bg-hamada-purple/10 hover:text-white"
            )}>
              <Settings size={24} />
            </div>
            <div className={cn(
              "flex justify-center p-3 rounded-md",
              activeItem === 'help' ? "bg-hamada-purple text-white" : "text-gray-300 hover:bg-hamada-purple/10 hover:text-white"
            )}>
              <HelpCircle size={24} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
