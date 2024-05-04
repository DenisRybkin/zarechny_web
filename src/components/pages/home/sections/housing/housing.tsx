import { HousingCard } from './housing-card.tsx';

export const Housing = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          У нас можно купить
        </h1>
        <h1 className="font-tenor text-right lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-brown-t">
          или арендовать жилье
        </h1>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
        <HousingCard
          title="Доступные цены"
          description="Стоимость квадратного метра в Заречном — от 60 000 ₽, арендная плата — от 7 000 ₽."
          imageUrl="/images/home/housing/1.jpg"
        />
        <img src="/images/home/housing/2.jpg" alt="Image" />
        <HousingCard
          title="Квартиры с ремонтом"
          description="Заезжайте и живите прямо сейчас."
          imageUrl="/images/home/housing/3.jpg"
        />
        <HousingCard
          title="Современные новостройки"
          description="Создавайте интерьер своей мечты."
          imageUrl="/images/home/housing/4.jpg"
        />
        <img src="/images/home/housing/5.jpg" alt="Image" />
        <HousingCard
          title="Жилье рядом с работой"
          description="Выбирайте квартиру в любом районе города исходя из вашего бюджета."
          imageUrl="/images/home/housing/6.jpg"
        />
      </div>
    </div>
  );
};
