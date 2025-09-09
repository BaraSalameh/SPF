import { NavigationKey, Skill, SkillName, WidgetName } from "./types.features"

export const enNavigator: Record<WidgetName | NavigationKey, string> = {
    Home: 'Home',
    Education: 'Education',
    Experience: 'Experience',
    Projects: 'Project',
    Skills: 'Skills',
    Languages: 'Languages',
    Certificates: 'Certificates',
    Open: 'Navigation',
    Close: 'Close'
}

export const arNavigator: Record<WidgetName | NavigationKey, string> = {
    Home: 'الرئيسية',
    Education: 'التعليم',
    Experience: 'الخبرات',
    Projects: 'المشاريع',
    Skills: 'المهارات',
    Languages: 'اللغات',
    Certificates: 'الشهادات',
    Open: 'التوجيهات',
    Close: 'اغلاق'
}

export const trNavigator: Record<WidgetName | NavigationKey, string> = {
    Home: 'Anasayfa',
    Education: 'Eğitim',
    Experience: 'Işler',
    Projects: 'Projeler',
    Skills: 'Yetenekler',
    Languages: 'Diller',
    Certificates: 'Sertifikalar',
    Open: 'Gezinmeyi',
    Close: 'Kapat'
}

export const skillsGroup: Record<SkillName, Skill> = {
    "React.js": {
        name: 'React.js',
        logo: '',
        projects: [
           "Aluminum"
        ],
        certificates: [
            "AXSOS Academy"
        ]
    },
    "Next.js": {
        name: 'Next.js',
        logo: '',
        projects: [
           "Static Portfolio",
           "Portfolio"
        ]
    },
    Typescript: {
        name: 'Typescript',
        logo: '',
        projects: [
           "Static Portfolio",
           "Portfolio"
        ]
    },
    "ASP.NET": {
        name: 'ASP.NET',
        logo: '',
        projects: [
            "Portfolio",
            "Aluminum"
        ]
    },
    "SQL Server": {
        name: 'SQL Server',
        logo: '',
        projects: [
            "Portfolio",
            "Aluminum"
        ],
        certificates: [
            "AXSOS Academy"
        ]
    },
    Javascript: {
        name: 'Javascript',
        logo: '',
        projects: [
           "Aluminum"
        ],
        certificates: [
            "AXSOS Academy"
        ]
    },
}