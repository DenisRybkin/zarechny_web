import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  title: string;
  subTitle: string;
  description: string;
  isReversed?: boolean;
  className?: string;
}

export const ChildDevelopmentCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex flex-col xl:justify-start justify-center items-center xl:items-start',
        props.className
      )}
    >
      <div className="flex sm:flex-col justify-between w-full sm:text-left sm:gap-0 gap-2">
        <h1 className="font-tenor text-secondary xl:text-left sm:text-6xl text-3xl my-4">
          {props.title}
        </h1>
        <h2 className="text-h2 sm:text-left text-center sm:mb-16 md:mb-6 lg:mb-16 text-brown-t">
          {props.subTitle}
        </h2>
      </div>
      <p className="text-p sm:text-left text-center">{props.description}</p>
    </div>
  );
};
