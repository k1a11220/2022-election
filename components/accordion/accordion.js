import React from "react";
import styled from "styled-components";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <AccordionWrapper className="accordion-wrapper">
      <AccordionTitle
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <p>{title}</p>
      </AccordionTitle>
      <AccordionItem className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <AccordionContent className="accordion-content">
          {children}
        </AccordionContent>
      </AccordionItem>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  width: 100%;
  & + * {
    margin-top: 1rem;
  }
`;

const AccordionItem = styled.div`
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
  height: auto;
  max-height: 9999px;
  background-color: #f7f8fa;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }
`;

const AccordionTitle = styled.div`
  font-weight: 500;
  cursor: pointer;
  color: #2e2e2e;
  padding: 1rem 1.5rem;
  background-color: #f7f8fa;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  & p {
    line-height: 1.5;
    width: 92%;
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
  }

  &.open {
    color: black;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.open {
    &::after {
      content: "";
      border-top: 0;
      border-bottom: 5px solid;
    }
  }
`;

const AccordionContent = styled.div`
  padding: 1rem 1.5em;
  line-height: 1.5;
  color: #9f9f9f;
  font-weight: 400;
`;

export default Accordion;
