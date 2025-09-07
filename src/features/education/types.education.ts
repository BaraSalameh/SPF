type universityAtts = {
    name: string;
    location: string;
    major: string;
}

type CommonUniversityAtts = {
    startDate: string;
    endDate: string;
    website: string;
}

export interface UniversitiesAtts {
    aaup: universityAtts;
    uu: universityAtts;
}

export interface CommonUniversitiesAtts {
    aaup: CommonUniversityAtts;
    uu: CommonUniversityAtts;
}

export interface UniversityProps {
    major: string;
    startDate: string;
    endDate: string;
    linkLabel: string;
    linkUrl: string;
}