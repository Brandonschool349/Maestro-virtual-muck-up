import Image from "next/image";
import { ArrowRight } from "lucide-react";

import type { Course } from "../data/courses";


type FeaturedCourseCardProps = {
  course: Course;
};


export default function FeaturedCourseCard({
  course,
}: FeaturedCourseCardProps) {

  return (
    <div
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


      {/* COLOR EFFECT */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-20
        transition
        duration-500
        "
        style={{
          background:
            `linear-gradient(135deg, ${course.color}, transparent)`
        }}
      />


      <div className="relative">


        {/* ICON */}

        <div
          className="
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          group-hover:scale-110
          transition-transform
          shadow-md
          "
          style={{
            backgroundColor: course.color
          }}
        >

          <Image
            src={course.icon}
            alt={course.title}
            width={38}
            height={38}
            className="object-contain"
          />

        </div>



        {/* CONTENT */}

        <h3
          className="
          mt-3
          text-2xl
          font-bold
          text-text-primary
          "
        >
          {course.title}
        </h3>



        <p
          className="
          mt-3
          text-muted-foreground
          "
        >
          {course.shortDescription}
        </p>



        {/* ACTION */}

        <button
          className="
          mt-4
          flex
          items-center
          gap-2
          font-semibold
          transition
          "
          style={{
            color: course.color
          }}
        >

          Explorar curso

          <ArrowRight size={18}/>

        </button>


      </div>


    </div>
  );
}