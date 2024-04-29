import { RosatomCareerCard } from './rosatom-career-card.tsx';
import { CardIcon1 } from '../../../../../assets/icons/components';

export const RosatomCareer = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex leading-10 flex-wrap font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          <span>Построй карьеру в &ensp;</span>
          <span className="text-brown-t"> Росатоме</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 overflow-hidden">
        <RosatomCareerCard
          className="bg-primary"
          label="Лидер международного рынка"
          extraContent={
            <CardIcon1 className="absolute lg:-bottom-10 -bottom-20 -right-10 rotate-[20deg]" />
          }
        />
        <RosatomCareerCard
          className="bg-secondary"
          label="Конкурентный уровень зарплаты"
        />
        <RosatomCareerCard
          className="bg-litegray"
          label="Бронь от мобилизации"
        />
        <RosatomCareerCard className="bg-litegray" label="Карьерный рост" />
        <RosatomCareerCard
          className="bg-primary"
          label="Годовой бонус и корпоративное обучение"
        />
        <RosatomCareerCard
          className="bg-brown"
          label="Работа по ТК РФ: социальный пакет, ДМС"
          extraContent={
            <CardIcon1 className="absolute lg:-top-10 -top-16 -right-10 rotate-[180deg]" />
          }
        />
      </div>
    </div>
  );
};
