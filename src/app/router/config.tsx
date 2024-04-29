import { RoutesKeys, RoutesKeysType } from '../../lib/constants';
import { RouteProps } from 'react-router-dom';
import { HomePage } from '../../components/pages/home';
import { AboutPage } from '../../components/pages/about';
import { RelocatePage } from '../../components/pages/relocate';
import { JobPage } from '../../components/pages/job';
import { DevelopmentPlanPage } from '../../components/pages/development-plan';
import { ForInvestorsPage } from '../../components/pages/for-investors';

export const RoutePaths: Record<RoutesKeysType, RoutesKeys> = {
  '/': RoutesKeys.home,
  '/about': RoutesKeys.about,
  '/blog': RoutesKeys.blog,
  '/contacts': RoutesKeys.contacts,
  '/development-plan': RoutesKeys.developmentPlan,
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
    path: RoutePaths['/about'],
    element: <AboutPage />,
  },
  {
    path: RoutePaths['/blog'],
    element: <div>blog</div>,
  },
  {
    path: RoutePaths['/job'],
    element: <JobPage />,
  },
  {
    path: RoutePaths['/contacts'],
    element: <div>contacts</div>,
  },
  {
    path: RoutesKeys.developmentPlan,
    element: <DevelopmentPlanPage />,
  },
  {
    path: RoutePaths['/investors'],
    element: <ForInvestorsPage />,
  },
  {
    path: RoutePaths['/relocate'],
    element: <RelocatePage />,
  },
];
