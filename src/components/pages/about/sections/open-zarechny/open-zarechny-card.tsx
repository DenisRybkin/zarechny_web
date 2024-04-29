import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  title: string;
  description: string;
  imageUrl: string;
  isReverse?: boolean;
}

export const OpenZarechnyCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between lg:gap-16 gap-2',
        props.isReverse && 'lg:flex-col-reverse'
      )}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-h2-m font-semibold lg:mb-5">{props.title}</h2>
        <p className="text-p">{props.description}</p>
      </div>
      <img
        className="w-full h-full object-cover"
        src={props.imageUrl}
        alt="Image"
      />
    </div>
  );
};
