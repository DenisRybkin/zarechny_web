import { ClimateCard } from './climate-card.tsx';

export const Climate = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-secondary text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Комфортный климат
        </h1>
        <h1 className="font-tenor text-right lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-brown-t">
          центральной полосы России
        </h1>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
        <ClimateCard
          imageUrl="/images/home/climate/1.jpg"
          title="Четкое разделение на сезоны"
          description="Снежная, но мягкая зима, солнечное лето, золотая осень. Отсутствие природных катаклизмов."
        />
        <img src="/images/home/climate/2.jpg" alt="Image" />
        <ClimateCard
          imageUrl="/images/home/climate/3.jpg"
          title="Естественный сафари-парк"
          description="Наблюдение за лесными животными в их среде обитания: лоси, косули, лисы, белки, ежи, черепахи."
        />
        <ClimateCard
          imageUrl="/images/home/climate/4.jpg"
          title="Экология под контролем"
          description="Объем выбросов от стационарных источников в 4.9 раза ниже, чем в целом по России."
          isReversed
        />
      </div>
    </div>
  );
};
