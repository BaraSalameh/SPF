import { UserLanguage } from "./types.user";

export const userTr: UserLanguage = {
    profile: {
        information: {
            fullname:'Albaraa I. A. Salama',
            gender: "Erkek",
            bio: `Siber güvenlik alanında yüksek lisans derecesine sahip, 5+ yıllık deneyimiyle ölçeklenebilir web uygulamaları geliştiren ve dağıtan Full-Stack Yazılım Mühendisi.
            \nSistem verimliliğini ve kullanıcı memnuniyetini %30’a kadar artıran 6’dan fazla uçtan uca proje teslim etti. Clean architecture, RESTful API tasarımı ve bulut dağıtımı (Azure/AWS) konularında yetkin.
            \nBakımı kolay, yüksek kaliteli kod yazmaya tutkulu, güçlü bir ekip oyuncusu olup modern teknolojileri benimseyerek karmaşık iş problemlerine yenilikçi çözümler üretmeyi amaçlar.`
        }
    },
    education: {
        UU: {
            name: 'Üsküdar Üniversitesi',
            location: 'İstanbul, Türkiye',
            major: 'Siber Güvenlik',
        },
        AAUP: {
            name: 'Arab American Üniversitesi',
            location: 'Jenin, Filistin',
            major: 'Bilgisayar Mühendisliği',
        }
    },
     experience: {
        AAUP: {
            name: 'Arab American Üniversitesi',
            location: 'Jenin, Filistin',
            position: 'Hoca',
            achievement: [
                "100’den fazla lisans öğrencisine programlama ve bilgisayar bilimi temelleri konusunda mentorluk ve danışmanlık yaparak problem çözme becerilerini ve kodlama özgüvenlerini geliştirdim.",
                "Uygulamalı kodlama atölyeleri ve veritabanı laboratuvarlarını tanıttım."
            ]
        },
        Spinnel: {
            name: 'ERP Easy (Spinnel)',
            location: 'Ramallah, Filistin',
            position: 'Orta website uzmanı',
            achievement: [
                "ASP.NET Web API ve VB.NET Windows Forms kullanarak kurumsal ERP modüllerini geliştirdim ve bakımını yaptım, bu da sistem verimliliğini artırdı.",
                "SQL Server sorgularını ve saklı yordamlarını optimize ederek veritabanı yanıt sürelerini azalttım ve birden fazla modülde veri doğruluğunu sağladım.",
                "ERP çözümlerini müşterilere sunmak için çok disiplinli ekiplerle iş birliği yaptım."
            ]
        },
        UATS: {
            name: 'Ultimate Advanced Turnkey Solutions',
            location: 'Rawabi, Filistin',
            position: 'Yeni website uzmanı',
            achievement: [
                "ASP.NET Web API, HTML5, CSS3 ve JavaScript kullanarak web uygulamaları geliştirdim ve dağıttım; 5’ten fazla müşteri odaklı projeyi zamanında ve bütçe dahilinde teslim ettim.",
                "SQL Server sorgularını optimize ederek, temiz kodlama uygulayarak ve verimli API tasarımıyla uygulama performansını artırdım.",
                "Figma ve GitHub kullanarak tasarımcılar ve ürün yöneticileriyle iş birliği yaparak sorunsuz ekip çalışması sağladım ve geliştirme döngüsünü kısalttım."
            ]
        }
    },
    project: {
        "Static Portfolio": {
            name: 'statik portföy',
            feature: ['Becerileri, deneyimleri ve projeleri sade ve şık bir şekilde sergilemek için hazırlanmış temiz ve hafif bir statik portföy sitesi.']
        },
        Portfolio: {
            name: 'portföy',
            feature: ['Herkesin projelerini, deneyimlerini ve becerilerini modern ve etkileşimli özelliklerle sergilemesine imkân tanıyan dinamik ve özelleştirilebilir bir portföy platformu.']
        },
        Aluminum: {
            name: 'Alüminyum',
            feature: ['Stok, sipariş ve iş akışlarını kapsayan alüminyum iş süreçlerini yönetmek için geliştirilmiş, verimliliği ve kolay yönetimi sağlayan kapsamlı bir web çözümü.']
        }
    },
    language: {
        English: {
            name: 'İngilizce',
            proficiency: 'İleri'
        },
        Arabic: {
            name: 'Arapça',
            proficiency: 'Ana Dil'
        },
        Turkish: {
            name: 'Türkçe',
            proficiency: 'İleri'
        },
        Spanish: {
            name: 'İspanyolca',
            proficiency: 'Başlangıç'
        }
    },
    certificate: {
        "AXSOS Academy": {
            name: 'Axsos Akademisi',
            description: 'Toplamda 530’dan fazla kodlama saati (web temelleri, veri yapıları ve algoritmalar, Flask ve Django, Spring Boot ve MERN yığını).',
            position: 'Full-Stack Geliştirici Sertifikası'
        },
    }
}