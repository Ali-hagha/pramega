import Layout from '@/components/layouts/MainLayout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import NextNProgress from 'nextjs-progressbar';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <Layout>
      <NextNProgress
        color="#d9f104"
        height={5}
        options={{ showSpinner: false }}
      />
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}
