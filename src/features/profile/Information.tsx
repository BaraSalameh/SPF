'use client'

import { Fragment, useState } from "react";
import { commonInformation } from "./static";
import { Link, ResponsiveIcon, Text } from '@/components/ui';
import { Cake, Mail, MailCheck, MessageCircleCode, Phone, VenusAndMars } from "lucide-react";
import { useInformation } from "./hooks/useInformation";

export const Information = () => {
    const common = commonInformation;
    const information = useInformation();

    const [emailCopied, setEmailCopied] = useState(false);
    const [MobileCopied, setMobilCopied] = useState(false);
    const [whatsappCopied, setWhatsappCopied] = useState(false);
    
    const handleCopy = async (toCopy: string, action: (value: boolean) => void) => {
        await navigator.clipboard.writeText(toCopy);
        action(true);
        setTimeout(() => action(false), 3000);
    };
 
    return (
        <Fragment>
                <Text intent={emailCopied ? "success" : "primary"} onClick={() => handleCopy(common.contactInformaion.email, setEmailCopied)}>
                    <ResponsiveIcon icon={emailCopied ? MailCheck : Mail} />
                    {emailCopied ? information.copy : common.contactInformaion.email}
                </Text>
            <Text intent={MobileCopied ? "success" : "primary"} onClick={() => handleCopy(common.contactInformaion.mobile, setMobilCopied)}>
                <ResponsiveIcon icon={Phone} />
                {MobileCopied ? information.copy : common.contactInformaion.mobile}
            </Text>
           <Text intent={whatsappCopied ? "success" : "primary"} onClick={() => handleCopy(common.contactInformaion.whatsapp, setWhatsappCopied)}>
                <ResponsiveIcon icon={MessageCircleCode} />
                {whatsappCopied ? information.copy : common.contactInformaion.whatsapp}
            </Text>
            <Text>
                <ResponsiveIcon icon={VenusAndMars} />
                {`${information.gender}`}
            </Text>
            <Text>
                <ResponsiveIcon icon={Cake} />
                {`${common.personalInformation.birthdate}`}
            </Text>
            <div className="flex flex-wrap justify-center gap-5">
                <Link label={information.facebook} icon={common.socialMedia?.facebook?.icon ?? ''} to={common.socialMedia?.facebook?.website ?? ''} />
                <Link label={information.instagram} icon={common.socialMedia?.instagram?.icon ?? ''} to={common.socialMedia?.instagram?.website ?? ''} />
                <Link label={information.sendEmail} icon={common.socialMedia?.email?.icon ?? ''} to={common.socialMedia?.email?.website ?? ''} />
                <Link label={information.sendMessage} icon={common.socialMedia?.whatsapp?.icon ?? ''} to={common.socialMedia?.whatsapp?.website ?? ''} />
            </div>
        </Fragment>
    );
}