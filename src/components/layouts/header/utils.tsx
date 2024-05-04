import { AnchorsKeys, RoutesKeys } from '../../../lib/constants';
import { ReactNode } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu.tsx';
import { cn } from '../../../lib/utils/tools';
import {
  INavigationLinksAndAnchors,
  navigationAnchors,
} from '../misc/navigation-links.ts';
import { AnchorLink } from '../../shared/anchor-link';
import { useLocation, useNavigate } from 'react-router-dom';

const ListItem = ({
  item,
}: {
  item: INavigationLinksAndAnchors & {
    anchor: AnchorsKeys;
  };
}) => {
  const { pathname, hash } = useLocation();
  return (
    <li>
      <AnchorLink
        className={cn(
          'text-brown-t hover:text-secondary lg:text-xl text-md hover:underline hover:decoration-2 transition-all',
          pathname == item.route &&
            hash?.split('#')[1] == item.anchor &&
            'underline decoration-2 text-secondary'
        )}
        anchor={item.anchor}
        route={RoutesKeys.about}
      >
        {item.label}
      </AnchorLink>
    </li>
  );
};
ListItem.displayName = 'ListItem';

export const navigationConditions: {
  route: RoutesKeys;
  content: () => ReactNode;
}[] = [
  {
    route: RoutesKeys.about,
    content: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { pathname } = useLocation();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const navigate = useNavigate();

      return (
        <NavigationMenu key="NavigationMenu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => navigate(RoutesKeys.about)}
                className={cn(
                  pathname == RoutesKeys.about &&
                    'text-secondary underline decoration-2'
                )}
              >
                О городе
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-5 p-8 grid-cols-2 w-96">
                  {navigationAnchors.map(anchor => (
                    <ListItem key={anchor.label} item={anchor} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
    },
  },
];
