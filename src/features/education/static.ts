import { CommonUniversitiesAtts, UniversitiesAtts } from "./types.education"

export const commonUniversityAtts: CommonUniversitiesAtts = {
    uu: {
        startDate: '10/2021',
        endDate: '10/2023',
        website: "https://uskudar.edu.tr/en"
    },
    aaup: {
        startDate: '10/2016',
        endDate: '02/2021',
        website: "https://www.aaup.edu"
    }
}

export const enUniversity: UniversitiesAtts = {
    uu: {
        name: 'Uskudar University',
        location: 'Istanbul, Turkey',
        major: 'Cyber Security',
    },
    aaup: {
        name: 'Arab American University',
        location: 'Jenin, Palestine',
        major: 'Computer Engineer',
    }
}

export const arUniversity: UniversitiesAtts = {
    uu: {
        name: 'جامعة اسكودار',
        location: 'اسطنبول، تركيا',
        major: 'الامن السيبراني',
    },
    aaup: {
        name: 'الجامعة العربية الامريكية',
        location: 'جـنـيـن، فـلـسـطـيـن',
        major: 'هندسة الحاسوب',
    }
}

export const trUniversity: UniversitiesAtts = {
    uu: {
        name: 'Üsküdar Üniversitesi',
        location: 'İstanbul, Türkiye',
        major: 'Siber Güvenlik',
    },
    aaup: {
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