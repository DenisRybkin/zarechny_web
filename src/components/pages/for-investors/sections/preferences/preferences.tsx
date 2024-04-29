export const Preferences = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex leading-10 flex-wrap font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          <span className="text-secondary">Преференции&ensp;</span>
          <span className="text-brown-t">для резидентов</span>
        </h1>
      </div>
      <div className="flex flex-col gap-5 items-stretch">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="flex flex-col lg:w-1/2 bg-litegray lg:px-5 px-4 lg:pb-5 pb-4 lg:py-10 py-5">
            <h2 className="text-brown-t text-2xl font-semibold mb-5">ТОСЭР</h2>
            <p className="lg:text-xl text-base text-brown-t">
              Территория опережающего социально-экономического развития — часть
              территории ЗАТО, на которой установлен особый правовой режим
              осуществления предпринимательской и иной деятельности.
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:w-1/2 bg-litegray p-5">
            <h2 className="text-brown-t text-2xl flex lg:items-end items-start font-semibold lg:mb-5 mb-2">
              Земельный налог&ensp;
              <h1 className="flex leading-7 flex-wrap font-tenor font-medium text-primary lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
                0%
              </h1>
            </h2>
            <p className="lg:text-xl text-base text-brown-t">
              Территория опережающего социально-экономического развития — часть
              территории ЗАТО, на которой установлен особый правовой режим
              осуществления предпринимательской и иной деятельности.
            </p>
            <p className="lg:text-base text-sm text-[#767676] mt-5">
              В соответствии со ст. 27 ЗК РФ земельные участки в границах ЗАТО
              ограничены в обороте.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse items-stretch gap-5">
          <div className="lg:w-1/3 px-5 py-7 bg-litegray">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl text-brown-t font-semibold">
                Налог на имущество
              </h2>
              <div className="flex flex-col">
                <p className="text-brown-t lg:text-xl text-base mb-8">
                  <span className="leading-7 font-medium flex-wrap font-tenor text-primary lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
                    0%
                  </span>
                  &ensp;налоговая ставка по налогу в бюджеты субъектов РФ — в
                  течение 5 налоговых периодов, начиная с налогового периода, в
                  котором указанное имущество поставлено на учёт в качестве
                  объекта основных средств
                </p>
                <p className="text-brown-t lg:text-xl text-base mb-8">
                  <span className="leading-7 font-medium flex-wrap font-tenor text-primary lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
                    1.1%
                  </span>
                  &ensp;в течение следующих 5 налоговых периодов.
                </p>
                <p className="lg:text-base text-sm text-[#767676] mt-3">
                  Ст. 2-4 Закона Пензенской области от 27.11.2003 г. № 544-ЗПО
                  «Об установлении и введении в действие на территории
                  Пензенской области налога на имущество организаций».
                </p>
              </div>
            </div>
          </div>
          <img
            className="lg:w-2/3 object-cover"
            src="/images/for-investors/preferences/1.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};
