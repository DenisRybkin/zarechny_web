import { GeoIcon } from '../../../assets/icons/components';
import { ImageDescription } from '../../shared/image-description/image-description.tsx';

export const IntroSection = () => {
  return (
    <section className="flex flex-col ">
      <div className="flex items-start justify-between mb-20 px-5">
        <div className="w-1/2">
          <h1 className="font-tenor text-7.5xl text-secondary leading-none">
            Откройте для себя Заречный
          </h1>
        </div>
        <div className="w-1/2 flex flex-col items-end gap-y-20">
          <GeoIcon />
          <p className="text-3xl text-left font-inter">
            Замените каменные джунгли на парки, а пробки — на время с семьей.
          </p>
        </div>
      </div>
      <ImageDescription
        imageUrl="/images/home/1.png"
        descriptions={[
          'Благоприятная экология',
          'Безопасность',
          'Доступное жилье',
        ]}
      />
    </section>
  );
};
