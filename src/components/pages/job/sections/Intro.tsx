export const Intro = () => {
  return (
    <div className="flex flex-col  lg:mb-20 mb-14">
      <div className="flex px-5 flex-col md:mb-10 mb-6">
        <h1 className="font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Присоединяйтесь к командам
        </h1>
        <h1 className="font-tenor text-brown-t text-right lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          предприятий федерального значения
        </h1>
        <h2 className="lg:text-2xl text-lg text-primary text-right font-medium mb-5 mt-5 lg:mr-28">
          Работа найдется для каждого
        </h2>
      </div>
      <img src="/images/job/1.jpg" alt="Image" />
    </div>
  );
};
