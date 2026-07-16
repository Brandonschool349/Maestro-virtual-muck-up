"use client";

import {
  Smartphone,
  Palette,
  FileText,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";


const learningPaths = [
  {
    icon: Smartphone,
    title: "Comunicación Digital",
    description:
      "Aprende a usar WhatsApp, correo y herramientas para conectarte.",
    gradient:
      "from-primary to-blue-500",
  },
  {
    icon: Palette,
    title: "Creatividad Digital",
    description:
      "Crea diseños, presentaciones y proyectos con herramientas fáciles.",
    gradient:
      "from-accent to-purple-500",
  },
  {
    icon: FileText,
    title: "Herramientas del Día a Día",
    description:
      "Aprende Word, Excel, documentos y herramientas útiles.",
    gradient:
      "from-[#FF3131] to-red-400",
  },
  {
    icon: Globe,
    title: "Vida Digital",
    description:
      "Explora internet, seguridad y tecnología paso a paso.",
    gradient:
      "from-[#00BF63] to-emerald-500",
  },
];


const tools = [
  {
    name: "WhatsApp",
    color:
      "bg-[#00BF63]/15 border-[#00BF63]/30 text-[#008A47]",
  },
  {
    name: "Canva",
    color:
      "bg-[#FF3131]/15 border-[#FF3131]/30 text-[#D82020]",
  },
  {
    name: "Word",
    color:
      "bg-[#1800AD]/15 border-[#1800AD]/30 text-[#1800AD]",
  },
  {
    name: "Excel",
    color:
      "bg-[#FFB000]/20 border-[#FFB000]/40 text-[#B87900]",
  },
];


export default function CoursesHero() {

return (

<section
className="
relative
overflow-hidden
min-h-screen
flex
items-center
bg-bgLight
dark:bg-bgDark
transition-colors
duration-300
"
>


{/* BACKGROUND */}

<div
className="
absolute
inset-0
bg-gradient-to-b
from-primary/10
via-bgLight
to-bgLight
dark:from-primary/20
dark:via-bgDark
dark:to-bgDark
"
/>



<div
className="
absolute
-top-[350px]
left-1/2
-translate-x-1/2
w-[1000px]
h-[1000px]
rounded-full
bg-primary/20
blur-[180px]
animate-pulse-slower
"
/>



<div
className="
absolute
top-20
right-[-300px]
w-[700px]
h-[700px]
rounded-full
bg-yellow-400/15
blur-[170px]
"
/>



<div
className="
absolute
bottom-[-550px]
left-[-300px]
w-[900px]
h-[900px]
rounded-full
bg-green-400/10
blur-[300px]
"
/>



{/* GRID */}

<div
className="
absolute
inset-0
opacity-[0.035]
bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
bg-[size:48px_48px]
"
/>



{/* PARTICLES */}

<div className="absolute inset-0 pointer-events-none">


<div
className="
absolute
top-[20%]
left-[12%]
w-2
h-2
rounded-full
bg-blue-400
shadow-[0_0_20px_rgba(59,130,246,.8)]
"
/>


<div
className="
absolute
top-[35%]
right-[15%]
w-2
h-2
rounded-full
bg-green-400
shadow-[0_0_20px_rgba(52,211,153,.8)]
"
/>


<div
className="
absolute
bottom-[35%]
left-[20%]
w-2
h-2
rounded-full
bg-yellow-400
"
/>


<div
className="
absolute
bottom-[30%]
right-[25%]
w-2
h-2
rounded-full
bg-red-400
"
/>


</div>



{/* SMOOTH END */}

<div
className="
absolute
bottom-0
left-0
right-0
h-[420px]
bg-gradient-to-b
from-transparent
via-bgLight/80
to-bgLight
dark:via-bgDark/80
dark:to-bgDark
"
/>


<div
className="
absolute
bottom-0
left-0
right-0
h-32
bg-gradient-to-b
from-transparent
to-bgLight
dark:to-bgDark
"
/>




<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
pt-24
pb-20
w-full
"
>


<div
className="
max-w-5xl
mx-auto
text-center
animate-fadeUp
"
>
    <div
className="
inline-flex
items-center
gap-2
rounded-full
bg-primary/10
border
border-primary/20
px-5
py-2
text-sm
font-medium
text-primary
mb-8
backdrop-blur-md
"
>

<Sparkles size={16}/>

Aprende a tu ritmo

</div>





<h1
className="
text-6xl
md:text-8xl
font-heading
font-bold
leading-[0.95]
tracking-tight
"
>

Aprende tecnología


<span
className="
block
bg-gradient-to-r
from-blue-700
via-cyan-500
to-blue-600
bg-clip-text
text-transparent
"
>

de forma sencilla

</span>


</h1>





<p
className="
mt-8
text-lg
md:text-xl
text-muted-foreground
max-w-2xl
mx-auto
"
>

Aprende herramientas digitales paso a paso
para comunicarte, crear y disfrutar la tecnología.

</p>






{/* TOOLS */}

<div
className="
mt-10
flex
justify-center
flex-wrap
gap-4
"
>

{
tools.map(tool => (

<span
key={tool.name}
className={`
rounded-full
border
px-5
py-2.5
text-sm
font-semibold
backdrop-blur-md
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-md
${tool.color}
`}
>

{tool.name}

</span>

))
}

</div>



</div>





{/* FEATURED COURSES */}

<div
className="
mt-14
mb-6
text-center
"
>

<h2
className="
text-xl
md:text-2xl
font-semibold
text-text-primary
"
>
Cursos destacados
</h2>


</div>





{/* CARDS */}

<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-8
max-w-5xl
mx-auto
animate-fadeUp
[animation-delay:200ms]
"
>


{
learningPaths.map((item)=>{

const Icon = item.icon;


return (

<div
key={item.title}
className="
group
relative
overflow-hidden
rounded-3xl
bg-white/80
dark:bg-white/5
backdrop-blur-xl
border
border-white/40
dark:border-white/10
p-8
shadow-xl
hover:-translate-y-3
hover:shadow-2xl
transition-all
duration-500
"
>



<div
className={`
absolute
inset-0
opacity-0
group-hover:opacity-25
bg-gradient-to-br
${item.gradient}
transition
duration-500
`}
/>





<div className="relative">



<div
className="
w-14
h-14
rounded-2xl
bg-primary/10
flex
items-center
justify-center
mb-6
group-hover:scale-110
transition-transform
"
>

<Icon
size={30}
className="text-primary"
/>

</div>





<h3
className="
text-2xl
font-bold
mb-3
"
>

{item.title}

</h3>




<p
className="
text-muted-foreground
mb-6
"
>

{item.description}

</p>





<button
className="
flex
items-center
gap-2
font-semibold
transition-colors
group-hover:text-primary
"
>

Explorar

<ArrowRight size={18}/>

</button>



</div>


</div>


)


})
}



</div>



</div>


</section>

);

}