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
      <Keyword />
      <Keyword />
      <Keyword />
      <Keyword />
      <Keyword />
      <Keyword />
      <Keyword />
      <Keyword />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
`;

const NavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;

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

export default KeywordList;
