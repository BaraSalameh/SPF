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
    setting: {
        label: 'Ayarlar',
        theme: {
            dark : 'Karanlık',
            light: 'Açık'
        },
        language: {
            label: 'Diller'
        }
    },
    profile: {
        utility: {
            cv: 'Özgeçmiş',
            contactInfo: 'Kişisel ve iletişim bilgileri',
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
        chartLabel: 'Süre (Ay)'
    },
    project: {
        linkLabel: 'Canlı Projeyi Görüntüle',
        sourceLabel: 'GitHub’da Görüntüle',
        description: 'Açıklama',
        chartLabel: 'Projenin yetenekleri'
    },
    skill: {
        chartLabel: 'Widgetin yetenekleri'
    },
    language: {
        chartLabel: 'Dil Seviyesi'
    }
}