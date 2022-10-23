/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from '@common/common-interface';
import '../styles/globals.css';
import { Layout } from '@components/layout/layout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Layout>
          <Head>
            <meta name="viewport" content="viewport-fit=cover" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
