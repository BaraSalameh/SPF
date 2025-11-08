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
            gitHub: {
                path: 'https://github.com/BaraSalameh',
                icon: '/github.svg'
            },
            linkedIn: {
                path: 'https://www.linkedin.com/in/albaraa-i-a-salama-30978420a',
                icon: '/linkedin.svg'
            },
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
                icon: '/gmail.svg'
            },
            whatsapp: {
                path: `https://wa.me/${whatsapp}`,
                icon: '/whatsapp.svg'
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
            endDate: 'Present',
            path: "https://www.aaup.edu"
        },
        Spinnel: {
            startDate: '02/2024',
            endDate: 'Present',
            path: "https://spineltechnology.com/"
        },
        UATS: {
            startDate: '09/2021',
            endDate: '02/2024',
            path: "https://www.ultimitats.com/"
        },
        AXSOS: {
            startDate: '04/2021',
            endDate: '08/2021',
            path: "https://axsos.academy/"
        },
        MOE: {
            startDate: '10/2020',
            endDate: '02/2021',
            path: "https://moe.edu.ps/"
        }
    },
    project: {
        Portfolio: {
            path: 'https://portfolio-rho-five-bur5rzjhnu.vercel.app/',
            source: 'https://github.com/BaraSalameh/Portfolio',
        },
        Aluminum: {
            path: '',
            source: 'https://github.com/BaraSalameh/FE_Aluminum',
        },
        Flagy: {
            path: 'https://flagy-navy.vercel.app/map',
            source: 'https://github.com/BaraSalameh/Flagy',
        }
    },
    skill: {
        "Next.js": {
            name: 'Next.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            projects: ["Flagy", "Portfolio"],
            experiences: ["Spinnel"]
        },
        TypeScript: {
            name: 'TypeScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            projects: ["Flagy", "Portfolio"],
            experiences: ["Spinnel"]
        },
        "ASP.NET": {
            name: 'ASP.NET',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
            educations: ["AAUP"],
            experiences: ["Spinnel", "UATS", "MOE"],
            projects: ["Portfolio", "Aluminum"]
        },
        "SQL Server": {
            name: 'SQL Server',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsqlserver.svg',
            educations: ["AAUP"],
            experiences: ["AAUP", "Spinnel", "UATS", "AXSOS", "MOE"],
            projects: ["Portfolio", "Aluminum"]
        },
        git: {
            name: 'git',
            logo: '/git.svg',
            experiences: ["Spinnel", "UATS", "AXSOS", "MOE"],
            projects: ["Portfolio", "Aluminum", "Flagy"],
        },
        aws: {
            name: 'aws',
            logo: '/aws.svg',
            experiences: ["Spinnel", "UATS", "AXSOS", "MOE"]
        },
        azure: {
            name: 'azure',
            logo: '/azure.svg',
            experiences: ["Spinnel", "UATS", "AXSOS", "MOE"],
            projects: ["Portfolio", "Aluminum"]
        },
        network: {
            name: 'network',
            logo: '/network.svg',
            educations: ["AAUP", "UU"]
        },
        "React.js": {
            name: 'React.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            projects: ["Aluminum"],
            experiences: ["AXSOS"]
        },
        JavaScript: {
            name: 'JavaScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            educations: ["AAUP"],
            projects: ["Aluminum"],
            experiences: ["Spinnel", "UATS", "AXSOS", "MOE"]
        },
        "Agile Development": {
            name: 'Agile Development',
            logo: '/agile.png',
            educations: ["AAUP"],
            projects: ["Portfolio", "Flagy", "Aluminum"],
            experiences: ["Spinnel", "UATS", "AXSOS", "MOE"]
        },
        "C#": {
            name: 'C#',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
            educations: ["AAUP"],
            projects: ["Portfolio", "Aluminum"],
            experiences: ["Spinnel", "UATS", "MOE"]
        },
        "Express.js": {
            name: 'Express.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            experiences: ["AXSOS"]
        },
        "Microsoft Azure": {
            name: 'Microsoft Azure',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            projects: ["Portfolio", "Flagy"],
            experiences: ["MOE", "Spinnel", "UATS"]
        },
        "Redux.js": {
            name: 'Redux.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            projects: ["Aluminum", "Portfolio"]
        },
        "Spring Boot": {
            name: 'Spring Boot',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            experiences: ["AXSOS"]
        },
        "Visual Basic": {
            name: 'Visual Basic',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualbasic.svg',
            educations: ["AAUP"],
            experiences: ["Spinnel"]
        },
        Bootstrap: {
            name: 'Bootstrap',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            educations: ["AAUP"],
            experiences: ["UATS", "AXSOS"],
            projects: ["Aluminum"]
        },
        CSS: {
            name: 'CSS',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            educations: ["AAUP"],
            experiences: ["UATS", "AXSOS", "MOE"],
            projects: ["Aluminum"]
        },
        Django: {
            name: 'Django',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
            experiences: ["AXSOS"]
        },
        Figma: {
            name: 'Figma',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            experiences: ["UATS"]
        },
        Flask: {
            name: 'Flask',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
            experiences: ["AXSOS"]
        },
        HTML5: {
            name: 'HTML5',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            educations: ["AAUP"],
            experiences: ["UATS", "Spinnel" , "AXSOS", "MOE"],
            projects: ["Aluminum", "Portfolio", "Flagy"]
        },
        Java: {
            name: 'Java',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            educations: ["AAUP"],
            experiences: ["AXSOS"]
        },
        jQuery: {
            name: 'jQuery',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
            educations: ["AAUP"],
            experiences: ["UATS", "AXSOS", "MOE"],
            projects: ["Aluminum"]
        },
        JSON: {
            name: 'JSON',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/json.svg',
            educations: ["AAUP"],
            experiences: ["Spinnel", "UATS", "MOE", "AXSOS"],
            projects: ["Aluminum", "Portfolio"]
        },
        MongoDB: {
            name: 'MongoDB',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            experiences: ["AXSOS"]
        },
        Python: {
            name: 'Python',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            educations: ["AAUP", "UU"],
            experiences: ["AXSOS"]
        },
        Research: {
            name: 'Research',
            logo: 'research.svg',
            educations: ['UU']
        },
        Vercel: {
            name: 'Vercel',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
            projects: ["Portfolio", "Flagy"]
        },
        Yii: {
            name: 'Yii',
            logo: '/yii.svg',
            experiences: ["UATS"]
        },
        Tailwind: {
            name: 'Tailwind',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
            projects: ["Portfolio", "Flagy"],
            experiences: ["Spinnel"]
        },
        Encryption: {
            name: 'Encryption',
            logo: '/encryption.png',
            projects: ["Portfolio", "Aluminum"],
            experiences: ["MOE", "UATS", "Spinnel"],
            educations: ["UU"]
        },
        "Zero-Knowledge Proofs": {
            name: 'Zero-Knowledge Proofs',
            logo: '/zkp.png',
            educations: ["UU"]
        },
        Blockchain: {
            name: 'Blockchain',
            logo: '/blockchain.svg',
            educations: ["UU"]
        },
        "Intrusion detection": {
            name: 'Intrusion detection',
            logo: '/ids.png',
            educations: ["UU"]
        },
        SSL: {
            name: 'SSL',
            logo: '/ssl.png',
            educations: ["UU"]
        },
        IPsec: {
            name: 'IPsec',
            logo: '/ips.png',
            educations: ["UU"]
        },
        "Pentration testing": {
            name: 'Pentration testing',
            logo: '/pentest.png',
            educations: ["UU"]
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