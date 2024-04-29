import { useCarousel } from '../../../../ui/carousel.tsx';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from '../../../../../assets/icons/components';
import { Button } from '../../../../ui/button.tsx';

interface IProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const StoriesItem = (props: IProps) => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex flex-col">
      <h1 className="lg:mb-24 mb-10 flex flex-wrap font-tenor text-primary text-left lg:text-6xl md:text-5xl sm:text-4xl text-4xl">
        Истории жителей&nbsp;
        <span className="text-brown-t">Заречного</span>
      </h1>
      <div className="lg:p-8 bg-litegray flex lg:flex-row flex-col lg:gap-5 ga-3 items-stretch">
        <img className="lg:w-1/2" src={props.imageUrl} alt="Image" />
        <div className="lg:p-0 p-4 flex flex-col justify-between">
          <div className="lg:mt-5">
            <h2 className="text-2xl text-brown-t font-semibold mb-5">
              {props.title}
            </h2>
            <p className="text-brown-t lg:text-xl text-base">
              {props.description}
            </p>
          </div>
          <div className="flex items-center gap-3 self-end">
            {canScrollPrev && (
              <Button
                size="icon"
                variant="ghost"
                onClick={scrollPrev}
                className="hover:opacity-70 transition-all"
              >
                <ArrowLeftIcon />
              </Button>
            )}
            {canScrollNext && (
              <Button
                size="icon"
                variant="ghost"
                onClick={scrollNext}
                className="hover:opacity-70 transition-all"
              >
                <ArrowRightIcon />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
