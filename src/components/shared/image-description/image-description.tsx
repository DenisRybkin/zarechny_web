import { cn } from '../../../lib/utils/tools';

interface IProps {
  imageUrl: string;
  descriptions: [
    string | [string, string],
    string | [string, string],
    string | [string, string]
  ];
}

interface IDescriptionItemProps {
  className: string;
  label: string | [string, string];
}

const DescriptionItem = (props: IDescriptionItemProps) => {
  return (
    <div
      className={cn(
        'md:h-[67px] md:w-[411px] flex flex-col text-white justify-center md:py-3 sm:py-2 py-1 md:left-[20px] left-[10px] z-10  font-semibold md:!leading-10',
        props.className,
        Array.isArray(props.label)
          ? 'md:h-[95px] md:px-5 px-2'
          : 'xl:px-10 lg:px-8 md:px-5 px-2 lg:py-4'
      )}
    >
      {Array.isArray(props.label) ? (
        <>
          <h2 className="md:text-2xl sm:text-xl text-sm">{props.label[0]}</h2>
          <p className="lg:text-xl text-xs font-medium">{props.label[1]}</p>
        </>
      ) : (
        <h2 className="text-white md:text-xl sm:text-lg text-sm font-medium">
          {props.label}
        </h2>
      )}
    </div>
  );
};

export const ImageDescription = (props: IProps) => {
  return (
    <div className="relative w-full">
      <img src={props.imageUrl} className="w-full" alt="Image" />
      <div className="absolute lg:top-[37px] md:top-[20px] top-[10px] lg:left-[20px] md:left-[15px] left-[5px] flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-4">
        <DescriptionItem
          className={'bg-primary'}
          label={props.descriptions[0]}
        />
        <DescriptionItem className={'bg-brown'} label={props.descriptions[1]} />
        <DescriptionItem
          className={'bg-secondary'}
          label={props.descriptions[2]}
        />
      </div>
    </div>
  );
};
