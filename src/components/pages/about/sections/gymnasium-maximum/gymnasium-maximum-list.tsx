import { ListItemIcon } from '../../../../../assets/icons/components';
import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  title: string;
  items: string[];
  isReverse?: boolean;
  titleMt?: boolean;
}

export const GymnasiumMaximumList = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:gap-5 gap-2',
        props.isReverse && 'justify-end'
      )}
    >
      <h2
        className={cn(
          'sm:text-2xl lg:text-2xl md:text-xl sm:text-left text-center font-semibold mb-2 lg:mb-8 text-brown-t',
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
            <p className="lg:text-xl text-sm text-left text-wrap">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
