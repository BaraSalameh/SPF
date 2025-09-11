'use client';

import { Link, Modal } from '@/components/ui';
import { Information } from "./Information";
import { useContext } from 'react';
import { LanguageContext } from '@/lib/contexts/LanguageContext';
import { userCommon } from '@/content/user';

export const Utility = () => {
    const lang = useContext(LanguageContext);
    const utilities = lang.systemLanguage.profile.utility;
    const information = userCommon.profile;

    return (
        <footer className="flex gap-[24px] flex-wrap justify-center">
            <Link icon={information.resume.icon} label={utilities.cv} to={information.resume.path} />
            <Modal
                icon={'/window.svg'}
                title={utilities.contactInfo}
                jsx={<Information />}
            />
        </footer>
    )
}