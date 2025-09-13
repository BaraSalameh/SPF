import { UserCommonLanguage } from "./types.user";

const email = 'barasalameh90@gmail.com';
const whatsapp = '905526436811';

export const userCommon: UserCommonLanguage = {
    profile: {
        resume: {
            path: '/resume.pdf',
            icon: '/file.svg'
        },
        contactInformaion: {
            email: email,
            mobile: '+972500026313',
            whatsapp: `+${whatsapp}`
        },
        personalInformation: {
            birthdate: '19/02/1999',
        },
        socialMedia: {
            facebook: {
                path: 'https://www.facebook.com/bara.salameh/',
                icon: '/facebook.svg'
            },
            instagram: {
                path: 'https://www.instagram.com/bara.salameh/',
                icon: '/instagram.svg'
            },
            email: {
                path: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
                icon: '/send-email.svg'
            },
            whatsapp: {
                path: `https://wa.me/${whatsapp}`,
                icon: '/message.svg'
            }
        }
    },
    education: {
        UU: {
            startDate: '10/2021',
            endDate: '10/2023',
            path: "https://uskudar.edu.tr/en"
        },
        AAUP: {
            startDate: '10/2016',
            endDate: '02/2021',
            path: "https://www.aaup.edu"
        }
    },
    experience: {
        AAUP: {
            startDate: '10/2024',
            endDate: '02/2025',
            path: "https://www.aaup.edu"
        },
        Spinnel: {
            startDate: '02/2024',
            endDate: '05/2024',
            path: "https://spineltechnology.com/"
        },
        Jawwal: {
            startDate: '10/2023',
            endDate: '02/2024',
            path: "https://www.jawwal.ps/"
        },
        UATS: {
            startDate: '05/2022',
            endDate: '08/2022',
            path: "https://www.ultimitats.com/"
        }
    },
    project: {
        "Static Portfolio": {
            path: 'http://localhost:3000/',
            source: 'https://github.com/BaraSalameh/SPF',
        },
        Portfolio: {
            path: 'https://portfolio-rho-five-bur5rzjhnu.vercel.app/',
            source: 'https://github.com/BaraSalameh/Portfolio',
        },
        Aluminum: {
            path: '',
            source: 'https://github.com/BaraSalameh/FE_Aluminum',
        }
    },
    skill: {
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
        TypeScript: {
            name: 'TypeScript',
            logo: '',
            projects: [
                "Static Portfolio",
                "Portfolio"
            ]
        },
        "ASP.NET": {
            name: 'ASP.NET',
            logo: '',
            educations: [
                "AAUP"
            ],
            experiences: [
                "Spinnel",
                "UATS"
            ],
            projects: [
                "Portfolio",
                "Aluminum"
            ]
        },
        "SQL Server": {
            name: 'SQL Server',
            logo: '',
            educations: [
                "AAUP"
            ],
            experiences: [
                "AAUP",
                "Spinnel",
                "UATS"
            ],
            projects: [
                "Portfolio",
                "Aluminum"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        JavaScript: {
            name: 'JavaScript',
            logo: '',
            educations: [
                "AAUP"
            ],
            projects: [
                "Aluminum"
            ],
            certificates: [
                "AXSOS Academy"
            ],
            experiences: [
                "Spinnel",
                "UATS"
            ]
        },
        "Agile Development": {
            name: 'Agile Development',
            logo: '',
            educations: [
                "AAUP"
            ],
            projects: [
                "Portfolio",
                "Static Portfolio"
            ],
            certificates: [
                "AXSOS Academy"
            ],
            experiences: [
                "Spinnel",
                "UATS"
            ]
        },
        "C#": {
            name: 'C#',
            logo: '',
            educations: [
                "AAUP"
            ],
            projects: [
                "Portfolio",
                "Aluminum"
            ],
            experiences: [
                "Spinnel",
                "UATS"
            ]
        },
        "Express.js": {
            name: 'Express.js',
            logo: '',
            certificates: [
                "AXSOS Academy"
            ]
        },
        "Microsoft Access": {
            name: 'Microsoft Access',
            logo: '',
            projects: [
                "Portfolio",
                "Static Portfolio"
            ]
        },
        "Microsoft Azure": {
            name: 'Microsoft Azure',
            logo: '',
            projects: [
                "Portfolio",
                "Static Portfolio"
            ]
        },
        "Problem Solving": {
            name: 'Problem Solving',
            logo: '',
            educations: [
                "AAUP",
                "UU"
            ],
            experiences: [
                "Spinnel",
                "UATS"
            ],
            projects: [
                "Portfolio",
                "Static Portfolio"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        "Redux.js": {
            name: 'Redux.js',
            logo: '',
            projects: [
                "Aluminum",
                "Portfolio",
            ]
        },
        "Spring Boot": {
            name: 'Spring Boot',
            logo: '',
            certificates: [
                "AXSOS Academy"
            ]
        },
        "Time Management": {
            name: 'Time Management',
            logo: '',
            educations: [
                "AAUP",
                "UU"
            ],
            experiences: [
                "AAUP",
                "Jawwal",
                "Spinnel",
                "UATS"
            ],
            projects: [
                "Aluminum",
                "Portfolio",
                "Static Portfolio"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        "Visual Basic": {
            name: 'Visual Basic',
            logo: '',
            educations: [
                "AAUP"
            ],
            experiences: [
                "Spinnel"
            ]
        },
        Bootstrap: {
            name: 'Bootstrap',
            logo: '',
            educations: [
                "AAUP"
            ],
            experiences: [
                "UATS"
            ],
            projects: [
                "Aluminum"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        Communication: {
            name: 'Communication',
            logo: '',
            experiences: [
                "Jawwal"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        CSS: {
            name: 'CSS',
            logo: '',
            educations: [
                "AAUP"
            ],
            experiences: [
                "UATS"
            ],
            projects: [
                "Aluminum"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        Django: {
            name: 'Django',
            logo: '',
            certificates: [
                "AXSOS Academy"
            ]
        },
        Figma: {
            name: 'Figma',
            logo: '',
            experiences: [
                "UATS"
            ]
        },
        Flask: {
            name: 'Flask',
            logo: '',
            certificates: [
                "AXSOS Academy"
            ]
        },
        HTML5: {
            name: 'HTML5',
            logo: '',
            educations: [
                "AAUP"
            ],
            experiences: [
                "UATS"
            ],
            projects: [
                "Aluminum",
                "Portfolio",
                "Static Portfolio"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        Java: {
            name: 'Java',
            logo: '',
            educations: [
                "AAUP"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        jQuery: {
            name: 'jQuery',
            logo: '',
            educations: [
                "AAUP"
            ],
            experiences: [
                "UATS"
            ],
            projects: [
                "Aluminum"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        JSON: {
            name: 'JSON',
            logo: '',
            educations: [
                "AAUP"
            ],
            experiences: [
                "Spinnel",
                "UATS"
            ],
            projects: [
                "Aluminum",
                "Portfolio"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        Leadership: {
            name: 'Leadership',
            logo: '',
            educations: [
                "AAUP",
                "UU"
            ],
            projects: [
                "Aluminum",
                "Portfolio",
                "Static Portfolio"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        MongoDB: {
            name: 'MongoDB',
            logo: '',
            certificates: [
                "AXSOS Academy"
            ]
        },
        Python: {
            name: 'Python',
            logo: '',
            educations: [
                "AAUP",
                'UU'
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        Research: {
            name: 'Research',
            logo: '',
            educations: [
                'UU'
            ]
        },
        Teamwork: {
            name: 'Teamwork',
            logo: '',
            educations: [
                "AAUP",
                'UU'
            ],
            experiences: [
                "Jawwal",
                "Spinnel"
            ],
            certificates: [
                "AXSOS Academy"
            ]
        },
        Vercel: {
            name: 'Vercel',
            logo: '',
            projects: [
                "Portfolio",
                "Static Portfolio"
            ]
        },
        Yii: {
            name: 'Yii',
            logo: '',
            experiences: [
                "UATS"
            ]
        },
        Tailwind: {
            name: 'Tailwind',
            logo: '',
            projects: [
                "Portfolio",
                "Static Portfolio"
            ]
        },
    },
    language: {
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
            logoUrl: '/Tr.svg'
        },
        Spanish: {
            level: 1,
            logoUrl: '/SP.svg'
        }
    },
    certificate: {
        "AXSOS Academy": {
            path: 'https://axsos.academy/',
            icon: '/axsos.png'
        }
    }
}