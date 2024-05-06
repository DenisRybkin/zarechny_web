import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export const LifeEmotionsCard = (props: IProps) => {
  return (
    <div className="flex gap-5 ">
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
        <h2 className="sm:text-2xl text-xl font-semibold mb-5 text-brown-t">
          {props.title}
        </h2>
        <p className="sm:text-lg lg:text-чд md:text-xl text-sm text-brown-t">
          {props.description}
        </p>
      </div>
    </div>
  );
};
