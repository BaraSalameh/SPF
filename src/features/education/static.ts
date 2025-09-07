import { CommonUniversitiesAtts, UniversitiesAtts } from "./types.education"

export const commonUniversityAtts: CommonUniversitiesAtts = {
    aaup: {
        startDate: '10/2016',
        endDate: '02/2021',
        website: "https://www.aaup.edu"
    },
    uu: {
        startDate: '10/2021',
        endDate: '10/2023',
        website: "https://uskudar.edu.tr/en"
    }
}

export const enUniversity: UniversitiesAtts = {
    aaup: {
        name: 'Arab American University',
        location: 'Jenin, Palestine',
        major: 'Computer Engineer',
    },
    uu: {
        name: 'Uskudar University',
        location: 'Istanbul, Turkey',
        major: 'Cyber Security',
    }
}

export const arUniversity: UniversitiesAtts = {
    aaup: {
        name: 'الجامعة العربية الامريكية',
        location: 'جـنـيـن، فـلـسـطـيـن',
        major: 'هندسة الحاسوب',
    },
    uu: {
        name: 'جامعة اسكودار',
        location: 'اسطنبول، تركيا',
        major: 'الامن السيبراني',
    }
}

export const trUniversity: UniversitiesAtts = {
    aaup: {
        name: 'Arab American Üniversitesi',
        location: 'Jenin, Filistin',
        major: 'Bilgisayar Mühendisliği',
    },
    uu: {
        name: 'Üsküdar Üniversitesi',
        location: 'İstanbul, Türkiye',
        major: 'Siber Güvenlik',
    }
}

export const enVisitUniversity = 'Visit Website →';
export const arVisitUniversity = 'زيارة الموقع';
export const trVisitUniversity = 'website gir →';

export const enChartTitle = 'Duration (Month)';
export const arChartTitle = 'المدة الزمنية (شهر)';
export const trChartTitle = 'Süre (Ay)';