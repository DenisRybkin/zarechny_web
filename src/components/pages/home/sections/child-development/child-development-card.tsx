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
        <h1 className="font-tenor text-secondary xl:text-left sm:text-6xl text-3xl">
          {props.title}
        </h1>
        <h2 className="sm:text-2xl lg:text-2xl md:text-xl sm:text-left text-center font-semibold sm:mb-16 md:mb-6 lg:mb-16 text-brown-t">
          {props.subTitle}
        </h2>
      </div>
      <p className="sm:text-lg text-sm sm:text-left text-center">
        {props.description}
      </p>
    </div>
  );
};
