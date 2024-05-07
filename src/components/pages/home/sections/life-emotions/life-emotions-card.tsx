import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export const LifeEmotionsCard = (props: IProps) => {
  return (
    <div className="flex gap-5 w-1/2">
      <div className="flex-1">
        <img
          src={props.imageUrl}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={cn(
          'flex flex-col flex-1',
          props.reverse ? 'justify-end' : 'justify-start'
        )}
      >
        <h2 className="text-h2 mb-5">{props.title}</h2>
        <p className="text-p">{props.description}</p>
      </div>
    </div>
  );
};
