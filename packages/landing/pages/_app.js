import React, { Fragment } from 'react';
import Head from 'next/head';

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Ruben Costa</title>
      </Head>
      {/* Future Modal component */}
      <h4>Layout</h4>
      <Component {...pageProps} />
    </Fragment>
  );
};
