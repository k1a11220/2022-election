import styled from "styled-components";
import ImportantCard from "../components/importantCard";
import CandidateCard from "../components/candidateCard";
import KeywordList from "../components/keywordList";

export default function Home() {
  return (
    <>
      <Header>
        <h1>2022년 20대 대선</h1>
        <h3>우리의 미래, 우리가 선택합니다.</h3>
      </Header>
      <ImportantCard />
      <CardWrapper>
        <CandidateCard
          party={"더불어민주당"}
          candidate={"이재명"}
          background={"#70AFF0"}
        />
        <CandidateCard
          party={"국민의힘"}
          candidate={"윤석열"}
          background={"#F07070"}
        />
      </CardWrapper>
      <Header>
        <h1>키워드로 보는 정책</h1>
        <h3>2명의 후보가 만들어갈 미래입니다.</h3>
      </Header>
      <KeywordList />
    </>
  );
}

const Header = styled.header`
  padding-top: 60px;
  padding-bottom: 40px;

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
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
`;
