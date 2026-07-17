import { ArrowUpRight, Clock3, Star } from "lucide-react";
import Link from "next/link";

import Card from "@/components/ui/Card";

import type { Course } from "../data/courses";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  const content = (
    <Card
      variant="elevated"
      className="flex h-full flex-col overflow-hidden p-0 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-lg"
    >
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#E8EBFF] via-white to-[#F4F7FF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(24,0,173,0.16),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(0,191,99,0.12),_transparent_40%)] transition-transform duration-200 ease-out group-hover:scale-[1.03]" />

        <div className="absolute left-4 top-4 rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {course.category}
        </div>

        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-border bg-white/90 px-3 py-1 text-xs font-semibold text-text-secondary shadow-sm">
          <Star className="h-3.5 w-3.5 fill-[#FFB000] text-[#FFB000]" />
          {course.type}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-text-primary">
            {course.title}
          </h3>

          <p className="text-sm leading-6 text-text-secondary">
            {course.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
          <div className="flex items-center gap-2 rounded-full bg-background px-3 py-1.5">
            <Clock3 className="h-4 w-4 text-primary" />
            <span>{course.duration}</span>
          </div>

          <span className="rounded-full border border-border px-3 py-1.5 font-medium text-text-primary">
            Etapa {course.stage}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-end pt-2 text-sm font-semibold text-primary">
          <span className="mr-2 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            {course.clickable ? "Explorar curso" : "Próximamente"}
          </span>

          {course.clickable && (
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
        </div>
      </div>
    </Card>
  );

  if (!course.clickable) {
    return <div className="group block h-full opacity-75">{content}</div>;
  }

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {content}
    </Link>
  );
}