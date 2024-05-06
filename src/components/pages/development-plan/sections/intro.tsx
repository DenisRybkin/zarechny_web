export const Intro = () => {
  return (
    <div className="flex flex-col lg:mb-44 mb-8">
      <div className="flex flex-col px-5 md:mb-7 mb-3">
        <h1 className="font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl lg: text-4xl">
          Жизнь города&nbsp;
          <span className="text-primary">в будущем</span>
        </h1>
        <h2 className="lg:text-2xl text-xl md:w-1/2 lg:w-[35%] self-end text-left font-medium mb-5 mt-5 text-brown-t">
          Переезжайте в Заречный, чтобы стать участником грандиозных изменений.
        </h2>
      </div>
      <img src="/images/development-plan/1.jpg" alt="Image" />
    </div>
  );
};
