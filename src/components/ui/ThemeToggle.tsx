'use client';

import { useContext, useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NavButton } from './NavButton';
import { LanguageContext } from '@/lib/contexts/LanguageContext';

export const ThemeToggle = () => {
    
    const lang = useContext(LanguageContext);
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
