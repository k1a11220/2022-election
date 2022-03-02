import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackBtn from "../components/backBtn";
import { Title } from "../styles/styles";
import LeeAccordionList from "../components/detail/leeAccordionList";
import LeeInfoList from "../components/detail/leeInfoList";
import YoonAccordionList from "../components/detail/yoonAccordionList";
import YoonInfoList from "../components/detail/yoonInfoList";
import TabIndicator from "../components/tabIndicator";
import Image from "next/image";
import LeeImg from "../media/lee.png";
import YoonImg from "../media/yoon.png";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const mainRef = useRef(null);

  const sectionRefs = [
    { section: "Info", ref: infoRef },
    { section: "Main", ref: mainRef },
  ];

  return (
    <>
      <Header id={id}>
        <HeaderContent id={id}>
          <BackBtn isOnly={false} />
          {id === "1" ? (
            <>
              <h3>위기에 강한, 유능한 경제 대통령</h3>
              <h1>이재명</h1>
            </>
          ) : id === "2" ? (
            <>
              <h3>국민이 키운 윤석열 내일을 바꾸는 대통령</h3>
              <h1>윤석열</h1>
            </>
          ) : (
            ""
          )}
        </HeaderContent>
        <ProfileContainer id={id}>
          <Image src={id === "1" ? LeeImg : YoonImg} responsive="true" />
        </ProfileContainer>
      </Header>

      <TabIndicator
        sectionRefs={sectionRefs}
        headerRef={headerRef}
        mainRef={mainRef}
        infoRef={infoRef}
      />

      <TableWrapper className="section" id="Info" ref={infoRef}>
        <Title>
          <h1>후보 정보</h1>
        </Title>
        {id === "1" ? <LeeInfoList /> : id === "2" ? <YoonInfoList /> : ""}
        <Divider />
      </TableWrapper>

      <TableWrapper className="section" id="Main" ref={mainRef}>
        <Title>
          <h1>주요 10대 공약</h1>
        </Title>
        {id === "1" ? (
          <LeeAccordionList />
        ) : id === "2" ? (
          <YoonAccordionList />
        ) : (
          ""
        )}
      </TableWrapper>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 680px;
  height: 320px;
  flex-direction: row;
  align-self: center;
  background-color: ${(props) =>
    props.id === "1" ? "#F7F8FA" : props.id === "2" ? "#FAF7F8" : ""};
`;

const HeaderContent = styled.div`
  padding: 0 40px;
  & h3 {
    color: #9f9f9f;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 16px;
    padding-top: 40px;
  }

  & h1 {
    color: ${(props) =>
      props.id === "1" ? "#70aff0" : props.id === "2" ? "#F07070" : ""};
    font-size: 54px;
    font-weight: 700;
  }
`;

const ProfileContainer = styled.div`
  width: ${(props) => (props.id === "1" ? "230px" : "270px")};
  align-self: flex-end;
`;

const TableWrapper = styled.section`
  padding-top: 40px;
  & span:last-of-type {
    margin-bottom: 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  margin-top: 40px;
  border-bottom: 4px solid #f2f3f5;
`;

export default DetailPage;
