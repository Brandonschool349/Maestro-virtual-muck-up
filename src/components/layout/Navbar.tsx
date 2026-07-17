"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Cursos", href: "/courses" },
  { label: "Eventos", href: "/events" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50

      pt-2
      px-4
      lg:px-6

      pointer-events-none
      "
    >
      <Container
        size="xl"
        className={clsx(
          `
          pointer-events-auto

          flex
          items-center
          justify-between

          rounded-[28px]

          border

          transition-all
          duration-500
          ease-out
          `,

          scrolled
            ? `
              h-[68px]

              bg-primary/10

              border-white/10

              backdrop-blur-3xl

              shadow-[0_18px_45px_rgba(15,23,42,.12)]
            `
            : `
              h-[74px]

              bg-white/28

              border-white/25

              backdrop-blur-2xl

              shadow-[0_10px_28px_rgba(15,23,42,.05)]
            `
        )}
      >
        {/* Logo */}

        <Link
          href="/"
          className="
          group
          flex
          items-center
          gap-3
          "
        >
          <div
            className={clsx(
              `
              flex
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-primary
              via-indigo-600
              to-brand-red

              text-sm
              font-bold
              text-white

              shadow-lg

              transition-all
              duration-500

              group-hover:scale-105
              group-hover:rotate-6
              `,
              scrolled ? "h-10 w-10" : "h-11 w-11"
            )}
          >
            MV
          </div>

          <div className="leading-none">
            <p
              className="
              font-heading
              text-xl
              tracking-wide
              text-text-primary
              "
            >
              Maestro
            </p>

            <p
              className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-text-secondary
              "
            >
              Virtual
            </p>
          </div>
        </Link>

        {/* Links */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-9
          "
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
                `
                group
                relative

                text-[15px]
                font-medium

                transition-all
                duration-300

                hover:text-primary
                `,
                scrolled
                  ? "text-text-primary"
                  : "text-text-secondary"
              )}
            >
              {link.label}

              <span
                className="
                absolute
                -bottom-2
                left-1/2

                h-[2px]
                w-0

                -translate-x-1/2

                rounded-full
                bg-primary

                transition-all
                duration-300

                group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            className={clsx(
              `
              group

              hidden
              md:inline-flex

              rounded-full

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-xl
              `,
              scrolled ? "px-4" : "px-5"
            )}
          >
            Explorar cursos

            <ArrowRight
              className="
              h-4
              w-4

              transition-transform
              duration-300

              group-hover:translate-x-1
              "
            />
          </Button>

          <button
            className="
            inline-flex

            h-11
            w-11

            items-center
            justify-center

            rounded-full

            border
            border-white/50

            bg-white/50

            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-105
            hover:bg-white/70

            md:hidden
            "
          >
            <Menu className="h-5 w-5 text-text-primary" />
          </button>
        </div>
      </Container>
    </header>
  );
}