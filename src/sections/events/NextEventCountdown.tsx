'use client';

import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import { EventItem } from '@/types/event';

interface NextEventCountdownProps {
  event: EventItem;
}

export default function NextEventCountdown({ event }: NextEventCountdownProps) {
  const eventDate = new Date(`${event.date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = eventDate.getTime() - today.getTime();
  const daysLeft = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-10 flex flex-col items-center gap-4 rounded-2xl border border-border-accent bg-background-muted px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Próximo evento
          </p>
          <h3 className="text-lg font-semibold text-text-primary sm:text-xl">{event.title}</h3>
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-primary sm:text-5xl">{daysLeft}</span>
        <span className="text-sm font-medium text-text-secondary">
          {daysLeft === 1 ? 'día para inscribirte' : 'días para inscribirte'}
        </span>
      </div>
    </motion.div>
  );
}