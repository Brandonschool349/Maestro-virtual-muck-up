'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  GraduationCap,
  MapPin,
  Palette,
  Presentation,
  Smartphone,
  Table,
  Users,
  Video,
} from 'lucide-react';

import Button from '@/components/ui/Button';
import { EventItem } from '@/types/event';

interface CategoryStyle {
  label: string;
  color: string;
  bg: string;
  Icon: typeof Video;
}

const categoryStyles: Record<EventItem['category'], CategoryStyle> = {
  zoom: { label: 'Zoom', color: '#1800AD', bg: '#1800AD14', Icon: Video },
  excel: { label: 'Excel', color: '#00BF63', bg: '#00BF6314', Icon: Table },
  powerpoint: { label: 'PowerPoint', color: '#FF3131', bg: '#FF313114', Icon: Presentation },
  canva: { label: 'Canva', color: '#00A6C4', bg: '#00A6C414', Icon: Palette },
  classroom: { label: 'Google Classroom', color: '#FFB000', bg: '#FFB00014', Icon: GraduationCap },
  emprendimiento: { label: 'Inclusión: Emprendimiento', color: '#334155', bg: '#F8FAFC', Icon: Users },
  alfabetizacion: { label: 'Inclusión: Alfabetización', color: '#00BF63', bg: '#00BF6314', Icon: Smartphone },
};
const monthNames = [
  'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
  'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC',
];

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  const dateObj = new Date(`${event.date}T00:00:00`);
  const day = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()];
  const category = categoryStyles[event.category];
  const CategoryIcon = category.Icon;

  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: '0 20px 45px rgba(15, 23, 42, 0.12)' }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      tabIndex={0}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:flex-row"
    >
      <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-background">
        <span className="text-xs font-semibold tracking-wide text-text-secondary">{month}</span>
        <span className="text-xl font-bold text-text-primary">{day}</span>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ color: category.color, backgroundColor: category.bg }}
          >
            <CategoryIcon className="h-3 w-3" />
            {category.label}
          </span>
          <span
            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              color: event.modality === 'online' ? '#1800AD' : '#334155',
              backgroundColor: event.modality === 'online' ? '#1800AD14' : '#F8FAFC',
            }}
          >
            {event.modality === 'online' ? <Video className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
            {event.modality === 'online' ? 'En línea' : 'Presencial'}
          </span>
        </div>

        <h3 className="text-base font-semibold text-text-primary sm:text-lg">{event.title}</h3>

        <p className="text-sm leading-6 text-text-secondary">{event.objective}</p>

        <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-secondary">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {event.time} · {event.duration}
          </span>

          {event.modality === 'presencial' ? (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {event.location} — {event.address}
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <Video className="h-3.5 w-3.5" />
              Vía {event.platform}
            </span>
          )}

          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            {event.participants}
          </span>

          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {dateObj.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-end sm:items-end">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Button variant="primary" size="sm">
            Inscribirse
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}