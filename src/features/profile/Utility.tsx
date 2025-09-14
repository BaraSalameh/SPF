'use client';

import { Link, Modal } from '@/components/ui';
import { Information } from "./Information";
import { userCommon } from '@/content/user';
import { useLanguage } from '@/lib/hooks';

export const Utility = () => {
    const lang = useLanguage();
    const utilities = lang.systemLanguage.profile.utility;
    const information = userCommon.profile;

    return (
        <footer className="flex gap-[24px] flex-wrap justify-center">
            <Link icon={information.resume.icon} label={utilities.cv} to={information.resume.path} />
            <Modal
                icon={'/window.svg'}
                title={utilities.contactInfo}
                content={<Information />}
            />
        </footer>
    )
}