import { ReactNode } from "react";

export interface CertificateProps {
    description: ReactNode;
    website: string;
    label: string;
    skills: string[];
}