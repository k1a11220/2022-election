import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import GlobalStyle from "../styles/globalStyle";

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>2022년 20대 대선</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
