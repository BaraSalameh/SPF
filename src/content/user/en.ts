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
            responsibility: [
                "Prepare and deliver lectures on C++, Python, Networking, and Databases for undergraduate students.",
                "Develop course materials, assignments, and lab exercises aligned with curriculum requirements.",
                "Guide and mentor students in understanding programming fundamentals and problem-solving techniques.",
                "Assess student performance through exams, projects, and presentations.",
                "Stay updated with modern teaching methods and incorporate practical coding labs into classes."
            ],
            achievement: [
                "Mentored and supervised 100+ undergraduate students on programming and computer science fundamentals, improving their problem-solving and coding confidence.",
                "Introduced hands-on coding workshops and database labs"
            ]
        },
        Spinnel: {
            name: 'ERP Easy (Spinnel)',
            location: 'Ramallah, Palestine',
            position: 'jr. Backend Software Developer',
            responsibility: [
                "Designed, developed, and maintained ERP modules using ASP.NET Web API and VB.NET Windows Forms.",
                "Created and optimized SQL Server databases, queries, and stored procedures to ensure system performance.",
                "Participated in requirements gathering and system analysis with cross-functional teams.",
                "Troubleshot and resolved software defects and user-reported issues.",
                "Assisted in deploying ERP solutions and providing technical support to clients."
            ],
            achievement: [
                "Developed and maintained enterprise ERP modules using ASP.NET Web API and VB.NET Windows Forms, which improved system efficiency",
                "Optimized SQL Server queries and stored procedures, reducing database response times and ensuring data accuracy across multiple modules.",
                "Collaborated with cross-functional teams to deploy ERP solutions for clients"
            ]
        },
        Jawwal: {
            name: 'Jawwal',
            location: 'Ramallah, Palestine',
            position: 'Embassador',
            responsibility: [
                "Conducted on-site inspections and audits of fiber optic networks installed by field technicians",
                "Verified compliance with network quality standards and company policies.",
                "Documented audit findings and prepared reports for management review.",
                "Assisted in optimizing field processes to reduce operational delays."
            ],
        },
        UATS: {
            name: 'Ultimate Advanced Turnkey Solutions',
            location: 'Rawabi, Palestine',
            position: 'Fresher Frontend software developer',
            responsibility: [
                "Developed and maintained web applications using ASP.NET Web API, HTML5, CSS3, and JavaScript.",
                "Designed and implemented SQL Server databases to support client projects.",
                "Collaborated with UI/UX teams using Figma to translate designs into functional applications",
                "Participated in project planning, sprint reviews, and daily stand-ups to ensure on-time delivery."
            ],
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