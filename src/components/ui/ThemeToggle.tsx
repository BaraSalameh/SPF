'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NavButton } from './NavButton';
import { useLanguage } from '@/lib/hooks';

export const ThemeToggle = () => {
    
    const lang = useLanguage();
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);
    
    const settings = lang.systemLanguage.setting

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
