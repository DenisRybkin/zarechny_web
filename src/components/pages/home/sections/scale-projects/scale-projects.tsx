export const ScaleProjects = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-row items-center md:mb-16 mb-8">
        <h1 className="flex flex-wrap font-tenor text-brown-t  lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Участвуйте в&nbsp;
          <span className="text-primary">масштабных проектах</span>
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col items-stretch w-full gap-5">
        <div className="flex flex-col justify-between lg:w-1/3 lg:gap-40 gap-7">
          <h3 className="text-brown-t lg:text-2xl text-xl">
            Работайте на предприятиях федерального значения
          </h3>
          <img src="/images/home/scale-projects/1.jpg" alt="Image" />
        </div>
        <div className="flex flex-col lg:w-1/3 gap-7">
          <img src="/images/home/scale-projects/2.jpg" alt="Image" />
          <p className="text-brown-t text-xl">
            Получите бронь от мобилизации и военной службы
          </p>
        </div>
        <div className="flex flex-col justify-between lg:w-1/3 gap-7">
          <div className="flex flex-col gap-7">
            <img src="/images/home/scale-projects/3.jpg" alt="Image" />
            <h3 className="text-brown-t text-xl">
              Поменяйте профессию или продолжайте развиваться в своей сфере
            </h3>
          </div>
          <img src="/images/home/scale-projects/4.jpg" alt="Image" />
        </div>
      </div>
    </div>
  );
};
