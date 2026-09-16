// ============================================================
// Datos centralizados del portfolio de Mariano Agustín Argüello
// Edita este archivo para actualizar la información del portfolio
// ============================================================

export const personalInfo = {
  name: "Mariano Agustín Argüello",
  shortName: "Mariano",
  role: "Estudiante de Producción Digital",
  roles: [
    "Productor Digital",
    "Emprendedor",
  ],
  location: "Berazategui, Buenos Aires",
  email: "Mariaanoarg@gmail.com",
  phone: "+54 9 11 6522-6293",
  bio: "Soy estudiante de Tecnicatura Universitaria en Producción Digital en la Universidad Nacional de Quilmes, me oriento en la creación y desarrollo de contenidos audiovisuales y proyectos digitales. Combino una mirada creativa y estratégica con responsabilidad, organización y capacidad para aprender rápidamente nuevas herramientas. Me interesa formar parte de equipos de producción, comunicación y contenidos donde pueda transformar ideas en proyectos concretos, aportar soluciones y seguir desarrollando mis habilidades profesionales. Busco una oportunidad laboral que me permita crecer dentro del sector digital y ayudar desde mi conocimiento, creatividad y compromiso.",
  cv: "/Mariano Arguello CV 2026.pdf",
  socials: {
    instagram: "https://www.instagram.com/molokai.d?igsh=N3NmaGJzcjdoamZs",
  },
};

export const education = [
  {
    title: "Tecnicatura Universitaria en Producción Digital",
    institution: "Universidad",
    period: "2023 – Actualidad",
    status: "Cursando último año",
    icon: "🎓",
  },
  {
    title: "Photoshop e Illustrator",
    institution: "Coder House",
    period: "2022",
    status: "Finalizado",
    icon: "🎨",
  },
  {
    title: "Portugués",
    institution: 'Complejo Cultural "El Patio"',
    period: "Hasta 2020",
    status: "Finalizado",
    icon: "🌐",
  },
];

export const skills = [
  // Diseño
  { name: "Illustrator", level: 65, category: "Diseño" },
  { name: "Photoshop", level: 65, category: "Diseño" },
  { name: "Canva", level: 80, category: "Diseño" },

  // Contenido
  { name: "CapCut", level: 60, category: "Contenido" },

  // Producción
  { name: "Diseño Digital", level: 70, category: "Producción" },
  { name: "Sublimación", level: 80, category: "Producción" },
  { name: "Gestión de Marca", level: 65, category: "Producción" },
];

export const skillCategories = ["Diseño", "Contenido", "Producción"];

export const experience = [
  {
    title: "Dueño & Diseñador",
    company: "Molokai — Taller de Estampados y Sublimación",
    period: "2023 – Actualidad",
    description: [
      "Creación de diseños digitales y producción de estampas.",
      "Manejo de proveedores y relaciones comerciales.",
      "Creación y gestión de contenido para la marca.",
      "Desarrollo de identidad visual y estrategia de marca.",
    ],
    icon: "👕",
    current: true,
  },
];

export const projects = [
  {
    id: 1,
    title: "Molokai — Marca Propia",
    description:
      "Taller de estampados y sublimación. Gestión integral de la marca: diseño, producción y comunicación digital.",
    tags: ["Diseño Gráfico", "Branding", "Redes Sociales", "Producción"],
    demo: "#",
    image: "/molokai surf/molokai.1.jpg",
    objectFit: "object-contain bg-[#0a0a0f]",
    gallery: [
      "/molokai surf/molokai.1.jpg",
      "/molokai surf/molokainuev.jpg",
      "/molokai surf/33.jpg",
      "/molokai surf/4.png",
      "/molokai surf/6.png",
      "/molokai surf/SURF RULE.jpg",
      "/molokai surf/SURF2.jpg",
      "/molokai surf/SURFESRS RULE.jpg",
      "/molokai surf/buzochocolate.jpg",
      "/molokai surf/gris.jpg",
      "/molokai surf/surf.jpg",
      "/molokai surf/surfbig.jpg",
      "/molokai surf/_MG_4995.JPG",
      "/molokai surf/_MG_4998.JPG",
      "/molokai surf/_MG_5012.JPG",
      "/molokai surf/_MG_5017.JPG",
    ],
    repo: "#",
    gradient: "from-indigo-500 to-purple-600",
    emoji: "👕",
  },
  {
    id: 2,
    title: "Creación de piezas gráficas",
    description:
      "Creación de piezas gráficas y contenido visual para redes sociales usando Illustrator y Photoshop.",
    tags: ["Illustrator", "Photoshop", "Contenido", "RRSS"],
    demo: "#",
    image: "/creacion de piezas  graficas/m3.png",
    gallery: [
      "/creacion de piezas  graficas/m3.png",
      "/creacion de piezas  graficas/Muestras graficas.jpg",
      "/creacion de piezas  graficas/Amelie.jpg",
      "/creacion de piezas  graficas/LOGOS.jpg",
      "/creacion de piezas  graficas/Piezagrafica6.jpeg",
      "/creacion de piezas  graficas/Piezagrafica7.jpeg",
    ],
    repo: "#",
    gradient: "from-emerald-500 to-teal-600",
    emoji: "🎨",
  },
  {
    id: 3,
    title: "Proyectos Audiovisuales",
    description:
      "Proyectos realizados durante la Tecnicatura Universitaria en Producción Digital.",
    tags: ["Producción Digital", "Diseño", "Académico"],
    demo: "https://drive.google.com/drive/folders/1qJA4zgjwaO5LLrdkNth7czNns5AM12Hb?usp=drive_link",
    demoLabel: "Visualizar",
    image: "/ProyectosAudiovisuales.jpg",
    repo: "#",
    gradient: "from-violet-500 to-indigo-600",
    emoji: "📚",
  },
];

export const stats = [
  { label: "Años estudiando", value: "2+", icon: "📚" },
  { label: "Proyectos realizados", value: "5+", icon: "🚀" },
  { label: "Skills digitales", value: "9+", icon: "⚡" },
  { label: "Emprendimiento activo", value: "1", icon: "💼" },
];

export const videos = [
  {
    id: 1,
    title: "Entrevistas",
    description:
      "Entrevistas donde trabajé detrás de cámara.",
    thumbnail: "/_MG_4958.JPG",
    tags: ["Entrevista", "Producción Audiovisual"],
    interviews: [
      {
        title: "Gauchos of the Pampa",
        role: "Cámara 3",
        url: "https://www.youtube.com/watch?v=8OrNqeL2-1M",
      },
      {
        title: "Documental Noemí UNQ",
        role: "Cámara",
        url: "https://www.youtube.com/watch?v=ZsSt5P5BnTE",
      },
    ],
  },
];
