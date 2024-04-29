import { ListItemIcon } from '../../../../../assets/icons/components';
import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  items: string[];
  isReverse?: boolean;
}

export const SportLifeList = (props: IProps) => {
  return (
    <div
      className={cn('flex flex-col gap-5', props.isReverse && 'justify-end')}
    >
      <div className="flex flex-col gap-3">
        {props.items.map((item, index) => (
          <div key={index} className="flex flex-row items-start gap-3">
            <div className="">
              <ListItemIcon />
            </div>
            <p className="lg:text-xl text-sm text-left text-wrap">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
