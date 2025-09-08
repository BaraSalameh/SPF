import { ProjectName } from "../types.features";
import { CommonProjectAtts, ProjectAtts } from "./types.project";

export const commonProjectsAtts: Record<ProjectName, CommonProjectAtts> = {
    "Static Portfolio": {
        website: 'http://localhost:3000/',
        source: 'https://github.com/BaraSalameh/SPF',
    },
    Portfolio: {
        website: 'https://portfolio-rho-five-bur5rzjhnu.vercel.app/',
        source: 'https://github.com/BaraSalameh/Portfolio',
    },
    Aluminum: {
        website: '',
        source: 'https://github.com/BaraSalameh/FE_Aluminum',
    }
}

export const enProjects: Record<ProjectName, ProjectAtts> = {
    "Static Portfolio": {
        name: 'Static Portfolio',
        desciption: "A clean and lightweight static portfolio website built to display skills, experiences, and projects in a simple and elegant way."
    },
    Portfolio: {
        name: 'Portfolio',
        desciption: "A dynamic and customizable portfolio platform that allows anyone to showcase their projects, experiences, and skills with interactive and modern features."
    },
    Aluminum: {
        name: 'Aluminum',
        desciption: 'A complete web-based solution developed to manage aluminum business operations, including inventory, orders, and workflow, ensuring efficiency and smooth management.'
    }
}

export const arProjects: Record<ProjectName, ProjectAtts> = {
    "Static Portfolio": {
        name: 'الصفحة الشخصية الثابتة',
        desciption: 'موقع بورتفوليو ثابت وخفيف، مصمم لعرض المهارات والخبرات والمشاريع بطريقة بسيطة وأنيقة.',
        
    },
    Portfolio: {
        name: 'الصفحة الشخصية',
        desciption: 'بورتفوليو ديناميكي وقابل للتخصيص، يتيح لأي شخص عرض مشاريعه وخبراته ومهاراته بميزات حديثة وتفاعلية.',
        
    },
    Aluminum: {
        name: 'المنيوم',
        desciption: 'حل ويب متكامل مصمم لإدارة أعمال الألمنيوم، بما يشمل المخزون والطلبات وسير العمل، مما يضمن الكفاءة والإدارة السلسة.'
    }
}

export const trProjects: Record<ProjectName, ProjectAtts> = {
    "Static Portfolio": {
        name: 'statik portföy',
        desciption: 'Becerileri, deneyimleri ve projeleri sade ve şık bir şekilde sergilemek için hazırlanmış temiz ve hafif bir statik portföy sitesi.'
    },
    Portfolio: {
        name: 'portföy',
        desciption: 'Herkesin projelerini, deneyimlerini ve becerilerini modern ve etkileşimli özelliklerle sergilemesine imkân tanıyan dinamik ve özelleştirilebilir bir portföy platformu.'
    },
    Aluminum: {
        name: 'Alüminyum',
        desciption: 'Stok, sipariş ve iş akışlarını kapsayan alüminyum iş süreçlerini yönetmek için geliştirilmiş, verimliliği ve kolay yönetimi sağlayan kapsamlı bir web çözümü.'
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

export const enChartTitle = 'Project skills';
export const arChartTitle = 'مهارات المشاريع';
export const trChartTitle = 'Projenin yetenekleri';