import { Intro, RelocateOptions, Stories } from './sections';
import { Relocate } from '../../shared/relocate';

export const RelocatePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Intro />
      <RelocateOptions />
      <Stories />
      <Relocate title="Хотите узнать больше о переезде?" />
    </div>
  );
};
