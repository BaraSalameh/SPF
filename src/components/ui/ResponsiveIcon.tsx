import React from 'react';
import { PlusIcon } from 'lucide-react'; 
import { ResponsiveIconProps } from './types.ui';

export const ResponsiveIcon = ({ icon: Icon = PlusIcon, className, onClick }: ResponsiveIconProps) => 
    <Icon className={`w-6 h-6 ${onClick && 'hover:text-light-bg-hover dark:hover:text-dark-bg-hover cursor-pointer'} ${className}`} onClick={onClick} />;