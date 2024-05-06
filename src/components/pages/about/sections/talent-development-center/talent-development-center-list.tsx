import { ListItemIcon } from '../../../../../assets/icons/components';
import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  title: string;
  items: string[];
  isReverse?: boolean;
  titleMt?: boolean;
}

export const TalentDevelopmentCenterList = (props: IProps) => {
  return (
    <div className={cn('flex flex-col', props.isReverse && 'justify-end')}>
      <h2
        className={cn(
          'sm:text-2xl lg:text-2xl md:text-xl text-left font-semibold lg:mb-5 text-brown-t',
          props.titleMt && 'mt-5'
        )}
      >
        {props.title}
      </h2>
      <div className="flex flex-col lg:gap-2 gap-1">
        {props.items.map((item, index) => (
          <div key={index} className="flex flex-row items-start lg:gap-3 gap-2">
            <div className="">
              <ListItemIcon />
            </div>
            <p className="lg:text-xl text-sm text-left text-wrap break-words">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
