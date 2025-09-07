import { CommonProjectsAtts, ProjectsAtts } from "./types.project";

export const commonProjectsAtts: CommonProjectsAtts = {
    staticPortfolio: {
        website: 'http://localhost:3000/',
        source: 'https://github.com/BaraSalameh/SPF',
        skills: [
            'Nextjs',
            'Typescript'
        ]
    },
    portfolio: {
        website: 'https://portfolio-rho-five-bur5rzjhnu.vercel.app/',
        source: 'https://github.com/BaraSalameh/Portfolio',
        skills: [
            'ASP.NET',
            'SQLServer',
            'Nextjs',
            'Typescript'
        ]
    },
    aluminum: {
        website: '',
        source: 'https://github.com/BaraSalameh/FE_Aluminum',
        skills: [
            'ASP.NET',
            'SQLServer',
            'Reactjs',
            'Javascript'
        ]
    }
}

export const enProjects: ProjectsAtts = {
    staticPortfolio: {
        name: 'Static Portfolio',
        desciption: "In the world of software development, testing often plays a crucial role in ensuring that applications function as expected under different conditions. Developers and testers frequently need placeholder text that is long enough to simulate real-world input. Such text can help verify layout behavior, database storage, user interface rendering, and performance under load. For example, when building a web application, you may need to check whether your components can handle long strings of text without breaking their alignment, overflowing their containers, or causing unexpected scrollbars. Similarly, in backend development, you may want to test how your API handles large payloads or whether certain fields can store values that exceed the typical length of a short string.\n\nHistorically, developers used Lorem Ipsum as placeholder text. While it is still popular today, some teams prefer more natural and meaningful paragraphs, because natural language can reveal bugs or issues that artificial text cannot. For instance, long sentences with varying structures may cause word wrapping inconsistencies in certain browsers, while repetitive characters might expose inefficiencies in text compression or search algorithms. In databases, testing with lengthy paragraphs ensures that schema constraints are respected and that truncation errors do not occur silently.\n\n When designing multilingual systems, using long placeholder text also provides insights into localization challenges. For example, English text may expand by 20–30% when translated into German or French, while right-to-left languages like Arabic introduce additional layout considerations. By using long text during the design phase, teams can anticipate these issues early and avoid costly redesigns later in production.\n\nFinally, from a user experience perspective, placeholder text is more than a filler—it is a way to simulate how real people might interact with your system. Users rarely enter short, neat, perfectly formatted strings; instead, they may paste long paragraphs, insert special characters, or include line breaks in unexpected places. Robust testing with long text ensures that your application gracefully handles these scenarios, providing reliability, stability, and a polished experience."
    },
    portfolio: {
        name: 'Portfolio',
        desciption: "In the world of software development, testing often plays a crucial role in ensuring that applications function as expected under different conditions. Developers and testers frequently need placeholder text that is long enough to simulate real-world input. Such text can help verify layout behavior, database storage, user interface rendering, and performance under load. For example, when building a web application, you may need to check whether your components can handle long strings of text without breaking their alignment, overflowing their containers, or causing unexpected scrollbars. Similarly, in backend development, you may want to test how your API handles large payloads or whether certain fields can store values that exceed the typical length of a short string.\n\nHistorically, developers used Lorem Ipsum as placeholder text. While it is still popular today, some teams prefer more natural and meaningful paragraphs, because natural language can reveal bugs or issues that artificial text cannot. For instance, long sentences with varying structures may cause word wrapping inconsistencies in certain browsers, while repetitive characters might expose inefficiencies in text compression or search algorithms. In databases, testing with lengthy paragraphs ensures that schema constraints are respected and that truncation errors do not occur silently.\n\n When designing multilingual systems, using long placeholder text also provides insights into localization challenges. For example, English text may expand by 20–30% when translated into German or French, while right-to-left languages like Arabic introduce additional layout considerations. By using long text during the design phase, teams can anticipate these issues early and avoid costly redesigns later in production.\n\nFinally, from a user experience perspective, placeholder text is more than a filler—it is a way to simulate how real people might interact with your system. Users rarely enter short, neat, perfectly formatted strings; instead, they may paste long paragraphs, insert special characters, or include line breaks in unexpected places. Robust testing with long text ensures that your application gracefully handles these scenarios, providing reliability, stability, and a polished experience."
    },
    aluminum: {
        name: 'Aluminum',
        desciption: ''
    }
}

export const arProjects: ProjectsAtts = {
    staticPortfolio: {
        name: 'الصفحة الشخصية الثابتة',
        desciption: '',
        
    },
    portfolio: {
        name: 'الصفحة الشخصية',
        desciption: '',
        
    },
    aluminum: {
        name: 'المنيوم',
        desciption: ''
    }
}

export const trProjects: ProjectsAtts = {
    staticPortfolio: {
        name: 'statik portföy',
        desciption: ''
    },
    portfolio: {
        name: 'portföy',
        desciption: ''
    },
    aluminum: {
        name: 'Alüminyum',
        desciption: ''
    }
}

export const enVisitLiveProject = 'Live project →';
export const arVisitLiveProject = 'زيارة المشروع';
export const trVisitLiveProject = 'Projeye gir →';

export const enDescription = 'Description';
export const arDescription = 'الوصــف';
export const trDescription = 'Açıklama';

export const enVisitSourceProject = 'Source code →';
export const arVisitSourceProject = 'الكود';
export const trVisitSourceProject = 'Koda gir →';

export const enChartTitle = 'Duration (Month)';
export const arChartTitle = 'المدة الزمنية (شهر)';
export const trChartTitle = 'Süre (Ay)';