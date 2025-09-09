'use client';

import { useUtility } from "./hooks/useUtility";
import { Link, Modal } from '@/components/ui';
import { Information } from "./Information";
import { commonInformation } from "./static";

export const Utility = () => {
    const utilities = useUtility();
    const information = commonInformation;

    return (
        <footer className="flex gap-[24px] flex-wrap justify-center">
            <Link icon={information.resume.icon} label={utilities.cv} to={information.resume.website} />
            <Modal
                icon={'/window.svg'}
                title={utilities.contactInfo}
                children={<Information />}
            />
        </footer>
    )
}