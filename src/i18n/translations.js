// src/i18n/translations.js
export const LANGS = [
  { code: "en", label: "English", flag: "gb", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "de", dir: "ltr" },
  { code: "ar", label: "العربية", flag: "sa", dir: "rtl" },
  { code: "tr", label: "Türkçe", flag: "tr", dir: "ltr" },
];

export const T = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      ctaProjects: "View Projects",
      ctaContact: "Contact",
      quote: "The secret of achievement lies in the will.",
    },
    about: {
      eyebrow: "About",
      title: "What I do",
      body:
        "Fullstack developer with experience in C#, .NET, Vue.js, Azure DevOps, CI/CD and database migration work. I care about clean architecture, maintainability, and polished user interfaces.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Toolbox",
      core: "Core",
      frontend: "Frontend",
      devops: "DevOps & Platform",
      data: "Data",
    },
    experience: { eyebrow: "Experience", title: "Work history" },
    education: { eyebrow: "Education", title: "Education" },
    languages: {
      eyebrow: "Languages",
      title: "Languages I speak",
      note: "You can switch the site language from the dropdown.",
    },
    projects: { eyebrow: "Work", title: "Selected projects", comingSoon: "Coming soon" },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build something",
      emailMe: "Email me",
      note: "Prefer email for inquiries. I reply quickly.",
    },
    footer: {
      right: "React + Vite · i18n",
    },
    exp: {
      // "q1.role": "Software Engineer",
      // "q1.b1": "Built internal tools and services in .NET and SQL Server.",
    },
    edu: {
      // "bsc.cs": "B.Sc. Computer Science",
    },
  },

  de: {
    nav: {
      home: "Start",
      about: "Profil",
      skills: "Skills",
      experience: "Erfahrung",
      education: "Ausbildung",
      languages: "Sprachen",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      ctaProjects: "Projekte ansehen",
      ctaContact: "Kontakt",
      quote: "Das Geheimnis des Könnens liegt im Wollen.",
    },
    about: {
      eyebrow: "Profil",
      title: "Was ich mache",
      body:
        "Fullstack-Entwickler mit Erfahrung in C#, .NET, Vue.js, Azure DevOps, CI/CD und Datenbankmigrationen. Mir sind saubere Architektur, Wartbarkeit und hochwertige Benutzeroberflächen wichtig.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Werkzeugkasten",
      core: "Kern",
      frontend: "Frontend",
      devops: "DevOps & Plattform",
      data: "Daten",
    },
    experience: { eyebrow: "Erfahrung", title: "Beruflicher Werdegang" },
    education: { eyebrow: "Ausbildung", title: "Ausbildung" },
    languages: {
      eyebrow: "Sprachen",
      title: "Sprachen, die ich spreche",
      note: "Du kannst die Sprache der Webseite oben im Menü wechseln.",
    },
    projects: { eyebrow: "Arbeit", title: "Ausgewählte Projekte", comingSoon: "Kommt bald" },
    contact: {
      eyebrow: "Kontakt",
      title: "Lass uns etwas bauen",
      emailMe: "E-Mail senden",
      note: "Am besten per E-Mail. Ich antworte schnell.",
    },
    footer: {
      right: "React + Vite · i18n",
    },
    exp: {
      // "q1.role": "Softwareentwickler",
      // "q1.b1": "Entwicklung interner Tools und Services mit .NET und SQL Server.",
    },
    edu: {
      // "bsc.cs": "B.Sc. Informatik",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      skills: "المهارات",
      experience: "الخبرة",
      education: "التعليم",
      languages: "اللغات",
      projects: "المشاريع",
      contact: "تواصل",
    },
    hero: {
      ctaProjects: "عرض المشاريع",
      ctaContact: "تواصل",
      quote: "سرّ القدرة على الإنجاز يكمن في الإرادة.",
    },
    about: {
      eyebrow: "نبذة",
      title: "ماذا أقدّم",
      body:
        "مطور برمجيات شامل (Fullstack) لدي خبرة في ‎C#‎ و‎.NET‎ وVue.js وAzure DevOps وأنظمة CI/CD وأعمال ترحيل قواعد البيانات. أركّز على هندسة نظيفة، سهولة صيانة، وتجربة مستخدم متقنة.",
    },
    skills: {
      eyebrow: "المهارات",
      title: "الأدوات",
      core: "الأساسيات",
      frontend: "واجهة المستخدم",
      devops: "DevOps والمنصة",
      data: "البيانات",
    },
    experience: { eyebrow: "الخبرة", title: "الخبرة العملية" },
    education: { eyebrow: "التعليم", title: "التعليم" },
    languages: {
      eyebrow: "اللغات",
      title: "اللغات التي أتحدثها",
      note: "يمكنك تغيير لغة الموقع من القائمة العلوية.",
    },
    projects: { eyebrow: "العمل", title: "مشاريع مختارة", comingSoon: "قريبًا" },
    contact: {
      eyebrow: "تواصل",
      title: "خلّينا نعمل شيء قوي",
      emailMe: "راسلني",
      note: "يفضل التواصل عبر البريد الإلكتروني. أرد بسرعة."
    },
    footer: {
      right: "React + Vite · i18n",
    },
    exp: {
      // "q1.role": "مهندس برمجيات",
      // "q1.b1": "تطوير أدوات وخدمات داخلية باستخدام .NET و SQL Server.",
    },
    edu: {
      // "bsc.cs": "بكالوريوس علوم الحاسوب",
    },
  },

  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      skills: "Yetenekler",
      experience: "Deneyim",
      education: "Eğitim",
      languages: "Diller",
      projects: "Projeler",
      contact: "İletişim",
    },
    hero: {
      ctaProjects: "Projeleri gör",
      ctaContact: "İletişim",
      quote: "Başarının sırrı, istemekte yatar.",
    },
    about: {
      eyebrow: "Hakkımda",
      title: "Ne yapıyorum",
      body:
        "C#, .NET, Vue.js, Azure DevOps, CI/CD ve veritabanı geçişleri konularında deneyime sahip bir Fullstack geliştiriciyim. Temiz mimari, sürdürülebilirlik ve özenli kullanıcı arayüzlerine önem veririm.",
    },
    skills: {
      eyebrow: "Yetenekler",
      title: "Araç kutusu",
      core: "Temel",
      frontend: "Frontend",
      devops: "DevOps & Platform",
      data: "Veri",
    },
    experience: { eyebrow: "Deneyim", title: "İş deneyimi" },
    education: { eyebrow: "Eğitim", title: "Eğitim" },
    languages: {
      eyebrow: "Diller",
      title: "Konuştuğum diller",
      note: "Üst menüden site dilini değiştirebilirsin.",
    },
    projects: { eyebrow: "Çalışmalar", title: "Seçilmiş projeler", comingSoon: "Yakında" },
    contact: {
      eyebrow: "İletişim",
      title: "Bir şeyler inşa edelim",
      emailMe: "E-posta gönder",
      note: "İletişim için e-posta tercih edilir. Hızlı cevap veririm."
    },
    footer: {
      right: "React + Vite · i18n",
    },
    exp: {
      // "q1.role": "Yazılım Mühendisi",
      // "q1.b1": ".NET ve SQL Server ile dahili araçlar ve servisler geliştirdim.",
    },
    edu: {
      // "bsc.cs": "Bilgisayar Bilimleri Lisans",
    },
  },
};

export function tr(lang, key) {
  const dict = T[lang] || T.en;
  const en = T.en;

  const val = key
    .split(".")
    .reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict);

  if (val !== undefined) return val;

  const valEn = key
    .split(".")
    .reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), en);

  if (valEn !== undefined) return valEn;

  return key;
}
