'use client';

import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import Container from '@/components/ui/Container';
import { events } from '@/data/events';
import { EventModality } from '@/types/event';
import EventCard from './EventCard';
import NextEventCountdown from './NextEventCountdown';

type FilterOption = 'todos' | EventModality;

const filters: { value: FilterOption; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'presencial', label: 'Presencial' },
  { value: 'online', label: 'En línea' },
];

export default function EventsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('todos');

  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    []
  );

  const nextEvent = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return sortedEvents.find((event) => new Date(`${event.date}T00:00:00`) >= today);
  }, [sortedEvents]);

  const filteredEvents = useMemo(() => {
    if (activeFilter === 'todos') return sortedEvents;
    return sortedEvents.filter((event) => event.modality === activeFilter);
  }, [activeFilter, sortedEvents]);

  return (
    <section aria-labelledby="events-section-title" className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Calendario
          </p>
          <h2 id="events-section-title" className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Próximos eventos y cursos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            Consulta fechas, horarios y modalidad de nuestras próximas sesiones de capacitación.
          </p>
        </div>

        {nextEvent && <NextEventCountdown event={nextEvent} />}

        <div className="mb-8 flex justify-center gap-2">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.value)}
              className={clsx(
                'rounded-full border px-4 py-2 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                activeFilter === filter.value
                  ? 'border-primary bg-primary text-white'
                  : 'border-border bg-surface text-text-secondary hover:border-primary hover:text-primary'
              )}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="text-center text-sm text-text-secondary">
              No hay eventos disponibles con este filtro.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}