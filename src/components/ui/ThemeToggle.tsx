'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Text } from './Text';
import { ThemeToggleProps } from './types.ui';
import { ResponsiveIcon } from './ResponsiveIcon';
import { useTheme } from 'next-themes';

export const ThemeToggle = ({
    title,
    themeNameIncluded = false,
    className
}: ThemeToggleProps) => {
    
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    const text: string | null =
        title
        ?   themeNameIncluded
            ?   `${title}${theme}`
            :   `${title}`
        :   themeNameIncluded
            ?   `${theme}`
            :   null
        
    return (
        <Text onClick={() => setTheme(isDark ? 'light' : 'dark')} className={className}>
            <ResponsiveIcon icon={isDark ? Sun : Moon} />
            {text}
        </Text>
    );
};
