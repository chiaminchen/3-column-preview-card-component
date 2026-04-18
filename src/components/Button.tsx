import { cn } from '../lib/utils';

interface ColorType {
  color: 'gold' | 'cyan' | 'green';
}

type CarCategory = 'Sedans' | 'SUVs' | 'Luxury';

export interface ButtonType extends ColorType {
  type: CarCategory;
}

const TEXT_COLORS_THEME = {
  gold: 'text-gold-dark',
  cyan: 'text-cyan-dark',
  green: 'text-green-dark',
} as const;

export function Button({ color, type }: ButtonType) {
  return (
    <button
      className={cn(
        'w-button h-button cursor-pointer rounded-full border-2 border-transparent',
        'bg-gray-light transition-colors duration-200',
        'hover:border-white hover:bg-transparent hover:text-white',
        'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2',
        TEXT_COLORS_THEME[color],
      )}
      aria-label={`Learn more about ${type} car`}
    >
      Learn More
    </button>
  );
}
