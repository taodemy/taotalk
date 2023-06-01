import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../layout';
import Head from 'next/head';

const TaoTalkApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>TaoTalk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TaoTalk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};
export default TaoTalkApp;
