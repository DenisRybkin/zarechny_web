import { cn } from '../../../../../lib/utils/tools';
import { LifeEmotionsCard } from './life-emotions-card.tsx';

export const LifeEmotions = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <h1 className="font-tenor text-secondary text-left lg:text-6xl md:text-5xl sm:text-4xl text-[2.1rem] md:mb-16 mb-8">
        Жизнь, наполненная эмоциями
      </h1>
      <div className="flex lg:flex-row flex-col items-stretch w-full gap-5">
        <div className="lg:w-1/2 flex flex-col sm:flex-row lg:flex-col justify-between xl:gap-0 sm:gap-5 gap-3">
          <div className="flex flex-col lg:pb-5 gap-5 w-1/2">
            <div className="flex flex-col h-full xs:justify-start justify-between">
              <h2 className="text-2xl font-semibold mb-5 text-brown-t">
                Отдыхайте на природе
              </h2>
              <p className="md:text-xl text-lg">
                Проводите время с детьми на благоустроенных зонах отдыха.
              </p>
            </div>
          </div>
          <div className="flex items-stretch sm:gap-5 gap-2">
            <div className="md:py-8 md:px-10 sm:py-5 sm:px-7 py-3 px-4 w-1/2 bg-secondary">
              <h1 className="font-tenor text-white text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl mb-1">
                25%
              </h1>
              <p className={cn('text-lg text-white')}>
                территории — парки и скверы
              </p>
            </div>
            <div className="md:py-8 md:px-10 sm:py-5 sm:px-7 py-2 px-4 w-1/2 bg-primary">
              <h1 className="font-tenor text-white text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl mb-1">
                2
              </h1>
              <p className={cn('text-lg text-white')}>зоны отдыха у воды</p>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2">
          <img
            src="/images/home/life-emotions/1.jpg"
            className="w-full h-full object-cover"
            alt="Image"
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse items-center w-full gap-5 mt-5">
        <LifeEmotionsCard
          title="Занимайтесь спортом"
          description="Выбирайте спорт по душе: плавание, теннис, лыжные гонки, или что-то другое."
          reverse
          imageUrl="/images/home/life-emotions/2.jpg"
        />
        <LifeEmotionsCard
          title="Получайте новые впечатления"
          description="Приходите на спектакли Театра юного зрителя и фестивали «Театра наций»"
          imageUrl="/images/home/life-emotions/3.jpg"
        />
      </div>
    </div>
  );
};
