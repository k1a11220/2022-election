import React from "react";
import styled from "styled-components";

const Keyword = ({ label, listL, listY }) => {
  return (
    <Container>
      <div>
        <h3>{label}</h3>
        <hr />
      </div>
      <DetailWrapper>
        <div>
          <ul>
            {listL.map((post, index) => (
              <li key={index}>{post}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {listY.map((post, index) => (
              <li key={index}>{post}</li>
            ))}
          </ul>
        </div>
      </DetailWrapper>
    </Container>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  z-index: -1;

  & > div {
    width: 50%;
    max-width: 50%;
  }

  & div > ul {
    padding: 0 22px;
  }

  & div:first-of-type > ul {
    @media (max-width: 680px) {
      padding-left: 40px;
    }
  }

  & ul {
    list-style: circle;
  }

  & li {
    font-size: 1rem;
    color: #9f9f9f;
    line-height: 1.25;
  }

  & li:not(:last-of-type) {
    margin-bottom: 14px;
  }
`;

const Container = styled.div`
  @media (max-width: 680px) {
    width: 100vw;
    align-self: center;
  }

  & hr {
    margin: 0;
    margin-bottom: 26px;
    border: 1px solid #eaeaea;
  }

  & > div {
    position: sticky;
    top: 50px;
    background-color: white;
  }

  & h3 {
    padding: 15px 0;
    text-align: center;
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export default Keyword;
