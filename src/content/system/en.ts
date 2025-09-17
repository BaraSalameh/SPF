import { SystemLanguage } from "./types.system";

export const systemEn: SystemLanguage = {
    navigation: {
        label: 'Navigation',
        Home: 'Home',
        Education: 'Education',
        Experience: 'Experience',
        Projects: 'Project',
        Skills: 'Skills',
        Languages: 'Languages',
        Certificates: 'Certificates'
    },
    setting: {
        label: 'Settings',
        theme: {
            dark : 'Dark',
            light: 'Light'
        },
        language: {
            label: 'Languages'
        }
    },
    profile: {
        utility: {
            cv: 'Resume',
            contactInfo: 'Personal and contact informations',
        },
        information: {
            facebook: 'Facebook',
            instagram: 'Instagram',
            email: 'Send Email',
            whatsapp: 'Send WhatsApp Message',
            copy: 'Copied'
        }
    },
    education: {
        linkLabel: 'Visit University',
        chartLabel: 'Duration (Month)'
    },
    experience: {
        linkLabel: 'Visit Company',
        chartLabel: 'Duration (Month)',
        modalLabel: 'Responsibilites and Achivements',
        description: 'Responsibilites',
        sourceLabel: 'Achivements'
    },
    project: {
        linkLabel: 'View Live Project',
        sourceLabel: 'View on GitHub',
        description: 'Description',
        chartLabel: 'Project skills'
    },
    skill: {
        chartLabel: 'Corresponding widget skills',
        modalLabel: 'View all skills'
    },
    language: {
        chartLabel: 'Language Proficiency'
    },
    certificate: {
        chartLabel: 'Certificate skills',
        linkLabel: 'Visit Provider',
        description: 'Description'
    }
}