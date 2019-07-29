import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
// import Sticky from "react-stickynode";
// import { DrawerProvider } from "common/src/contexts/DrawerContext";
// import { ResetCSS } from "common/src/assets/css/style";

export default () => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio | A react next landing page</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#ec5555" />
        {/* Load google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
          rel="stylesheet"
        />
      </Head>

      {/* <ResetCSS /> */}
    </Fragment>
  );
};
