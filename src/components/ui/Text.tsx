'use client';

import React from 'react';
import { cn } from '@/components/utils';
import { text as paragraph } from '@/styles';
import { TextProps } from './types.ui';

export const Text = ({
    children,
    intent,
    size,
    text,
    position,
    space,
    className,
    onClick
}: TextProps) => {
    return (
        <p className={cn(paragraph({ intent, size, text, position, space, clickable: onClick ? true : false }), className)} onClick={onClick}>
            {children}
        </p>
    );

};
