import { CertificateName } from "../types.features";
import { CertificateAtts, CommonCertificateAtts } from "./types.certificate";

export const commonCertificateAtts: Record<CertificateName, CommonCertificateAtts> = {
    "AXSOS Academy": {
        website: 'https://axsos.academy/',
        logoUrl: '/axsos.png'
    }
}

export const enCertificates: Record<CertificateName, CertificateAtts> = {
    "AXSOS Academy": {
        name: 'Axsos Academy',
        desciption: '+530 coding hours in total (web fundamentals, data structures, and algorithms, Flask and Django, Spring Boot,MERN).',
        position: 'Full-Stack Developer Certificate'
    },
    
}

export const arCertificates: Record<CertificateName, CertificateAtts> = {
    "AXSOS Academy": {
        name: 'اكاديمية اكسـوس',
        desciption: 'أكثر من 530 ساعة برمجة في المجموع (أساسيات الويب، هياكل البيانات والخوارزميات، Flask وDjango، Spring Boot، ومكدس MERN).',
        position: 'شهادة مطور مواقع انترنت'
    },
    
}

export const trCertificates: Record<CertificateName, CertificateAtts> = {
    "AXSOS Academy": {
        name: 'Axsos Akademisi',
        desciption: 'Toplamda 530’dan fazla kodlama saati (web temelleri, veri yapıları ve algoritmalar, Flask ve Django, Spring Boot ve MERN yığını).',
        position: 'Full-Stack Geliştirici Sertifikası'
    },
    
}

export const enVisit = 'Visit Provider';
export const arVisit = 'زيارة المزود';
export const trVisit = 'Sağlayıcıyı Ziyaret Et';

export const enDescription = 'Description';
export const arDescription = 'الوصــف';
export const trDescription = 'Açıklama';

export const enChartTitle = 'Certificate skills';
export const arChartTitle = 'مهارات الشهادة';
export const trChartTitle = 'Sertifikanın yetenekleri';