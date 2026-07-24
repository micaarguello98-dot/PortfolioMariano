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
  bio: "Soy estudiante de la Tecnicatura Universitaria en Producción Digital, una persona responsable y dinámica con una sólida base de conocimientos. Busco activamente oportunidades para aplicar mis habilidades en un ambiente laboral colaborativo, contribuyendo al desarrollo de proyectos y adquiriendo experiencia práctica en producción digital y negocios digitales.",
  cv: "/Mariano Arguello CV 2025.pdf",
  socials: {
    instagram: "https://www.instagram.com/molokai.d?igsh=N3NmaGJzcjdoamZs",
  },
};

export const education = [
  {
    title: "Tecnicatura Universitaria en Producción Digital",
    institution: "Universidad",
    period: "2023 – Actualidad",
    status: "Cursando 2do año",
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
    image: "/Logo.1.jpeg",
    objectFit: "object-contain bg-black p-4",
    gallery: [
      "/Imagen1.jpeg",
      "/Imagen2.jpeg",
      "/Imagen3.jpeg",
      "/Imagen4.jpeg",
      "/Imagen5.jpeg",
      "/Imagen6.jpeg",
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
    image: "/Piezagrafica9.jpeg",
    gallery: [
      "/Piezagrafica1.jpeg",
      "/Piezagrafica2.jpeg",
      "/Piezagrafica3.jpeg",
      "/Piezagrafica4.jpeg",
      "/Piezagrafica5.jpeg",
      "/Piezagrafica6.jpeg",
      "/Piezagrafica7.jpeg",
      "/Piezagrafica8.jpeg",
      "/Piezagrafica9.jpeg",
      "/Piezagrafica10.jpeg",
      "/Piezagrafica11.jpeg",
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
