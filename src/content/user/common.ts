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