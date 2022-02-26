import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/globalStyle";

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default AppLayout;
