export interface UniversityProps {
    name: string;
    logoUrl: string;
    location: string;
    major: string;
    startDate: string;
    endDate?: string;
    website?: string;
};

type universityAtts = {
    name: string;
    location: string;
    major: string;
}

export interface UniversitiesAtts {
    aaup: universityAtts;
    uu: universityAtts;
    visit: string;
}