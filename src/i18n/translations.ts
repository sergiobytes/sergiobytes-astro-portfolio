export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      tech: "Tecnologías",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para nuevos proyectos",
      greeting: "Hola, soy",
      role: "Full Stack Developer",
      description:
        "Especializado en crear aplicaciones web escalables con <strong>Angular</strong>, <strong>NestJS</strong> y <strong>TypeScript</strong>. Apasionado por la arquitectura limpia, experiencia de usuario y automatización.",
      contactBtn: "Contáctame",
      downloadCV: "Descargar CV",
      yearsExp: "4+ años exp.",
    },
    about: {
      title: "Sobre mí",
      paragraph1:
        "Soy un <strong>Full Stack Developer</strong> con más de 4 años de experiencia construyendo aplicaciones web escalables. Mi enfoque se centra en crear soluciones eficientes, mantenibles y centradas en el usuario.",
      paragraph2:
        "Me especializo en arquitecturas modernas usando <strong>Angular</strong>, <strong>NestJS</strong> y <strong>TypeScript</strong>, siempre aplicando principios SOLID y Clean Architecture para garantizar código de calidad.",
      paragraph3:
        "Co-fundador de <strong>DevCrafters</strong>, donde ayudamos a empresas a crear soluciones web, móviles y en la nube que transforman sus procesos de negocio.",
      devCraftersLink: "Conoce DevCrafters",
      stats: {
        years: "Años de experiencia",
        projects: "Proyectos completados",
        certifications: "Certificaciones",
        commitment: "Compromiso",
      },
    },
    experience: {
      title: "Experiencia",
      remote: "Remoto desde",
      experiences: [
        {
          company: "Creative Software International",
          role: "Full Stack Developer",
          period: "Jul 2025 - Oct 2025",
          location: "Remoto desde Aguascalientes, Ags.",
          highlights: [
            "Diseñé y mejoré esquemas de base de datos para permisos granulares",
            "Implementé reglas avanzadas para flujos de trabajo delegados",
            "Resolví deadlocks en Work Orders refactorizando lógica transaccional",
            "Automaticé segmentación de correos y corregí inconsistencias CRUD",
          ],
        },
        {
          company: "Taruks Soluciones S.A. de C.V.",
          role: "Full Stack Developer",
          period: "Dic 2022 - Ago 2024",
          location: "Ciudad Obregón, Sonora",
          highlights: [
            "Desarrollé aplicaciones Angular con principios de Clean Architecture",
            "Integré REST APIs e implementé formularios reactivos con RxJS",
            "Participé en ceremonias Scrum y revisiones de código",
            "Entregué interfaces responsivas alineadas con mejores prácticas UX",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      demo: "Ver Demo",
      github: "GitHub",
      items: [
        {
          name: "BotBite",
          tagline: "Asistente IA de Mesero para Restaurantes",
          description:
            "Plataforma SaaS que permite a clientes ordenar comida vía WhatsApp usando IA conversacional. Arquitectura multi-restaurante con QR dinámicos.",
          image: "/images/projects/botbite.png",
          logo: "/images/logos/botbite.png",
          tech: "angular,tailwind,rxjs,websockets,nestjs,postgresql,redis,chatgpt,twilio,cloudinary,render",
          links: {
            demo: "https://botbite.com.mx",
            github: "https://github.com/sergiobytes/botbite-waiter-app",
          },
          featured: true,
        },
        {
          name: "Diócesis de Cd. Obregón",
          tagline: "Plataforma Administrativa y Pública",
          description:
            "Sistema administrativo para parroquias y decanatos con navegación basada en roles, formularios reactivos y layouts responsivos.",
          image: "/images/projects/diocesis.png",
          logo: "/images/logos/diocesis-logo.png",
          tech: "angular,tailwind,rxjs,django,postgresql,cloudinary,render",
          links: {
            demo: "https://diocesisdeciudadobregon.org/inicio",
            github:
              "https://github.com/Sergio-Frontend-Projects/diocesis-frontend-material",
          },
          featured: true,
        },
        {
          name: "Pastelería Magnolias",
          tagline: "Plataforma de E-commerce",
          description:
            "Plataforma de comercio electrónico para pastelería artesanal con catálogo interactivo, carrito de compras y gestión de pedidos.",
          image:
            "https://placehold.co/1919x908/EEE/31343C?font=montserrat&text=Building",
          logo: "/images/logos/magnolias.png",
          tech: "vue,nestjs,postgresql,cloudinary,render",
          links: {
            github:
              "https://github.com/DevCraftersEnterprise/magnolias-backend",
          },
          featured: true,
        },
      ],
    },
    tech: {
      title: "Stack Tecnológico",
      description:
        "Tecnologías y herramientas que utilizo para construir soluciones robustas y escalables",
      categories: {
        languages: "Lenguajes",
        frontend: "Frontend",
        mobile: "Mobile",
        backend: "Backend & APIs",
        jobs: "Background Jobs & Messaging",
        databases: "Databases",
        devops: "DevOps & Cloud",
        cloud: " Cloud Platforms & BaaS",
        testing: "Testing & Tools",
        packages: "Package & State Management",
        others: "Others",
      },
      devCraftersTitle: "Co-fundador de DevCrafters",
      devCraftersDescription:
        "Soluciones modernas en web, móvil y cloud para impulsar tu negocio",
      devCraftersButton: "Visitar DevCrafters",
    },
    contact: {
      title: "Trabajemos juntos",
      description: "¿Tienes un proyecto en mente? Me encantaría escucharte.",
      email: "Email",
      cta: "¿Listo para comenzar tu proyecto?",
      ctaDescription:
        "Contáctame y trabajemos juntos para hacer realidad tu visión.",
      ctaButton: "Envíame un email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      description:
        "Full Stack Developer especializado en crear aplicaciones web escalables y modernas.",
      quickLinks: "Enlaces Rápidos",
      devCrafters: "DevCrafters",
      devCraftersDescription: "Soluciones modernas en web, móvil y cloud.",
      visitSite: "Visitar sitio",
      madeWith: "Hecho con Astro & Tailwind CSS.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      tech: "Technologies",
      contact: "Contact",
    },
    hero: {
      available: "Available for new projects",
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description:
        "Specialized in building scalable web applications with <strong>Angular</strong>, <strong>NestJS</strong>, and <strong>TypeScript</strong>. Passionate about clean architecture, user experience, and automation.",
      contactBtn: "Contact Me",
      downloadCV: "Download CV",
      yearsExp: "4+ years exp.",
    },
    about: {
      title: "About Me",
      paragraph1:
        "I'm a <strong>Full Stack Developer</strong> with over 4 years of experience building scalable web applications. My focus is on creating efficient, maintainable, and user-centered solutions.",
      paragraph2:
        "I specialize in modern architectures using <strong>Angular</strong>, <strong>NestJS</strong>, and <strong>TypeScript</strong>, always applying SOLID principles and Clean Architecture to ensure quality code.",
      paragraph3:
        "Co-founder of <strong>DevCrafters</strong>, where we help companies create web, mobile, and cloud solutions that transform their business processes.",
      devCraftersLink: "Learn about DevCrafters",
      stats: {
        years: "Years of experience",
        projects: "Completed projects",
        certifications: "Certifications",
        commitment: "Commitment",
      },
    },
    experience: {
      title: "Experience",
      remote: "Remote from",
      experiences: [
        {
          company: "Creative Software International",
          role: "Full Stack Developer",
          period: "Jul 2025 - Oct 2025",
          location: "Remote from Aguascalientes, Ags.",
          highlights: [
            "Designed and improved database schemas for granular permissions",
            "Implemented advanced rules for delegated workflows",
            "Resolved Work Orders deadlocks by refactoring transactional logic",
            "Automated email segmentation and fixed CRUD inconsistencies",
          ],
        },
        {
          company: "Taruks Soluciones S.A. de C.V.",
          role: "Full Stack Developer",
          period: "Dec 2022 - Aug 2024",
          location: "Ciudad Obregón, Sonora",
          highlights: [
            "Developed Angular applications with Clean Architecture principles",
            "Integrated REST APIs and implemented reactive forms with RxJS",
            "Participated in Scrum ceremonies and code reviews",
            "Delivered responsive interfaces aligned with UX best practices",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      demo: "View Demo",
      github: "GitHub",
      items: [
        {
          name: "BotBite",
          tagline: "AI Waiter Assistant for Restaurants",
          description:
            "SaaS platform that allows customers to order food via WhatsApp using conversational AI. Multi-restaurant architecture with dynamic QR codes.",
          image: "/images/projects/botbite.png",
          logo: "/images/logos/botbite.png",
          tech: "angular,tailwind,rxjs,websockets,nestjs,postgresql,redis,chatgpt,twilio,cloudinary,render",
          links: {
            demo: "https://botbite.com.mx",
            github: "https://github.com/sergiobytes/botbite-waiter-app",
          },
          featured: true,
        },
        {
          name: "Diocese of Cd. Obregón",
          tagline: "Administrative & Public Platform",
          description:
            "Administrative system for parishes and deaneries with role-based navigation, reactive forms, and responsive layouts.",
          image: "/images/projects/diocesis.png",
          logo: "/images/logos/diocesis-logo.png",
          tech: "angular,tailwind,rxjs,django,postgresql,cloudinary,render",
          links: {
            demo: "https://diocesisdeciudadobregon.org/inicio",
            github:
              "https://github.com/Sergio-Frontend-Projects/diocesis-frontend-material",
          },
          featured: true,
        },
        {
          name: "Magnolias Bakery",
          tagline: "E-commerce Platform",
          description:
            "E-commerce platform for artisan bakery with interactive catalog, shopping cart, and order management.",
          image:
            "https://placehold.co/1919x908/EEE/31343C?font=montserrat&text=Building",
          logo: "/images/logos/magnolias.png",
          tech: "vue,nestjs,postgresql,cloudinary,render",
          links: {
            github:
              "https://github.com/DevCraftersEnterprise/magnolias-backend",
          },
          featured: true,
        },
      ],
    },
    tech: {
      title: "Tech Stack",
      description:
        "Technologies and tools I use to build robust and scalable solutions",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        mobile: "Mobile",
        backend: "Backend & APIs",
        jobs: "Background Jobs & Messaging",
        databases: "Databases",
        devops: "DevOps & Cloud",
        cloud: " Cloud Platforms & BaaS",
        testing: "Testing & Tools",
        packages: "Package & State Management",
        others: "Others",
      },
      devCraftersTitle: "Co-founder of DevCrafters",
      devCraftersDescription:
        "Modern solutions in web, mobile and cloud to boost your business",
      devCraftersButton: "Visit DevCrafters",
    },
    contact: {
      title: "Let's Work Together",
      description: "Have a project in mind? I'd love to hear from you.",
      email: "Email",
      cta: "Ready to start your project?",
      ctaDescription:
        "Contact me and let's work together to bring your vision to life.",
      ctaButton: "Send me an email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      description:
        "Full Stack Developer specialized in building scalable and modern web applications.",
      quickLinks: "Quick Links",
      devCrafters: "DevCrafters",
      devCraftersDescription: "Modern solutions in web, mobile and cloud.",
      visitSite: "Visit site",
      madeWith: "Made with Astro & Tailwind CSS.",
    },
  },
};

export type Language = keyof typeof translations;

export function getTranslations(lang: Language) {
  return translations[lang] || translations.es;
}
