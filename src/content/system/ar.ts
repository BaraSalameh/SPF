import { SystemLanguage } from "./types.system";

export const systemAr: SystemLanguage = {
    navigation: {
        label: 'التوجيهات',
        Home: 'الرئيسية',
        Education: 'التعليم',
        Experience: 'الخبرات',
        Projects: 'المشاريع',
        Skills: 'المهارات',
        Languages: 'اللغات',
        Certificates: 'الشهادات'
    },
    profile: {
        utility: {
            cv: 'السيرة الذاتية',
            contactInfo: 'معلومات التواصل'
        },
        information: {
            facebook: 'فيسبوك',
            instagram: 'انستجرام',
            email: 'أرسل بريدًا إلكترونيًا',
            whatsapp: 'أرسل رسالة واتساب',
            copy: 'تم النسخ'
        }
    },
    education: {
        linkLabel: 'زيارة الجامعة',
        chartLabel: 'المدة الزمنية (شهر)'
    },
    experience: {
        linkLabel: 'زيارة الشركة',
        chartLabel: 'المدة الزمنية (شهر)',
        modalLabel: 'المسؤوليات والإنجازات',
        description: 'المسؤوليات',
        sourceLabel: 'الإنجازات'
    },
    project: {
        linkLabel: 'عرض المشروع المباشر',
        sourceLabel: 'عرض على GitHub',
        description: 'الوصــف',
        chartLabel: 'مهارات المشاريع'
    },
    skill: {
        chartLabel: 'توزيع المهارات',
        modalLabel: 'عرض جميع المهارات'
    },
    language: {
        chartLabel: 'مستوى اللغة'
    },
    certificate: {
        chartLabel: 'مهارات الشهادة',
        linkLabel: 'زيارة المزود',
        description: 'الوصــف'
    }
}