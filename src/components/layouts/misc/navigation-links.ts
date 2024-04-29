import {
  AnchorsKeys,
  RoutesKeys,
  RoutesKeysType,
} from '../../../lib/constants';

interface INavigationLink {
  route: RoutesKeysType;
  label: string;
}

// interface INavigationAnchor {
//   route: AnchorsKeys;
//   label: string;
// }

export interface INavigationLinksAndAnchors {
  route: string;
  label: string;
}

export const navigationAnchors: (INavigationLinksAndAnchors & {
  anchor: AnchorsKeys;
})[] = [
  {
    label: 'Образование',
    route: RoutesKeys.about,
    anchor: AnchorsKeys.education,
  },
  {
    label: 'Медицина',
    route: RoutesKeys.about,
    anchor: AnchorsKeys.medicine,
  },
  {
    label: 'Безопасность',
    route: RoutesKeys.about,
    anchor: AnchorsKeys.safety,
  },
  {
    label: 'Спорт',
    route: RoutesKeys.about,
    anchor: AnchorsKeys.sport,
  },
  {
    label: 'Отдых',
    route: RoutesKeys.about,
    anchor: AnchorsKeys.rest,
  },
];

export const navigationLinks: INavigationLink[] = [
  {
    route: '/about',
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
    route: '/development-plan',
    label: 'План развития',
  },
  {
    route: '/investors',
    label: 'Инвесторам',
  },
];
