import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function CoursesCTA() {
  return (
    <section aria-labelledby="courses-cta-title" className="py-8 sm:py-10">
      <Container size="xl">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Siguiente paso
              </p>
              <h2 id="courses-cta-title" className="text-2xl font-semibold tracking-tight text-text-primary">
                ¿Listo para comenzar tu camino?
              </h2>
            </div>
            <Button variant="primary" size="lg">
              Explorar cursos
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
