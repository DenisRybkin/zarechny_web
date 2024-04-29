import {
  IntroSection,
  AdvantageCarousel,
  RosatomCity,
  LivingComfortably,
  LifeEmotions,
  ChildDevelopment,
  Climate,
  SafeCity,
  CloseNature,
  Housing,
  ScaleProjects,
  RosatomEnterprises,
  Map,
  Stories,
  Relocate,
} from './sections';

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <IntroSection />
      <AdvantageCarousel />
      <RosatomCity />
      <LivingComfortably />
      <LifeEmotions />
      <ChildDevelopment />
      <SafeCity />
      <Climate />
      <CloseNature />
      <Housing />
      <ScaleProjects />
      <RosatomEnterprises />
      <Map />
      <Stories slides={Array.from(Array(8).keys())} options={{ loop: true }} />
      <Relocate title="Хотите узнать больше о переезде?" />
    </div>
  );
};
