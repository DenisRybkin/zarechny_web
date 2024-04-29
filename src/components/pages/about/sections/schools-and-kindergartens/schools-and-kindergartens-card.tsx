import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  className?: string;
  imageUrl: string;
  title: string;
  subTitle: string;
  description: string;
  isCenter?: boolean;
}

export const SchoolsAndKindergartensCard = (props: IProps) => {
  return (
    <div className="w-full flex flex-row gap-5 items-stretch">
      <img className="w-1/2 object-cover" src={props.imageUrl} alt="Image" />
      <div
        className={cn(
          'flex flex-col w-1/2',
          props.isCenter && 'h-full justify-center'
        )}
      >
        <div className="flex lg:flex-col flex-row items-center justify-center lg:justify-start lg:items-start gap-2">
          <h1 className="font-tenor text-primary text-left sm:text-6xl text-3xl mt-3">
            {props.title}
          </h1>
          <h2 className="sm:text-2xl lg:text-2xl md:text-xl sm:text-left text-center leading-4 font-semibold sm:mb-16 md:mb-6 lg:mb-16 text-brown-t">
            {props.subTitle}
          </h2>
        </div>
        <p className="sm:text-xl text-sm sm:text-left text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
};
