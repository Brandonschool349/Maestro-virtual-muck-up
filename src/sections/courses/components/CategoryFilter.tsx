"use client";
type CategoryFilterProps = {
  selectedCategory?: string;
  onSelect?: (category: string) => void;
};

const categories = [
  'Todos',
  'Inteligencia Artificial',
  'Desarrollo de Software',
  'Ciberseguridad',
  'Datos',
  'Diseño',
];

export default function CategoryFilter({
  selectedCategory = 'Todos',
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3" role="toolbar" aria-label="Filtrar cursos por categoría">
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect?.(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ease-out ${
              isActive
                ? 'border-primary bg-primary text-white shadow-sm'
                : 'border-border bg-surface text-text-secondary hover:border-primary hover:text-primary'
            }`}
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
