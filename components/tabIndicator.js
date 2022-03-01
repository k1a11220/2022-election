import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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

const TabIndicator = ({ sectionRefs, headerRef, mainRef, infoRef }) => {
  const [visibleSection, setVisibleSection] = useState();

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

export default TabIndicator;
