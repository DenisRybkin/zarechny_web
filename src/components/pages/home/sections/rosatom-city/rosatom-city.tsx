import { RosatomCard } from './rosatom-card.tsx';

export const RosatomCity = () => {
  return (
    <div className="px-5 lg:mb-44 mb-20">
      <h1 className="font-tenor lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-brown-t md:mb-16 mb-8">
        Заречный — город Росатома
      </h1>
      <div className="flex flex-col xl:gap-5 lg:gap-3 gap-5">
        <div className="flex lg:flex-row flex-col w-full items-stretch gap-5">
          <RosatomCard
            title="Предприятия Росатома"
            description="Участие в федеральных проектах и высокая зарплата."
            imgUrl="/images/home/rosatom/1.png"
            bgClassname="bg-litegray"
          />
          <RosatomCard
            title="Мощные социальные программы"
            description="Финансирование проекта «Бережливая поликлиника», конкурсов для детей, и ЗОЖ-проектов."
            imgUrl="/images/home/rosatom/4.png"
            bgClassname="bg-primary"
          />
        </div>
        <div className="flex lg:flex-row flex-col w-full items-stretch gap-5">
          <RosatomCard
            title="Медицина под контролем Росатома"
            description="МСЧ № 59 в Заречном финансируется из федерального бюджета."
            imgUrl="/images/home/rosatom/2.png"
            isReversed
            bgClassname="bg-secondary"
          />
          <RosatomCard
            title="Территория культуры"
            description="Спонсирование выставок, творческих мастерских, выступлений артистов с мировым именем, поддержка талантов."
            imgUrl="/images/home/rosatom/5.png"
            bgClassname="bg-litegray"
            isReversed
          />
        </div>
        <div className="flex lg:flex-row md:flex-col flex-col-reverse w-full justify-center items-center gap-5 md:">
          <RosatomCard
            title="Школа Росатома"
            description="Работа атомных классов в школах Заречного. Обучение педагогов за рубежом."
            imgUrl="/images/home/rosatom/3.png"
            bgClassname="bg-litegray"
          />
          <RosatomCard
            title="Гранты для важных дел"
            description="Конкурсы для физических лиц, НКО, бюджетных организаций и бизнеса."
            imgUrl="/images/home/rosatom/6.png"
            bgClassname="bg-brown"
          />
        </div>
      </div>
      {/*<div className="w-full flex lg:flex-row items-stretch flex-col gap-5">*/}
      {/*  <div className="lg:w-1/2 w-full flex flex-col gap-5 justify-between">*/}
      {/*    <RosatomCard*/}
      {/*      title="Предприятия Росатома"*/}
      {/*      description="Участие в федеральных проектах и высокая зарплата."*/}
      {/*      imgUrl="/images/home/rosatom/1.png"*/}
      {/*    />*/}
      {/*    <RosatomCard*/}
      {/*      title="Медицина под контролем Росатома"*/}
      {/* eslint-disable-next-line no-irregular-whitespace */}
      {/*      description="МСЧ № 59 в Заречном финансируется из федерального бюджета."*/}
      {/*      imgUrl="/images/home/rosatom/2.png"*/}
      {/*      isReversed*/}
      {/*      bgClassname="bg-secondary"*/}
      {/*    />*/}
      {/*    <RosatomCard*/}
      {/*      title="Школа Росатома"*/}
      {/*      description="Работа атомных классов в школах Заречного. Обучение педагогов за рубежом."*/}
      {/*      imgUrl="/images/home/rosatom/2.png"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="lg:w-1/2 w-full flex-col gap-5 justify-between">*/}
      {/*    <RosatomCard*/}
      {/*      title="Мощные социальные программы"*/}
      {/*      description="Финансирование проекта «Бережливая поликлиника», конкурсов для детей, и ЗОЖ-проектов."*/}
      {/*      imgUrl="/images/home/rosatom/3.png"*/}
      {/*      bgClassname="bg-primary"*/}
      {/*    />*/}
      {/*    <RosatomCard*/}
      {/*      title="Территория культуры"*/}
      {/*      description="Спонсирование выставок, творческих мастерских, выступлений артистов с мировым именем, поддержка талантов."*/}
      {/*      imgUrl="/images/home/rosatom/5.png"*/}
      {/*      isReversed*/}
      {/*    />*/}
      {/*    <RosatomCard*/}
      {/*      title="Гранты для важных дел"*/}
      {/*      description="Конкурсы для физических лиц, НКО, бюджетных организаций и бизнеса."*/}
      {/*      imgUrl="/images/home/rosatom/6.png"*/}
      {/*      bgClassname="bg-[#433D38]"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
