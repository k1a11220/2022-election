import React from "react";
import styled from "styled-components";

const Table = ({ label, list }) => {
  return (
    <Container>
      <p>{label}</p>
      <div>
        {list.map((post, index) => (
          <p key={index}>{post}</p>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.span`
  margin-bottom: 24px;
  display: flex;
  gap: 100px;
  font-size: 1.125rem;

  & > p {
    font-weight: 500;
  }

  & div p {
    color: #9f9f9f;
    margin-bottom: 14px;
  }

  & div p:last-of-type {
    margin-bottom: 0;
  }
`;

export default Table;
