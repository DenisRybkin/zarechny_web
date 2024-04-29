import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  bgClassName?: string;
  title: string;
  description: string;
}

export const LivingComfortablyCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between sm:p-5 p-3 lg:h-[220px] gap-1',
        !props.title.length && !props.description.length && 'hidden sm:flex',
        props.bgClassName
      )}
    >
      <h2
        className={cn(
          'sm:text-2xl text-lg font-semibold',
          props.bgClassName?.includes('bg-litegray')
            ? 'text-brown-t'
            : 'text-white'
        )}
      >
        {props.title}
      </h2>
      <p
        className={cn(
          'text-base lg:text-xl',
          props.bgClassName?.includes('bg-litegray')
            ? 'text-brown-t'
            : 'text-white'
        )}
      >
        {props.description}
      </p>
    </div>
  );
};
