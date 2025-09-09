import { ReactNode } from "react";

export type CertificateAtts = {
    name: string;
    position: string;
    desciption: string;
}

export type CommonCertificateAtts = {
    website: string;
    logoUrl: string;
}

export interface CertificateProps {
    description: ReactNode;
    website: string;
    label: string;
    skills: string[];
}