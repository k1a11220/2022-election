import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Title } from "../styles/styles";
import Table from "./detail/table";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h3>위기에 강한, 유능한 경제 대통령</h3>
      <h1>이재명</h1>
      <p>{id}</p>

      <Title>
        <h1>후보 정보</h1>
        <h3>후보를 알아볼 수 있습니다.</h3>
      </Title>
      <TableWrapper>
        <Table
          label={"출생"}
          list={["1964. 12. 22(59세, 만 57세) 경상북도 안동"]}
        />
        <Table label={"직업"} list={["전 경기도지사"]} />
        <Table label={"병역"} list={["면제(사유: 장애인 6급)"]} />
        <Table
          label={"전과"}
          list={[
            "2003년 무고 및 공무원 자격사칭(벌금 150만원)",
            "2004년 도로교통법위반(음주운전)(벌금 150만원)",
            "2004년 특수공무집행방해, 공용물건손상(벌금 500만원)",
            "2010년 공직선거법위반(벌금 50만원)",
          ]}
        />
        <Table
          label={"학력"}
          list={[
            "중앙대학교 법학 학사",
            "고등학교 졸업학력 검정고시",
            "중학교 졸업학력 검정고시",
            "삼계초등학교",
          ]}
        />
        <Table label={"재산"} list={["28억 6437만원"]} />
      </TableWrapper>
    </div>
  );
};

const TableWrapper = styled.div`
  & span {
    margin-bottom: 20px;
    display: flex;
    gap: 100px;
  }

  & span > p {
    font-weight: 500;
  }

  & span div p {
    color: #9f9f9f;
    margin-bottom: 14px;
  }
`;

export default DetailPage;
