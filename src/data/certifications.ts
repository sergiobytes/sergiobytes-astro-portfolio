export interface Certification {
  id: string;
  title: string;
  year: number;
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
    icon: "/images/logos/bun.svg",
  },
  {
    id: "dotnet-testing",
    title: ".NET: Pruebas completas para minimal API",
    year: 2026,
    inProgress: true,
    icon: "/images/logos/dotnet-test.svg",
  },
  {
    id: "dotnet-backend",
    title: ".NET Backend: .NET Core, SQL Server y seguridad JWT",
    year: 2026,
    url: "https://cursos.devtalles.com/certificates/u0wnjsn5pg",
    icon: "/images/logos/dotnet.svg",
  },
  {
    id: "csharp-devtalles",
    title: "C#: Empieza tu camino en el lenguaje",
    year: 2026,
    url: "https://cursos.devtalles.com/certificates/bhak4hybdh",
    icon: "/images/logos/csharp-devtalles.svg",
  },
  {
    id: "nuxt",
    title: "Nuxt: El marco de trabajo web progresivo (Nuxt 4+)",
    year: 2026,
    url: "https://cursos.devtalles.com/certificates/v9et7jlbyj",
    icon: "/images/logos/nuxt.svg",
  },
  // 2025
  {
    id: "tanstack-query",
    title: "TanStack Query - Un poderoso gestor de estado asíncrono",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/8wokab8mnd",
    icon: "/images/logos/tanstack.svg",
  },
  {
    id: "tailwind",
    title: "TailwindCSS: Para desarrolladores de software",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/mun0egmmzq",
    icon: "/images/logos/tailwind.svg",
  },
  {
    id: "design-patterns",
    title: "Patrones de Diseño: Soluciones prácticas y eficientes",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/9wtqpsi6nt",
    icon: "/images/logos/patrones.svg",
  },
  {
    id: "flutter-gemini",
    title: "Flutter + Gemini: Aplicaciones con inteligencia artificial",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/j1z4owa1bf",
    icon: "/images/logos/flutter-gemini.svg",
  },
  {
    id: "nest-testing",
    title: "NestJS + Testing: Pruebas unitarias y end to end (e2e)",
    year: 2025,
    url: "https://cursos.devtalles.com/certificates/4uqkvuwbrp",
    icon: "/images/logos/nest-testing.svg",
  },
  // 2024
  {
    id: "vue",
    title: "Vue.js - de Cero a Experto: Composition API",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/ambsctervm",
    icon: "/images/logos/vue.svg",
  },
  {
    id: "flutter-advanced",
    title: "Flutter Avanzado: Lleva tu conocimiento al siguiente nivel",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/tavnb6l34a",
    icon: "/images/logos/flutter-avanzado.svg",
  },
  {
    id: "angular-pro",
    title: "Angular Pro: Lleva tus bases al siguiente nivel",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/pmar95bhf9",
    icon: "/images/logos/angular-pro.svg",
  },
  {
    id: "openai-angular-nest",
    title: "OpenAI: Ejercicios y asistentes con Angular + NestJS",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/dadl3s5o1e",
    icon: "/images/logos/openai-angular-nest.svg",
  },
  {
    id: "angular",
    title: "Angular de cero a experto",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/wujmo3p24o",
    icon: "/images/logos/angular.svg",
  },
  {
    id: "nest-graphql",
    title: "Nest + GraphQL: Evoluciona tus APIs",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/rhoio7rjii",
    icon: "/images/logos/nest-graphql.svg",
  },
  {
    id: "nest-reports",
    title: "NestJS + Reportes: Genera PDFs desde Node",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/qxpu4wdhfo",
    icon: "/images/logos/nest-reportes.svg",
  },
  {
    id: "flutter-intermediate",
    title: "Flutter Intermedio: Diseños profesionales y animaciones",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/tzsxfglovi",
    icon: "/images/logos/flutter-intermedio.svg",
  },
  {
    id: "docker",
    title: "Docker - Guía práctica de uso para desarrolladores",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/54qgewgtwu",
    icon: "/images/logos/docker.svg",
  },
  {
    id: "flutter-native",
    title: "Flutter Móvil: Recursos Nativos - Nivel Intermedio",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/nkkxcrstqv",
    icon: "/images/logos/flutter-nativos.svg",
  },
  {
    id: "rxjs",
    title: "ReactiveX - RxJs: De cero hasta los detalles",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/ajeqyvap3g",
    icon: "/images/logos/reactive-x.svg",
  },
  {
    id: "csharp-udemy",
    title: "Aprende Programación Backend en C# .NET",
    year: 2024,
    url: "https://www.udemy.com/certificate/UC-3c19d245-df15-47ee-afb8-f1c860eaaedb/",
    icon: "/images/logos/csharp-udemy.svg",
  },
  {
    id: "nest-microservices",
    title: "NestJS + Microservicios: Aplicaciones escalables y modulares",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/irmcjis4tb",
    icon: "/images/logos/nest-micro.svg",
  },
  {
    id: "riverpod",
    title: "Mini-Curso: Riverpod providers con anotaciones",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/ngihoc8hka",
    icon: "/images/logos/riverpod.svg",
  },
  {
    id: "flutter",
    title: "Flutter - Móvil: De cero a experto",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/xxaor6d2h2",
    icon: "/images/logos/flutter.svg",
  },
  {
    id: "nest",
    title: "Nest: Desarrollo backend escalable con Node",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/icfl1m2jwl",
    icon: "/images/logos/nest.svg",
  },
  {
    id: "node-clean",
    title: "Node - Autenticación Rest con Clean Architecture",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/ugqjzeblat",
    icon: "/images/logos/node-clean.svg",
  },
  {
    id: "node",
    title: "Node.Js: De cero a experto",
    year: 2024,
    url: "https://cursos.devtalles.com/certificates/3kj05k91sx",
    icon: "/images/logos/node.svg",
  },
  // 2023
  {
    id: "sql",
    title: "SQL de cero: Tu guía práctica con PostgreSQL",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/m5ez6kwi3a",
    icon: "/images/logos/sql.svg",
  },
  {
    id: "solid",
    title: "Principios SOLID y Clean Code",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/s17vg774yc",
    icon: "/images/logos/solid.svg",
  },
  {
    id: "typescript",
    title: "TypeScript: Tu completa guía y manual de mano",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/btiignzhpb",
    icon: "/images/logos/typescript.svg",
  },
  {
    id: "javascript",
    title: "JavaScript Moderno: Guía para dominar el lenguaje",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/kexmuijhyf",
    icon: "/images/logos/javascript.svg",
  },
  {
    id: "git",
    title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
    year: 2023,
    url: "https://cursos.devtalles.com/certificates/bgyevufaap",
    icon: "/images/logos/git.svg",
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
