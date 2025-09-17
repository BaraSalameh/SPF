import { UserLanguage } from "./types.user";

export const userTr: UserLanguage = {
    profile: {
        information: {
            fullname:'Albaraa I. A. Salama',
            gender: "Erkek",
            bio: "Ben, backend, frontend ve masaüstü uygulamaları konusunda deneyime sahip bir yazılım geliştiricisiyim. Farklı şirketlerde e-ticaret projeleri, ERP sistemleri ve daha birçok projede çalıştım.\n\nUygulamaları yapılandırmayı ve mimarisini tasarlamayı seviyorum; her şeyin en baştan doğru şekilde inşa edildiğinden emin olmayı önemsiyorum. Kodu en iyi şekilde nasıl organize edeceğimi düşünmekten ve uygulamanın uzun vadede ölçeklenebilir ve sürdürülebilir olmasını sağlamaktan keyif alıyorum.\n\nHer zaman sektörde kendimi geliştirmek ve ilerlemek için yollar arıyorum. Yeni teknolojileri takip etmeyi seviyorum ve becerilerimi bir üst seviyeye taşımak için öğrenmeye ve yeni zorluklarla karşılaşmaya heyecan duyuyorum."
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
            responsibility: [
                "Lisans öğrencilerine C++, Python, Ağ ve Veritabanı konularında dersler hazırlamak ve sunmak.",
                "Müfredat gereksinimlerine uygun ders materyalleri, ödevler ve laboratuvar çalışmaları geliştirmek.",
                "Öğrencilere programlama temelleri ve problem çözme tekniklerini anlamalarında rehberlik ve mentorluk yapmak.",
                "Öğrenci performansını sınavlar, projeler ve sunumlar aracılığıyla değerlendirmek.",
                "Modern öğretim yöntemlerini takip ederek derslere uygulamalı kodlama laboratuvarları dahil etmek."
            ],
            achievement: [
                "100’den fazla lisans öğrencisine programlama ve bilgisayar bilimi temelleri konusunda mentorluk ve danışmanlık yaparak problem çözme becerilerini ve kodlama özgüvenlerini geliştirdim.",
                "Uygulamalı kodlama atölyeleri ve veritabanı laboratuvarlarını tanıttım."
            ]
        },
        Spinnel: {
            name: 'ERP Easy (Spinnel)',
            location: 'Ramallah, Filistin',
            position: 'Orta website uzmanı',
            responsibility: [
                "ASP.NET Web API ve VB.NET Windows Forms kullanarak ERP modüllerini tasarlamak, geliştirmek ve bakımını yapmak.",
                "SQL Server veritabanlarını, sorgularını ve saklı yordamlarını oluşturarak ve optimize ederek sistem performansını sağlamak.",
                "Gereksinim toplama ve sistem analizine çok disiplinli ekiplerle katılmak.",
                "Yazılım hatalarını ve kullanıcı tarafından bildirilen sorunları gidermek ve çözmek.",
                "ERP çözümlerinin dağıtımına yardımcı olmak ve müşterilere teknik destek sağlamak."
            ],
            achievement: [
                "ASP.NET Web API ve VB.NET Windows Forms kullanarak kurumsal ERP modüllerini geliştirdim ve bakımını yaptım, bu da sistem verimliliğini artırdı.",
                "SQL Server sorgularını ve saklı yordamlarını optimize ederek veritabanı yanıt sürelerini azalttım ve birden fazla modülde veri doğruluğunu sağladım.",
                "ERP çözümlerini müşterilere sunmak için çok disiplinli ekiplerle iş birliği yaptım."
            ]
        },
        Jawwal: {
            name: 'Jawwal',
            location: 'Ramallah, Filistin',
            position: 'Büyükelçi',
            responsibility: [
                "Saha teknisyenleri tarafından kurulan fiber optik ağların yerinde denetimlerini ve denetimlerini gerçekleştirmek.",
                "Ağ kalite standartlarına ve şirket politikalarına uygunluğu doğrulamak.",
                "Denetim bulgularını belgelemek ve yönetim incelemesi için raporlar hazırlamak.",
                "Operasyonel gecikmeleri azaltmak için saha süreçlerini optimize etmeye yardımcı olmak."
            ],
        },
        UATS: {
            name: 'Ultimate Advanced Turnkey Solutions',
            location: 'Rawabi, Filistin',
            position: 'Yeni website uzmanı',
            responsibility: [
                "ASP.NET Web API, HTML5, CSS3 ve JavaScript kullanarak web uygulamaları geliştirmek ve bakımını yapmak.",
                "Müşteri projelerini desteklemek için SQL Server veritabanlarını tasarlamak ve uygulamak.",
                "Figma kullanarak UI/UX ekipleriyle iş birliği yaparak tasarımları işlevsel uygulamalara dönüştürmek.",
                "Proje planlamasına, sprint değerlendirmelerine ve günlük toplantılara katılarak zamanında teslimatı sağlamak."
            ],
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
            description: 'Becerileri, deneyimleri ve projeleri sade ve şık bir şekilde sergilemek için hazırlanmış temiz ve hafif bir statik portföy sitesi.'
        },
        Portfolio: {
            name: 'portföy',
            description: 'Herkesin projelerini, deneyimlerini ve becerilerini modern ve etkileşimli özelliklerle sergilemesine imkân tanıyan dinamik ve özelleştirilebilir bir portföy platformu.'
        },
        Aluminum: {
            name: 'Alüminyum',
            description: 'Stok, sipariş ve iş akışlarını kapsayan alüminyum iş süreçlerini yönetmek için geliştirilmiş, verimliliği ve kolay yönetimi sağlayan kapsamlı bir web çözümü.'
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