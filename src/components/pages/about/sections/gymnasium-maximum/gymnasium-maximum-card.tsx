import { GymnasiumMaximumList } from './gymnasium-maximum-list.tsx';
import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  title: string;
  items: string[];
  imageUrl: string;
  isReverse?: boolean;
}

export const GymnasiumMaximumCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex items-stretch gap-5 flex-row',
        props.isReverse && 'flex-row-reverse'
      )}
    >
      <img className="w-1/2 object-cover" src={props.imageUrl} alt="Image" />
      <GymnasiumMaximumList title={props.title} items={props.items} />
    </div>
  );
};
