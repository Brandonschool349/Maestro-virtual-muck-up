import { Menu } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <Container size="xl" className="flex h-20 items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
            MV
          </div>
          <span className="text-lg font-semibold tracking-tight text-text-primary">
            Maestro Virtual
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-primary transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" className="hidden md:inline-flex">
            Explorar cursos
          </Button>
          <button
            type="button"
            aria-label="Abrir menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-text-primary transition-colors duration-200 hover:border-primary hover:text-primary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </header>
  );
}
