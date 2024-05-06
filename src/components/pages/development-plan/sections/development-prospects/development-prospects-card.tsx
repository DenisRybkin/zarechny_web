import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  className?: string;
  classNameText?: string;
  title: string;
  description: string;
  isReverse?: boolean;
}

export const DevelopmentProspectsCard = (props: IProps) => {
  return (
    <div
      className={cn(
        props.className,
        'lg:pt-12 lg:pb-11 lg:px-6 flex flex-col lg:gap-5 gap-2 p-3',
        props.isReverse && 'flex-col-reverse'
      )}
    >
      <h2
        className={cn(
          'lg:text-2xl md:text-xl text-xl font-semibold break-words',
          props.classNameText
        )}
      >
        {props.title}
      </h2>
      <p className={cn(props.classNameText, 'lg:text-xl text-base ')}>
        {props.description}
      </p>
    </div>
  );
};
