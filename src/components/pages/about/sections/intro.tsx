export const Intro = () => {
  return (
    <div className="flex flex-col lg:mb-44 mb-14">
      <div className="flex flex-col px-5 md:mb-14 mb-8">
        <h1 className="font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Заречный —&nbsp;
          <span className="text-primary">есть время, чтобы жить</span>
        </h1>
        <h2 className="text-h2-m text-right font-medium lg:mb-5 mt-5 text-brown-t">
          Бесплатные кружки и секции рядом с домом. Подарите ребенку безопасное
          и яркое детство!
        </h2>
      </div>
      <img src="/images/about/1.jpg" alt="Image" />
    </div>
  );
};
