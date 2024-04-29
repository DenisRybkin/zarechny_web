import { ChildDevelopmentCard } from './child-development-card.tsx';

export const ChildDevelopment = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-secondary text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Всестороннее развитие
        </h1>
        <h1 className="font-tenor text-right lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-brown-t">
          детей и подростков
        </h1>
        <h2 className="lg:text-2xl text-brown-t text-left font-medium mb-5 md:w-1/2 mt-5 text-xl">
          Бесплатные кружки и секции рядом с домом. Подарите ребенку безопасное
          и яркое детство!
        </h2>
      </div>
      <div className="flex flex-col w-full gap-5">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
          <ChildDevelopmentCard
            title="16"
            subTitle="развивающих секций"
            description="Растим творческих людей: в городе есть художественная и музыкальная школы и студия вокала."
          />
          <img src="/images/home/child-development/4.png" alt="image" />

          <ChildDevelopmentCard
            title="15"
            subTitle="творческих секций"
            description="Развиваем интеллект: шахматная школа, курсы программирования и многое другое."
          />
          <img src="/images/home/child-development/1.png" alt="Image" />
          <img src="/images/home/child-development/2.png" alt="image" />
          <ChildDevelopmentCard
            title="12"
            subTitle="спортивных секций"
            className="row-start-"
            description="Зажигаем спортивные звезды в боксе карате, фигурном катании, футболе, хоккее."
          />
          <img src="/images/home/child-development/3.png" alt="Image" />
          <img
            src="/images/home/child-development/5.png"
            className="md:col-span-2 xl:h-[426px] md:h-[86%] h-full w-full object-cover xl:w-full"
            alt="Image"
          />
        </div>
        {/*<div className="md:flex items-end gap-5 hidden">*/}
        {/*  <ChildDevelopmentCard*/}
        {/*    title="15"*/}
        {/*    subTitle="творческих секций"*/}
        {/*    className="xl:w-1/3 lg:w-1/2"*/}
        {/*    description="Развиваем интеллект: шахматная школа, курсы программирования и многое другое."*/}
        {/*  />*/}
        {/*  <img*/}
        {/*    src="/images/home/child-development/5.png"*/}
        {/*    className="xl:w-[68%] md:w-1/2 xl:h-[377px] object-cover"*/}
        {/*    alt="Image"*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className="flex flex-col md:hidden items-end gap-5"></div>*/}
      </div>
    </div>
  );
};
