import { EcologyCard } from './ecology-card.tsx';

export const Ecology = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Безупречная&nbsp;
          <span className="text-secondary">экология</span>
        </h1>
        <h2 className="self-end lg:w-[40%] text-lg lg:text-2xl font-semibold text-secondary lg:mt-5 mt-2">
          Город расположен в лесной зоне, один из самых зеленых в Пензенской
          области.
        </h2>
      </div>
      <div className="w-full flex flex-col gap-5">
        <EcologyCard
          imageUrl="/images/about/ecology/1.png"
          title="Естественный сафари-парк"
          description="Возможность понаблюдать за лосями, лисами, белками в их природной среде обитания."
          isReverse
        />
        <EcologyCard
          imageUrl="/images/about/ecology/2.png"
          title="Артезианская скважина"
          description="Вода в городе своя: есть артезианская скважина, пить можно прямо из-под крана."
        />
        <EcologyCard
          imageUrl="/images/about/ecology/3.png"
          title="Чистый воздух"
          description="Высокие показатели чистоты воздуха в городе даже рядом с предприятиями."
          isReverse
        />
      </div>
    </div>
  );
};
