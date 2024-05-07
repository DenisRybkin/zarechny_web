import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  isReversed?: boolean;
  bgClassname?: string;
  imgUrl: string;
  title: string;
  description: string;
}

export const RosatomCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex xl:gap-5 lg:gap-1 md:gap-10 gap-2 w-full justify-between items-stretch sm:h-full h-[190px]',
        props.isReversed ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <img
        src={props.imgUrl}
        className="w-1/3 lg:max-w-[30%] h-full object-cover"
        alt="Image"
      />
      <div
        className={cn(
          'px-6 sm:p-10 lg:p-6 p-2 flex flex-col justify-between items-start',
          props.bgClassname
        )}
      >
        <h2
          className={cn(
            'text-h2 ',
            !props.bgClassname?.includes('litegray') && ' !text-white'
          )}
        >
          {props.title}
        </h2>
        <p
          className={cn(
            'sm:text-lg md:text-xl text-base',
            !props.bgClassname?.includes('litegray')
              ? 'text-white'
              : 'text-brown-t'
          )}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};
