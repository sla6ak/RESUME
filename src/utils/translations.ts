export type Language = 'en' | 'ua' | 'ru';

export interface TranslationKeys {
  header: Record<string, string>;
  hero: Record<string, string>;
  skills: {
    title: string;
    techStack: string;
    backendAndInfrastructure: string;
    localAI: string;
    frontend: string;
    softSkills: string;
    languages: string;
    summary: string;
    summaryText: string;
    softSkillsList: string[];
    languagesList: string[];
  };
  projects: {
    title: string;
    viewAll: string;
    items: {
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  education: {
    title: string;
    items: {
      date: string;
      title: string;
      company: string;
      description: string;
    }[];
  };
  footer: Record<string, string>;
  burgerMenu: Record<string, string>;
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    header: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contacts: 'Contacts',
    },
    hero: {
      subtitle: 'Full-Stack Engineer',
      title: 'Viktor Yachmenyk',
      description:
        'Scalable Web Systems • High Performance & Clean Code • Local AI & LLM Workflows Integration.',
    },
    skills: {
      title: 'Skills & Experience',
      techStack: 'Tech Stack',
      backendAndInfrastructure: 'Backend & Infrastructure',
      localAI: 'AI & Local LLMs',
      frontend: 'Frontend',
      softSkills: 'Soft Skills',
      languages: 'Languages',
      summary: 'Summary / Experience',
      summaryText:
        'GoIT Full-Stack Graduate with continuous coding experience since 2021. Skilled in building responsive frontend applications and Node.js backends. Strong problem-solving mindset, fast learner, and enthusiast of open-source LLMs and developer automation.',
      softSkillsList: [
        'Continuous Self-Learning & Research',
        'Ownership & Problem Ownership',
        'Adaptability to Emerging Tech & Workflows',
        'Asynchronous & Cross-Team Communication',
        'Integrity & Transparency',
        'Friendly & Approachable',
        'Healthy Lifestyle & Zero Bad Habits',
      ],
      languagesList: [
        'English — B2 (Reading & Technical Literature) / A2 (Spoken)',
        'Ukrainian — Native',
        'Russian — Native',
      ],
    },
    projects: {
      title: 'Projects',
      viewAll: 'View all projects →',
      items: [
        {
          title: 'IceCream',
          description: 'Collaborative ice cream shop website with modern UI/UX.',
          tags: ['Adaptive Design', 'Parcel', 'Git'],
        },
        {
          title: 'Filmoteka',
          description: 'Movie streaming platform with API integration and modern features.',
          tags: ['JavaScript', 'API', 'Git'],
        },
        {
          title: 'My GitHub',
          description: 'Collection of open-source projects and contributions.',
          tags: ['GitHub', 'Open Source'],
        },
      ],
    },
    education: {
      title: 'Education & Training',
      items: [
        {
          date: '2022',
          title: 'Frontend Developer',
          company: 'Web Studio / IT Services',
          description:
            'Engineered web applications manually without AI tools, demonstrating a strong foundation in modern JavaScript. Developed Norwegian-language localized interfaces and built dynamic Next.js components with full CRUD functionality.',
        },
        {
          date: '2021 – 2022',
          title: 'Full-Stack Web Development Program',
          company: 'GoIT Company',
          description:
            'Intensive hands-on training focused on modern JavaScript, React, Node.js, and web application architecture. Built multiple individual and team projects from scratch, following agile methodologies and best engineering practices.',
        },
        {
          date: '2021 – Present',
          title: 'Full-Stack Developer (Personal & Open-Source Projects)',
          company: 'Self-Employed / Independent Practice',
          description:
            'Designing and building end-to-end web applications. Evolved from traditional hands-on coding to AI-assisted workflows, integrating local LLMs, MCP servers, and modern JS stack (React, Next.js, Node.js) to boost development speed and code quality.',
        },
        {
          date: 'Ongoing',
          title: 'Continuous Self-Education',
          company: 'Tech Stack & Language Proficiency',
          description:
            'Expanding expertise in modern full-stack ecosystem, Docker, WebSockets, and local AI tooling while systematically improving English skills.',
        },
      ],
    },
    footer: {
      contactInfo: 'Contact Information',
      location: 'Krivoy Rog, Ukraine',
      updated: 'Resume updated: 2026',
    },
    burgerMenu: {
      theme: 'Theme',
      language: 'Language',
    },
  },
  ua: {
    header: {
      about: 'Про мене',
      skills: 'Навички',
      projects: 'Проекти',
      education: 'Освіта',
      contacts: 'Контакти',
    },
    hero: {
      subtitle: 'Full-Stack Інженер',
      title: 'Віктор Ячменик',
      description:
        'Масштабовані Веб-Системи • Висока Продуктивність та Чистий Код • Локальний ШІ та LLM Робочі процеси.',
    },
    skills: {
      title: 'Навички та досвід',
      techStack: 'Технічний стек',
      backendAndInfrastructure: 'Backend та Інфраструктура',
      localAI: 'ШІ та Локальні LLM',
      frontend: 'Frontend',
      softSkills: "М'які навички",
      languages: 'Мови',
      summary: 'Підсумок / Досвід',
      summaryText:
        "Випускник GoIT Full-Stack з безперервним досвідом програмування з 2021 року. Вмію створювати адаптивні фронтенд-додатки та Node.js бекенди. Сильне мислення розв'язання проблем, швидке навчання, ентузіаст відкритих LLM та автоматизації розробки.",
      softSkillsList: [
        'Безперервне самоосвіта та дослідження',
        'Відповідальність та володіння задачею',
        'Адаптивність до нових технологій та процесів',
        'Асинхронна та крос-командна комунікація',
        'Чесність та прозорість',
        'Дружелюбність та відкритість',
        'Здоровий спосіб життя та відсутність шкідливих звичок',
      ],
      languagesList: [
        'Англійська — B2 (Читання та тех. література) / A2 (Розмова)',
        'Українська — рідна',
        'Російська — рідна',
      ],
    },
    projects: {
      title: 'Проекти',
      viewAll: 'Дивитись всі проекти →',
      items: [
        {
          title: 'IceCream',
          description: 'Спільний сайт морозива з сучасним UI/UX.',
          tags: ['Адаптивний дизайн', 'Parcel', 'Git'],
        },
        {
          title: 'Filmoteka',
          description:
            'Платформа потокового перегляду фільмів з інтеграцією API та сучасними функціями.',
          tags: ['JavaScript', 'API', 'Git'],
        },
        {
          title: 'My GitHub',
          description: 'Колекція проєктів з відкритим кодом та внесків.',
          tags: ['GitHub', 'Open Source'],
        },
      ],
    },
    education: {
      title: 'Освіта та навчання',
      items: [
        {
          date: '2022',
          title: 'Frontend Developer',
          company: 'Web Studio / IT Services',
          description:
            'Розробляв веб-додатки вручну без AI-інструментів, демонструючи міцну базу сучасного JavaScript. Створював інтерфейси з норвезькою локалізацією та динамічні Next.js компоненти з повним CRUD-функціоналом.',
        },
        {
          date: '2021 – 2022',
          title: 'Програма Full-Stack Web Development',
          company: 'GoIT Company',
          description:
            'Інтенсивна практика з сучасного JavaScript, React, Node.js та архітектури веб-додатків. Створено кілька індивідуальних та командних проєктів з нуля, з дотриманням agile-методологій та найкращих інженерних практик.',
        },
        {
          date: '2021 – Present',
          title: 'Full-Stack Developer (Особисті та Open-Source проєкти)',
          company: 'Self-Employed / Independent Practice',
          description:
            'Проектування та створення веб-додатків від початку до кінця. Перехід від традиційного кодування до AI-асистованих робочих процесів, інтеграція локальних LLM, MCP серверів та сучасного JS стеку (React, Next.js, Node.js) для прискорення розробки та якості коду.',
        },
        {
          date: 'Ongoing',
          title: 'Безперервне самоосвіта',
          company: 'Tech Stack & Language Proficiency',
          description:
            'Розширення експертизи в сучасному full-stack екосистемі, Docker, WebSockets та локальних AI-інструментах при систематичному покращенні англійської мови.',
        },
      ],
    },
    footer: {
      contactInfo: 'Контактна інформація',
      location: 'Кривий Ріг, Україна',
      updated: 'Резюме оновлено: 2026',
    },
    burgerMenu: {
      theme: 'Тема',
      language: 'Мова',
    },
  },
  ru: {
    header: {
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      education: 'Образование',
      contacts: 'Контакты',
    },
    hero: {
      subtitle: 'Full-Stack Инженер',
      title: 'Виктор Ячменик',
      description:
        'Масштабируемые Веб-Системы • Высокая Производительность и Чистый Код • Локальный ИИ и LLM Рабочие процессы.',
    },
    skills: {
      title: 'Навыки и опыт',
      techStack: 'Технический стек',
      backendAndInfrastructure: 'Backend и Инфраструктура',
      localAI: 'ИИ и Локальные LLM',
      frontend: 'Frontend',
      softSkills: 'Мягкие навыки',
      languages: 'Языки',
      summary: 'Резюме / Опыт',
      summaryText:
        'Выпускник GoIT Full-Stack с непрерывным опытом программирования с 2021 года. Умею создавать адаптивные фронтенд-приложения и Node.js бэкенды. Сильное мышление решения проблем, быстрое обучение, энтузиаст открытых LLM и автоматизации разработки.',
      softSkillsList: [
        'Непрерывное самообразование и исследования',
        'Ответственность и владение задачей',
        'Адаптивность к новым технологиям и процессам',
        'Асинхронная и кросс-командная коммуникация',
        'Честность и прозрачность',
        'Дружелюбность и открытость',
        'Здоровый образ жизни и отсутствие вредных привычек',
      ],
      languagesList: [
        'Английский — B2 (Чтение и тех. литература) / A2 (Разговор)',
        'Украинский — родной',
        'Русский — родной',
      ],
    },
    projects: {
      title: 'Проекты',
      viewAll: 'Смотреть все проекты →',
      items: [
        {
          title: 'IceCream',
          description: 'Совместный сайт мороженого с современным UI/UX.',
          tags: ['Адаптивный дизайн', 'Parcel', 'Git'],
        },
        {
          title: 'Filmoteka',
          description:
            'Платформа потокового просмотра фильмов с интеграцией API и современными функциями.',
          tags: ['JavaScript', 'API', 'Git'],
        },
        {
          title: 'My GitHub',
          description: 'Коллекция проектов с открытым кодом и вкладов.',
          tags: ['GitHub', 'Open Source'],
        },
      ],
    },
    education: {
      title: 'Образование и обучение',
      items: [
        {
          date: '2022',
          title: 'Frontend Developer',
          company: 'Web Studio / IT Services',
          description:
            'Разрабатывал веб-приложения вручную без AI-инструментов, демонстрируя прочную базу современного JavaScript. Создавал интерфейсы с норвежской локализацией и динамические Next.js компоненты с полным CRUD-функционалом.',
        },
        {
          date: '2021 – 2022',
          title: 'Программа Full-Stack Web Development',
          company: 'GoIT Company',
          description:
            'Интенсивная практика с современным JavaScript, React, Node.js и архитектурой веб-приложений. Создано несколько индивидуальных и командных проектов с нуля, с соблюдением agile-методологий и лучших инженерных практик.',
        },
        {
          date: '2021 – Present',
          title: 'Full-Stack Developer (Личные и Open-Source проекты)',
          company: 'Self-Employed / Independent Practice',
          description:
            'Проектирование и создание веб-приложений от начала до конца. Переход от традиционного кодирования к AI-ассистированным рабочим процессам, интеграция локальных LLM, MCP серверов и современного JS стека (React, Next.js, Node.js) для ускорения разработки и качества кода.',
        },
        {
          date: 'Ongoing',
          title: 'Непрерывное самообразование',
          company: 'Tech Stack & Language Proficiency',
          description:
            'Расширение экспертизы в современной full-stack экосистеме, Docker, WebSockets и локальных AI-инструментах при систематическом улучшении английского языка.',
        },
      ],
    },
    footer: {
      contactInfo: 'Контактная информация',
      location: 'Кривой Рог, Украина',
      updated: 'Резюме обновлено: 2026',
    },
    burgerMenu: {
      theme: 'Тема',
      language: 'Язык',
    },
  },
};
