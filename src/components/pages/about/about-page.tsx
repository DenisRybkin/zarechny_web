import {
  GymnasiumMaximum,
  Intro,
  OpenZarechny,
  SchoolsAndKindergartens,
  TalentDevelopmentCenter,
  MedicalServices,
  Safety,
  SportLife,
  Ecology,
  Rest,
} from './sections';
import { Relocate } from '../../shared/relocate';

export const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Intro />
      <OpenZarechny />
      <SchoolsAndKindergartens />
      <GymnasiumMaximum />
      <TalentDevelopmentCenter />
      <MedicalServices />
      <Safety />
      <SportLife />
      <Ecology />
      <Rest />
      <Relocate title="Планируете переехать?" />
    </div>
  );
};
