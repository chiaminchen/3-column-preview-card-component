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
    <main className="min-h-screen flex flex-col items-center justify-center my-22 lg:flex-row lg:my-0">
      {cars.map(car => (
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

function Car({ color, icon, type, intro }: CarsType) {
  const themeMap = {
    gold: 'bg-gold-dark',
    cyan: 'bg-cyan-dark',
    green: 'bg-green-dark',
  };

  return (
    <section
      className={`${themeMap[color]} text-[0.9375rem] leading-[1.65] w-card-fluid p-12 space-y-8 first:rounded-t-[0.625rem] last:rounded-b-[0.625rem] lg:w-[19.1875rem] lg:space-y-10 lg:first:rounded-s-[0.625rem] lg:first:rounded-tr-none lg:last:rounded-e-[0.625rem] lg:last:rounded-bl-none`}
    >
      <img src={icon} alt={type} />
      <div className="space-y-6">
        <h2 className="font-big-shoulders text-[2.5rem] leading-[1.2] text-gray-light">{type}</h2>
        <p className="text-white opacity-75 lg:mb-20">{intro}</p>
        <Button color={color} />
      </div>
    </section>
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
      className={`bg-gray-light ${themeMap[color]} w-36.75 h-12 rounded-full hover:bg-transparent hover:text-white hover:border-2 transition-colors duration-200 cursor-pointer`}
    >
      Learn More
    </button>
  );
}

export default App;
