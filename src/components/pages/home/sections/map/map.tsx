import { YMaps, Map as YandexMap } from '@pbe/react-yandex-maps';

//lat: 53.19362, lng: 45.165534

export const Map = () => {
  return (
    <div className="px-5 lg:mb-44 mb-20">
      <h1 className="font-tenor lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-brown-t md:mb-16 mb-8">
        Удобное зонирование города
      </h1>
      <YMaps>
        <YandexMap
          defaultState={{
            center: [53.19362, 45.165534],
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
          className="w-full h-[500px]"
        />
      </YMaps>
    </div>
  );
};
