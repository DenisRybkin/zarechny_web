import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      cacheTime: Number(import.meta.env.VITE_API_CACHE_TIME),
      staleTime: Number(import.meta.env.VITE_API_CACHE_TIME),
    },
  },
});

export const QueryProvider = (props: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};
