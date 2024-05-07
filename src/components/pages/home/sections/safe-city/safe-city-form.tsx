import { Button } from '../../../../ui/button.tsx';
import { cn } from '../../../../../lib/utils/tools';
import { AnchorsKeys } from '../../../../../lib/constants';

interface IProps {
  className: string;
}

export const SafeCityForm = (props: IProps) => {
  const handleScrollTo = () => {
    const anchorContent: HTMLElement | null = document.getElementById(
      AnchorsKeys.relocate
    );
    if (anchorContent) {
      anchorContent.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => anchorContent.removeAttribute('tabindex'), 1000);
    }
  };

  return (
    <div
      className={cn('flex flex-col justify-between h-full', props.className)}
    >
      <h2 className="text-h2 xl:!leading-9">
        Заречный — воплощённая мечта о жизни на частной территории со всеми
        преимуществами большого города.
      </h2>
      <Button
        className="w-full xl:p-4 p-2 rounded-xl font-semibold text-sm"
        variant="secondary"
        size="lg"
        onClick={handleScrollTo}
      >
        Оставить завявку
      </Button>
    </div>
  );
};
