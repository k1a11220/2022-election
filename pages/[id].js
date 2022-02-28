import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Accordion from "../components/accordion/accordion";
import BackBtn from "../components/backBtn";
import { Title } from "../styles/styles";
import Table from "./detail/table";

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
      <Header>
        <BackBtn isOnly={false} />
        <h3>위기에 강한, 유능한 경제 대통령</h3>
        <h1>이재명</h1>
      </Header>

      <NavContainer>
        <div className="sticky">
          <div className="header" ref={headerRef}>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "Info" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(infoRef.current);
              }}
            >
              후보 정보
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "Main" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(mainRef.current);
              }}
            >
              주요 10대 공약
            </button>
          </div>
        </div>
      </NavContainer>

      <TableWrapper className="section" id="Info" ref={infoRef}>
        <Title>
          <h1>후보 정보</h1>
        </Title>
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

      <Divider />

      <TableWrapper className="section" id="Main" ref={mainRef}>
        <Title>
          <h1>주요 10대 공약</h1>
        </Title>
        <Accordion title="Why is the sky blue?">
          Sunlight reaches Earth's atmosphere and is scattered in all directions
          by all the gases and particles in the air. Blue light is scattered
          more than the other colors because it travels as shorter, smaller
          waves. This is why we see a blue sky most of the time.
        </Accordion>
        <Accordion title="What's It Like Inside Jupiter?">
          It's really hot inside Jupiter! No one knows exactly how hot, but
          scientists think it could be about 43,000°F (24,000°C) near Jupiter's
          center, or core.
        </Accordion>
        <Accordion title="What Is a Black Hole?">
          A black hole is an area of such immense gravity that nothing -- not
          even light -- can escape from it.
        </Accordion>
      </TableWrapper>
    </>
  );
};

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
`;

const Header = styled.header`
  & h3 {
    color: #9f9f9f;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 14px;
    padding-top: 40px;
  }

  & h1 {
    color: #70aff0;
    font-size: 54px;
    font-weight: 700;
  }
`;

const TableWrapper = styled.section`
  & span:last-of-type {
    margin-bottom: 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 16px;
  background-color: #f2f3f5;
  margin: 40px 0;
`;

export default DetailPage;
