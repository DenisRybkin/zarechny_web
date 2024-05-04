export const Ecology = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col gap-4 xl:mb-16 md:mb-8 mb-4">
        <h1 className="font-tenor text-secondary leading-none lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Благоприятная экология
        </h1>
        <p className="md:text-2xl text-lg text-right font-inter text-brown-t">
          Контроль за чистотой воздуха и воды
        </p>
      </div>
      <div className="flex items-stretch lg:gap-x-5 gap-x-1 w-full">
        <div className="flex flex-col lg:p-7 p-2 bg-primary justify-start items-start w-[50%] lg:gap-y-3">
          <h3 className="text-white lg:text-4xl md:text-3xl font-bold">
            16 место
          </h3>
          <p className="text-white lg:text-3xl md:text-xl text-sm">
            в рейтинге качества городской среды среди малых городов России
          </p>
        </div>
        <div className="w-full">
          <img
            className="w-full h-full object-cover min-h-[130px]"
            src="/images/home/slider/ecology.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};
