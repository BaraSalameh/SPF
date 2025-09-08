import { UniversityName } from "../types.features"
import { CommonUniversityAtts, universityAtts } from "./types.education"

export const commonUniversityAtts: Record<UniversityName, CommonUniversityAtts> = {
    UU: {
        startDate: '10/2021',
        endDate: '10/2023',
        website: "https://uskudar.edu.tr/en"
    },
    AAUP: {
        startDate: '10/2016',
        endDate: '02/2021',
        website: "https://www.aaup.edu"
    }
}

export const enUniversity: Record<UniversityName, universityAtts> = {
    UU: {
        name: 'Uskudar University',
        location: 'Istanbul, Turkey',
        major: 'Cyber Security',
    },
    AAUP: {
        name: 'Arab American University',
        location: 'Jenin, Palestine',
        major: 'Computer Engineer',
    }
}

export const arUniversity: Record<UniversityName, universityAtts> = {
    UU: {
        name: 'جامعة اسكودار',
        location: 'اسطنبول، تركيا',
        major: 'الامن السيبراني',
    },
    AAUP: {
        name: 'الجامعة العربية الامريكية',
        location: 'جـنـيـن، فـلـسـطـيـن',
        major: 'هندسة الحاسوب',
    }
}

export const trUniversity: Record<UniversityName, universityAtts> = {
    UU: {
        name: 'Üsküdar Üniversitesi',
        location: 'İstanbul, Türkiye',
        major: 'Siber Güvenlik',
    },
    AAUP: {
        name: 'Arab American Üniversitesi',
        location: 'Jenin, Filistin',
        major: 'Bilgisayar Mühendisliği',
    }
}

export const enVisitUniversity = 'Visit Website →';
export const arVisitUniversity = 'زيارة الموقع';
export const trVisitUniversity = 'website gir →';

export const enChartTitle = 'Duration (Month)';
export const arChartTitle = 'المدة الزمنية (شهر)';
export const trChartTitle = 'Süre (Ay)';