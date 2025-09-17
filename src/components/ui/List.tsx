import React from 'react';
import { cn } from '@/components/utils';
import { list } from '@/styles';
import { ListProps } from './types.ui';

export const List = ({
    children,
    as,
    size,
    className
}: ListProps) => {
    return (
        <ol className={cn(list({ size, as }), className)}>
            {children}
        </ol>
    );
};
