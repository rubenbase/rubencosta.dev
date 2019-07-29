import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import { ThemeProvider } from 'styled-components';
import { portfolioTheme } from 'common/src/theme/portfolio';

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <Modal />
        <Component {...pageProps} />
      </Fragment>
    </ThemeProvider>
  );
};
