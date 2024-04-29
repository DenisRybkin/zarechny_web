import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  imageUrl: string;
  description: string;
  className?: string;
}

export const RestCard = (props: IProps) => {
  return (
    <div className={cn('flex flex-col gap-5', props.className)}>
      <img src={props.imageUrl} alt="Image" className="object-cover" />
      <p className="lg:text-xl text-brown-t font-semibold text-sm text-left">
        {props.description}
      </p>
    </div>
  );
};
