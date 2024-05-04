export const ResidentReceives = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex leading-10 flex-wrap font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
          <span className="text-brown-t">Резидент ТОСЭР&ensp;</span>
          <span className="text-secondary">получает</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl text-brown-t font-semibold lg:w-2/3">
            Возмещение налога на добавленную стоимость
          </h2>
          <p className="text-p lg:w-2/3">
            Возможность заявительного порядка возмещения налога: Зачёт (возврат)
            суммы налога, заявленной к возмещению в налоговой декларации, до
            завершения камеральной проверки.
          </p>
        </div>
        <img src="/images/for-investors/resident-recevies/1.jpg" alt="Image" />
        <img src="/images/for-investors/resident-recevies/2.jpg" alt="Image" />
        <div className="flex flex-col gap-5 justify-center">
          <h2 className="text-2xl text-brown-t font-semibold lg:w-2/3">
            Тарифы страховых взносов
          </h2>
          <div className="flex flex-col">
            <h2 className="text-primary font-tenor lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
              7,6%
            </h2>
            <p className="text-p">Всего взносов</p>
          </div>
          <div className="lg:mt-5 flex flex-col">
            <p className="text-p">Из них: ПФ РФ — 6%,</p>
            <p className="text-p">ФСС РФ — 1,5%, ФФОМС — 0,1%.</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-2xl font-semibold text-brown-t">
            Налог на прибыль организаций
          </h2>
          <div className="flex flex-col gap-7 lg:w-2/3">
            <div className="flex items-center gap-6">
              <h2 className="text-primary font-tenor lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
                0%
              </h2>
              <p className="text-p">
                в федеральный бюджет в течение 5 налоговых периодов
              </p>
            </div>
            <div className="flex items-center gap-6">
              <h2 className="text-primary font-tenor lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
                5%
              </h2>
              <p className="text-p">
                в бюджет Пензенской области в течение 5 налоговых периодов
              </p>
            </div>
            <div className="flex items-center gap-6">
              <h2 className="text-primary font-tenor lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
                10%
              </h2>
              <p className="text-brown-t lg:text-xl text-base">
                в бюджет области в течение следующих 5 налоговых периодов
              </p>
            </div>
          </div>
        </div>
        <img src="/images/for-investors/resident-recevies/3.jpg" alt="Image" />
      </div>
    </div>
  );
};
