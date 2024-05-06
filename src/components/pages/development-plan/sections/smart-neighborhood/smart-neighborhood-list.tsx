import { cn } from '../../../../../lib/utils/tools';
import { ListItemIcon } from '../../../../../assets/icons/components';

interface IProps {
  title: string;
  items: string[];
  isReverse?: boolean;
  titleMt?: boolean;
}

export const SmartNeighborhoodList = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex flex-col  lg:col-span-1 col-span-2',
        props.isReverse && 'justify-end'
      )}
    >
      <h2
        className={cn(
          'lg:text-2xl md:text-xl text-lg text-left font-semibold mb-2 lg:mb-8 text-brown-t',
          props.titleMt && 'mt-5'
        )}
      >
        {props.title}
      </h2>
      <div className="flex flex-col lg:w-3/4 lg:gap-5 gap-1">
        {props.items.map((item, index) => (
          <div key={index} className="flex flex-row items-start gap-3">
            <div className="">
              <ListItemIcon color="#557028" />
            </div>
            <p className="lg:text-xl text-base text-left text-wrap">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
