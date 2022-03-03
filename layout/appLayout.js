import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import GlobalStyle from "../styles/globalStyle";

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>우리의 선택, 우리의 미래</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
        <meta
          name="description"
          content="2022년 20대 대선 정보 모아보기"
          key="description"
        />

        <meta key="og:type" name="og:type" content="website" />
        <meta key="og:site_name" name="og:site_name" content="2022-election" />
        <meta
          key="og:title"
          name="og:title"
          content="우리의 선택, 우리의 미래"
        />
        <meta
          key="og:url"
          name="og:url"
          content="https://www.2022-election.com/"
        />
        <meta
          key="og:description"
          property="og:description"
          content="2022년 20대 대선 정보 모아보기"
        />
        <meta
          property="og:image"
          name="og:image"
          content="https://i.imgur.com/ro1Oeqs.png"
          key="og:image"
        />
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
