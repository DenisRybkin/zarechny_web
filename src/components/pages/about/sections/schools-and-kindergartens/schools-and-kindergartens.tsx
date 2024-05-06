import { SchoolsAndKindergartensCard } from './schools-and-kindergartens-card.tsx';

export const SchoolsAndKindergartens = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Школы и детские сады близко
        </h1>
        <h2 className="text-h2 font-medium self-end text-brown-t text-left lg:w-[40%] lg:mt-5 mt-2">
          Выбирайте частное или муниципальное образовательное учреждение.
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
        <div className="col-span-2">
          <SchoolsAndKindergartensCard
            title="12"
            subTitle="школ"
            description="Поступайте без очередей и длительного ожидания. Школы Росатома попали в рейтинг лучших по России. Для детей открыты атомные классы и технопарк «Кванториум»."
            imageUrl="/images/about/schools-and-kindergartens/1.jpg"
          />
        </div>
        <img src="/images/about/schools-and-kindergartens/2.jpg" alt="Image" />
        <img src="/images/about/schools-and-kindergartens/3.jpg" alt="Image" />
        <div className="col-span-2">
          <SchoolsAndKindergartensCard
            title="13"
            subTitle="детских садов"
            description="Педагоги дошкольных учреждений проходят международные курсы повышения квалификации в Сингапуре."
            imageUrl="/images/about/schools-and-kindergartens/4.jpg"
            isCenter
          />
        </div>
      </div>
    </div>
  );
};
