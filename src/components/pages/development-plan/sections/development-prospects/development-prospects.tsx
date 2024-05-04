import { DevelopmentProspectsCard } from './development-prospects-card.tsx';

export const DevelopmentProspects = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          «Умный» микрорайон
        </h1>
        <h1 className="font-tenor lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-right">
          для IT-специалистов
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-2">
        <DevelopmentProspectsCard
          title="Расширение ТОСЭР"
          description="Территорию опережающего развития предлагается дополнить 71 участком общей площадью 119,07 га."
          classNameText="text-brown-t"
          className="bg-litegray"
        />
        <img
          className="object-cover w-full h-full"
          src="/images/development-plan/development-prospects/1.jpg"
          alt="Image"
        />
        <DevelopmentProspectsCard
          title="Организация образования по системе “Ступени”"
          description="Получение статуса территории опережающего социально-экономического развития и налоговых льгот на прибыль, имущество и землю. Квота на минимальное количество грантов для резидентов ТОСЭР."
          classNameText="text-white"
          className="bg-primary md:col-span-1 col-span-2"
        />
        <img
          className="object-cover w-full h-full"
          src="/images/development-plan/development-prospects/2.jpg"
          alt="Image"
        />
        <DevelopmentProspectsCard
          title="Создание сообщества предпринимателей"
          description="Создание крепкого сообщества технологических предпринимателей, ориентированных на непрерывный профессиональный и личностный рост, активное долголетие, гармоничные отношения с близкими."
          classNameText="text-brown-t"
          className="bg-litegray md:col-span-1 col-span-2 row-start-3 md:row-start-2 md:col-start-2"
        />
        <img
          className="object-cover w-full h-full"
          src="/images/development-plan/development-prospects/3.jpg"
          alt="Image"
        />
        <img
          className="object-cover w-full h-full col-span-2"
          src="/images/development-plan/development-prospects/4.jpg"
          alt="Image"
        />
        <DevelopmentProspectsCard
          title="Создание сообщества предпринимателей"
          description="Создание крепкого сообщества технологических предпринимателей, ориентированных на непрерывный профессиональный и личностный рост, активное долголетие, гармоничные отношения с близкими."
          classNameText="text-white"
          className="bg-secondary md:col-span-1 col-span-2"
        />
      </div>
    </div>
  );
};
