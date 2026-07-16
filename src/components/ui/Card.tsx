import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

type CardVariant = 'default' | 'elevated' | 'outlined';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  default:'bg-surface border border-border text-text-primary hover:border-primary/30',
  elevated:
    'bg-surface border border-border text-text-primary shadow-sm hover:shadow-md',
  outlined: 'bg-transparent border border-border text-text-primary',
};

export default function Card({
  children,
  className,
  variant = 'default',
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl p-6 transition-all duration-200 ease-out',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
