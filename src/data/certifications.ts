export interface Certification {
  id: string;
  title: string;
  year: number;
  date?: string;
  url?: string;
  inProgress?: boolean;
  icon: string;
}

export const certifications: Certification[] = [
  // 2026
  {
    id: "angular-sockets-bun",
    title: "Angular + Sockets: Aplicaciones en tiempo real con Bun",
    year: 2026,
    inProgress: true,
    icon: "https://skills.syvixor.com/api/icons?i=websocket",
  },
  {
    id: "dotnet-testing",
    title: ".NET: Pruebas completas para minimal API",
    year: 2026,
    inProgress: true,
    icon: "https://skills.syvixor.com/api/icons?i=dotnet",
  },
  {
    id: "dotnet-backend",
    title: ".NET Backend: .NET Core, SQL Server y seguridad JWT",
    year: 2026,
    url: "https://cursos.devtalles.com/certificates/u0wnjsn5pg",
    icon: "https://skills.syvixor.com/api/icons?i=dotnet",
    date: "2026-01-19",
  },
  {
    id: "csharp-devtalles",
    title: "C#: Empieza tu camino en el lenguaje",
    year: 2026,
    url: "https://cursos.devtalles.com/certificates/bhak4hybdh",
    icon: "https://skills.syvixor.com/api/icons?i=csharp",
    date: "2026-01-05",
  },
  {
    id: "nuxt",
    title: "Nuxt: El marco de trabajo web progresivo (Nuxt 4+)",
    year: 2026,
    url: "https://cursos.devtalles.com/certificates/v9et7jlbyj",
    icon: "https://skills.syvixor.com/api/icons?i=nuxt",
    date: "2026-01-03",
  },
  // 2025
  {
    id: "tanstack-query",
    title: "TanStack Query - Un poderoso gestor de estado asíncrono",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/8wokab8mnd",
    icon: "https://skills.syvixor.com/api/icons?i=tanstack",
    date: "2025-12-29",
  },
  {
    id: "tailwind",
    title: "TailwindCSS: Para desarrolladores de software",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/mun0egmmzq",
    icon: "https://skills.syvixor.com/api/icons?i=tailwind",
    date: "2025-12-26",
  },
  {
    id: "design-patterns",
    title: "Patrones de Diseño: Soluciones prácticas y eficientes",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/9wtqpsi6nt",
    icon: "https://skills.syvixor.com/api/icons?i=deno",
    date: "2025-10-03",
  },
  {
    id: "flutter-gemini",
    title: "Flutter + Gemini: Aplicaciones con inteligencia artificial",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/j1z4owa1bf",
    icon: "https://skills.syvixor.com/api/icons?i=gemini",
    date: "2025-06-10",
  },
  {
    id: "nest-testing",
    title: "NestJS + Testing: Pruebas unitarias y end to end (e2e)",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/4uqkvuwbrp",
    icon: "https://skills.syvixor.com/api/icons?i=jest",
    date: "2025-06-05",
  },
  // 2024
  {
    id: "vue",
    title: "Vue.js - de Cero a Experto: Composition API",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/ambsctervm",
    icon: "https://skills.syvixor.com/api/icons?i=vuejs",
    date: "2024-10-30",
  },
  {
    id: "flutter-advanced",
    title: "Flutter Avanzado: Lleva tu conocimiento al siguiente nivel",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/tavnb6l34a",
    icon: "https://skills.syvixor.com/api/icons?i=flutter",
    date: "2024-10-16",
  },
  {
    id: "angular-pro",
    title: "Angular Pro: Lleva tus bases al siguiente nivel",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/pmar95bhf9",
    icon: "https://skills.syvixor.com/api/icons?i=angular",
    date: "2024-10-08",
  },
  {
    id: "openai-angular-nest",
    title: "OpenAI: Ejercicios y asistentes con Angular + NestJS",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/dadl3s5o1e",
    icon: "https://skills.syvixor.com/api/icons?i=chatgpt",
    date: "2024-08-27",
  },
  {
    id: "angular",
    title: "Angular de cero a experto",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/wujmo3p24o",
    icon: "https://skills.syvixor.com/api/icons?i=angular",
    date: "2024-08-19",
  },
  {
    id: "nest-graphql",
    title: "Nest + GraphQL: Evoluciona tus APIs",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/rhoio7rjii",
    icon: "https://skills.syvixor.com/api/icons?i=graphql",
    date: "2024-08-08",
  },
  {
    id: "nest-reports",
    title: "NestJS + Reportes: Genera PDFs desde Node",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/qxpu4wdhfo",
    icon: "https://skills.syvixor.com/api/icons?i=nestjs",
    date: "2024-07-29",
  },
  {
    id: "flutter-intermediate",
    title: "Flutter Intermedio: Diseños profesionales y animaciones",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/tzsxfglovi",
    icon: "https://skills.syvixor.com/api/icons?i=flutter",
    date: "2024-05-29",
  },
  {
    id: "docker",
    title: "Docker - Guía práctica de uso para desarrolladores",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/54qgewgtwu",
    icon: "https://skills.syvixor.com/api/icons?i=docker",
    date: "2024-05-12",
  },
  {
    id: "flutter-native",
    title: "Flutter Móvil: Recursos Nativos - Nivel Intermedio",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/nkkxcrstqv",
    icon: "https://skills.syvixor.com/api/icons?i=flutter",
    date: "2024-05-09",
  },
  {
    id: "rxjs",
    title: "ReactiveX - RxJs: De cero hasta los detalles",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/ajeqyvap3g",
    icon: "https://skills.syvixor.com/api/icons?i=rxjs",
    date: "2024-05-06",
  },
  {
    id: "csharp-udemy",
    title: "Aprende Programación Backend en C# .NET",
    year: 2024,
    url: "https://www.udemy.com/certificate/UC-3c19d245-df15-47ee-afb8-f1c860eaaedb/",
    icon: "https://skills.syvixor.com/api/icons?i=csharp",
    date: "2024-05-02",
  },
  {
    id: "nest-microservices",
    title: "NestJS + Microservicios: Aplicaciones escalables y modulares",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/irmcjis4tb",
    icon: "https://skills.syvixor.com/api/icons?i=nestjs",
    date: "2024-04-15",
  },
  {
    id: "riverpod",
    title: "Mini-Curso: Riverpod providers con anotaciones",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/ngihoc8hka",
    icon: "https://skills.syvixor.com/api/icons?i=riverpod",
    date: "2024-04-11",
  },
  {
    id: "flutter",
    title: "Flutter - Móvil: De cero a experto",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/xxaor6d2h2",
    icon: "https://skills.syvixor.com/api/icons?i=flutter",
    date: "2024-02-29",
  },
  {
    id: "nest",
    title: "Nest: Desarrollo backend escalable con Node",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/icfl1m2jwl",
    icon: "https://skills.syvixor.com/api/icons?i=nestjs",
    date: "2024-02-21",
  },
  {
    id: "node-clean",
    title: "Node - Autenticación Rest con Clean Architecture",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/ugqjzeblat",
    icon: "https://skills.syvixor.com/api/icons?i=nodejs",
    date: "2024-01-26",
  },
  {
    id: "node",
    title: "Node.Js: De cero a experto",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/3kj05k91sx",
    icon: "https://skills.syvixor.com/api/icons?i=nodejs",
    date: "2024-01-24",
  },
  // 2023
  {
    id: "sql",
    title: "SQL de cero: Tu guía práctica con PostgreSQL",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/m5ez6kwi3a",
    icon: "https://skills.syvixor.com/api/icons?i=postgresql",
    date: "2023-12-13",
  },
  {
    id: "solid",
    title: "Principios SOLID y Clean Code",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/s17vg774yc",
    icon: "https://skills.syvixor.com/api/icons?i=visualstudiocode",
    date: "2023-11-28",
  },
  {
    id: "typescript",
    title: "TypeScript: Tu completa guía y manual de mano",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/btiignzhpb",
    icon: "https://skills.syvixor.com/api/icons?i=typescript",
    date: "2023-11-26",
  },
  {
    id: "javascript",
    title: "JavaScript Moderno: Guía para dominar el lenguaje",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/kexmuijhyf",
    icon: "https://skills.syvixor.com/api/icons?i=javascript",
    date: "2023-11-20",
  },
  {
    id: "git",
    title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/bgyevufaap",
    icon: "https://skills.syvixor.com/api/icons?i=git",
    date: "2023-11-02",
  },
];

// Agrupar certificaciones por año
export const getCertificationsByYear = () => {
  const grouped = certifications.reduce(
    (acc, cert) => {
      if (!acc[cert.year]) {
        acc[cert.year] = [];
      }
      acc[cert.year].push(cert);
      return acc;
    },
    {} as Record<number, Certification[]>,
  );

  // Ordenar años descendente (2026 -> 2023)
  const sortedEntries = Object.entries(grouped).sort(
    ([a], [b]) => Number(b) - Number(a),
  );

  return sortedEntries;
};
