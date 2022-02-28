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
        {title}
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
  & + * {
    margin-top: 0.5em;
  }
`;

const AccordionItem = styled.div`
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
  height: auto;
  max-height: 9999px;

  &.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }
`;

const AccordionTitle = styled.div`
  font-weight: 600;
  cursor: pointer;
  color: #666;
  padding: 0.5em 1.5em;
  border: solid 1px #ccc;
  border-radius: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
  }

  &:hover,
  &.open {
    color: black;
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
  padding: 1em 1.5em;
`;

/*
.wrapper {

}

.accordion-wrapper {

}

.accordion-item {

}

.accordion-item.collapsed {

}

.accordion-title {

}

.accordion-content {

}

*/

export default Accordion;
