export const Housing = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-y-4 xl:mb-16 md:mb-8 mb-4">
        <h1 className="font-tenor text-secondary leading-none lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Доступное жилье
        </h1>
        <p className="md:text-2xl text-lg text-right font-inter text-brown-t">
          Более 450 вариантов продажи и аренды
        </p>
      </div>
      <div className="flex items-stretch lg:gap-x-5 gap-x-1 w-full">
        <div className="flex flex-col lg:gap-y-4 gap-y-2 items-stretch justify-between w-[60%] ">
          <div className="flex flex-col lg:p-5 p-2 bg-secondary h-[50%] justify-center items-start lg:gap-y-3">
            <h3 className="text-white lg:text-4xl md:text-3xl font-bold">
              от 7 000 ₽
            </h3>
            <p className="text-white lg:text-2xl md:text-xl text-xs">
              стоимость аренды
            </p>
          </div>
          <div className="flex flex-col lg:p-5 p-2 bg-primary h-[50%] justify-start items-start lg:gap-y-3 ">
            <h3 className="text-white lg:text-4xl md:text-3xl font-bold">
              от 60 000 ₽
            </h3>
            <p className="text-white lg:text-2xl md:text-xl text-xs">
              стоимость квадратного метра
            </p>
          </div>
        </div>

        <div className="w-full">
          <img
            className="w-full h-full object-cover min-h-[130px]"
            src="/images/home/slider/home.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};
