export const Intro = () => {
  return (
    <div className="flex flex-col lg:mb-44 mb-8">
      <div className="flex flex-col px-5 md:mb-7 mb-3">
        <h1 className="font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Заречный для воплощения
        </h1>
        <h1 className="font-tenor text-secondary text-right lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          самых смелых идей
        </h1>
        <h2 className="lg:text-2xl self-start text-xl md:w-1/2 lg:w-1/3 text-left font-medium mb-5 mt-5 text-secondary">
          Присоединяйтесь к списку резидентов ТОСЭР «Заречный»
        </h2>
      </div>
      <img src="/images/for-investors/1.jpg" alt="Image" />
    </div>
  );
};
