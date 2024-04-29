import { Intro, SmartNeighborhood, DevelopmentProspects } from './sections';
import { Relocate } from '../../shared/relocate';

export const DevelopmentPlanPage = () => {
  return (
    <div className="flex flex-col mt-5 w-full">
      <Intro />
      <SmartNeighborhood />
      <DevelopmentProspects />
      <Relocate
        title="Хотите узнать подробнее?"
        imageUrl="/images/form/2.png"
      />
    </div>
  );
};
