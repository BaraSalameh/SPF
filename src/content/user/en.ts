import { UserLanguage } from "./types.user";

export const userEn: UserLanguage = {
    profile: {
        information: {
            fullname: 'Albaraa I. A. Salameh',
            gender: "Male",
            bio: "I’m a software developer with experience in backend, frontend, and desktop apps. I’ve worked on e-commerce projects, ERP systems, and more across different companies.\n\nI enjoy structuring and architecting apps, making sure everything is built the right way from the start. I like thinking through the best approach to organize code and ensure the app is scalable and maintainable in the long run.\n\nI’m always looking for ways to grow and improve in the industry. I love staying up to date with new technologies, and I’m excited to keep learning and taking new challenges to level up my skills."
        }
    },
    education: {
        UU: {
            name: 'Uskudar University',
            location: 'Istanbul, Turkey',
            major: 'Cyber Security',
        },
        AAUP: {
            name: 'Arab American University',
            location: 'Jenin, Palestine',
            major: 'Computer Engineer',
        }
    },
    experience: {
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
    },
    project: {
        "Static Portfolio": {
            name: 'Static Portfolio',
            description: "A clean and lightweight static portfolio website built to display skills, experiences, and projects in a simple and elegant way."
        },
        Portfolio: {
            name: 'Portfolio',
            description: "A dynamic and customizable portfolio platform that allows anyone to showcase their projects, experiences, and skills with interactive and modern features."
        },
        Aluminum: {
            name: 'Aluminum',
            description: 'A complete web-based solution developed to manage aluminum business operations, including inventory, orders, and workflow, ensuring efficiency and smooth management.'
        }
    },
    language: {
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
}