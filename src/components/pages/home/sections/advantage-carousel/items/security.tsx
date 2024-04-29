export const Security = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col gap-4 xl:mb-16 md:mb-8 mb-4">
        <h1 className="font-tenor text-secondary leading-none lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          Безопасность
        </h1>
        <p className="md:text-2xl self-end md:w-1/2 text-lg text-right font-inter text-brown-t">
          Въезд только для жителей города на территорию, охраняемую
          государством.
        </p>
      </div>
      <div className="flex items-stretch lg:gap-x-5 gap-x-1 w-full">
        <div className="flex flex-col lg:p-7 p-3 bg-primary justify-start items-start w-[50%] lg:gap-y-3">
          <p className="text-white lg:text-3xl md:text-2xl text-sm font-semibold">
            Входит в топ самых безопасных городов России
          </p>
        </div>
        <div className="w-full">
          <img
            className="w-full object-cover min-h-[130px]"
            src="/images/home/slider/security.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};
