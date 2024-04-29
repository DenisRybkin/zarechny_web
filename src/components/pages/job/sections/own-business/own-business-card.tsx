import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  title: string;
  description: string;
  className?: string;
  textClassName?: string;
}

export const OwnBusinessCard = (props: IProps) => {
  return (
    <div
      className={cn('flex flex-col lg:p-7 p-4 lg:gap-5 gap-3', props.className)}
    >
      <h2
        className={cn('lg:text-2xl text-lg font-semibold', props.textClassName)}
      >
        {props.title}
      </h2>
      <p className={cn('text-p', props.textClassName)}>{props.description}</p>
    </div>
  );
};
