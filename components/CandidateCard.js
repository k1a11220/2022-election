import Link from "next/link";
import React from "react";
import styled from "styled-components";

const CandidateCard = ({ party, candidate, background, link }) => {
  return (
    <Link href={link}>
      <Container background={background}>
        <div>
          <h4>{party}</h4>
          <h3>{candidate}</h3>
        </div>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 210px;
  background-color: ${(props) => props.background};
  border-radius: 22px;
  cursor: pointer;

  & > div {
    padding: 22px;

    & h4 {
      font-size: 1rem;
      color: white;
      margin-bottom: 7px;
    }

    & h3 {
      font-size: 1.375rem;
      color: white;
      font-weight: 600;
    }
  }
`;

export default CandidateCard;
