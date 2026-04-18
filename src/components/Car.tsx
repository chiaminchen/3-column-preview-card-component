import { Button, type ButtonType } from './Button';

export interface CarType extends ButtonType {
  icon: string;
  intro: string;
}

const CAR_THEME = {
  gold: 'bg-gold-dark',
  cyan: 'bg-cyan-dark',
  green: 'bg-green-dark',
} as const;

export function Car({ color, icon, type, intro }: CarType) {
  return (
    <article
      className={`${CAR_THEME[color]} text-body w-card-fluid first:rounded-t-card last:rounded-b-card lg:w-card-normal lg:first:rounded-s-card lg:last:rounded-e-card leading-body space-y-8 p-12 lg:space-y-10 lg:first:rounded-tr-none lg:last:rounded-bl-none`}
    >
      <img src={icon} alt="" aria-hidden="true" width={64} height={40} />
      <div className="space-y-6">
        <h2 className="font-big-shoulders text-gray-light text-title leading-title">
          {type}
        </h2>
        <p className="text-white opacity-75 lg:mb-20">{intro}</p>
        <Button color={color} type={type} />
      </div>
    </article>
  );
}
