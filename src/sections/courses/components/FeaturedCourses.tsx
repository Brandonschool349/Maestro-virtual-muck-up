import Container from '@/components/ui/Container';

export default function FeaturedCourses() {
  return (
    <section aria-labelledby="featured-courses-title" className="py-8 sm:py-10">
      <Container size="xl">
        <div className="space-y-4">
          <h2 id="featured-courses-title" className="text-2xl font-semibold tracking-tight text-text-primary">
            Cursos destacados
          </h2>
          <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-text-secondary">
            Próximamente: bloque de cursos destacados con mejor jerarquía visual.
          </div>
        </div>
      </Container>
    </section>
  );
}
