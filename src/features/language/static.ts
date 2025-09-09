import { LanguageName } from "../types.features"
import { CommonLanguageAtts, LanguageAtts } from "./types.language"

export const commonLanguageAtts: Record<LanguageName, CommonLanguageAtts> = {
    English: {
        level: 3,
        logoUrl: '/UK.svg'
    },
    Arabic: {
        level: 4,
        logoUrl: '/KSA.svg'
    },
    Turkish: {
        level: 3,
        logoUrl: '/TR.svg'
    },
    Spanish: {
        level: 1,
        logoUrl: '/SP.svg'
    },
}

export const enLanguage: Record<LanguageName, LanguageAtts> = {
    English: {
        name: 'English',
        proficiency: 'Advanced'
    },
    Arabic: {
        name: 'Arabic',
        proficiency: 'Native'
    },
    Turkish: {
        name: 'Turkish',
        proficiency: 'Advanced'
    },
    Spanish: {
        name: 'Spanish',
        proficiency: 'Beginner'
    }
}

export const arLanguage: Record<LanguageName, LanguageAtts> = {
    English: {
        name: 'الانجليزية',
        proficiency: 'متقدم'
    },
    Arabic: {
        name: 'العربية',
        proficiency: 'اللغة الام'
    },
    Turkish: {
        name: 'التركية',
        proficiency: 'متقدم'
    },
    Spanish: {
        name: 'الاسبانية',
        proficiency: 'مبتدئ'
    }
}

export const trLanguage: Record<LanguageName, LanguageAtts> = {
    English: {
        name: 'İngilizce',
        proficiency: 'İleri'
    },
    Arabic: {
        name: 'Arapça',
        proficiency: 'Ana Dil'
    },
    Turkish: {
        name: 'Türkçe',
        proficiency: 'İleri'
    },
    Spanish: {
        name: 'İspanyolca',
        proficiency: 'Başlangıç'
    }
}

export const enChartTitle = 'Language Proficiency';
export const arChartTitle = 'مستوى اللغة';
export const trChartTitle = 'Dil Seviyesi';