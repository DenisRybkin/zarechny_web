import { MedicalServicesCard } from './medical-services-card.tsx';
import { ListItemIcon } from '../../../../../assets/icons/components';
import { AnchorsKeys } from '../../../../../lib/constants';

const listItems = [
  'Областной онкологический диспансер',
  'Федеральный центр сердечно-сосудистой хирургии',
  'Военный госпиталь',
  'Центр планирования семьи и репродукции',
  'Диализный центр',
];

export const MedicalServices = () => {
  return (
    <div
      id={AnchorsKeys.medicine}
      className="flex flex-col px-5 lg:mb-44 mb-20"
    >
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Полный спектр&nbsp;
          <span className="text-brown-t">медицинских услуг</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-x-2 gap-y-5">
        <MedicalServicesCard
          imageUrl="/images/about/medical-services/1.jpg"
          title="Охрана материнства и детства"
          description="Современный перинатальный центр с партнерскими родами и комфортными семейными палатами по родовому сертификату."
          className="col-span-2"
        />
        <img
          className="object-cover h-full row-start-3 lg:row-start-1 lg:col-start-3 w-full"
          src="/images/about/medical-services/2.jpg"
          alt="Image"
        />
        <MedicalServicesCard
          imageUrl="/images/about/medical-services/3.jpg"
          title="Диагностика сложных случаев"
          description="Огромный спектр медицинских услуг, диагностика и лечение редчайших патологий."
          description2="Стационар и городская поликлиника оснащены необходимым оборудованием для своевременного выявления заболевания."
          className="col-span-2"
          isReverse
          isTextReverse
        />
        <div className="flex flex-col">
          <h2
            className={
              'sm:text-2xl lg:text-2xl md:text-xl text-xl text-left font-semibold mb-2 lg:mb-5 text-brown-t'
            }
          >
            Помощь рядом
          </h2>
          <div className="flex flex-col lg:gap-2 gap-1">
            <p className="lg:text-xl lg:mb-5 mb-2 text-sm text-left">
              В 30 минутах в г. Пенза расположены:
            </p>
            {listItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-start lg:gap-3 gap-2"
              >
                <div className="">
                  <ListItemIcon />
                </div>
                <p className="lg:text-xl text-sm text-left text-wrap">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
