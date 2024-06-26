import { GeoIcon } from '../../../../assets/icons/components';
import { ImageDescription } from '../../../shared/image-description';

export const IntroSection = () => {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col items-start justify-between lg:mb-20 md:mg-10 mb-5 px-5 md:flex-row">
        <div className="md:w-[58%]">
          <h1 className="font-tenor text-secondary leading-none lg:text-7.5xl sm:text-6xl text-4xl">
            Откройте для себя Заречный
          </h1>
        </div>
        <div className="md:w-[42%] flex flex-col items-end gap-y-6 md:gap-y-20 sm:mt-4 mt-6">
          <GeoIcon />
          <h2 className="text-h2 font-normal md:text-3xl text-left">
            Замените каменные джунгли на парки, а пробки — на время с семьей.
          </h2>
        </div>
      </div>
      <ImageDescription
        imageUrl="/images/home/1.jpg"
        descriptions={[
          'Благоприятная экология',
          'Безопасность',
          'Доступное жилье',
        ]}
      />
    </section>
  );
};
