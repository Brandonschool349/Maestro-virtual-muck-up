import Link from 'next/link';

import Container from '@/components/ui/Container';

const exploreLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Eventos', href: '#eventos' },
];

const resourceLinks = [
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Ayuda', href: '#ayuda' },
];

const contactLinks = [{ label: 'Contacto', href: '#contacto' }];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container size="xl" className="py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.7fr]">
          <div className="space-y-3">
            <Link href="#" className="text-lg font-semibold tracking-tight text-text-primary">
              Maestro Virtual
            </Link>
            <p className="max-w-sm text-sm leading-6 text-text-secondary">
              Aprende, conecta y crece.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-text-primary">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-text-primary">
              Recursos
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-text-primary">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-xs text-text-secondary">
          <p>© 2026 Maestro Virtual. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
