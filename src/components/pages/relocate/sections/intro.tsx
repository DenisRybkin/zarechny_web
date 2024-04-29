import { ImageDescription } from '../../../shared/image-description';

export const Intro = () => {
  return (
    <div className="flex flex-col lg:mb-44 mb-14">
      <div className="flex flex-col px-5 md:mb-14 mb-8">
        <h1 className="font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Как переехать в Заречный?
        </h1>
        <h2 className="lg:text-2xl text-lg text-primary text-right font-medium mb-5 mt-5">
          Замените каменные джунгли на парки, а пробки — на время с семьей.
        </h2>
      </div>
      <ImageDescription
        imageUrl="/images/relocate/1.png"
        descriptions={[
          ['5 минут', 'Время от дома до спортзала'],
          ['0 баллов', 'Пробки в час пик'],
          ['3 км', 'От окраины до центра'],
        ]}
      />
    </div>
  );
};
