import { GymnasiumMaximumList } from './gymnasium-maximum-list.tsx';
import { GymnasiumMaximumCard } from './gymnasium-maximum-card.tsx';
import { AnchorsKeys } from '../../../../../lib/constants';

export const GymnasiumMaximum = () => {
  return (
    <div
      id={AnchorsKeys.education}
      className="flex flex-col px-5 lg:mb-44 mb-20"
    >
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Первая частная гимназия&nbsp;
          <span className="text-brown-t">«Максимум»</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="lg:w-3/4">
          <GymnasiumMaximumList
            title="Качественное среднее образование"
            items={[
              '6 победителей и 21 призер региональных и всероссийских олимпиад',
              '93% гимназистов участвуют в олимпиадах',
              '98% выпускников получили «4» и «5» за ЕГЭ',
              '86.9 — средний балл за ЕГЭ 2022/2023 учебный год (По России — 68,43)',
            ]}
          />
        </div>
        <img src="/images/about/gymnasium-maximum/1.png" alt="Image" />
        <GymnasiumMaximumCard
          imageUrl="/images/about/gymnasium-maximum/2.png"
          title="Всестороннее развитие личности ребенка"
          items={[
            'китайский язык',
            'робототехника',
            'шахматный клуб',
            'театральная студия',
            'каллиграфия',
            'творческая мастреская',
            'IT-курсы: 2D\\3D, Scratch',
          ]}
        />
        <GymnasiumMaximumCard
          imageUrl="/images/about/gymnasium-maximum/3.png"
          title="Безопасная среда для развития талантов"
          items={[
            'вход по карте гимназиста',
            'СКУД',
            'видеонаблюдение по периметру и в помещениях школы',
          ]}
        />
        <img src="/images/about/gymnasium-maximum/4.png" alt="Image" />
        <GymnasiumMaximumCard
          imageUrl="/images/about/gymnasium-maximum/5.png"
          title="Современные образовательные технологии"
          items={[
            'интерактивные панели',
            'мобильные классы',
            'лаборатории',
            'дистанционный класс',
          ]}
          isReverse
        />
      </div>
    </div>
  );
};
