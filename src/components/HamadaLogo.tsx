
import React from 'react';
import { cn } from '@/lib/utils';

interface HamadaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const HamadaLogo: React.FC<HamadaLogoProps> = ({
  className,
  size = 'md',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Logo styling based on the provided image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-4 border-white rounded-full opacity-80"></div>
            <div className="absolute left-0 top-0 bottom-0 w-1/2 border-l-4 border-t-4 border-b-4 border-hamada-purple rounded-l-full"></div>
            <div className="absolute left-1/2 top-0 h-1/2 border-r-4 border-t-4 border-white rounded-tr-full w-[calc(50%-2px)]"></div>
            <div className="absolute left-1/2 h-full w-[4px] bg-hamada-purple"></div>
            <div className="absolute left-1/2 top-1/2 h-1/2 border-r-4 border-white rounded-br-none w-[calc(50%-2px)]"></div>
          </div>
        </div>
      </div>
      
      {showText && (
        <div className="ml-3 flex flex-col">
          <span className="font-bold text-white text-lg leading-tight">HAMADA</span>
          <span className="text-xs text-gray-400 tracking-wider">TECNOLOGIAS</span>
        </div>
      )}
    </div>
  );
};

export default HamadaLogo;
