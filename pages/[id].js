import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackBtn from "../components/backBtn";
import { Title } from "../styles/styles";
import LeeAccordionList from "../components/detail/leeAccordionList";
import LeeInfoList from "../components/detail/leeInfoList";
import YoonAccordionList from "../components/detail/yoonAccordionList";
import YoonInfoList from "../components/detail/yoonInfoList";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const mainRef = useRef(null);

  const sectionRefs = [
    { section: "Info", ref: infoRef },
    { section: "Main", ref: mainRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  return (
    <>
      <Header id={id}>
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
      </Header>

      <NavContainer className="sticky">
        <NavWrapper className="header" ref={headerRef}>
          <NavItem
            type="button"
            className={`header_link ${
              visibleSection === "Info"
                ? "selected"
                : visibleSection === undefined
                ? "selected"
                : ""
            }`}
            onClick={() => {
              scrollTo(infoRef.current);
            }}
          >
            후보 정보
          </NavItem>
          <NavItem
            type="button"
            className={`header_link ${
              visibleSection === "Main" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(mainRef.current);
            }}
          >
            주요 10대 공약
          </NavItem>
        </NavWrapper>
      </NavContainer>

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

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #f2f3f5;
  position: sticky;
  top: 0;
  margin-top: 78px;
  z-index: 2;
`;

const NavWrapper = styled.div``;

const NavItem = styled.button`
  margin-top: 24px;
  background-color: white;
  border: none;
  padding: 0;
  font-size: 1.125rem;
  color: #cccfd4;
  font-weight: 500;
  margin-right: 20px;
  padding-bottom: 14px;

  &.selected {
    color: #2e2e2e;
    border-bottom: 2px solid #2e2e2e;
  }
`;

const Header = styled.header`
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

const TableWrapper = styled.section`
  padding-top: 40px;
  & span:last-of-type {
    margin-bottom: 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  margin-top: 40px;
  border-bottom: 12px solid #f2f3f5;
`;

export default DetailPage;
