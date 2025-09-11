'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NavButton } from './NavButton';
import { useSetting } from '@/features/hooks';

export const ThemeToggle = () => {
    
    const settings = useSetting();
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';
        
    return (
        <NavButton
            hoverable={false}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            icon={isDark ? Moon : Sun}
            label={settings.theme[isDark ? 'dark' : 'light']}
        />
    );
};
