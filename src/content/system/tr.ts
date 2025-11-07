import { SystemLanguage } from "./types.system";

export const systemTr: SystemLanguage = {
    navigation: {
        label: 'Gezinmeyi',
        Home: 'Anasayfa',
        Education: 'Eğitim',
        Experience: 'Işler',
        Projects: 'Projeler',
        Skills: 'Yetenekler',
        Languages: 'Diller',
        Certificates: 'Sertifikalar'
    },
    profile: {
        utility: {
            cv: 'Özgeçmiş',
            contactInfo: 'İletişim bilgileri',
        },
        information: {
            facebook: 'Facebook',
            instagram: 'Instagram',
            email: 'E-posta Gönder',
            whatsapp: 'WhatsApp Mesajı Gönder',
            copy: 'kopyalandı'
        }
    },
    education: {
        linkLabel: 'Üniversiteyi Ziyaret Et',
        chartLabel: 'Süre (Ay)'
    },
    experience: {
        linkLabel: 'Şirketi Ziyaret Et',
        chartLabel: 'Süre (Ay)',
        modalLabel: 'Başarılar',
        description: 'Sorumluluklar',
        sourceLabel: 'Başarılar'
    },
    project: {
        linkLabel: 'Canlı Projeyi Görüntüle',
        sourceLabel: 'GitHub’da Görüntüle',
        description: 'Açıklama',
        chartLabel: 'Projenin yetenekleri'
    },
    skill: {
        chartLabel: 'Widgetin yetenekleri',
        modalLabel: 'Tüm yetenekleri görüntüle'
    },
    language: {
        chartLabel: 'Dil Seviyesi'
    },
    certificate: {
        chartLabel: 'Sertifikanın yetenekleri',
        linkLabel: 'Sağlayıcıyı Ziyaret Et',
        description: 'Açıklama'
    }
}