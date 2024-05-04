import { TalentDevelopmentCenterCard } from './talent-development-center-card.tsx';

export const TalentDevelopmentCenter = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Заречный —&nbsp;
          <span className="text-primary">центр развития талантов</span>
        </h1>
      </div>
      <div className="flex flex-row items-stretch w-full mb-12">
        <div className="border border-brown-t py-4 w-1/3 flex flex-col gap-5">
          <h2 className="sm:text-2xl lg:text-2xl md:text-xl text-center font-semibold lg:mb-5 text-brown-t">
            Бесплатно
          </h2>
          <p className="sm:text-lg text-sm text-center text-wrap">
            90% занятий за счёт государства
          </p>
        </div>
        <div className="border-t border-b lg:py-4 py-2 border-brown-t w-1/3 flex flex-col lg:gap-5">
          <h2 className="sm:text-2xl lg:text-2xl md:text-xl text-center font-semibold mb-2 lg:mb-5 text-brown-t">
            Рядом
          </h2>
          <p className="sm:text-lg text-sm text-center text-wrap">
            Все кружки и секции — в шаговой доступности
          </p>
        </div>
        <div className="border border-brown-t py-4 w-1/3 flex flex-col lg:gap-5">
          <h2 className="sm:text-2xl lg:text-2xl md:text-xl text-center font-semibold mb-2 lg:mb-5 text-brown-t">
            Доступно
          </h2>
          <p className="sm:text-lg text-sm text-center text-wrap ">
            85% детей охвачены доп. образованием
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <TalentDevelopmentCenterCard
          imageUrl="/images/about/talent-development-center/1.jpg"
          title="Спорт"
          items={[
            'Футбол',
            'Бокс',
            'Карате',
            'Лыжные гонки',
            'Фигурное катание',
            'Хоккей',
            'Плавание',
            'Художественная гимнастика',
            'Школа картинга',
            'Большой теннис',
            'Бальные танцы',
            'Балетная школа',
          ]}
        />
        <img
          className="h-full object-cover"
          src="/images/about/talent-development-center/2.jpg"
          alt="Image"
        />
        <TalentDevelopmentCenterCard
          imageUrl="/images/about/talent-development-center/3.jpg"
          title="Интеллект"
          items={[
            'Шахматная школа',
            'Курсы программирования',
            'Школа раннего развития',
            'Скорочтение',
            'Ментальная арифметика',
            'Робототехника',
            'Курсы подготовки к экзаменам',
          ]}
          isReverse
          titleMt
        />
        <TalentDevelopmentCenterCard
          imageUrl="/images/about/talent-development-center/4.jpg"
          title="Творчество"
          items={[
            'Художественная школа',
            'Музыкальная школа',
            'Студия вокала',
            'Современная хореография',
          ]}
          isReverse
          isTextReverse
        />
      </div>
    </div>
  );
};
