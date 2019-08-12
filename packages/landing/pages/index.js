import React, { Fragment } from "react";
import Head from "next/head";
import Navbar from "../containers/navbar";
import { ContentWrapper, GlobalStyle } from "../containers/global.style";
import PortfolioShowcase from "../containers/PortfolioShowcase";

import { DrawerProvider } from "common/src/contexts/drawer-context";
import PortfolioShowcase2 from "../containers/PortfolioShowcase2";

export default () => {
    return (
        <Fragment>
            <Head>
                <title>Ruben Costa</title>
                <meta name="Description" content="Ruben Costa portfolio page" />
                <meta name="theme-color" content="#ec5555" />
                {/* Load google fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
                    rel="stylesheet"
                />
            </Head>

            <GlobalStyle />

            <ContentWrapper>
                <DrawerProvider>
                    <Navbar />
                </DrawerProvider>

                <div style={{ marginTop: 300 }}></div>
                <PortfolioShowcase2 />
                <PortfolioShowcase />
            </ContentWrapper>
        </Fragment>
    );
};
