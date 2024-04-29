export const CloseNature = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8">
        <h1 className="font-tenor text-secondary text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Город для тех, кто хочет
        </h1>
        <h1 className="font-tenor text-right lg:text-6xl md:text-5xl sm:text-4xl text-4xl md-5">
          быть ближе к природе
        </h1>
        <h2 className="lg:text-2xl text-lg text-left font-medium lg:mb-5 md:w-1/2 mt-5 text-secondary">
          Бесплатные кружки и секции рядом с домом. Подарите ребенку безопасное
          и яркое детство!
        </h2>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-stretch lg:gap-5 gap-3">
        <div className="flex flex-col lg:gap-5 gap-3 lg:w-1/3 w-full">
          <div className="flex flex-col bg-primary items-center lg:p-16 p-12 gap-3 h-[60%]">
            <div className="flex items-end h-min gap-1">
              <h1 className="lg:text-6xl text-5xl font-tenor text-white">
                60 000
              </h1>
              <span className="text-lg text-white">руб/м²</span>
            </div>
            <h1 className="lg:text-6xl text-5xl font-tenor text-white">
              Заречный
            </h1>
          </div>
          <div className="flex items-stretch lg:gap-5 gap-3 h-[40%]">
            <div className="flex flex-col justify-center bg-primary lg:px-6 px-1 lg:py-14 py-8 gap-3 w-1/2">
              <div className="flex items-center justify-center h-min gap-1">
                <p className="text-xl text-center text-white">70 000</p>
                <span className="text-xl text-white">руб/м²</span>
              </div>
              <h1 className="lg:text-4xl text-3xl  text-center font-tenor text-white">
                Саратов
              </h1>
            </div>
            <div className="flex flex-col justify-center bg-secondary lg:px-6 px-1 lg:py-14 py-8 gap-3 w-1/2">
              <div className="flex items-center justify-center h-min gap-1">
                <p className="text-xl text-center  text-white">90 000</p>
                <span className="text-xl text-white">руб/м²</span>
              </div>
              <h1 className="text-4xl text-center font-tenor text-white">
                Самара
              </h1>
            </div>
          </div>
        </div>
        <img
          className="lg:w-2/3 w-full"
          src="/images/home/nature/1.png"
          alt="Image"
        />
      </div>
    </div>
  );
};
