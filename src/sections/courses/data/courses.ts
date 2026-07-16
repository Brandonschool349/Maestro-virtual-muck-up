export type CourseItem = {
  title: string;
  description: string;
  category: string;
  level: string;
};

export const courses: CourseItem[] = [
  {
    title: 'Introducción a la Inteligencia Artificial',
    description: 'Aprende los fundamentos de IA, modelos predictivos y casos de uso reales.',
    category: 'Artificial Intelligence',
    level: 'Principiante',
  },
  {
    title: 'Desarrollo Web con Next.js',
    description: 'Construye experiencias modernas con React, TypeScript y arquitecturas escalables.',
    category: 'Software Development',
    level: 'Intermedio',
  },
  {
    title: 'Fundamentos de Ciberseguridad',
    description: 'Comprende amenazas, riesgos y buenas prácticas para proteger aplicaciones y datos.',
    category: 'Cybersecurity',
    level: 'Principiante',
  },
  {
    title: 'Diseño UX para Productos Educativos',
    description: 'Descubre cómo diseñar experiencias intuitivas y accesibles para el aprendizaje.',
    category: 'Design',
    level: 'Intermedio',
  },
  {
    title: 'Análisis de Datos con Python',
    description: 'Explora limpieza, visualización y modelos básicos para interpretar información.',
    category: 'Data',
    level: 'Intermedio',
  },
  {
    title: 'Arquitectura de Software y APIs',
    description: 'Domina patrones de diseño y construcción de servicios backend robustos.',
    category: 'Software Development',
    level: 'Avanzado',
  },
];
