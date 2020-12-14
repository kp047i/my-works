/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>kappy works</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
