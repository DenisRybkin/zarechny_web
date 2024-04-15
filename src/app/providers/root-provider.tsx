import { ReactNode } from 'react';
import { QueryProvider } from './query/query-provider.tsx';
import { Toaster } from '../../components/ui/toaster.tsx';

interface IProps {
  children: ReactNode;
}

export const RootProvider = (props: IProps) => {
  return (
    <QueryProvider>
      <Toaster />
      {props.children}
    </QueryProvider>
  );
};
