import Container from '@/components/ui/Container';

export default function HomeSection() {
  return (
    <section aria-labelledby="home-section-title" className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-sm sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Próximamente
          </p>
          <h2 id="home-section-title" className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Home section en desarrollo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            Esta sección estará disponible pronto con el contenido principal de la plataforma Maestro Virtual.
          </p>
        </div>
      </Container>
    </section>
  );
}
