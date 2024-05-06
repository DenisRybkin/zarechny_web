import { InterviewCard } from './interview-card.tsx';
import { EnterpriseForm } from './enterprise-form.tsx';

export const RosatomEnterprises = () => {
  return (
    <div className="flex flex-col px-5 lg:mb-44 mb-20">
      <div className="flex flex-col md:mb-16 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl mb-7">
          Предприятия&nbsp;
          <span className="text-primary">Росатома&nbsp;</span>
          ждут вас
        </h1>
        <h3 className="lg:text-2xl text-xl text-brown-t">
          Смотрите интервью с нашими сотрудниками
        </h3>
      </div>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5">
        <InterviewCard title="Семенов Андрей" description="" />
        <InterviewCard title="Иванов Иван" description="" />
        <div className="row-span-2 lg:row-start-1 lg:col-start-3 row-start-5">
          <EnterpriseForm />
        </div>
        <InterviewCard title="Сереев Антон" description="" />
        <InterviewCard title="Авдеева Светлана" description="" />
      </div>
    </div>
  );
};
