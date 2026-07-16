import { courses } from '../data/courses';
import CourseCard from './CourseCard';

export default function CourseGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.title}
          title={course.title}
          description={course.description}
          category={course.category}
          level={course.level}
        />
      ))}
    </div>
  );
}
