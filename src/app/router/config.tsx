import { RoutesKeys, RoutesKeysType } from '../../lib/constants';
import { RouteProps } from 'react-router-dom';
import { HomePage } from '../../components/pages/home/home-page.tsx';

export const RoutePaths: Record<RoutesKeysType, RoutesKeys> = {
  '/': RoutesKeys.home,
  '/blog': RoutesKeys.blog,
  '/contacts': RoutesKeys.contacts,
  '/job': RoutesKeys.job,
  '/investors': RoutesKeys.investors,
  '/relocate': RoutesKeys.relocate,
};

export const routerConfig: RouteProps[] = [
  {
    path: RoutePaths['/'],
    element: <HomePage />,
  },
  {
    path: RoutePaths['/blog'],
    element: <div>blog</div>,
  },
  {
    path: RoutePaths['/job'],
    element: <div className="font-tenor text-3xl">job</div>,
  },
  {
    path: RoutePaths['/contacts'],
    element: <div>contacts</div>,
  },
  {
    path: RoutePaths['/investors'],
    element: <div>investors</div>,
  },
  {
    path: RoutePaths['/relocate'],
    element: <div>relocate</div>,
  },
];
