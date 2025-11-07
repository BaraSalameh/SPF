import { UserLanguage } from "./types.user";

export const userEn: UserLanguage = {
    profile: {
        information: {
            fullname: 'Albaraa I. A. Salameh',
            gender: "Male",
            bio: `Full-Stack Software Engineer with master's in cyber security and 5+ years of experience building and deploying scalable web applications.
            \nDelivered over 6+ end-to-end projects improving system efficiency and user satisfaction by up to 30%. Skilled in clean architecture, RESTful API design, and
            cloud deployment (Azure/AWS).\n\nStrong collaborator with a passion for writing maintainable, high-quality code and continuously adopting modern technologies to solve complex business challenges.`
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
            achievement: [
                "Mentored and supervised 100+ undergraduate students on programming and computer science fundamentals, improving their problem-solving and coding confidence.",
                "Introduced hands-on coding workshops and database labs"
            ]
        },
        Spinnel: {
            name: 'Spinnel',
            location: 'Ramallah, Palestine',
            position: 'Full-Stack Software Engineer',
            achievement: [
                "Engineered and deployed enterprise-grade ERP modules using ASP.NET Web API and VB.NET Windows Forms, enhancing system efficiency and user experience across departments.",
                "Optimized complex SQL Server queries and stored procedures, reducing database response times and ensuring consistent data accuracy across modules.",
                "Collaborated with cross-functional teams to analyze requirements and deliver tailored ERP solutions that streamlined client operations.",
                "Resolved critical software defects and improved stability, leading to a measurable increase in system reliability and client satisfaction."
            ]
        },
        UATS: {
            name: 'Ultimate Advanced Turnkey Solutions',
            location: 'Rawabi, Palestine',
            position: 'Fresher Frontend software developer',
            achievement: [
                "Built and deployed web applications using ASP.NET Web API, HTML5, CSS3, and JavaScript, delivering 5+ client-facing projects on time and within budget.",
                "Improved application performance through optimized SQL Server queries, clean coding practices, and efficient API design.",
                "Collaborated with designers and product managers using Figma and GitHub, ensuring seamless teamwork and reducing development cycle time."
            ]
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
    },
    certificate: {
        "AXSOS Academy": {
            name: 'Axsos Academy',
            description: '+530 coding hours in total (web fundamentals, data structures, and algorithms, Flask and Django, Spring Boot,MERN).',
            position: 'Full-Stack Developer Certificate'
        },
    }
}