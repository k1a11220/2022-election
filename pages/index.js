import styled from "styled-components";
import CandiCard from "../components/candiCard";
import ImpCard from "../components/impCard";
import KeywordList from "../components/keywordList";
import { Title } from "../styles/styles";

export default function Home() {
  return (
    <>
      <Header>
        <h1>2022년 20대 대선</h1>
        <h3>우리의 선택, 우리의 미래</h3>
      </Header>
      <ImpCard />
      <CardWrapper>
        <CandiCard
          party={"더불어민주당"}
          candidate={"이재명"}
          background={"#70AFF0"}
          link={"1"}
        />
        <CandiCard
          party={"국민의힘"}
          candidate={"윤석열"}
          background={"#F07070"}
          link={"2"}
        />
      </CardWrapper>
      <Title top={true}>
        <h1>주요 정책 비교하기</h1>
        <h3>두 명의 후보가 만들어갈 미래입니다.</h3>
      </Title>
      <KeywordList />
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 40px;

  h1 {
    font-size: 2.25rem;
    margin-bottom: 1rem;
    font-weight: bold;
    background: linear-gradient(45deg, #a2f0c0, #67c3eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--font-gray-1);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;
