import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  bg?: string;
  title: string;
  description: string;
}

export const SafeCityCard = (props: IProps) => {
  return (
    <div
      className={cn('flex flex-col md:p-5 p-3', props.bg && `bg-${props.bg}`)}
    >
      <h2
        className={cn(
          'text-h2 text-left font-semibold xl:mb-16 sm:mb-5',
          props.bg?.includes('litegray') ? 'text-brown-t' : '!text-white'
        )}
      >
        {props.title}
      </h2>
      <p
        className={cn(
          'xl:text-xl text-sm',
          props.bg?.includes('litegray') ? 'text-brown-t' : 'text-white'
        )}
      >
        {props.description}
      </p>
    </div>
  );
};
