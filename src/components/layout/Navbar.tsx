import { Menu } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Cursos', href: '/courses' },
  { label: 'Eventos', href: '/events' },
  { label: 'Contacto', href: '/contact' },
];


export default function Navbar() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      w-full
      border-b
      border-white/20
      bg-white/70
      backdrop-blur-xl
      shadow-sm
      dark:bg-black/30
      "
    >

      <Container 
        size="xl"
        className="
        flex
        h-20
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="
          flex
          items-center
          gap-3
          "
        >

          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-primary
            text-sm
            font-bold
            text-white
            shadow-lg
            "
          >
            MV
          </div>


          <span
            className="
            text-lg
            font-semibold
            tracking-tight
            text-text-primary
            "
          >
            Maestro Virtual
          </span>

        </Link>



        {/* Links */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          {
            navLinks.map((link)=>(
              
              <Link
                key={link.label}
                href={link.href}
                className="
                text-sm
                font-medium
                text-text-primary
                transition
                hover:text-primary
                "
              >
                {link.label}
              </Link>

            ))
          }

        </nav>



        <div className="flex items-center gap-3">


          <Button
            variant="primary"
            size="sm"
            className="
            hidden
            md:inline-flex
            shadow-lg
            "
          >
            Explorar cursos
          </Button>



          <button
            className="
            inline-flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-border
            bg-white/40
            backdrop-blur-md
            md:hidden
            "
          >

            <Menu className="h-5 w-5"/>

          </button>


        </div>


      </Container>

    </header>
  );
}