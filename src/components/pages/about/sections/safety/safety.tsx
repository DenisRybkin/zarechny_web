import { AnchorsKeys } from '../../../../../lib/constants';

export const Safety = () => {
  return (
    <div id={AnchorsKeys.safety} className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-secondary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Безопасность&nbsp;
          <span className="text-brown-t">в приоритете</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <div className="lg:p-5 p-3 bg-primary">
          <h2 className="lg:text-2xl text-lg text-white">
            Въезд только для жителей города
          </h2>
        </div>
        <img
          src="/images/about/safety/1.jpg"
          className="h-full object-cover"
          alt="Image"
        />
        <div className="lg:p-5 p-3 bg-brown">
          <h2 className="lg:text-2xl text-lg text-white">
            От дома до школы 5 минут
          </h2>
        </div>
        <img
          src="/images/about/safety/2.jpg"
          className="h-full object-cover"
          alt="Image"
        />
        <div className="p-5 bg-litegray col-span-2">
          <h2 className="lg:text-2xl text-lg text-brown-t">
            Спокойное движение: скоростной режим в городе ограничен до 40 км/час
          </h2>
        </div>
        <div className="p-5 bg-primary col-span-2 lg:h-64">
          <h2 className="lg:text-2xl text-lg text-white">
            Спокойное движение: скоростной режим в городе ограничен до 40 км/час
          </h2>
        </div>
        <img
          src="/images/about/safety/3.jpg"
          className="object-cover"
          alt="Image"
        />
        <div className="p-5 bg-secondary col-span-2 h-full">
          <h2 className="lg:text-2xl text-lg text-white">
            Рекордно низкий уровень преступности и ДТП
          </h2>
        </div>
        <img
          src="/images/about/safety/4.jpg"
          className="object-cover row-start-5 lg:row-start-3 lg:col-end-5"
          alt="Image"
        />
      </div>
    </div>
  );
};
