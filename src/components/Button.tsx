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
      className={`bg-gray-light ${TEXT_COLORS_THEME[color]} w-button h-button cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 hover:border-white hover:bg-transparent hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2`}
      aria-label={`Learn more about ${type} car`}
    >
      Learn More
    </button>
  );
}
