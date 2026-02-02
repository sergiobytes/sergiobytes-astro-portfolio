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
    },
    projects: {
      title: "Proyectos",
      demo: "Ver Demo",
      github: "GitHub",
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
        testing: "Testing & Tools",
        packages: "Package & State Management",
        others: "Others",
      },
    },
    contact: {
      title: "Trabajemos juntos",
      description: "¿Tienes un proyecto en mente? Me encantaría escucharte.",
      email: "Email",
      cta: "¿Listo para comenzar tu proyecto?",
      ctaDescription:
        "Contáctame y trabajemos juntos para hacer realidad tu visión.",
      ctaButton: "Envíame un email",
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
    },
    projects: {
      title: "Projects",
      demo: "View Demo",
      github: "GitHub",
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
        testing: "Testing & Tools",
        packages: "Package & State Management",
        others: "Others",
      },
    },
    contact: {
      title: "Let's Work Together",
      description: "Have a project in mind? I'd love to hear from you.",
      email: "Email",
      cta: "Ready to start your project?",
      ctaDescription:
        "Contact me and let's work together to bring your vision to life.",
      ctaButton: "Send me an email",
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
