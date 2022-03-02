import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import LeeImg from "../media/lee.png";
import YoonImg from "../media/yoon.png";

const CandidateCard = ({ party, candidate, background, link }) => {
  return (
    <Link href={link}>
      <CardContainer background={background}>
        <div>
          <h4>{party}</h4>
          <h3>{candidate}</h3>
        </div>
        <ProfileContainer link={link}>
          <Image src={link === "1" ? LeeImg : YoonImg} responsive="true" />
        </ProfileContainer>
      </CardContainer>
    </Link>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 210px;
  background-color: ${(props) => props.background};
  border-radius: 22px;
  border-bottom-right-radius: 0;
  cursor: pointer;

  & > div:first-of-type {
    padding: 22px;

    & h4 {
      font-size: 1rem;
      color: white;
      margin-bottom: 7px;
    }

    & h3 {
      font-size: 1.375rem;
      color: white;
      font-weight: 600;
    }
  }

  &:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    transition: all 0.2s ease-in-out;
  }
`;

const ProfileContainer = styled.div`
  width: ${(props) => (props.link === "1" ? "130px" : "150px")};
  align-self: flex-end;
  position: relative;
  top: 92.5px;
`;

export default CandidateCard;
