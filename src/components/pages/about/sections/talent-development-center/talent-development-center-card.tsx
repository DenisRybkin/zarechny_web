import { cn } from '../../../../../lib/utils/tools';
import { TalentDevelopmentCenterList } from './talent-development-center-list.tsx';

interface IProps {
  title: string;
  items: string[];
  imageUrl: string;
  isReverse?: boolean;
  isTextReverse?: boolean;
  titleMt?: boolean;
}

export const TalentDevelopmentCenterCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex items-stretch gap-5 flex-row justify-between',
        props.isReverse && 'flex-row-reverse '
      )}
    >
      <img className="w-1/2 object-cover" src={props.imageUrl} alt="Image" />
      <TalentDevelopmentCenterList
        title={props.title}
        items={props.items}
        isReverse={props.isTextReverse}
        titleMt={props.titleMt}
      />
    </div>
  );
};
