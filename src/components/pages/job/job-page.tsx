import {
  Intro,
  NuclearEnterprises,
  OwnBusiness,
  RosatomCareer,
} from './sections';

export const JobPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Intro />
      <RosatomCareer />
      <NuclearEnterprises />
      <OwnBusiness />
    </div>
  );
};
