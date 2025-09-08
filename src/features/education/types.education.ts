export type universityAtts = {
    name: string;
    location: string;
    major: string;
}

export type CommonUniversityAtts = {
    startDate: string;
    endDate: string;
    website: string;
}

export interface UniversityProps {
    major: string;
    startDate: string;
    endDate: string;
    linkLabel: string;
    linkUrl: string;
}