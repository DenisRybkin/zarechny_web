import { SportLifeCard } from './sport-life-card.tsx';
import { AnchorsKeys } from '../../../../../lib/constants';

export const SportLife = () => {
  return (
    <div id={AnchorsKeys.sport} className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-secondary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Спортивная жизнь&nbsp;
          <span className="text-brown-t">города</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <SportLifeCard
          imageUrl="/images/about/sport-life/1.jpg"
          items={['Большой теннис', 'Баскетбол', 'Футбол']}
        />
        <img
          className="object-cover"
          src="/images/about/sport-life/2.jpg"
          alt="Image"
        />
        <SportLifeCard
          imageUrl="/images/about/sport-life/3.jpg"
          items={[
            'Танцевальные студии по разным направлениям',
            'Зона единоборств',
            'Кроссфит',
          ]}
          isReverse
        />
        <SportLifeCard
          imageUrl="/images/about/sport-life/4.jpg"
          items={['Тренажерный зал', 'Йога', 'Воркаут в каждом дворе']}
          isReverse
        />
        <SportLifeCard
          imageUrl="/images/about/sport-life/5.jpg"
          items={['Бассейн', 'Каток', 'Хоккей']}
        />
        <img
          className="object-cover"
          src="/images/about/sport-life/6.jpg"
          alt="Image"
        />
      </div>
    </div>
  );
};
