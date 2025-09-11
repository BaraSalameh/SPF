import { CompanyName } from "../types.features";
import { CommonCompanyAtts, CompanyAtts } from "./types.experience";

export const commonCompanyAtts: Record<CompanyName, CommonCompanyAtts> = {
    AAUP: {
        startDate: '10/2024',
        endDate: '02/2025',
        website: "https://www.aaup.edu"
    },
    Spinnel: {
        startDate: '02/2024',
        endDate: '05/2024',
        website: "https://spineltechnology.com/"
    },
    Jawwal: {
        startDate: '10/2023',
        endDate: '02/2024',
        website: "https://www.jawwal.ps/"
    },
    UATS: {
        startDate: '05/2022',
        endDate: '08/2022',
        website: "https://www.ultimitats.com/"
    }
}

export const enCompany: Record<CompanyName, CompanyAtts> = {
    AAUP: {
        name: 'Arab American University',
        location: 'Jenin, Palestine',
        position: 'Lecturer',
    },
    Spinnel: {
        name: 'ERP Easy (Spinnel)',
        location: 'Ramallah, Palestine',
        position: 'jr. Backend Software Developer',
    },
    Jawwal: {
        name: 'Jawwal',
        location: 'Ramallah, Palestine',
        position: 'Embassador',
    },
    UATS: {
        name: 'Ultimate Advanced Turnkey Solutions',
        location: 'Rawabi, Palestine',
        position: 'Fresher Frontend software developer',
    }
}

export const arCompany: Record<CompanyName, CompanyAtts> = {
    AAUP: {
        name: 'الجامعة العربية الامريكية',
        location: 'جـنـيـن، فـلـسـطـيـن',
        position: 'محاضر',
    },
    Spinnel: {
        name: 'سـبـيـنـيـل تـكـنـولـوجـي',
        location: 'رام الـلـه، فـلـسـطـيـن',
        position: 'مطور مواقع انترنت متوسط',
    },
    Jawwal: {
        name: 'جـوال',
        location: 'رام الـلـه، فـلـسـطـيـن',
        position: 'سفير',
    },
    UATS: {
        name: 'التيمتس للحلول المتكاملة',
        location: 'روابـي، فـلـسـطـيـن',
        position: 'مطور مواقع انترنت مبتدئ',
    }
}

export const trCompany: Record<CompanyName, CompanyAtts> = {
    AAUP: {
        name: 'Arab American Üniversitesi',
        location: 'Jenin, Filistin',
        position: 'Hoca',
    },
    Spinnel: {
        name: 'ERP Easy (Spinnel)',
        location: 'Ramallah, Filistin',
        position: 'Orta website uzmanı',
    },
    Jawwal: {
        name: 'Jawwal',
        location: 'Ramallah, Filistin',
        position: 'Büyükelçi',
    },
    UATS: {
        name: 'Ultimate Advanced Turnkey Solutions',
        location: 'Rawabi, Filistin',
        position: 'Yeni website uzmanı',
    }
}

export const enVisitCompany = 'Visit Company';
export const arVisitCompany = 'زيارة الشركة';
export const trVisitCompany = 'Şirketi Ziyaret Et';

export const enChartTitle = 'Duration (Month)';
export const arChartTitle = 'المدة الزمنية (شهر)';
export const trChartTitle = 'Süre (Ay)';