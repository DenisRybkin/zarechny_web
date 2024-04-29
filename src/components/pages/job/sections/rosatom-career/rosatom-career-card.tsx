import { ReactNode } from 'react';
import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  label: string;
  className?: string;
  extraContent?: ReactNode;
}

export const RosatomCareerCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'lg:px-7 lg:py-8 px-3 py-4 relative lg:min-h-32',
        props.className
      )}
    >
      <h2
        className={cn(
          'lg:text-2xl text-lg text-white break-words',
          props.className?.includes('bg-litegray') && 'text-brown-t',
          props.extraContent && 'w-[80%]'
        )}
      >
        {props.label}
      </h2>
      {props.extraContent}
    </div>
  );
};
