'use client';

import { X } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import { ResponsiveIcon } from './ResponsiveIcon';
import { Text } from './Text';
import { BlurBackground } from '../shared';
import { card, link } from '@/styles';

export const Modal = ({
    title,
    subTitle = title,
    content,
    icon,
    jsx
}: {title: string; subTitle?: string; content?: string; icon?: string; jsx?: ReactNode}) => {

    const [openModal, setOpenModal] = useState(false);
    const currentIcon = icon ? <ResponsiveIcon icon={icon} iconType="Image" /> : <ResponsiveIcon />;
            
    return (
        <React.Fragment>
            <div className={link()} onClick={() => setOpenModal(true)}>
                {currentIcon}
                {title ? title : null}
            </div>
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
                        {jsx}
                    </div>
                </BlurBackground>
            )}
        </React.Fragment>
    );
};
