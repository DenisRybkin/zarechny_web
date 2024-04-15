import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RoutesKeys } from '../../../lib/constants';
import { Button } from '../../ui/button.tsx';
import { navigationLinks } from '../misc/navigation-links.ts';
import { cn } from '../../../lib/utils/tools';

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickLogo = () => navigate(RoutesKeys.home);

  return (
    <nav className="flex w-full px-4 justify-between items-center">
      <img
        onClick={onClickLogo}
        src="/logo.svg"
        alt="Logo"
        className="w-[65px] h-[50px] lg:w-[106px] lg:h-[81px]"
      />
      <div className="flex items-center lg:gap-14 md:gap-6 gap-2">
        <div className="flex flex-wrap items-center lg:gap-x-10 md:gap-x-5 gap-x-2">
          {navigationLinks.map((item, index) => (
            <Link
              key={index}
              className={cn(
                'text-bown-t hover:underline hover:decoration-2 hover:text-secondary',
                pathname == item.route &&
                  'text-secondary underline decoration-2'
              )}
              to={item.route}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button>Переехать в Заречный</Button>
      </div>
    </nav>
  );
};
