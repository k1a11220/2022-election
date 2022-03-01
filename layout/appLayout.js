import React from "react";
import Footer from "../components/footer";
import GlobalStyle from "../styles/globalStyle";

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
