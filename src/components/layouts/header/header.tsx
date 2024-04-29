import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnchorsKeys, RoutesKeys } from '../../../lib/constants';
import { Button } from '../../ui/button.tsx';
import { navigationLinks } from '../misc/navigation-links.ts';
import { cn } from '../../../lib/utils/tools';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './sidebar.css';
import { navigationConditions } from './utils.tsx';

const MobileSidebar = (props: { isOpen: boolean; onClose: () => void }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onClickLogo = () => navigate(RoutesKeys.home);

  const routeClickHandler =
    (route: string) => (event: React.SyntheticEvent) => {
      navigate(route);
      event.preventDefault();
      props.onClose();
    };

  return (
    <>
      <div
        className={cn(
          'fixed flex flex-col gap-2 h-screen bg-brown w-0 z-30 transition-all overflow-hidden',
          props.isOpen && 'w-64'
        )}
      >
        <div className="flex mt-5 items-center gap-2 justify-between">
          <img
            onClick={onClickLogo}
            src="/images/logo2.png"
            className="w-40 mx-auto  cursor-pointer transition-all hover:scale-110"
            alt="Logo"
          />
          <Button onClick={props.onClose} variant="ghost">
            <X className="text-white" />
          </Button>
        </div>
        <div className="flex flex-col gap-3 pl-5 mt-5">
          {navigationLinks.map((item, index) => (
            <Link
              key={index}
              className={cn(
                'text-white text-lg hover:underline hover:decoration-2 hover:text-secondary transition-all',
                pathname == item.route &&
                  '!text-primary !hover:text-primary underline decoration-2'
              )}
              onClick={routeClickHandler(item.route)}
              to=""
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      {props.isOpen && (
        <div
          onClick={props.onClose}
          className="navigation-sidebar__background-mask absolute z-20 w-full inset-0 "
        />
      )}
    </>
  );
};

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const onClickLogo = () => navigate(RoutesKeys.home);

  const handleRelocate = () => {
    navigate(RoutesKeys.home + '#' + AnchorsKeys.relocate);
  };

  const handleOpenDrawer = () => setIsOpenDrawer(true);
  const handleCloseDrawer = () => setIsOpenDrawer(false);

  return (
    <>
      <MobileSidebar isOpen={isOpenDrawer} onClose={handleCloseDrawer} />
      <nav className="main-wrapper flex w-full px-4 justify-between items-center m-auto">
        <img
          onClick={onClickLogo}
          src="/logo.svg"
          alt="Logo"
          className="w-[65px] h-[50px] lg:w-[106px] lg:h-[81px] cursor-pointer transition-all hover:scale-110"
        />
        <div className="flex items-center lg:gap-14 md:gap-6 gap-2">
          <div className="hidden sm:flex flex-wrap items-center lg:gap-x-10 md:gap-x-5 gap-x-2">
            {navigationLinks.map((item, index) => {
              const condition = navigationConditions.find(
                condition => condition.route == item.route
              );
              if (condition) return condition.content();
              return (
                <Link
                  key={index}
                  className={cn(
                    'text-bown-t lg:text-xl text-md hover:underline hover:decoration-2 hover:text-secondary',
                    pathname == item.route &&
                      'text-secondary underline decoration-2'
                  )}
                  to={item.route}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <Button
            onClick={handleRelocate}
            size="lg"
            className="lg:px-8 rounded-2xl"
          >
            Переехать в Заречный
          </Button>
          <Button
            onClick={handleOpenDrawer}
            className="sm:hidden"
            variant="ghost"
          >
            <Menu className="text-primary" />
          </Button>
        </div>
      </nav>
    </>
  );
};
