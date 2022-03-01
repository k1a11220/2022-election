import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>민주주의 국가에서 주인은 바로 국민입니다.</p>
      <p>
        민주시민은 주권자로서 나라의 정책을 결정하고 운영하는 데 참여해야 할
        권리와 의무가 있습니다.
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 200px;

  & p:first-of-type {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  & p:last-of-type {
    color: #9f9f9f;
  }
`;

export default Footer;
