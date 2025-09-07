'use client';

import { LucideIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import { ResponsiveIcon } from './ResponsiveIcon';
import { Text } from './Text';
import { BlurBackground } from '../shared';
import { card } from '@/styles';

export const Modal = ({
    title,
    subTitle = title,
    content,
    icon
}: {title: string; subTitle?: string; content: string; icon?: LucideIcon}) => {

    const [openModal, setOpenModal] = useState(false);
    const currentIcon = icon ? <ResponsiveIcon icon={icon} /> : <ResponsiveIcon />;
            
    return (
        <React.Fragment>
            <Text onClick={() => setOpenModal(true)}>
                {currentIcon}
                {title ? title : null}
            </Text>
            {openModal && (
                <BlurBackground intent='sm'>
                    <div className={card()}>
                        {/* Header */}
                        <div className='flex justify-between'>
                            {subTitle && <Text size="md">{subTitle}</Text>}
                            <ResponsiveIcon icon={X} onClick={() => setOpenModal(false)} />
                        </div>
                        <hr />
                        {/* Main */}
                        <div>
                            <Text size="md">{content}</Text>
                        </div>
                    </div>
                </BlurBackground>
            )}
        </React.Fragment>
    );
};
