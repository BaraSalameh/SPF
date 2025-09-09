import { commonUtilityAtts, UtilityAtts } from "./types.profile";

export const enBio = "I’m a software developer with experience in backend, frontend, and desktop apps. I’ve worked on e-commerce projects, ERP systems, and more across different companies.\n\nI enjoy structuring and architecting apps, making sure everything is built the right way from the start. I like thinking through the best approach to organize code and ensure the app is scalable and maintainable in the long run.\n\nI’m always looking for ways to grow and improve in the industry. I love staying up to date with new technologies, and I’m excited to keep learning and taking new challenges to level up my skills.";
export const arBio = "عملت على مشاريع التجارة الإلكترونية، وأنظمة الـERP، وغيرها عبر شركات مختلفة.\n\nأستمتع ببناء هيكلة التطبيقات وتنظيمها، والتأكد من أن كل شيء مُصمَّم بالطريقة الصحيحة منذ البداية. أحب التفكير في أفضل الطرق لتنظيم الكود وضمان أن يكون التطبيق قابلاً للتوسع وسهل الصيانة على المدى الطويل.\n\nأنا دائمًا أبحث عن طرق للنمو والتطور في هذا المجال. أحب متابعة أحدث التقنيات، وأنا متحمس للاستمرار في التعلّم وخوض تحديات جديدة للارتقاء بمهاراتي.";
export const trBio = "Ben, backend, frontend ve masaüstü uygulamaları konusunda deneyime sahip bir yazılım geliştiricisiyim. Farklı şirketlerde e-ticaret projeleri, ERP sistemleri ve daha birçok projede çalıştım.\n\nUygulamaları yapılandırmayı ve mimarisini tasarlamayı seviyorum; her şeyin en baştan doğru şekilde inşa edildiğinden emin olmayı önemsiyorum. Kodu en iyi şekilde nasıl organize edeceğimi düşünmekten ve uygulamanın uzun vadede ölçeklenebilir ve sürdürülebilir olmasını sağlamaktan keyif alıyorum.\n\nHer zaman sektörde kendimi geliştirmek ve ilerlemek için yollar arıyorum. Yeni teknolojileri takip etmeyi seviyorum ve becerilerimi bir üst seviyeye taşımak için öğrenmeye ve yeni zorluklarla karşılaşmaya heyecan duyuyorum.";

const email = 'barasalameh90@gmail.com';
const whatsapp = '905526436811';

export const commonInformation: commonUtilityAtts = {
    resume: {
        website: '/resume.pdf',
        icon: '/file.svg'
    },
    contactInformaion: {
        email: email,
        mobile: '+972500026313',
        whatsapp: `+${whatsapp}`
    },
    personalInformation: {
        birthdate: '19/02/1999',
    },
    socialMedia: {
        facebook: {
            website: 'https://www.facebook.com/bara.salameh/',
            icon: '/facebook.svg'
        },
        instagram: {
            website: 'https://www.instagram.com/bara.salameh/',
            icon: '/instagram.svg'
        },
        email: {
            website: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
            icon: '/send-email.svg'
        },
        whatsapp: {
            website: `https://wa.me/${whatsapp}`,
            icon: '/message.svg'
        }
    }
}

export const enInformation = {
    fullname: 'Albaraa I. A. Salameh',
    gender: "Male",
    facebook: 'Facebook',
    instagram: 'Instagram',
    sendEmail: 'Send email',
    sendMessage: 'Send Whatsapp message',
    copy: 'Copied'
}

export const arInformation = {
    fullname: 'البراء سلامة',
    gender: "رجل",
    facebook: 'فيسبوك',
    instagram: 'انستجرام',
    sendEmail: 'ارسل بريد الكتروني',
    sendMessage: 'ارسل رسالة واتسـاب',
    copy: 'تم النسخ'
}

export const trInformation = {
    fullname:'Albaraa I. A. Salama',
    gender: "Erkek",
    facebook: 'Facebook',
    instagram: 'Instagram',
    sendEmail: 'Email at',
    sendMessage: 'Messaj at',
    copy: 'kopyalandı'
}

export const enUtility: UtilityAtts = {
    cv: 'Resume',
    contactInfo: 'Personal and contact informations',
    goTo: 'Go to nextjs.org →'
}

export const arUtility: UtilityAtts = {
    cv: 'السيرة الذاتية',
    contactInfo: 'المعلومات الشخصية والتواصل',
    goTo: 'اذهب الى nextjs.org'
}

export const trUtility: UtilityAtts = {
    cv: 'Özgeçmiş',
    contactInfo: 'Kişisel ve iletişim bilgileri',
    goTo: 'nextjs.org a git'
}