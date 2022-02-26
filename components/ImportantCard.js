import React from "react";
import styled from "styled-components";

const ImportantCard = () => {
  return (
    <Container>
      <p>
        군소정당, 후보를 제외한 주요 정당, 후보 2명의 정책입니다. 자세한 내용은
        선관위 홈페이지를 참고하시길 바랍니다.
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #ffeded;
  border-radius: 22px;

  & p {
    font-size: 0.875rem;
    text-align: center;
    padding: 1.375rem;
    color: #676767;
  }
`;

export default ImportantCard;
