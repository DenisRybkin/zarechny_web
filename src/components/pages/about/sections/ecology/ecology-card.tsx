import { cn } from '../../../../../lib/utils/tools';

interface IProps {
  title: string;
  description: string;
  imageUrl: string;
  isReverse?: boolean;
}

export const EcologyCard = (props: IProps) => {
  return (
    <div
      className={cn(
        'flex items-start gap-5 lg:flex-row flex-col-reverse',
        props.isReverse && 'lg:flex-row-reverse flex-col-reverse'
      )}
    >
      <img className="lg:w-2/3" src={props.imageUrl} alt="Image" />
      <div className="lg:gap-5 gap-3">
        <h2 className="lg:text-2xl text-xl text-left font-semibold lg:mb-5 mb-4 text-brown-t">
          {props.title}
        </h2>
        <p className="lg:text-xl text-base text-left">{props.description}</p>
      </div>
    </div>
  );
};
