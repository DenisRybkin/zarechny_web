import { RelocateForm } from './relocate-form.tsx';
import { AnchorsKeys } from '../../../lib/constants';

interface IProps {
  title: string;
  onSubmit?: () => void;
  imageUrl?: string;
}

export const Relocate = (props: IProps) => {
  return (
    <div
      id={AnchorsKeys.relocate}
      className="flex lg:flex-row flex-col gap-5 items-stretch px-5 lg:mb-44 mb-20"
    >
      <img
        className="lg:w-[40%]"
        src={props.imageUrl ?? '/images/home/relocate-form/1.jpg'}
        alt="Image"
      />
      <div className="flex flex-col md:mb-20 mb-8 gap-5">
        <h1 className="flex flex-wrap font-tenor text-brown-t text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl lg:mb-8">
          {props.title}
        </h1>
        <h2 className="text-2xl text-brown-t lg:mb-10">
          Оставьте заявку на обратный звонок
        </h2>
        <RelocateForm />
      </div>
    </div>
  );
};
