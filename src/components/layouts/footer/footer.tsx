import {
  navigationAnchors,
  navigationLinks,
} from '../misc/navigation-links.ts';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils/tools';
import {
  AddressIcon,
  MailIcon,
  TelegramIcon,
  VkIcon,
} from '../../../assets/icons/components';
import { AnchorLink } from '../../shared/anchor-link';
import { RoutesKeys } from '../../../lib/constants';

export const Footer = () => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const onClickLogo = () => navigate(RoutesKeys.home);

  return (
    <div className="w-full bg-secondary lg:py-20 py-10 px-16">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <img
          onClick={onClickLogo}
          src="/images/logo2.png"
          className="h-12 lg:col-auto col-span-2 m-auto cursor-pointer transition-all hover:scale-110"
          alt="Logo"
        />
        <div className="flex flex-col lg:gap-4 gap-2">
          {navigationLinks.map((item, index) => (
            <Link
              key={index}
              className={cn(
                'text-white lg:text-xl text-md hover:underline hover:decoration-2 transition-all',
                pathname == item.route && 'underline decoration-2'
              )}
              to={item.route}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col lg:gap-4 gap-2">
          {navigationAnchors.map((item, index) => (
            <AnchorLink
              key={index}
              className={cn(
                'text-white lg:text-xl text-md hover:underline hover:decoration-2 transition-all',
                pathname == item.route &&
                  hash?.split('#')[1] == item.anchor &&
                  'underline decoration-2 text-primary'
              )}
              anchor={item.anchor}
              route={RoutesKeys.about}
            >
              {item.label}
            </AnchorLink>
          ))}
        </div>
        <div className="flex flex-col lg:items-start items-center gap-4 lg:col-auto col-span-2">
          <a
            href="mailto:adm@zarechny.zato.ru"
            className="flex w-full justify-start items-center gap-2 text-white"
            target="_blank"
          >
            <MailIcon />
            <p>adm@zarechny.zato.ru</p>
          </a>
          <div className="flex justify-start items-start gap-2 text-white">
            <AddressIcon />
            <div className="inline-flex flex-col">
              <p className="">Пензенская обл, г. Заречный,</p>
              <p className="">пр-кт. 30-летия Победы, д. 27, 442960</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#">
              <TelegramIcon />
            </a>
            <a href="#">
              <VkIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
