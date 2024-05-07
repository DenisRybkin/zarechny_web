import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  isReversed?: boolean;
}

export const ClimateCard = (props: IProps) => {
  return (
    <div className="flex items-start gap-5">
      <div className="w-[50%] h-full">
        <img className="object-cover h-full" src={props.imageUrl} alt="Image" />
      </div>
      <div
        className={cn(
          'w-[50%] h-full flex flex-col',
          props.isReversed && 'justify-start lg:justify-end '
        )}
      >
        <h2 className="text-h2 lg:text-2xl text-left font-semibold text-brown-t sm:mb-5">
          {props.title}
        </h2>
        <p className="text-p sm:text-left text-brown-t text-left">
          {props.description}
        </p>
      </div>
    </div>
  );
};
