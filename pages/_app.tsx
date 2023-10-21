import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();
  // Use the layout defined at page level if possible
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
