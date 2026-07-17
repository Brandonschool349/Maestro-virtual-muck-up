import { notFound } from "next/navigation";

import { courses } from "@/sections/courses/data/courses";

// Estos componentes los iremos creando después
// por ahora puedes comentar los que aún no existan.
import CourseHero from "@/sections/courses/course-details/CourseHero";
// import CourseStats from "@/sections/courses/course-details/CourseStats";
// import CourseDescription from "@/sections/courses/course-details/CourseDescription";
// import CourseVideo from "@/sections/courses/course-details/CourseVideo";
// import CourseHighlights from "@/sections/courses/course-details/CourseHighlights";

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  const course = courses.find(
    (course) => course.slug === slug
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <CourseHero course={course} />

      {/*
      <CourseStats course={course} />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 lg:flex-row">
        <CourseDescription course={course} />
        <CourseVideo course={course} />
      </div>

      <CourseHighlights course={course} />
      */}
    </main>
  );
}