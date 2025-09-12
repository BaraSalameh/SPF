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
    setting: {
        label: 'الاعدادات',
        theme: {
            dark : 'مظلم',
            light: 'مضيئ'
        },
        language: {
           label: 'اللغات'
        }
    },
    profile: {
        utility: {
            cv: 'السيرة الذاتية',
            contactInfo: 'المعلومات الشخصية والتواصل',
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
        chartLabel: 'المدة الزمنية (شهر)'
    },
    project: {
        linkLabel: 'عرض المشروع المباشر',
        sourceLabel: 'عرض على GitHub',
        description: 'الوصــف',
        chartLabel: 'مهارات المشاريع'
    },
    skill: {
        chartLabel: 'توزيع المهارات'
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