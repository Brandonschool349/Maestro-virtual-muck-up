type CourseBackgroundProps = {
  pattern: "grid" | "waves" | "shapes" | "cards" | "slides";
  color: string;
};

export default function CourseBackground({
  pattern,
  color,
}: CourseBackgroundProps) {


switch(pattern){

case "grid":

return(

<div
className="
absolute
inset-0
opacity-[0.24]
pointer-events-none
"
>


<div
className="
absolute
inset-[-20px]
animate-excelMove
"
style={{

backgroundImage:`

linear-gradient(${color} 1px, transparent 1px),
linear-gradient(90deg, ${color} 1px, transparent 1px)

`,

backgroundSize:"32px 32px"

}}
/>


<div
className="
absolute
top-10
left-80
w-20
h-12
rounded-md
border-2
animate-cellSelect
"
style={{
borderColor:color
}}
/>


</div>

);

case "waves":

return(
<>
<div
className="
absolute
right-[-80px]
top-[-80px]
w-80
h-80
rounded-full
border-[8px]
opacity-[0.18]
animate-wave
"
style={{
borderColor:color
}}
/>


<div
className="
absolute
right-[-40px]
top-[-40px]
w-64
h-64
rounded-full
border-[13px]
opacity-[0.14]
animate-wave-delay
"
style={{
borderColor:color
}}
/>


<div
className="
absolute
right-0
top-0
w-48
h-48
rounded-full
border-[15px]
opacity-[0.10]
"
style={{
borderColor:color
}}
/>

</>
);


case "shapes":

return(
<>

{/* Círculo */}
<div
className="
absolute
top-8
right-10
w-28
h-28
rounded-full
opacity-[0.12]
animate-slideFloat
"
style={{
backgroundColor:color
}}
/>



{/* Triángulo */}
<div
className="
absolute
bottom-35
left-57
w-24
h-24
opacity-[0.10]
rotate-12
animate-floatSlow
"
style={{
backgroundColor:color,
clipPath:
"polygon(50% 0%,100% 100%,0% 100%)"
}}
/>



{/* Rectángulo tipo diseño */}
<div
className="
absolute
bottom-5
right-20
w-32
h-16
rounded-xl
opacity-[0.10]
rotate-[-15deg]
"
style={{
backgroundColor:color
}}
/>


</>
);


case "cards":

return(

<>

<div
className="
absolute
top-10
right-10
w-40
h-24
rounded-xl
border-2
opacity-[0.38]
animate-taskFloat
"
style={{
borderColor:color
}}
>

<div
className="
absolute
top-5
left-5
w-20
h-2
rounded-full
opacity-100
"
style={{
backgroundColor:color
}}
/>


<div
className="
absolute
top-10
left-5
w-28
h-2
rounded-full
opacity- 100
"
style={{
backgroundColor:color
}}
/>


</div>





</>

);


case "slides":

return(
<>

<div
className="
absolute
top-8
right-8
w-36
h-24
rounded-xl
border-2
opacity-[0.2]
rotate-6
animate-slideFloat
"
style={{
borderColor:color
}}
/>


<div
className="
absolute
top-20
right-20
w-36
h-24
rounded-xl
border-2
opacity-[0.10]
animate-slideFloat
-rotate-6
"
style={{
borderColor:color
}}
/>


<div
className="
absolute
top-14
right-14
w-8
h-2
rounded-full
animate-slideFloat
opacity-[0.15]
"
style={{
backgroundColor:color
}}
/>

</>

);


default:
return null;


}

}