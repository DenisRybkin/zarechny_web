import { CardIcon1, CardIcon2 } from '../../../../../assets/icons/components';

export const RelocateOptions = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-16">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor sm:hidden text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Есть несколько вариантов для переезда
        </h1>
        <h1 className="sm:block hidden font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Есть несколько вариантов
        </h1>
        <h1 className="sm:block hidden font-tenor text-right lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-brown-t">
          для переезда
        </h1>
        <h2 className="lg:text-2xl text-lg text-primary lg:w-1/2 lg:mt-10 mt-2 text-left">
          Заречный — закрытый город, чтобы попасть на его территорию, нужно
          получить пропуск.
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 overflow-hidden">
        <div className="flex flex-col lg:col-span-1 col-span-2 lg:h-40 h-32 lg:p-5 p-2 bg-secondary relative">
          <p className="text-white lg:text-xl text-lg">
            Устроиться на работу в компании города. Если не нашли нужную
            вакансию, отправьте резюме.
          </p>
          <CardIcon1 className="absolute -bottom-10 -right-10 -rotate-12" />
        </div>
        <div className="flex flex-col lg:p-5 p-2 bg-primary">
          <p className="text-white lg:text-xl text-lg">
            Купить квартиру в Заречном.
          </p>
        </div>
        <div className="flex flex-col lg:p-5 p-2 bg-brown relative">
          <p className="text-white lg:text-xl text-lg">
            Открыть бизнес или запустить свой стартап.
          </p>
          <CardIcon2 className="absolute lg:-bottom-10 -bottom-32 -right-20 -rotate-12" />
        </div>
      </div>
    </div>
  );
};
