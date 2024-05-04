import { SmartNeighborhoodList } from './smart-neighborhood-list.tsx';

export const SmartNeighborhood = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          «Умный» микрорайон
        </h1>
        <h1 className="font-tenor lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-right">
          для IT-специалистов
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:mb-16 mb-6">
          <div className="border border-r-white border-brown-t py-4 text-center">
            Развитые общественные пространства
          </div>
          <div className="border flex items-center justify-center lg:border-r-white border-brown-t py-4 text-center">
            Пешеходные зоны
          </div>
          <div className="border border-r-white border-brown-t py-4 text-center">
            Work-life balance
          </div>
          <div className="border border-brown-t py-4 text-center">
            Интеллектуальное видеонаблюдение
          </div>
        </div>
        <div className="grid grid-cols-2 lg:gap-5 gap-3">
          <h2 className="lg:text-2xl text-sm lg:font-semibold text-brown-t">
            Город-спутник Заречного с малоэтажной застройкой, где будут
            располагаться филиалы российских IT-компаний. Устранение кадрового
            голода в IT-отрасли с помощью привлечения специалистов разного
            уровня.
          </h2>
          <img
            className="object-cover h-full"
            src="/images/development-plan/smart-neighborhood/1.jpg"
            alt="Image"
          />
          <img
            className="object-cover lg:col-span-1 col-span-2"
            src="/images/development-plan/smart-neighborhood/2.jpg"
            alt="Image"
          />
          <SmartNeighborhoodList
            title="Выделенный микрорайон для ИТ-специалистов"
            items={[
              'Умные энергоэффективные малоэтажные блокированные дома с индивидуальным газовым отоплением',
              'Жилые дома с офисными помещениями. Работать там где живешь!',
              'Питьевая вода из артезианской скважины',
              'Система рециркуляции сточных вод',
              'Интеллектуальное видеонаблюдение',
              'Развитые общественные пространства (воркаут, зона барбекю, выгул собак, дорожка для пробежек)',
              'Приоритезация движения пешеходов и велосипедистов',
            ]}
          />
        </div>
      </div>
    </div>
  );
};
