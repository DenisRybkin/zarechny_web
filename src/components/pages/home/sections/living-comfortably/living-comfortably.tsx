import { LivingComfortablyCard } from './living-comfortably-card.tsx';

export const LivingComfortably = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-secondary text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Комфортно работать, жить
        </h1>
        <h1 className="font-tenor text-right lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-brown-t">
          и воспитывать детей
        </h1>
      </div>
      <div className="grid w-full lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2">
        <LivingComfortablyCard
          title="Безопасность"
          description="Въезд по пропускам на охраняемую территорию."
          bgClassName="bg-secondary"
        />
        <LivingComfortablyCard
          title="Час до Москвы"
          description="40 мин до аэропорта, 3 рейса в день."
          bgClassName="bg-litegray"
        />
        <LivingComfortablyCard title="" description="" />
        <LivingComfortablyCard
          title="Медицина"
          description="Новейшее оборудование и команда высококлассных специалистов."
          bgClassName="bg-litegray"
        />
        <LivingComfortablyCard
          title="Развитие детей"
          description="Бесплатное дополнительное образование для детей и подростков."
          bgClassName="bg-litegray"
        />
        <LivingComfortablyCard
          title="Отдых"
          description="Центральный парк, кинозал, театр."
          bgClassName="bg-litegray"
        />
        <LivingComfortablyCard
          title="Работа"
          description="Стабильные градообразующие предприятия."
          bgClassName="bg-primary"
        />
        <LivingComfortablyCard title="" description="" />
        <LivingComfortablyCard
          title="Образование"
          description="Нет очередей в школах и детсадах города."
          bgClassName="bg-litegray"
        />
        <LivingComfortablyCard
          title="Природа"
          description="Зеленые зоны для отдыха, сафари-парк, каскад прудов."
          bgClassName="bg-brown"
        />
        <LivingComfortablyCard
          title="Доступное жилье"
          description="Средняя стоимость кв.метра 65 000 руб."
          bgClassName="bg-litegray"
        />
        <LivingComfortablyCard
          title="Здоровье в приоритете"
          description="Все условия для занятий спортом в любое время года."
          bgClassName="bg-secondary"
        />
      </div>
    </div>
  );
};
