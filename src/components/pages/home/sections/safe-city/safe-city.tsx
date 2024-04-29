import { SafeCityForm } from './safe-city-form.tsx';
import { SafeCityCard } from './safe-city-card.tsx';

export const SafeCity = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-secondary text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Безопасный город,
        </h1>
        <h1 className="font-tenor text-right lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          охраняемый государством
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-5 gap-3">
        <SafeCityForm className="row-start-1 row-end-3 " />
        <SafeCityCard
          title="Дети под защитой города"
          description="Не нужно провожать детей в школу или на кружок — всё в шаговой доступности."
          bg="primary"
        />
        <SafeCityCard
          title="Преступность под контролем"
          description="Входит в топ самых безопасных городов России."
          bg="secondary"
        />
        <SafeCityCard
          title="Закрытая территория"
          description="Попасть в Заречный можно только по пропускам."
          bg="litegray"
        />
        <SafeCityCard
          title="Нет пробок"
          description="Жизнь в спокойном темпе без опозданий."
          bg="brown"
        />
      </div>
    </div>
  );
};
