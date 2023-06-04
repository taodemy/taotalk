import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../layout';

const TaoTalkApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default TaoTalkApp;
