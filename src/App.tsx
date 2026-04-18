import sedansImage from './assets/icon-sedans.svg';
import suvsImage from './assets/icon-suvs.svg';
import luxuryImage from './assets/icon-luxury.svg';
import { Car, type CarType } from './components/Car';

const cars: CarType[] = [
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
    <>
      <h1 className="sr-only">3-column preview card component</h1>
      <main className="my-22 flex min-h-screen flex-col items-center justify-center lg:my-0 lg:flex-row">
        {cars.map((car) => (
          <Car
            key={car.type}
            color={car.color}
            icon={car.icon}
            type={car.type}
            intro={car.intro}
          />
        ))}
      </main>
    </>
  );
}

export default App;
