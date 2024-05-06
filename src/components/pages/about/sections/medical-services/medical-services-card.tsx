import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  description2?: string;
  className?: string;
  isReverse?: boolean;
  isTextReverse?: boolean;
}

export const MedicalServicesCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex items-stretch lg:gap-5 gap-2',
        props.isReverse && 'flex-row-reverse',
        props.className
      )}
    >
      <img className="w-[48%] object-cover" src={props.imageUrl} alt="Image" />
      <div
        className={cn(
          'flex flex-col h-full xl:justify-start justify-center items-center xl:items-start',
          props.isTextReverse && 'xl:justify-end'
        )}
      >
        <h2 className="lg:text-2xl text-xl text-left font-semibold lg:mb-5 mb-2 text-brown-t">
          {props.title}
        </h2>
        <p className="lg:text-xl text-sm text-left">{props.description}</p>
        {props.description2 && (
          <p className="lg:text-xl lg:mt-5 mt-2 text-sm text-left">
            {props.description2}
          </p>
        )}
      </div>
    </div>
  );
};
