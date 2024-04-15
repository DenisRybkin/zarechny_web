import { RoutesKeysType } from '../../../lib/constants';

interface INavigationLink {
  route: RoutesKeysType;
  label: string;
}

export const navigationLinks: INavigationLink[] = [
  {
    route: '/',
    label: 'О городе',
  },
  {
    route: '/job',
    label: 'Работа',
  },
  {
    route: '/relocate',
    label: 'Переезд',
  },
  {
    route: '/blog',
    label: 'Блог',
  },
  {
    route: '/contacts',
    label: 'Контакты',
  },
];
