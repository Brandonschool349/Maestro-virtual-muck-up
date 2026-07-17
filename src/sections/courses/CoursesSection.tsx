import CategoryFilter from './components/CategoryFilter';
import CoursesCTA from './components/CoursesCTA';
import CoursesHero from './components/CoursesHero';
import CourseGrid from './components/CourseGrid';
import LearningPath from './components/LearningPath';

export default function CoursesSection() {
  return (
    <section aria-labelledby="courses-section-title">

      <CoursesHero />

      <div className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl space-y-10">

          <section aria-labelledby="courses-categories-title" className="space-y-4">
            <h3 
              id="courses-categories-title"
              className="text-lg font-semibold text-text-primary"
            >
              Categorías
            </h3>

            <CategoryFilter />

          </section>


          <CourseGrid />

          <LearningPath />

          <CoursesCTA />


        </div>

      </div>

    </section>
  );
}