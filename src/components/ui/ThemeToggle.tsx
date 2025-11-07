'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ResponsiveIcon } from './ResponsiveIcon';

export const ThemeToggle = () => {
    
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';
        
    return (
        <ResponsiveIcon
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            icon={isDark ? Moon : Sun}
        />
    );
};
