import Container from '@/components/ui/Container';

export default function CoursesSection() {
  return (
    <section aria-labelledby="courses-section-title" className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Próximamente
          </p>
          <h2 id="courses-section-title" className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Cursos en desarrollo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            Aquí se mostrarán los cursos destacados y las opciones de aprendizaje de Maestro Virtual.
          </p>
        </div>
      </Container>
    </section>
  );
}
