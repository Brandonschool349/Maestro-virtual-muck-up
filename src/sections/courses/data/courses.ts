export type CourseStage = 1 | 2 | 3;

export type CourseType = "Curso" | "Taller" | "Conferencia";

export interface Course {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  stage: CourseStage;
  category: string;
  type: CourseType;

  featured: boolean;
  clickable: boolean;

  duration: string;
  sessions?: number;
  hoursPerSession?: number;

  modality: string;
  participants: string;

  targetAudience: string;
  objective: string;
  requirements: string;

  skills: string[];

  image: string;
  icon: string;
  video: string;

  color: string;
}

export const courses: Course[] = [
  {
    id: "zoom",
    slug: "zoom",

    title: "Zoom",

    shortDescription:
      "Aprende a utilizar Zoom para impartir clases, reuniones y videoconferencias de forma profesional.",

    description:
      "Curso enfocado en el uso de la plataforma Zoom y herramientas digitales complementarias para mejorar la comunicación y la enseñanza.",

    stage: 1,

    category: "Videoconferencias",

    type: "Curso",

    featured: true,

    clickable: true,

    duration: "10 sesiones",

    sessions: 10,

    hoursPerSession: 2,

    modality: "Presencial u Online",

    participants: "10 - 15 participantes",

    targetAudience:
      "Docentes y personal administrativo de escuelas públicas.",

    objective:
      "Desarrollar habilidades para utilizar Zoom de manera eficiente en clases y reuniones digitales.",

    requirements:
      "Computadora con internet, libreta y pluma.",

    skills: [
      "Escucha activa",
      "Participación activa",
      "Toma de notas"
    ],

    image: "/images/courses/zoom.webp",
    icon: "/icons/zoom.webp",

    video: "",

    color: "#72d3ff"
  },

  {
    id: "excel",
    slug: "excel",

    title: "Microsoft Excel",

    shortDescription:
      "Aprende a organizar información y crear hojas de cálculo para facilitar el trabajo docente.",

    description:
      "Curso práctico para dominar las funciones principales de Microsoft Excel y desarrollar plantillas útiles para el aula.",

    stage: 1,

    category: "Productividad",

    type: "Curso",

    featured: true,

    clickable: true,

    duration: "5 sesiones",

    sessions: 5,

    hoursPerSession: 2,

    modality: "Presencial u Online",

    participants: "10 - 15 participantes",

    targetAudience:
      "Docentes y personal administrativo de escuelas públicas.",

    objective:
      "Aprender el manejo de Microsoft Excel para organizar y procesar información académica.",

    requirements:
      "Computadora con Microsoft Excel instalado, libreta y pluma.",

    skills: [
      "Escucha activa",
      "Participación activa",
      "Toma de notas"
    ],

    image: "/images/courses/excel.webp",
    icon: "/icons/excel.webp",

    video: "",

    color: "#00BF63"
  },

  {
    id: "powerpoint",
    slug: "powerpoint",

    title: "Microsoft PowerPoint",

    shortDescription:
      "Diseña presentaciones claras y atractivas para apoyar tus clases y exposiciones.",

    description:
      "Aprende a utilizar PowerPoint para crear material visual profesional y mejorar la comunicación en el aula.",

    stage: 1,

    category: "Presentaciones",

    type: "Curso",

    featured: false,

    clickable: true,

    duration: "5 sesiones",

    sessions: 5,

    hoursPerSession: 2,

    modality: "Presencial u Online",

    participants: "10 - 15 participantes",

    targetAudience:
      "Docentes y personal administrativo de escuelas públicas.",

    objective:
      "Crear presentaciones didácticas utilizando las herramientas principales de PowerPoint.",

    requirements:
      "Computadora con Microsoft PowerPoint instalado e internet deseable.",

    skills: [
      "Escucha activa",
      "Participación activa",
      "Toma de notas"
    ],

    image: "/images/courses/powerpoint.webp",

    icon: "/icons/powerpoint.webp",

    video: "",

    color: "#F97316"
  },

  {
    id: "canva",
    slug: "canva",

    title: "Canva",

    shortDescription:
      "Crea material visual moderno para clases, presentaciones y comunicación institucional.",

    description:
      "Aprende a utilizar Canva para diseñar contenido visual atractivo de forma sencilla.",

    stage: 1,

    category: "Diseño",

    type: "Curso",

    featured: true,

    clickable: true,

    duration: "5 sesiones",

    sessions: 5,

    hoursPerSession: 2,

    modality: "Presencial u Online",

    participants: "10 - 15 participantes",

    targetAudience:
      "Docentes y personal administrativo de escuelas públicas.",

    objective:
      "Diseñar recursos visuales y material didáctico utilizando Canva.",

    requirements:
      "Computadora con navegador web, internet, libreta y pluma.",

    skills: [
      "Escucha activa",
      "Participación activa",
      "Toma de notas"
    ],

    image: "/images/courses/canva.webp",
    icon: "/icons/canva.png",

    video: "",

    color: "#7a4aff"
  },

  {
    id: "google-classroom",
    slug: "google-classroom",

    title: "Google Classroom",

    shortDescription:
      "Organiza clases, tareas y recursos utilizando Google Classroom y Google for Education.",

    description:
      "Aprende a administrar clases virtuales y optimizar la enseñanza mediante el ecosistema de Google.",

    stage: 1,

    category: "Google Workspace",

    type: "Curso",

    featured: true,

    clickable: true,

    duration: "10 sesiones",

    sessions: 10,

    hoursPerSession: 2,

    modality: "Presencial u Online",

    participants: "10 - 15 participantes",

    targetAudience:
      "Docentes e instructores que desean mejorar la organización y dinámica de sus clases.",

    objective:
      "Dominar Google Classroom y las principales herramientas de Google for Education.",

    requirements:
      "Computadora con navegador web, internet, libreta y pluma.",

    skills: [
      "Escucha activa",
      "Participación activa",
      "Toma de notas"
    ],

    image: "/images/courses/google-classroom.webp",
    icon: "/icons/classroom.webp",

    video: "",

    color: "#ffd04f"
  }
];