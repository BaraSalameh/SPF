export type CompanyAtts = {
    name: string;
    location: string;
    position: string;
}

export type CommonCompanyAtts = {
    startDate: string;
    endDate: string;
    website: string;
}

export interface CompanyProps {
    position: string;
    startDate: string;
    endDate: string;
    linkLabel: string;
    linkUrl: string;
}