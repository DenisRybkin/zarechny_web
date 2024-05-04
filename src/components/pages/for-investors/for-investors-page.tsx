import { Intro, Preferences, ResidentReceives } from './sections';
import { Relocate } from '../../shared/relocate';

export const ForInvestorsPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Intro />
      <Preferences />
      <ResidentReceives />
      <Relocate title="Хотите узнать больше?" imageUrl="/images/form/1.jpg" />
    </div>
  );
};
