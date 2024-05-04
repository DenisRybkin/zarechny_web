import { RestCard } from './rest-card.tsx';
import { AnchorsKeys } from '../../../../../lib/constants';

export const Rest = () => {
  return (
    <div id={AnchorsKeys.rest} className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Чем заняться в Заречном
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <RestCard
          imageUrl="/images/about/rest/1.jpg"
          description="Центральный парк"
        />
        <RestCard
          imageUrl="/images/about/rest/2.jpg"
          description="Лыжная трасса"
        />
        <RestCard
          imageUrl="/images/about/rest/3.jpg"
          description="Зона отдыха с каскадом прудов"
          className="col-span-2"
        />
        <RestCard
          imageUrl="/images/about/rest/4.jpg"
          description="Лермонтовский пруд и парк"
          className="col-span-2"
        />
        <RestCard imageUrl="/images/about/rest/5.jpg" description="Боулинг" />
        <RestCard
          imageUrl="/images/about/rest/6.jpg"
          description="Театр юного зрителя"
        />
        <RestCard imageUrl="/images/about/rest/7.jpg" description="Бильярд" />
        <RestCard
          imageUrl="/images/about/rest/8.jpg"
          description="Виртуальная реальность"
          className="col-span-2"
        />
        <RestCard
          imageUrl="/images/about/rest/9.jpg"
          className="row-start-5 lg:row-start-3 lg:col-start-4"
          description="Кинотеатр"
        />
      </div>
    </div>
  );
};
