import React from "react";
import styled from "styled-components";
import Keyword from "./keyword";

const KeywordList = () => {
  return (
    <Container>
      <NavContainer>
        <div>
          <p>이재명</p>
        </div>
        <div>
          <p>윤석열</p>
        </div>
      </NavContainer>
      <KeywordWrapper>
        <Keyword
          label={"경제"}
          listL={["기본소득, 기본주택, 기본금융 등 전국민 대상 ‘기본시리즈’"]}
          listY={[
            "민간이 주도하고 정부가 돕는 경제생태계 복원과 양질의 일자리 창출",
          ]}
        />
        <Keyword
          label={"병역정책"}
          listL={[
            "경기도 시행 중인 군 복무 청년 상해보험 지원제도 전국 확대",
            "선택적 모병제 도입",
          ]}
          listY={[
            "군필자에 대한 민간주택 청약 가산점 제 도 도입",
            "모병제 부정적 의견",
          ]}
        />
        <Keyword
          label={"북핵 문제"}
          listL={[
            "북핵 문제 해결을 위해 문재인 정부의  ‘한반도 운전자’ 역할 이어 이행",
          ]}
          listY={["한미 확장억제 강화. 북한의 핵미사일 능력 억제"]}
        />
        <Keyword
          label={"검찰 등 권력기관 개혁"}
          listL={[
            "문재인 정부의 수사권과 기소권을 분리 하는 검찰 개혁 방향 유지",
            "기소 여부를 검사가 아닌 배심원이 결정하는 대배심제 도입",
          ]}
          listY={[
            "검찰보다는 권력기관을 관할하는 청와대의 사정기능을 제한",
            "국가 사정 역량을 증대해 부패를 줄일 수 있는 범위 내에서 공수처 설치 찬성",
          ]}
        />
        <Keyword
          label={"청년"}
          listL={[
            "연 200만원의 청년기본소득 지급",
            "기본주택 100만호 중 일부 청년들에게 우선 배정",
            "생에 한 번 구직 급여 받을 수 있게 고용보험 수급 기준 개선",
          ]}
          listY={[
            "청년 자립 프로그램 설치",
            "지역특화형 ‘청년 도약 베이스캠프’ 설치",
            "취약 청년에게 ‘청년 도약 보장금’ 지급",
          ]}
        />
        <Keyword
          label={"교육"}
          listL={[
            "공정성 강조. 대학생 등록금 부담 경감",
            "공교육 혁신, 평생교육 시스템 확충, 역량강화 교육 등 미래형 인재 양성",
          ]}
          listY={[
            "공정성 강조, 대입시 특혜입학 논란 최소화, 입시 비리 신고센터 및 직권조사 강화",
            "복잡한 대입 제도 단순화. 사교육 의존도 낮춤",
          ]}
        />
        <Keyword
          label={"여성"}
          listL={[
            "디지털 성폭력에 대응하기 위한 컨트롤타워 설치",
            "스토킹, 데이트폭력 등 젠더폭력 관련 보호제도 개편, 피해자 보호 체계 구축 등",
          ]}
          listY={[
            "성범죄 양형 기준 및 양형 인자 강화",
            "권력형 성범죄자 취업제한제도 확대, 권력형 성범죄 은폐방지 3법 신속 입법 등 약속",
          ]}
        />
        <Keyword
          label={"영유아와 어르신 돌봄"}
          listL={[
            "공공 어린이집 이용 아동 비율 50%이상 확대",
            "어린이집 다니지 않는 영유아 필요시 시간제 보육 서비스 이용",
            "어르신 방문간호, 방문의료 서비스를 전국에서 받도록 인프라 확대",
          ]}
          listY={[
            "0~2세 가정양육수당 30만원으로 인상.",
            "만 5세 전면 무상보육",
            "아동학대 근절을 위해 특별사법경찰 도입",
            "간호 간병 통합서비스 확대, 요양병원 간병비에도 건강보험 적용",
          ]}
        />
        <Keyword
          label={"부동산"}
          listL={[
            "국도 보유세 도입(모든 토지에 세금을 부과하여 기본소득 예산으로 활용)",
            "국토 보유세를 통해 현재 부동산 보유실효세율 0.17% -> 1.0% 수준까지 상향",
            "공공부문 확대로 주택 250만호 공급",
            "최소 100만호를 기본주택으로 배정",
            "장기임대 공공주택 비율을 전체 주택의 10%선까지 확보",
          ]}
          listY={[
            "종합부동산세 전면 재검토, 완화",
            "종부세를 재산세에 통합하거나 1주택자에 대해서는 면제하는 방안 검토",
            "1세대 1주택자의 양도소득세 세율과 재산세 부담 완화",
            "다주택자 양도세의 한시적 50% 감면",
            "민간개발을 통한 주택 250만호 공급",
            "청년 원가주택 공급",
          ]}
        />
        <Keyword
          label={"세금"}
          listL={[
            "고부담 고복지",
            "부동산 불로소득 타파",
            "국토보유세 도입",
            "기업 대상 탄소세 부과",
          ]}
          listY={["감세에 초점", "종부세 전면 재검토"]}
        />
        <Keyword
          label={"노동"}
          listL={[
            "노동자 '작업중지권' '산업안전보건 주치의' 도입",
            "원청의 하청 노동자 안전보건관리 책임 강화",
            "'공공부문 비정규직 공정수당' 확대 시행",
          ]}
          listY={[
            "'주 52시간' 1,3,6개월 등을 단위로 유연화",
            "최저인금 인상 '속도 조절' 강조",
            "'경영 의지 위축' 중대재해처벌법 개정 시사",
            "'플랫폼 노동자' 고용보험 적용 확대 제시",
          ]}
        />
      </KeywordWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  margin-bottom: 26px;

  @media (max-width: 680px) {
    width: 100vw;
    align-self: center;
  }

  & div {
    width: 100%;
    background-color: #f07070;
    display: flex;
    justify-content: center;

    @media (max-width: 680px) {
      width: 100vw;
    }
  }

  & p {
    padding: 16px 0;
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
  }

  & div:first-of-type {
    background-color: #70aff0;
  }
`;

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;

  @media (max-width: 500px) {
    gap: 40px;
  }
`;

export default KeywordList;
