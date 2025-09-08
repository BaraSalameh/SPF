import { Skill, SkillName, WidgetName } from "./types.features"

export const enNavigator: Record<WidgetName, string> = {
    Home: 'Home',
    Education: 'Education',
    Experience: 'Experience',
    Projects: 'Project',
    Skills: 'Skills',
    Languages: 'Languages',
    Certificates: 'Certificates'
}

export const arNavigator: Record<WidgetName, string> = {
    Home: 'الرئيسية',
    Education: 'التعليم',
    Experience: 'الخبرات',
    Projects: 'المشاريع',
    Skills: 'المهارات',
    Languages: 'اللغات',
    Certificates: 'الشهادات'
}

export const trNavigator: Record<WidgetName, string> = {
    Home: 'Ana Sayfa',
    Education: 'Eğitim',
    Experience: 'Işler',
    Projects: 'Projeler',
    Skills: 'Yetenekler',
    Languages: 'Diller',
    Certificates: 'Sertifikalar'
}

export const skillsGroup: Record<SkillName, Skill> = {
    "React.js": {
        name: 'React.js',
        logo: '',
        projects: [
           "Aluminum"
        ],
    },
    "Next.js": {
        name: 'Next.js',
        logo: '',
        projects: [
           "Static Portfolio",
           "Portfolio"
        ],
    },
    Typescript: {
        name: 'Typescript',
        logo: '',
        projects: [
           "Static Portfolio",
           "Portfolio"
        ],
    },
    "ASP.NET": {
        name: 'ASP.NET',
        logo: '',
        projects: [
            "Portfolio",
            "Aluminum"
        ],
    },
    "SQL Server": {
        name: 'SQL Server',
        logo: '',
        projects: [
            "Portfolio",
            "Aluminum"
        ],
    },
    Javascript: {
        name: 'Javascript',
        logo: '',
        projects: [
           "Aluminum"
        ],
    },
}