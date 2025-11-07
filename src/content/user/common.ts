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
            mobile: '+972599926313',
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
        "Next.js": {
            name: 'Next.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            projects: ["Static Portfolio", "Portfolio"]
        },
        TypeScript: {
            name: 'TypeScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            projects: ["Static Portfolio", "Portfolio"]
        },
        "ASP.NET": {
            name: 'ASP.NET',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
            educations: ["AAUP"],
            experiences: ["Spinnel", "UATS"],
            projects: ["Portfolio", "Aluminum"]
        },
        "SQL Server": {
            name: 'SQL Server',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsqlserver.svg',
            educations: ["AAUP"],
            experiences: ["AAUP", "Spinnel", "UATS"],
            projects: ["Portfolio", "Aluminum"],
            certificates: ["AXSOS Academy"]
        },
        "React.js": {
            name: 'React.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            projects: ["Aluminum"],
            certificates: ["AXSOS Academy"]
        },
        JavaScript: {
            name: 'JavaScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            educations: ["AAUP"],
            projects: ["Aluminum"],
            certificates: ["AXSOS Academy"],
            experiences: ["Spinnel", "UATS"]
        },
        "Agile Development": {
            name: 'Agile Development',
            logo: '/agile.png', // fallback custom, not in Devicon
            educations: ["AAUP"],
            projects: ["Portfolio", "Static Portfolio"],
            certificates: ["AXSOS Academy"],
            experiences: ["Spinnel", "UATS"]
        },
        "C#": {
            name: 'C#',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
            educations: ["AAUP"],
            projects: ["Portfolio", "Aluminum"],
            experiences: ["Spinnel", "UATS"]
        },
        "Express.js": {
            name: 'Express.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            certificates: ["AXSOS Academy"]
        },
        "Microsoft Access": {
            name: 'Microsoft Access',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftaccess.svg',
            educations: ["AAUP"]
        },
        "Microsoft Azure": {
            name: 'Microsoft Azure',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            projects: ["Portfolio", "Static Portfolio"]
        },
        "Problem Solving": {
            name: 'Problem Solving',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/coursera.svg', // abstract fallback
            educations: ["AAUP", "UU"],
            experiences: ["Spinnel", "UATS"],
            projects: ["Portfolio", "Static Portfolio"],
            certificates: ["AXSOS Academy"]
        },
        "Redux.js": {
            name: 'Redux.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            projects: ["Aluminum", "Portfolio"]
        },
        "Spring Boot": {
            name: 'Spring Boot',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            certificates: ["AXSOS Academy"]
        },
        "Time Management": {
            name: 'Time Management',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/clockify.svg',
            educations: ["AAUP", "UU"],
            experiences: ["AAUP", "Spinnel", "UATS"],
            projects: ["Aluminum", "Portfolio", "Static Portfolio"],
            certificates: ["AXSOS Academy"]
        },
        "Visual Basic": {
            name: 'Visual Basic',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualbasic.svg', // custom fallback
            educations: ["AAUP"],
            experiences: ["Spinnel"]
        },
        Bootstrap: {
            name: 'Bootstrap',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            educations: ["AAUP"],
            experiences: ["UATS"],
            projects: ["Aluminum"],
            certificates: ["AXSOS Academy"]
        },
        Communication: {
            name: 'Communication',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlemessages.svg',
            certificates: ["AXSOS Academy"]
        },
        CSS: {
            name: 'CSS',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            educations: ["AAUP"],
            experiences: ["UATS"],
            projects: ["Aluminum"],
            certificates: ["AXSOS Academy"]
        },
        Django: {
            name: 'Django',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
            certificates: ["AXSOS Academy"]
        },
        Figma: {
            name: 'Figma',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            experiences: ["UATS"]
        },
        Flask: {
            name: 'Flask',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
            certificates: ["AXSOS Academy"]
        },
        HTML5: {
            name: 'HTML5',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            educations: ["AAUP"],
            experiences: ["UATS"],
            projects: ["Aluminum", "Portfolio", "Static Portfolio"],
            certificates: ["AXSOS Academy"]
        },
        Java: {
            name: 'Java',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            educations: ["AAUP"],
            certificates: ["AXSOS Academy"]
        },
        jQuery: {
            name: 'jQuery',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
            educations: ["AAUP"],
            experiences: ["UATS"],
            projects: ["Aluminum"],
            certificates: ["AXSOS Academy"]
        },
        JSON: {
            name: 'JSON',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/json.svg',
            educations: ["AAUP"],
            experiences: ["Spinnel", "UATS"],
            projects: ["Aluminum", "Portfolio"],
            certificates: ["AXSOS Academy"]
        },
        Leadership: {
            name: 'Leadership',
            logo: '/leadership.png', // custom fallback
            educations: ["AAUP", "UU"],
            projects: ["Aluminum", "Portfolio", "Static Portfolio"],
            certificates: ["AXSOS Academy"]
        },
        MongoDB: {
            name: 'MongoDB',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            certificates: ["AXSOS Academy"]
        },
        Python: {
            name: 'Python',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            educations: ["AAUP", "UU"],
            certificates: ["AXSOS Academy"]
        },
        Research: {
            name: 'Research',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/researchgate.svg',
            educations: ['UU']
        },
        Teamwork: {
            name: 'Teamwork',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/teamspeak.svg',
            educations: ["AAUP", "UU"],
            experiences: ["Spinnel"],
            certificates: ["AXSOS Academy"]
        },
        Vercel: {
            name: 'Vercel',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
            projects: ["Portfolio", "Static Portfolio"]
        },
        Yii: {
            name: 'Yii',
            logo: '/yii.svg',
            experiences: ["UATS"]
        },
        Tailwind: {
            name: 'Tailwind',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
            projects: ["Portfolio", "Static Portfolio"]
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