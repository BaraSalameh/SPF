'use client'

import { Fragment, useState } from "react";
import { Link, ResponsiveIcon, Text } from '@/components/ui';
import { LocationEdit, Mail, MailCheck, MessageCircleCode, Phone } from "lucide-react";
import { userCommon } from "@/content/user";
import { useLanguage } from "@/lib/hooks";

export const Information = () => {
    const lang = useLanguage();
    const common = userCommon.profile;

    const [emailCopied, setEmailCopied] = useState(false);
    const [MobileCopied, setMobilCopied] = useState(false);
    const [whatsappCopied, setWhatsappCopied] = useState(false);

    const sysInfo = lang.systemLanguage.profile.information;
    const location = lang.userLanguage.profile.information.location;
    
    const handleCopy = async (toCopy: string, action: (value: boolean) => void) => {
        await navigator.clipboard.writeText(toCopy);
        action(true);
        setTimeout(() => action(false), 3000);
    };
 
    return (
        <Fragment>
            <Text>
                <ResponsiveIcon icon={LocationEdit} />
                {location}
            </Text>
            <Text copyable={true} intent={emailCopied ? "success" : "primary"} onClick={() => handleCopy(common.contactInformaion.email, setEmailCopied)}>
                <ResponsiveIcon icon={emailCopied ? MailCheck : Mail} />
                {emailCopied ? sysInfo.copy : common.contactInformaion.email}
            </Text>
            <Text copyable={true} intent={MobileCopied ? "success" : "primary"} onClick={() => handleCopy(common.contactInformaion.mobile, setMobilCopied)}>
                <ResponsiveIcon icon={Phone} />
                {MobileCopied ? sysInfo.copy : common.contactInformaion.mobile}
            </Text>
           <Text copyable={true} intent={whatsappCopied ? "success" : "primary"} onClick={() => handleCopy(common.contactInformaion.whatsapp, setWhatsappCopied)}>
                <ResponsiveIcon icon={MessageCircleCode} />
                {whatsappCopied ? sysInfo.copy : common.contactInformaion.whatsapp}
            </Text>
            <div className="flex flex-wrap justify-center gap-5">
                <Link label={sysInfo.gitHub} icon={common.socialMedia?.gitHub?.icon ?? ''} to={common.socialMedia?.gitHub?.path ?? ''} />
                <Link label={sysInfo.linkedIn} icon={common.socialMedia?.linkedIn?.icon ?? ''} to={common.socialMedia?.linkedIn?.path ?? ''} />
                <Link label={sysInfo.facebook} icon={common.socialMedia?.facebook?.icon ?? ''} to={common.socialMedia?.facebook?.path ?? ''} />
                <Link label={sysInfo.instagram} icon={common.socialMedia?.instagram?.icon ?? ''} to={common.socialMedia?.instagram?.path ?? ''} />
                <Link label={sysInfo.email} icon={common.socialMedia?.email?.icon ?? ''} to={common.socialMedia?.email?.path ?? ''} />
                <Link label={sysInfo.whatsapp} icon={common.socialMedia?.whatsapp?.icon ?? ''} to={common.socialMedia?.whatsapp?.path ?? ''} />
            </div>
        </Fragment>
    );
}