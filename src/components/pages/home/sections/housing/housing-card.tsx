import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  isReverse?: boolean;
}

export const HousingCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex items-start gap-5',
        props.isReverse && 'flex-row-reverse'
      )}
    >
      <div className="w-[50%] h-full">
        <img className="object-cover h-full" src={props.imageUrl} alt="Image" />
      </div>
      <div className={cn('w-[50%] h-full flex flex-col')}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-left font-semibold text-brown-t sm:mb-5">
          {props.title}
        </h2>
        <p className="sm:text-lg md:text-2xl text-md sm:text-left text-brown-t text-left">
          {props.description}
        </p>
      </div>
    </div>
  );
};
