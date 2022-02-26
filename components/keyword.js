import React from "react";
import styled from "styled-components";

const Keyword = () => {
  return (
    <Container>
      <h3>경제</h3>
      <hr />
      <DetailWrapper>
        <div>
          <ul>
            <li>기본소득, 기본주택, 기본금융 등 전국민 대상 ‘기본시리즈’</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              민간이 주도하고 정부가 돕는 경제생태계 복원과 양질의 일자리 창출
            </li>
          </ul>
        </div>
      </DetailWrapper>
    </Container>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  padding-left: 22px;

  & div > ul {
    padding: 0 22px;
  }

  & ul {
    list-style: circle;
  }

  & li {
    font-size: 1rem;
    color: #9f9f9f;
    line-height: 1.25;
  }
`;

const Container = styled.div`
  & hr {
    margin-top: 16px;
    margin-bottom: 26px;
    border: 1px solid #eaeaea;
  }

  & > h3 {
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;
  }
`;

export default Keyword;
