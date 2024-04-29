import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../../../ui/carousel.tsx';
import Autoplay from 'embla-carousel-autoplay';
import { Ecology, Housing, Infrastructure, Security } from './items';

export const AdvantageCarousel = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full mt-11 px-5 lg:mb-40 mb-20"
    >
      <CarouselContent withDots className="items-end">
        <CarouselItem>
          <Ecology />
        </CarouselItem>
        <CarouselItem>
          <Housing />
        </CarouselItem>
        <CarouselItem>
          <Infrastructure />
        </CarouselItem>
        <CarouselItem>
          <Security />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
