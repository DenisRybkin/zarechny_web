import { NuclearEnterpriseCard } from './nuclear-enterprise-card.tsx';

export const NuclearEnterprises = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Атомные предприятия города
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <NuclearEnterpriseCard
          imageUrl="/images/job/nuclear-enterprises/1.jpg"
          title="АО «ФНПЦ «ПО «Старт» им. М.В. Проценко»"
          description="Старт — крупный научно-производственный центр, обладающий уникальными технологиями в области высокоточной механообработки, электромеханики, микроэлектроники, мощной испытательной базой."
        />
        <NuclearEnterpriseCard
          imageUrl="/images/job/nuclear-enterprises/2.jpg"
          title="АО «НИИграфит»"
          description="«НИИграфит» создан для всестороннего изучения и разработки специальных видов углеродных материалов и изделий из них, внедрения их в серийное производство, координации научно-исследовательских и проектно-конструкторских работ."
        />
      </div>
    </div>
  );
};
