export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      tech: "Tecnologías",
      certifications: "Certificaciones",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para nuevos proyectos",
      greeting: "Hola, soy",
      role: "Full Stack Developer",
      description:
        "Especializado en crear aplicaciones web escalables con <strong>Angular</strong>, <strong>Vue</strong>, <strong>NestJS</strong> y <strong>TypeScript</strong>. Apasionado por la arquitectura limpia, experiencia de usuario y automatización.",
      contactBtn: "Contáctame",
      downloadCV: "Descargar CV",
      yearsExp: "5+ años exp.",
    },
    about: {
      title: "Sobre mí",
      paragraph1:
        "Soy un <strong>Full Stack Developer</strong> con más de 5 años de experiencia construyendo aplicaciones web escalables. Mi enfoque se centra en crear soluciones eficientes, mantenibles y centradas en el usuario.",
      paragraph2:
        "Me especializo en arquitecturas modernas usando <strong>Angular</strong>, <strong>Vue/Nuxt</strong>, <strong>NestJS</strong> y <strong>TypeScript</strong>, siempre aplicando principios SOLID y Clean Architecture. También tengo experiencia migrando sistemas legados (Django, Express, Flutter) a nuevos stacks de forma incremental, sin interrumpir la operación en producción.",
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
          company: "Capgemini",
          role: "Angular Frontend Developer",
          period: "May 2026 - Presente",
          location: "Aguascalientes, Ags.",
          highlights: [
            "Resolví problemas de accesibilidad (a11y) en la librería de componentes compartida entre los proyectos de la empresa",
            "Colaboré con el equipo de diseño en la creación de nuevos componentes reutilizables para el sistema de diseño",
            "Facilité la adopción de componentes ya existentes documentando escenarios de uso que no estaban cubiertos",
          ]
        },
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
            "Plataforma para restaurantes donde los clientes escanean un código QR en su mesa y hacen su pedido por WhatsApp con un mesero virtual de inteligencia artificial. El asistente entiende mensajes de texto y de voz, recomienda opciones del menú y envía los pedidos a caja en tiempo real. Los restaurantes administran sus sucursales, menús y productos desde un panel web.",
          image: "/images/projects/botbite.png",
          logo: "/images/logos/botbite.png",
          tech: "angular,tailwind,rxjs,websocket,nestjs,typeorm,postgresql,redis,chatgpt,twilio,cloudinary,render",
          links: {
            demo: "https://botbite.com.mx",
            github: "https://github.com/DevCraftersEnterprise/botbite-waiter-app",
          },
          featured: true,
        },
        {
          name: "Diócesis de Cd. Obregón",
          tagline:
            "Infraestructura digital para la administración eclesiástica",
          description:
            "Plataforma de gestión para la Diócesis que centraliza la información de parroquias, sacerdotes, noticias y documentos, junto con su sitio web público. Incluye módulos para el Instituto Bíblico e ISMA con accesos por perfil, y una modernización progresiva del sistema sin interrumpir su operación diaria.",
          image: "/images/projects/diocesis.png",
          logo: "/images/logos/diocesis-logo.png",
          tech: "angular,tailwind,rxjs,nestjs,typeorm,django,postgresql,jest,cloudinary,render",
          links: {
            demo: "https://diocesisdeciudadobregon.org/inicio",
            github:
              "https://github.com/DevCraftersEnterprise/diocesis-web-api",
          },
          featured: true,
        },
        {
          name: "Pastelería Magnolias",
          tagline: "Arquitectura digital para pastelerías multi-sucursal",
          description:
            "Sistema administrativo para una pastelería con varias sucursales que organiza todo el proceso de un pedido: desde que se toma en tienda, por redes sociales o por teléfono, pasando por su elaboración, hasta su entrega a domicilio o en eventos. Cada integrante del equipo (administradores, empleados, pasteleros y repartidores) tiene su propia vista y tareas. Incluye una tienda en línea sincronizada con el catálogo interno.",
          image: "/images/projects/magnolias.png",
          logo: "/images/logos/magnolias.png",
          tech: "nuxt,tailwind,nestjs,typeorm,postgresql,jest,vitest,githubactions,sonarqube,cloudinary,render",
          links: {
            demo: "https://pasteleriamagnolias.mx",
            github:
              "https://github.com/DevCraftersEnterprise/magnolias-backend",
          },
          featured: true,
        },
        /* Oculto de momento
        {
          name: "Sorteo Diócesis",
          tagline: "Registro y control de participantes para sorteos",
          description:
            "Aplicación web para el sorteo anual de la Diócesis: los participantes se registran desde su celular y el equipo administrativo da seguimiento a los pagos, exporta los registros y cierra el sorteo desde un panel. Reemplaza una app móvil anterior sin interrumpir la operación.",
          logo: "/images/logos/diocesis-logo.png",
          tech: "vue,typescript,tailwind,vite,nestjs,postgresql,firebase,cloudinary,vitest,jest,githubactions,netlify,render",
          links: {
            github:
              "https://github.com/DevCraftersEnterprise/sorteo-diocesis-backend",
          },
          featured: false,
        },
        */
        /* Ocultado: el cliente no aprobó el proyecto por el precio cotizado
        {
          name: "La Focacha Restaurant",
          tagline: "Gestión multi-sucursal para reservaciones",
          description:
            "Plataforma administrativa para negocio de restaurantería con control de acceso basado en roles y flujo estructurado de reservaciones",
          image: "/images/projects/focacha.png",
          logo: "/images/logos/focacha.png",
          tech: "angular,tailwind,rxjs,nestjs,postgresql,render",
          links: {
            github:
              "https://github.com/DevCraftersEnterprise/focacha-reservations-api",
          },
          featured: true,
        }
        */
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
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Te responderé pronto.",
        error: "Error al enviar. Intenta de nuevo.",
      },
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
    certifications: {
      title: "Certificaciones",
      description:
        "Compromiso continuo con el aprendizaje y la mejora profesional a través de cursos especializados.",
      inProgress: "En progreso",
      viewCertificate: "Ver certificado",
      stats: {
        total: "43",
        totalLabel: "Certificaciones totales",
        years: "4",
        yearsLabel: "Años de aprendizaje",
        learning: "∞",
        learningLabel: "Aprendizaje continuo",
      },
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      tech: "Technologies",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      available: "Available for new projects",
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description:
        "Specialized in building scalable web applications with <strong>Angular</strong>, <strong>Vue</strong>, <strong>NestJS</strong>, and <strong>TypeScript</strong>. Passionate about clean architecture, user experience, and automation.",
      contactBtn: "Contact Me",
      downloadCV: "Download CV",
      yearsExp: "5+ years exp.",
    },
    about: {
      title: "About Me",
      paragraph1:
        "I'm a <strong>Full Stack Developer</strong> with over 5 years of experience building scalable web applications. My focus is on creating efficient, maintainable, and user-centered solutions.",
      paragraph2:
        "I specialize in modern architectures using <strong>Angular</strong>, <strong>Vue/Nuxt</strong>, <strong>NestJS</strong>, and <strong>TypeScript</strong>, always applying SOLID principles and Clean Architecture. I also have experience incrementally migrating legacy systems (Django, Express, Flutter) to new stacks without disrupting production.",
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
          company: "Capgemini",
          role: "Angular Frontend Developer",
          period: "May 2026 - Present",
          location: "Aguascalientes, Ags.",
          highlights: [
            "Resolved accessibility (a11y) issues in the shared component library used across company projects",
            "Collaborated with the design team on the creation of new reusable components for the design system",
            "Improved adoption of existing components by documenting previously uncovered use cases",
          ]
        },
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
            "Restaurant platform where customers scan a QR code at their table and place their order over WhatsApp with an AI virtual waiter. The assistant understands text and voice messages, suggests menu options, and sends orders to the cashier in real time. Restaurants manage their branches, menus, and products from a web dashboard.",
          image: "/images/projects/botbite.png",
          logo: "/images/logos/botbite.png",
          tech: "angular,tailwind,rxjs,websocket,nestjs,typeorm,postgresql,redis,chatgpt,twilio,cloudinary,render",
          links: {
            demo: "https://botbite.com.mx",
            github: "https://github.com/DevCraftersEnterprise/botbite-waiter-app",
          },
          featured: true,
        },
        {
          name: "Diocese of Cd. Obregón",
          tagline: "Digital infrastructure for ecclesiastical administration",
          description:
            "Management platform for the Diocese that centralizes information on parishes, priests, news, and documents, along with its public website. Includes modules for the Biblical Institute and ISMA with role-based access, and a progressive modernization of the system without disrupting day-to-day operations.",
          image: "/images/projects/diocesis.png",
          logo: "/images/logos/diocesis-logo.png",
          tech: "angular,tailwind,rxjs,nestjs,typeorm,django,postgresql,jest,cloudinary,render",
          links: {
            demo: "https://diocesisdeciudadobregon.org/inicio",
            github:
              "https://github.com/DevCraftersEnterprise/diocesis-web-api",
          },
          featured: true,
        },
        {
          name: "Magnolias Bakery",
          tagline: "Multi-branch management for custom order workflows",
          description:
            "Administrative system for a multi-branch bakery that organizes the entire order process: from taking the order in store, over social media, or by phone, through production, to home or event delivery. Each team member (admins, employees, bakers, and drivers) has their own view and tasks. Includes an online store synced with the internal catalog.",
          image: "/images/projects/magnolias.png",
          logo: "/images/logos/magnolias.png",
          tech: "nuxt,tailwind,nestjs,typeorm,postgresql,jest,vitest,githubactions,sonarqube,cloudinary,render",
          links: {
            demo: "https://pasteleriamagnolias.mx",
            github:
              "https://github.com/DevCraftersEnterprise/magnolias-backend",
          },
          featured: true,
        },
        /* Hidden for now
        {
          name: "Diocese Raffle",
          tagline: "Participant registration and tracking for raffles",
          description:
            "Web app for the Diocese's annual raffle: participants sign up from their phone, and the admin team tracks payments, exports records, and closes the raffle from a dashboard. Replaces a previous mobile app without disrupting operations.",
          logo: "/images/logos/diocesis-logo.png",
          tech: "vue,typescript,tailwind,vite,nestjs,postgresql,firebase,cloudinary,vitest,jest,githubactions,netlify,render",
          links: {
            github:
              "https://github.com/DevCraftersEnterprise/sorteo-diocesis-backend",
          },
          featured: false,
        },
        */
        /* Hidden: the client didn't approve the project due to the quoted price
        {
          name: "La Focacha Restaurant",
          tagline: "Multi-branch management for reservations",
          description:
            "Administrative platform for restaurant businesses with role-based access, structured reservation flow",
          image: "/images/projects/focacha.png",
          logo: "/images/logos/focacha.png",
          tech: "angular,tailwind,rxjs,nestjs,postgresql,render",
          links: {
            github:
              "https://github.com/DevCraftersEnterprise/focacha-reservations-api",
          },
          featured: true,
        },
        */
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
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Error sending. Please try again.",
      },
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
    certifications: {
      title: "Certifications",
      description:
        "Continuous commitment to learning and professional growth through specialized courses.",
      inProgress: "In Progress",
      viewCertificate: "View certificate",
      stats: {
        total: "43",
        totalLabel: "Total certifications",
        years: "4",
        yearsLabel: "Years of learning",
        learning: "∞",
        learningLabel: "Continuous learning",
      },
    },
  },
};

export type Language = keyof typeof translations;

export function getTranslations(lang: Language) {
  return translations[lang] || translations.es;
}
