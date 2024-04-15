import { RootProvider } from './providers/root-provider.tsx';
import { Router } from './router';

export const App = () => {
  return (
    <RootProvider>
      <Router />
    </RootProvider>
  );
};
