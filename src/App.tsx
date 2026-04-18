import sedansImage from './assets/icon-sedans.svg';
import suvsImage from './assets/icon-suvs.svg';
import luxuryImage from './assets/icon-luxury.svg';

interface ColorType {
  color: 'gold' | 'cyan' | 'green';
}

interface CarsType extends ColorType {
  icon: string;
  type: string;
  intro: string;
}

const cars: CarsType[] = [
  {
    color: 'gold',
    icon: sedansImage,
    type: 'Sedans',
    intro:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
  },
  {
    color: 'cyan',
    icon: suvsImage,
    type: 'SUVs',
    intro:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
  },
  {
    color: 'green',
    icon: luxuryImage,
    type: 'Luxury',
    intro:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
  },
];

function App() {
  return (
    <main className="my-22 flex min-h-screen flex-col items-center justify-center lg:my-0 lg:flex-row">
      {cars.map((car) => (
        <Car
          key={car.type}
          color={`${car.color}`}
          icon={car.icon}
          type={car.type}
          intro={car.intro}
        />
      ))}
    </main>
  );
}

const CAR_THEME = {
  gold: 'bg-gold-dark',
  cyan: 'bg-cyan-dark',
  green: 'bg-green-dark',
} as const;

function Car({ color, icon, type, intro }: CarsType) {
  return (
    <article
      className={`${CAR_THEME[color]} text-body w-card-fluid first:rounded-t-card last:rounded-b-card lg:w-card-normal lg:first:rounded-s-card lg:last:rounded-e-card space-y-8 p-12 leading-[1.65] lg:space-y-10 lg:first:rounded-tr-none lg:last:rounded-bl-none`}
    >
      <img src={icon} alt={type} width={64} height={40} />
      <div className="space-y-6">
        <h2 className="font-big-shoulders text-gray-light text-[2.5rem] leading-[1.2]">
          {type}
        </h2>
        <p className="text-white opacity-75 lg:mb-20">{intro}</p>
        <Button color={color} />
      </div>
    </article>
  );
}

function Button({ color }: ColorType) {
  const themeMap = {
    gold: 'text-gold-dark',
    cyan: 'text-cyan-dark',
    green: 'text-green-dark',
  };

  return (
    <button
      className={`bg-gray-light ${themeMap[color]} h-12 w-36.75 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 hover:border-white hover:bg-transparent hover:text-white`}
    >
      Learn More
    </button>
  );
}

export default App;
