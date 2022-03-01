import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import LeeImg from "../media/lee.png";
import YoonImg from "../media/yoon.png";

const CandidateCard = ({ party, candidate, background, link }) => {
  return (
    <Link href={link}>
      <Container background={background}>
        <div>
          <h4>{party}</h4>
          <h3>{candidate}</h3>
        </div>
        <ProfileContainer link={link}>
          <Image src={link === "1" ? LeeImg : YoonImg} responsive />
        </ProfileContainer>
      </Container>
    </Link>
  );
};

const Container = styled.div`
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
`;

const ProfileContainer = styled.div`
  width: ${(props) => (props.link === "1" ? "130px" : "150px")};
  align-self: flex-end;
  position: relative;
  top: 92.5px;
`;

export default CandidateCard;
