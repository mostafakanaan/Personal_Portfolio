export const profile = {
  name: "Mustafa Kanaan",
  title: "Software Developer (B.Sc. Computer Science)",
  location: "Zürich, Switzerland",
  email: "mos.kan@hotmail.com",
  phone: "+49 ",
  website: "https://mkanaan.de",
  links: {
    github: "https://github.com/mostafakanaan",
    linkedin: "https://linkedin.com/in/mos-kan",
    email: "mailto:mos.kan@hotmail.com",
    website: "https://mkanaan.de",
    instagram: "https://www.instagram.com/_mkanaan_/",
  },
  quote: "“Das Geheimnis des Könnens liegt im Wollen.” — Giuseppe Mazzini",

  // from CV: skills grouped :contentReference[oaicite:1]{index=1}
  skills: {
    languages: ["C#", "C++", "Java/Scala", "JavaScript", "Python", "Bash"],
    frontend: ["HTML", "CSS/SASS", "Vue.js", "Blazor", "PHP"],
    data: ["SQL", "MSSQL", "NoSQL / Cosmos DB"],
    devops: ["Git", "Azure DevOps", "CI/CD", "Linux"],
    security: ["OWASP"],
    misc: ["Office", "Unity"],
  },

  // from CV: experience :contentReference[oaicite:2]{index=2}
  experience: [
    {
      company: "Quality1 AG (Q1)",
      role: "Software Developer",
      location: "Bubikon",
      period: "Feb 2024 – Present",
      bullets: ["Backend & frontend development in C#"],
    },
    {
      company: "Advellence GmbH",
      role: "Fullstack Development",
      location: "Bielefeld",
      period: "Apr 2021 – Apr 2023",
      bullets: [
        "API / integration development in .NET 6 (Logic Apps, Functions)",
        "Frontend development with Vue.js",
        "MSSQL, NoSQL/CosmosDB, PIM & DAM migration",
        "Azure DevOps, CI/CD pipelines",
      ],
    },
    {
      company: "EUtech Scientific Engineering GmbH & FH Aachen",
      role: "Working Student & C++ Tutor",
      location: "Aachen",
      period: "Oct 2018 – Mar 2021",
      bullets: [
        "Backend & frontend development in C#",
        "ASP.NET Web Forms → .NET 5 Blazor WASM",
        "Teaching / tutoring (computer science fundamentals)",
      ],
    },
  ],

  // from CV: education :contentReference[oaicite:3]{index=3}
  education: [
    {
      degree: "B.Sc. Computer Science (Software Engineering focus)",
      school: "FH Aachen (University of Applied Sciences)",
      period: "Sep 2017 – May 2021",
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Leibniz Universität Hannover",
      period: "Oct 2015 – Sep 2017",
    },
  ],

  // from CV: languages :contentReference[oaicite:4]{index=4}
  spokenLanguages: ["English", "German", "Arabic", "Turkish"],

  i18n: {
    ar: {
      name: "مصطفى كنعان",
      title: "مطور برمجيات (بكالوريوس علوم الحاسوب)",
      location: "زيورخ، سويسرا",
      experience: [
        {
          company: "Quality1 AG (Q1)",
          role: "مطور برمجيات",
          location: "بوبكون",
          period: "فبراير 2024 - الحالي",
          bullets: ["تطوير الواجهة الخلفية والواجهة الأمامية باستخدام C#"],
        },
        {
          company: "Advellence GmbH",
          role: "تطوير Fullstack",
          location: "بيليفيلد",
          period: "أبريل 2021 - أبريل 2023",
          bullets: [
            "تطوير واجهات API وتكاملات في .NET 6 (Logic Apps, Functions)",
            "تطوير واجهات أمامية باستخدام Vue.js",
            "ترحيل MSSQL وNoSQL/CosmosDB وأنظمة PIM وDAM",
            "Azure DevOps وخطوط CI/CD",
          ],
        },
        {
          company: "EUtech Scientific Engineering GmbH & FH Aachen",
          role: "طالب عامل ومدرس C++",
          location: "آخن",
          period: "أكتوبر 2018 - مارس 2021",
          bullets: [
            "تطوير الواجهة الخلفية والواجهة الأمامية باستخدام C#",
            "من ASP.NET Web Forms إلى .NET 5 Blazor WASM",
            "التدريس والإشراف (أساسيات علوم الحاسوب)",
          ],
        },
      ],
      education: [
        {
          degree: "بكالوريوس علوم الحاسوب (تركيز هندسة البرمجيات)",
          school: "FH Aachen (University of Applied Sciences)",
          period: "سبتمبر 2017 - مايو 2021",
        },
        {
          degree: "بكالوريوس علوم الحاسوب",
          school: "Leibniz Universität Hannover",
          period: "أكتوبر 2015 - سبتمبر 2017",
        },
      ],
      spokenLanguages: ["الإنجليزية", "الألمانية", "العربية", "التركية"],
      projects: [
        {
          name: "تطبيق التمويل للأعمال",
          description: "إدارة مالية للشركات الصغيرة مع التقارير والتصدير وأدوار المستخدمين.",
          tech: ["MAUI", "C#", "SQLite"],
          status: "قريباً",
          image: "/img/projects/coming-soon.png",
        },
        {
          name: "عارض فروقات لقطات DEF",
          description: "مقارنة مرئية للقطات بيانات JSON مع تتبع التغييرات.",
          tech: ["WPF", "MVVM", "C#"],
          status: "قريباً",
          image: "/img/projects/coming-soon.png",
        },
        {
          name: "أتمتة الموافقات الداخلية",
          description: "سير عمل موافقات آلي مع سجل تدقيق.",
          tech: [".NET", "SQL Server", "Background Services"],
          status: "قريباً",
          image: "/img/projects/coming-soon.png",
        },
        {
          name: "مساهمة مفتوحة المصدر",
          description: "مشروع مساهمة مفتوحة المصدر قادم.",
          tech: ["React", "TypeScript"],
          status: "قريباً",
          image: "/img/projects/coming-soon.png",
        },
      ],
    },
  },

 projects: [
  {
    name: "Business Finance App",
    description: "Small business finance management with reports, exports, and user roles.",
    tech: ["MAUI", "C#", "SQLite"],
    status: "Coming soon",
    image: "/img/projects/coming-soon.png",
  },
  {
    name: "DEF Snapshot Diff Viewer",
    description: "Visual comparison of JSON data snapshots with change tracking.",
    tech: ["WPF", "MVVM", "C#"],
    status: "Coming soon",
    image: "/img/projects/coming-soon.png",
  },
  {
    name: "Internal Approval Automation",
    description: "Automated approval workflows with audit logging.",
    tech: [".NET", "SQL Server", "Background Services"],
    status: "Coming soon",
    image: "/img/projects/coming-soon.png",
  },
  {
    name: "Open Source Contribution",
    description: "Upcoming OSS contribution project.",
    tech: ["React", "TypeScript"],
    status: "Coming soon",
    image: "/img/projects/coming-soon.png",
  },
],
};
