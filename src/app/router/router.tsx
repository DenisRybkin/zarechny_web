import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootLayout } from '../../components/layouts/root-layout';
import { routerConfig } from './config.tsx';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {routerConfig.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
