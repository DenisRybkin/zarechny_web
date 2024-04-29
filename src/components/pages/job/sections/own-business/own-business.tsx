import { OwnBusinessCard } from './own-business-card.tsx';

export const OwnBusiness = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor lg:mb-10 mb-4 text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Откройте свое дело
        </h1>
        <h2 className="text-h2-m text-right">
          Арендуйте помещение для работы от 120 руб/м².
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="grid lg:grid-cols-6 grid-cols-3 lg:mb-16 mb-6">
          <div className="border border-r-white border-brown-t py-4 text-center">
            Пекарня
          </div>
          <div className="border border-r-white border-brown-t py-4 text-center">
            Салон красоты
          </div>
          <div className="border lg:border-r-white border-brown-t py-4 text-center">
            Массажный кабинет
          </div>
          <div className="border border-r-white border-brown-t py-4 text-center">
            Мебельное производство
          </div>
          <div className="border border-r-white border-brown-t py-4 text-center">
            Ремонтная мастерская
          </div>
          <div className="border border-brown-t py-4 text-center">СТО</div>
        </div>
        <h2 className="text-2xl font-semibold text-brown-t mb-9">
          Госпрограммы поддержки малого бизнеса
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
          <OwnBusinessCard
            title="Гранты для молодых предпринимателей"
            description="Компенсация аренды и ремонта нежилого помещения, приобретение необходимых стройматериалов."
            className="bg-secondary"
            textClassName="text-white"
          />
          <OwnBusinessCard
            title="Гранты для социальных проектов"
            description="Государство продолжит выдавать гранты до 500 000 ₽ социальным предприятиям."
            className="bg-litegray"
            textClassName="text-brown-t"
          />
          <OwnBusinessCard
            title="Поддержка малого агробизнеса"
            description="Грант на приобретение оборудования для переработки сельхозпродукции, субсидии для животноводов."
            className="bg-primary"
            textClassName="text-white"
          />
          <OwnBusinessCard
            title="Поддержка самозанятых"
            description="Аренда коворкингов и бизнес-инкубаторов по льготным ставкам, займы до 1 млн ₽ от государственных МФО."
            className="bg-brown"
            textClassName="text-white"
          />
        </div>
      </div>
    </div>
  );
};
