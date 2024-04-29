import { cn } from '../../../../../lib/utils/tools';
import { SportLifeList } from './card-life-list.tsx';

interface IProps {
  items: string[];
  imageUrl: string;
  isReverse?: boolean;
  isTextReverse?: boolean;
}

export const SportLifeCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex items-stretch gap-6 flex-row',
        props.isReverse && 'flex-row-reverse justify-between'
      )}
    >
      <img className="w-1/2 object-cover" src={props.imageUrl} alt="Image" />
      <SportLifeList items={props.items} isReverse={props.isTextReverse} />
    </div>
  );
};
