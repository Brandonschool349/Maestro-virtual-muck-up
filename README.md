# Maestro Virtual A.C. - Documentación Frontend

## 🚀 Sobre el Proyecto
Landing page desarrollada para Maestro Virtual A.C., una iniciativa de formación accesible en habilidades digitales orientada al desarrollo de ciudadanía digital[cite: 3]. Este proyecto busca cerrar la brecha digital impulsando la inclusión real y conectando a las personas con nuevas oportunidades[cite: 3].

## 🛠️ Stack Tecnológico
* **Framework principal:** Next.js (App Router)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS
* **Arquitectura UI:** React (Componentes Funcionales Modulares)

## 📂 Decisiones Técnicas y Aprendizajes

### 1. Arquitectura Basada en Componentes
El proyecto sigue el principio de separación de responsabilidades dividiendo la interfaz en piezas pequeñas, independientes y reutilizables.
* **Implementación:** La vista principal no es un bloque monolítico de código. Se creó un contenedor `HomeSection.tsx` que actúa como orquestador, importando módulos específicos como `<Hero />`, `<AboutUs />`, `<TargetAudience />` e `<Impact />`. Esto permite escalar el proyecto y modificar secciones sin riesgo de romper el layout principal.

### 2. Utility-First CSS (Tailwind CSS)
En lugar de depender de hojas de estilo globales que pueden causar conflictos, el diseño se construye directamente en el *markup* utilizando clases utilitarias.
* **Implementación:** Las tarjetas de la sección de audiencia (enfocadas en docentes de educación pública, adultos mayores y personas con discapacidad[cite: 3]) se estilizan directamente con clases como `bg-white`, `rounded-xl` y `shadow-md`. Esto acelera el desarrollo y garantiza un sistema de diseño consistente.

### 3. Estructura y Enrutamiento (Next.js App Router)
El flujo de navegación aprovecha el sistema de *routing* basado en el sistema de archivos de Next.js.
* **Implementación:** El archivo `src/app/page.tsx` funciona exclusivamente como el *entry point* de la ruta raíz (`/`). Su única responsabilidad es renderizar el componente de la sección, aislando completamente la lógica de la ruta de la lógica visual.

### 4. Tipado Estático (TypeScript)
Se integró TypeScript para añadir una capa de seguridad y predictibilidad al código base, definiendo "contratos" estrictos para los datos.
* **Implementación:** Los componentes dinámicos (como las tarjetas de características o testimonios) utilizan interfaces de TypeScript para asegurar que siempre reciban las propiedades correctas (ej. un `title` como `string` y un `icon` válido). Esto reduce drásticamente los errores en tiempo de ejecución.