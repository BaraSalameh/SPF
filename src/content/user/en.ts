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
            position: 'Lecturer (Part-Time)',
            achievement: [
                "Delivered lectures at the university’s Faculty of Information Technology, teaching both theoretical and practical computer science concepts.",
                "Taught core courses including C++, Python, Networking, Databases, and Computer Skills to undergraduate students.",
                "Designed and implemented engaging course materials and lab exercises that strengthened students’ hands-on programming and problem-solving skills.",
                "Provided academic guidance and mentorship to students, helping them develop strong technical and analytical abilities.",
                "Contributed to curriculum improvement efforts by aligning course content with current industry trends and modern technologies."
            ]

        },
        Spinnel: {
            name: 'Spinnel',
            location: 'Ramallah, Palestine',
            position: 'Full-Stack Software Engineer (Full-Time)',
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
            position: 'Full-Stack software Engineer (Full-Time)',
            achievement: [
                "Developed and deployed 2+ high-performance client-facing web applications using ASP.NET Web API, HTML5, CSS3, and JavaScript, consistently meeting project deadlines and budgets.",
                "Engineered and optimized SQL Server databases and queries, enhancing application performance and ensuring seamless data integrity across systems.",
                "Translated complex UI/UX designs from Figma into responsive, interactive interfaces, improving user engagement and usability.",
                "Collaborated closely with designers and product managers via Figma and GitHub, reducing development cycle time by 25% and ensuring alignment with project goals.",
                "Contributed to agile workflows through sprint reviews, planning, and daily stand-ups, driving efficient project delivery and continuous improvement."
            ]
        },
        AXSOS: {
            name: 'AXSOS Academy',
            location: 'Ramallah, Palestine',
            position: 'Full-Stack Web Developer (Intern)',
            achievement: [
                "Completed an intensive 4-month full-stack development bootcamp focused on problem-solving, algorithms, and web fundamentals, demonstrating rapid learning and adaptability.",
                "Developed and deployed multiple full-stack web applications using Flask, Django (Python), Spring Boot (Java), and MERN (MongoDB, Express, React, Node.js).",
                "Strengthened expertise in MVC architecture, RESTful API design, and frontend–backend integration, resulting in clean, scalable project implementations.",
                "Led and collaborated with peers during coding projects and assessments, earning recognition for team leadership and consistent performance.",
                "Delivered successful final projects across stacks, showcasing proficiency in end-to-end development and real-world application design."
            ]
        },
        MOE: {
            name: 'Ministry of Education',
            location: 'Ramallah, Palestine',
            position: 'Full-Stack Web Developer (Intern)',
            achievement: [
                "Developed and maintained internal web applications using ASP.NET MVC, contributing to improved internal workflows and process automation.",
                "Built and styled responsive, user-friendly interfaces that enhanced usability across multiple devices.",
                "Assisted senior developers in debugging, testing, and deployment, ensuring stable and efficient software releases.",
                "Applied foundational knowledge of MVC architecture, Entity Framework, and RESTful API development, strengthening full-stack development skills through practical experience."
            ]

        }
    },
    project: {
        Portfolio: {
            name: 'Portfolio',
            feature: [
                "Secure user authentication and registration with encrypted and hashed sensitive data.",
                "Role-based authorization separating admin and user privileges.",
                "Dynamic portfolio builder with customizable widgets and layouts.",
                "Publicly shareable profile links for networking and visibility.",
                "Built-in email contact system enabling seamless user communication.",
                "Advanced search allowing guests to find users by name, email, or phone number.",
                "Enhanced UI/UX design focused on clarity, responsiveness, and accessibility.",
                "Automated email notifications for new messages and activity updates.",
                "Flexible design suitable for multiple industries, not limited to tech.",
                "Optimized backend performance ensuring fast load times and scalability.",
                "Responsive design for all screen sizes and devices.",
                "Thoroughly tested components and secure APIs ensuring data integrity."
            ]
        },
        Aluminum: {
            name: 'Aluminum',
            feature: [
                "Modern and intuitive UI/UX providing a seamless user experience.",
                "Secure authorization and access control for all user operations.",
                "Enhanced measurement tools to improve industrial accuracy.",
                "Automated communication system for efficient vendor interactions.",
                "Comprehensive store management for inventory and orders.",
                "Delegated authorization allowing users to grant permissions to others.",
                "Subscription system with flexible plans and renewals.",
                "Integrated payment system supporting check payments with proof uploads.",
                "Smart notifications for delayed or pending payments.",
                "Robust backend architecture ensuring stability and scalability.",
                "Detailed logging and monitoring for operational transparency.",
                "Optimized data flow and caching for faster performance."
            ]
        },
        Flagy: {
            name: 'Flagy',
            feature: [
                "Interactive and responsive map integration for engaging gameplay.",
                "Multiple challenges designed to test and improve player skills.",
                "Competitive multiplayer mode encouraging player interaction and ranking.",
                "Visually appealing and responsive interface across all devices.",
                "Real-time updates and smooth animations for immersive experience.",
                "Optimized performance ensuring minimal lag during gameplay.",
                "Leaderboard system for tracking scores and achievements.",
                "Scalable backend supporting a large number of concurrent players."
            ]
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