import { OpenZarechnyCard } from './open-zarechny-card.tsx';

export const OpenZarechny = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5 whitespace-break-spaces">
        <h1 className="flex flex-wrap font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Откройте для себя <span className="text-brown-t">Заречный</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <OpenZarechnyCard
          title="Уютный город с возможностями мегаполиса"
          description="Представьте уютные зеленые улицы, где нет пробок и густонаселенных 'муравейников'. Вы не тратите время на дорогу, потому что все рядом."
          imageUrl="/images/about/open-zarechny/1.jpg"
        />
        <OpenZarechnyCard
          title="Забота о самом главном"
          description="Вам не страшно отпустить детей на прогулку, потому что в городе «все свои». Живите и работайте в комфортном темпе."
          imageUrl="/images/about/open-zarechny/2.jpg"
          isReverse
        />
      </div>
    </div>
  );
};
