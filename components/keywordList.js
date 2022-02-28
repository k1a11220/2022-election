import React from "react";
import styled from "styled-components";
import Keyword from "./keyword";

const KeywordList = () => {
  return (
    <Container>
      <NavContainer>
        <div>
          <p>이재명</p>
        </div>
        <div>
          <p>윤석열</p>
        </div>
      </NavContainer>
      <KeywordWrapper>
        <Keyword />
        <Keyword />
        <Keyword />
        <Keyword />
        <Keyword />
        <Keyword />
        <Keyword />
        <Keyword />
      </KeywordWrapper>
    </Container>
  );
};

const Container = styled.div``;

const NavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  margin-bottom: 26px;

  & div {
    width: 100%;
    background-color: #f07070;
    display: flex;
    justify-content: center;
  }

  & p {
    padding: 16px 0;
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
  }

  & div:first-of-type {
    background-color: #70aff0;
  }
`;

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
`;

export default KeywordList;
