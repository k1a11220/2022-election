import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Accordion from "../components/accordion/accordion";
import BackBtn from "../components/backBtn";
import { Title } from "../styles/styles";
import Table from "../components/detail/table";

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
        <Divider />
      </TableWrapper>

      <TableWrapper className="section" id="Main" ref={mainRef}>
        <Title>
          <h1>주요 10대 공약</h1>
        </Title>
        <Accordion title="1. [국가 과제] 코로나 펜데믹 완전극복과 피해소상공인에 대한 완전한 지원">
          ○ 목 표 : <br />
          - 코로나 팬데믹 완전 극복, 피해 소상공인 피해 완전 극복
          <br />
          <br />
          ○ 이행방법
          <br />
          ■ 코로나 팬데믹 완전극복을 위한 대응 강화
          <br />
          - 오미크론 등 변이종 확산 대응하는 총력체제 강화
          <br />
          - 백신과 치료제 확보, 의료보건체제 구축에 대한 충분한 재정투입 <br />
          - 공공병원을 충분히 확보하여 감염병 대응 역량 강화
          <br />
          <br />
          ■ 국내개발을 통한 백신/치료제 주권확보와 필수의약품 공공 생산 체계
          구축
          <br />
          - 국산 코로나 백신, 치료제 개발 끝까지 지원
          <br />
          - 필수예방접종의약품 자급화 실현을 위한 국가지원체제 구축
          <br />
          - 코로나백신 치료제 개발 지원 등을 통한 바이오산업의 국제경쟁력 제고
          <br />
          <br />
          ■ 코로나 피해 소상공인에 대한 온전한 보상과 매출회복 지원
          <br />
          - 코로나 발생시점부터 완전극복 시점까지의 피해에 대한 온전한 보상과
          지원
          <br />
          - 한국형 PPP제도 도입으로 고정비 피해에 대한 온전한 지원 추진 <br />
          - 소상공인 자영업의 매출 회복 지원을 위한 지역화폐, 소비쿠폰 발행 확대
          <br />
          <br />
          ■ 소상공인·자영업자 신용회복 지원 채무부담 경감 <br />
          - 코로나 피해로 인해 연체 및 연체 위기에 처한 소상공인·자영업자의
          채무조정 <br />
          - 방역조치로 인한 경영위축으로 인해 발생한 신용등급 하락을 회복하기
          위한 신용대사면 조치 단행
          <br />
          <br />
          ○ 이행기간
          <br />
          - 코로나 팬데믹 완전 극복 시점
          <br />
          - 백신과 치료제 성공 그리고 수출 경쟁력 확보시점
          <br />
          <br />
          ○ 재원조달방안
          <br />
          - 국비 및 지방비, 긴급 추경 편성
          <br />
        </Accordion>
        <Accordion title="2. [경제, 산업] 수출 1조 달러, 국민소득 5만 달러 달성,주가지수 5000으로 세계5강 달성">
          ○ 목 표 : <br />
          - 수출 1조 달러, 국민소득 5만 달러 달성, 주가지수5000으로 세계 5강의
          종합국력 달성
          <br /> <br />
          ○ 이행방법
          <br />
          ■ 전환적 공정성장과 산업혁신으로 수출 1조 달러, 국민소득 5만 달러
          달성, 주가지수 5000 달성
          <br />
          - 주요 전략산업의 혁신 고도화 총력 지원 <br />
          - 빅10 프로젝트, 소부장 3.0 지원을 통한 혁신 선도형 산업구조 구축
          <br />
          - 자본시장 활성화, 모태펀드 10조원 확충, 창업연대기금 1조원 조성,
          유니콘기업 100개 육성
          <br />
          - 신기술·신산업에 대한 금융·세제지원 확대, 과감한 규제개혁
          <br />
          - 신남방, 신북방 경제권에서의 기회 확대
          <br />
          - 인터넷 플랫폼 가상공간에서의 경제역량 제고
          <br />
          <br />
          ■ 성공적 디지털 대전환으로 대한민국 경제 대도약
          <br />
          - 디지털 기술의 전 산업분야 융합으로 제조업과 디지털 경제 혁신
          <br />
          - 블록체인, 양자정보통신기술, 6G 등 기술 개발 강화와 가상융합기술
          활성화
          <br />
          - 국비 85조원 등 135조원의 디지털 전환 투자로 200만 개 일자리 창출
          <br />
          - 디지털 미래 인재 100만 양성 및 디지털 포용 국가 구현
          <br />
          <br />
          ■ 에너지 고속도로와 제도개혁으로 에너지 대전환 기반 마련 <br />
          - 2030년 재생에너지 비중 30% 달성을 위한 입지확보
          <br />
          - 재생에너지 생산·유통·판매가 자유로운 통합형 에너지 시스템 구축
          <br />
          - 온실가스 다배출업종의 탈탄소 전환지원 강화 및 녹색산업 육성
          <br />
          - 취약산업 종사자 전환 지원 확대
          <br />
          <br />
          ■ 모빌리티 대전환과 친환경 탄소중립에 대응하는 국가교통전략 수립
          <br />
          - 도로, 항공 중심의 교통 체계에서 철도 교통 체계로의 대전환
          <br />
          - 자율주행차, 도심항공교통 등 미래형 모빌리티 인프라 구축 및 상용화
          지원
          <br />
          - 사업용 차량의 전기·수소차 전환 및 인프라 확충 지원
          <br />
          <br />
          ■ 자본시장의 공정성 회복 <br />
          - 주가조작 근절, 공모주·공매도 차별금지 등 주식시장 불공정 개선 <br />
          - 대주주·경영진 등의 탈법이나 횡포 등을 차단할 수 있는 법적·제도적
          장치를 통한 소액주주 보호 <br />
          - 가상자산 제도화로 투자자 보호 강화 및 공개(ICO) 허용 추진
          <br />
          <br />
          ○ 이행기간
          <br />
          - 2023년부터 관련 법 개정 등 제도 개선과 예산 확보 등을 통해 추진
          <br />
          <br />
          ○ 재원조달방안
          <br />
          - 국비 및 지방비, 민간투자 자금 활용
          <br />
        </Accordion>
        <Accordion title="3. [경제, 여성, 청년] 경제적 기본권 보장, 여성안심 평등사회, ‘청년기회국가’ 건설">
          ○ 목 표 :<br />
          - 국민의 경제적 기본권 보장
          <br />
          - 여성이 안전하고 평등한 사회 실현
          <br />
          - 공정과 성장의 청년기회국가 건설
          <br />
          <br />
          ○ 이행방법
          <br />
          ■ 전 국민 보편기본소득 추진
          <br />
          - 대통령 직속 기본소득위원회 공론화 거쳐 국민 의사 수렴해 시행
          <br />
          - 연 25만원으로 시작해 임기내 연 100만원을 목표로 추진
          <br />
          <br />
          ■ 대상별 부분기본소득과 수당 지급
          <br />
          - 2023년부터 만 19~29세 청년에게 연 100만원 지급
          <br />
          - 청년·문화예술인·농어촌 기본소득, 아동·청소년·장년 수당
          <br />
          <br />
          ■ 기본대출, 기본저축제도 도입
          <br />
          - 20~30대 청년부터 최대 1,000만원 저리 대출
          <br />
          - 예금 금리보다 높은 기본저축 도입
          <br />
          <br />
          ■ 차별없는 공정한 일터 구현
          <br />
          - ‘고용평등임금공시제’ 도입 및 성별 임금격차 해소 계획 수립
          <br />
          - 채용 성차별 사업장 신고·감독 강화 및 고용평등 전담 근로감독관 확충
          <br />
          - 소규모 사업장 성희롱·성차별 피해자 지원
          <br />
          - 공적연기금의 ESG 투자에서 성평등 관점 고려 <br />
          <br />
          ■ 여성이 불안하지 않고 모두가 안전한 사회 실현
          <br />
          - 아동·청소년 대상 성범죄 무관용 원칙 적용, 친족 성폭력 처벌 강화
          <br />
          - 성범죄자 신상정보 고지제도 강화
          <br />
          - 디지털성범죄 전담수사대 설치 및 광역별 디지털성범죄 피해자지원센터
          설치
          <br />
          - 변형카메라 관리 강화 및 딥페이크 음성·영상에 표시의무제도 도입
          <br />
          - 데이트폭력 처벌법 제정
          <br />
          - 스토킹범죄 반의사불벌죄 폐지 및 온라인 스토킹까지 스토킹 범죄 유형
          확대
          <br />
          - 성폭력 범죄의 양형 감경요소 개선 및 성폭력 2차 피해 보호 강화
          <br />
          <br />
          ■ 남녀 모두 안전하고 건강한 성.재생산의 권리 보장
          <br />
          - 산부인과 명칭을 ‘여성건강의학과’로 변경
          <br />
          - 공공산후조리원 전국 광역 단위 확충 및 산후조리원 시설·서비스 표준화
          <br />
          - 모든 청소년 HPV 백신 무료 접종, 여성 청소년 생리대 구입비 지원
          <br />
          - 난임 시술 약제비 급여화, 난임부부 정서적 지원 강화
          <br />
          - 피임 시술 등 건강보험 보장성 확대
          <br />
          <br />
          ■ 청년의 내집마련 및 주거안정 실현
          <br />
          - 신규 주택 공급 물량 30% 청년 우선 배정
          <br />
          - 용산공원 일대 10만 호 전량 청년기본주택 공급
          <br />
          - 청년 등 생애 최초 주택 구입자 LTV 최대 90%까지 인정
          <br />
          - 원룸·다가구·다세대 주택 등 임대시장 불공정행위 근절
          <br />
          <br />
          ■ 청년 기본권 보장을 통한 청년기회국가 <br />
          - 청년 기본소득·기본금융·기본주택 확대 공급
          <br />
          - 위기 청년 및 구직 단념 니트(NEET) 등 촘촘한 맞춤형 청년복지 제공
          <br />
          - 대학 비진학 청년 교육비 국가 지원
          <br />
          - 청년이 직접 청년정책을 결정하고 참여하는 청년정부, 청년특임장관 임명
          <br />
          <br />
          ■ 농어민도 행복한 농어촌 <br />
          - 농어촌 기본소득 1인당 100만 원 이내 지급, 직불제도 확대
          <br />
          - 농어업인 안전 보험·재해보험 강화
          <br />
          - 여성 농민 특수건강검진 확대
          <br />
          - 채소가격 안정제 확대 개편으로 최저가격 실질적 보장 <br />
          <br />
          ○ 이행기간
          <br />
          - 2022년 대통령 직속 기본소득위원회 설치, 공론화 및 제도정비 후 추진
          <br />
          - 2022년부터 관련 제도 마련 후 추진
          <br />
          <br />
          ○ 재원조달방안
          <br />
          - 국비 및 지방비, 민간투자 자금 활용
          <br />
          - 보편 기본소득은 토지이익배당과 탄소 배당을 재원으로 추진
          <br />
          - 주택도시기금(재정 포함), 입주자 및 주택사업자, 민간투자 자금 등으로
          충당
          <br />
        </Accordion>
        <Accordion title="4. [부동산, 균형발전] 311만호 주택공급으로 내집마련·주거안정 실현, 함께 잘 사는 균형발전">
          ○ 목 표<br />- 311만호 주택공급으로 집값 안정 및 내집마련의 꿈 실현,
          서민주거안정 <br />
          - 서울-지방, 수도권-비수도권이 함께 잘사는 균형발전 실천
          <br />
          <br />
          ○ 이행방법
          <br />
          ■ 청년과 무주택자, 실수요자의 내 집 마련 꿈 실현
          <br />
          - 전국 311만호(서울 107만호) 주택 신속 공급으로 집값 안정 <br />
          - 저렴한 비용, 장기간 거주, 고품질의 기본주택 140만호 공급
          <br />
          : 분양형은 건물분양형, 지분적립형, 누구나집형, 이익공유형 등 맞춤형
          공급
          <br />
          - 공공택지 원가공급, 분양가상한제, 분양원가 공개로 ‘반값 아파트’ 공급
          <br />
          <br />
          ■ 재개발·재건축 활성화
          <br />
          - 신속협의제 도입, 500% 용적률인 4종 주거지역 신설
          <br />
          - 재건축 안전진단 기준 합리적 개선
          <br />
          - 노후공동주택 리모델링 시 세대수 증가, 수직증축 허용 <br />
          - 노후 신도시(1기신도시) 특별법 제정으로 재건축과 리모델링 활성화
          <br />
          <br />
          ■ 국민 세부담 완화
          <br />
          - 공시가격 제도 개선 등으로 재산세, 종부세, 건보료 부담 완화
          <br />
          - 일시적 2주택자, 비투기 목적 주택 종부세 부담 완화
          <br />
          - 생애최초 주택구입자 취득세 감면 확대
          <br />
          - 공제율 상향, 5년간 이월공제 허용 등 월세 공제 확대
          <br />
          <br />
          ■ 주거취약계층 주거복지 강화
          <br />
          - 장기 공공임대주택 10% 목표로 확대 추진
          <br />
          - 청년 기본주택과 노약자 지원주택 공급
          <br />
          - 아동부터 노인까지 생애주기별 주거지원 확대 <br />
          <br />
          ■ 전 국토의 균형성장 추진
          <br />
          - 국가균형발전위원회, 지방분권위원회 기능 강화
          <br />
          - 전국을 초광역 단위의 산업-현안 중심의 5개의 서울(메가시티)과 3개의
          특별자치도로 특화발전 <br />
          - 수도권 공공기관 추가 이전하여 혁신도시 완성
          <br />
          - ‘강호축’(강원~충청~호남)을 국토균형발전의 또 다른 중심축으로 발전
          <br />
          - 지방 대학교육 혁신, 농산어촌 교육, 의료, 문화 여건 개선
          <br />
          - 국세와 지방세 비율 6 : 4 목표로 추진하여 재정분권 강화
          <br />
          - 자치경찰제 기능과 역할 확대 <br />
          <br />
          ■ 남부수도권 조성으로 국가 경쟁력 강화 <br />
          - 남부권에 산업과 일자리를 통한 세계적 경쟁력을 갖춘 경제 수도권 조성
          <br />
          - 독립 도시국가에 준하는 혁신 거점도시인 ‘신산업 특화수도’를 2곳 이상
          조성
          <br />
          - 가덕 신공항, 새만금 신공항, 수소트램, 영호남을 연결하는 고속철도 등
          교통인프라 확충
          <br />
          <br />
          ■ 지역투자 촉진, 전략산업 육성으로 지역경제 활성화
          <br />
          - 지역투자 촉진을 위한 법적 기반 마련 및 지역 대표산업 발굴과 지원
          <br />
          - 지역의 스마트 그린산단과 주변도시를 묶어 일과 삶이 공존하는
          복합산업공간으로 조성
          <br />
          <br />
          ■ 소멸위기 지역에 대한 특별한 정책 마련
          <br />
          - 소멸위기지역에 대한 지방정부의 지원과 중앙정부의 위기대응 기능을
          통합한 대통령 직속 지방상생발전위원회 설치
          <br />
          <br />
          ■ 세종시를 행정수도로 완성
          <br />
          - 행정수도 명문화 개헌 추진 <br />
          - 대통령 제2집무실 설치, 국회 세종의사당 설치, 행정부 추가 이전 추진
          <br />
          <br />
          ○ 이행기간
          <br />
          - 임기 내 법적 토대를 완성하고, 자원의 효율적 배분을 통한 균형발전
          모색
          <br />
          <br />
          ○ 재원조달방안
          <br />
          - 국비 및 지방비, 민간투자 자금 활용
          <br />
          - 주택도시기금(재정 포함), 입주자 및 주택사업자, 민간투자 자금 등으로
          충당
          <br />
        </Accordion>
        <Accordion title="5. [복지, 안전] 어르신, 환자, 장애인, 아동, 영·유아 돌봄 국가책임제, 국민안심국가 실현">
          ○ 목 표 : <br />
          - 어르신, 환자, 장애인, 아동, 영·유아 5대 돌봄에 대한 국가책임 완성과
          국민안심 국가 실현 <br /> <br />
          ○ 이행방법 <br />
          ■ 어르신 돌봄 국가 책임 강화로 고령화 대응 <br />
          - 현재 소득 하위 70%인 기초연금 대상을 더 많은 어르신에게 지급할 수
          있도록 점진적으로 확대 추진 <br />
          - 기초연금 부부 감액 폐지 및 일하는 어르신 국민연금 깎지 않고 지급
          추진 <br />- 방문간호, 재택의료 서비스 확대 등 어르신 요양 돌봄 서비스
          강화 <br />
          - 치아 임플란트 건강보험 적용 확대, 어르신 주치의제 확대 <br />
          - 어르신 일자리 80만 개에서 140만 개로 확대, 공익형 일자리 100만 개
          확충 <br /> <br />
          ■ 환자 돌봄의 국가 책임 강화로 가족부담 경감 <br />
          - 방문간호 및 방문 의료 서비스 전국 확대 등 어르신 요양 돌봄 서비스
          강화 <br />
          - 환자와 가족 맞춤형 제도 개선을 통해 간호·간병 통합 돌봄 강화 <br />{" "}
          <br />
          ■ 장애인 돌봄의 국가 책임 강화로 자립 지원 <br />
          - 상시 서비스 체계 구축 등 장애인 돌봄 서비스 강화 <br />
          - 유니버설 디자인 공공부문부터 확대 <br />
          - 대통령 직속 국가장애인위원회 설치, 장애인 예산 증액 <br />
          - 소득하위 70% 모든 중증장애인에게 장애인 연금 지급 <br />
          - 장애(아동)수당 소득하위 70%까지 단계적 확대 <br /> <br />
          ■ 아동, 영·유아 돌봄의 국가 책임 강화로 저출생 대응 <br />
          - 초등 돌봄서비스 강화 및 지역사회 아동돌봄 존 구축 <br />- 어린이집
          교사 대 아동비율 하향과 공간 확대 등 영유아 보육서비스 강화 <br />
          - 육아휴직 급여액 현실화, 부모쿼터제·자동육아휴직등록제 도입 <br />-
          지역사회통합 돌봄 체계 구축 등으로 저출생·고령화에 효과적 대응 <br />
          - 아동·청소년 중증 아토피 치료 등 건강보험 적용 확대 <br /> <br />
          ■ 촘촘한 소득보장체계 <br />
          - 기초연금, 장애인연금, 장년수당, 아동·청소년수당, 기초생활보장 등의
          보장성 확대 <br />
          - 상병수당 등 신규 소득보장제도 도입 <br /> <br />
          ■ 사회적 요구 반영 보장성 확대 <br />
          - 탈모 치료, 치아 임플란트, 아동·청소년 중증 아토피 치료 등 건강보험
          적용 확대 <br /> <br />
          ■ 1인 가구·한부모 가족 등 다양한 가족의 삶 존중 <br />
          - 행복마을관리소 모델 확대로 1인 가구 지원 강화 <br />
          - 여성 1인 가구 주거 안전시설 지원 확대 <br />- 돌봄·의료·장례 영역에
          연대관계 등록제 도입 및 임의 후견제도 활성화 <br />
          - 한부모 가족 양육비 국가 대지급제 도입 <br />
          - 한부모 가족증명서 발급 소득 기준 폐지, 아동 양육비 지급 대상 소득
          기준 상향 <br /> <br />
          ■ 국민의 안전을 위해 헌신하는 분들에 대한 예우 강화 <br />
          - 공무원 등의 공무수행 중 부상·질병에 대한 공상추정제도 도입 <br />
          - 경찰, 소방, 해경 직군을 공안직 보수체계로 편입 <br />
          - 소방관의 건강과 복지에 대한 국가책임 강화 <br /> <br />
          ■ 범죄로부터 안전한 사회를 통한 국민안심국가 건설 <br />
          - 범죄경력자 관리·감독 강화하여 흉악범죄 재범률 하향 <br />
          - 범죄 피해자에 대한 효율적 지원을 위한 전담 기구 설치 및 보호 기금
          확충 <br />
          - 빅데이터·AI 등 첨단기술 활용 및 경찰 전담 인력 확대로 보이스피싱
          박멸 <br />
          - 자율방범대 등 민·관·경 유기적 협력을 통한 생활안전 역량 확충 <br />{" "}
          <br />
          ■ 자연 및 사회적 재난으로부터 안전한 사회 건설 <br />
          - 국가적 재난으로 인한 대규모 손해 배상 및 보상을 위한 국가재난기금
          설치 <br />- 통합 기상재난예보 시스템 구축, 유해 물질 위협으로부터
          국민건강 지킴 <br />
          - 홍수피해 국가 차원 예방, 생활밀착형 미세먼지 관리 체계 구축 <br />
          - 안전한 수돗물, 합리적인 공급시스템 구축, 4대강과 지류·지천 자연성
          회복 <br />
          - 해양쓰레기 감축, 유통시설 개선으로 국민 안심 수산물 제공 <br />
          - 보행자가 안심하고 걸을 수 있는 교통환경 조성 <br />- 플라스틱 제로
          사회 구현, 폐기물 수거 및 처리 체계 공공책임 강화 <br /> <br />
          ■ 국민의 먹거리 기본권과 안전 보장 <br />
          - 임산부 친환경 꾸러미 공급, 어린이 과일 간식 및 취약계층 농식품
          바우처 사업 확대 <br />
          - ‘긴급끼니 돌봄’ 제도 도입 <br />
          - 어린이집과 군대, 복지시설에 공공급식 체계 확대 <br />
          - 유전자 변형 농산물(GMO) 완전 표시제 도입 <br /> <br />
          ○ 이행기간 <br />
          - 2022년부터 관계 법률 제·개정하여 단계적 추진 <br /> <br />
          ○ 재원조달방안 <br />
          - 국비 및 지방비, 건보재정 등 활용 <br />
        </Accordion>
        <Accordion title="6. [노동, 일자리] 일하는 사람들의 권리보장과 일자리 대전환으로 성장하는 사회 실현">
          ○ 목 표<br />
          - 일하는 사람 누구나 차별받지 않고 권리를 누릴 수 있는 사회 실현
          <br />
          - 일자리대전환으로 성장하는 사회 실현
          <br />
          <br />
          ○ 이행방법
          <br />
          ■ (가칭)‘일하는 사람들의 권리보장 기본법’ 제정
          <br />
          - 노동자든 자영업자든 일하는 사람이라면 누구나 누려야 하는 권리를 명시
          <br />
          <br />
          ■ 일하는 사람들의 노동 안전망 구축
          <br />
          - 전 국민 고용보험 조기 실현 및 일하는 사람의 출산휴가·육아휴직 보장
          <br />
          - 일하는 사람의 노동 안전 체계 구축 및 전 국민 산재보험 실현
          <br />
          - 주 4.5일제 단계적 실시 등 실노동시간 단축 지원
          <br />
          <br />
          ■ 노동관계법상 권리 보장 강화
          <br />
          - 근로기준법 등 노동관계법상 보호대상의 단계적 확대
          <br />
          - 상시적 지속 업무의 정규직 고용원칙 확립 및 동일가치노동 동일임금
          법제화
          <br />
          - 지역 밀착형 노동지원센터 및 지역노동복지기금, 노동회의소 등 노동조합
          미가입 노동자 권리보호 지원 확대
          <br />
          - 고용·노동정책 수립 시 노·사의 실질적 참여 보장
          <br />
          <br />
          ■ 공정 일자리 정책으로 정책체계 개편하고 300만 개 일자리 창출
          <br />
          - ‘일자리전환기본법’을 제정, 일자리위원회를 ‘일자리대전환위원회’로
          개편
          <br />- 디지털 . 에너지 . 사회서비스 대전환을 통해 300만개 일자리 창출{" "}
          <br />
          - 기업 주도의 일자리 성장 촉진
          <br />
          - 기업전환, 노동전환, 지역전환을 아우르는 일자리 전환체계 구축 <br />
          - 기획재정부 개편 시 일자리 정책의 콘트롤타워 기능 강화
          <br />
          - 각종 일자리 지원센터를 통합적으로 운영 추진 <br />
          - 미래전략산업 육성과 기업도시 2.0 프로젝트로 혁신형 지역 일자리 창출
          <br />
          - 청년 고용률 5%p 향상 추진
          <br />
          <br />
          ○ 이행기간
          <br />
          - 권리보장기본법 제정, 노동안전체계 구축 및 전국민산재보험, 노동시간
          단축 로드맵 마련 노동관계법상 권리보장 2022년부터 단계적으로 시행
          <br />
          ○ 재원조달방안
          <br />
          - 국비 및 지방비
          <br />
          - 고용·산재보험은 기금운영의 효율성 확보 및 일반재정 등 투입
          <br />
        </Accordion>
        <Accordion title="7. [교육, 과학기술] 과학기술 5대 강국 실현과 미래인재 양성, 공교육 내실화를 위한 교육대전환">
          ○ 목 표<br />
          - 전환시대를 선도할 인재양성으로 과학기술 5대 강국 실현 <br />
          - 미래인재 양성과 공교육 내실화를 위한 교육대전환
          <br />
          <br />
          ○ 이행방법
          <br />
          ■ 디지털 인재 양성 및 직업·평생교육 체제 전환
          <br />
          - 초·중·고·대학 디지털 역량 교육 강화, 온라인 교육 통합플랫폼 구축
          <br />
          - 신산업 중심 직업교육체제로 전환
          <br />
          - 평생학습계좌제 도입과 시민대학 플랫폼 운영
          <br />
          <br />
          ■ 공교육 국가 책임 강화와 기본학력 보장
          <br />
          - 유치원·어린이집 단계적 통합
          <br />
          - 초등 3시 하교 및 돌봄 7시 확대
          <br />
          - 기본학력 보장 및 행복한 지역학습일 도입
          <br />
          <br />
          ■ 입시공정성 강화와 대학체제 전환을 통한 새로운 고등교육 생태계 구축
          <br />
          - ‘대입공정성위원회’ 설치, 대학서열구조 완화
          <br />
          - 대학등록금 부담 완화
          <br />
          - 지역과 함께 성장하는 혁신공유대학 체제 구축 및 대학도시건설 <br />
          <br />
          ■ 전환 시대를 선도할 과학기술 인력 양성
          <br />
          - 국가 과학기술 연구 및 산업현장의 인적 수요·공급 균형의 안정성 확보
          <br />
          - 청년과학기술인 지원 강화
          <br />
          - 여성과학인 경력단절 극복을 위한 전국단위 연구플랫폼 구축
          <br />
          <br />
          ■ 과학기술 5대강국 진입과 기술주권 확립
          <br />
          - 국가 연구개발을 책임지는 과학기술혁신부총리제 도입
          <br />
          - 인공지능, 양자컴퓨팅, 우주항공 등 10대 대통령 프로젝트 (big
          10프로젝트)추진
          <br />
          - 과학기술 연구자 중심의 연구환경 조성
          <br />
          <br />
          ○ 이행기간
          <br />
          - 2022년부터 관련 법 개정 등 제도 개선과 예산 확보 등을 통해 추진
          <br />
          <br />
          ○ 재원조달방안 <br />
          - 국비 및 지방비, 시도교육청 재정, 필요한 경우 민간투자도 유치
          <br />
        </Accordion>
        <Accordion title="8. [문화, 정보통신] 문화강국 실현과 미디어산업 혁신성장">
          ○ 목 표 <br />
          - 문화 콘텐츠 세계 2강 국가 도약, 미디어 산업 혁신성장 지원 <br />{" "}
          <br />
          ○ 이행방법 <br />
          ■ 문화콘텐츠 세계 2강, 관광·스포츠로 행복한 국가 <br />- 국가예산 대비
          문화예산 2.5% 확충과 문화예술인 기본소득 100만원 지급 <br />
          - 문화도시 확대, 3501 문화마을 조성과 청년 마을예술가 국가 고용 <br />
          - 신남방·신북방 한류프로젝트, K-콘텐츠밸리 조성 <br />
          - 해외 한글교육기관 신규 설치 및 지원 <br />- 스포츠포인트 제도 도입,
          체육인 공제회 설립, 스포츠 클럽 활성화 <br />
          - 국민 여가관광권 추진, 스마트관광 인프라 구축, 지역 강소 관광기업
          육성 <br /> <br />
          ■ 사람과 동물이 함께 행복한 사회 <br />
          - 반려동물 진료비 표준수가제 도입 등 반려동물 양육비 부담 완화 <br />
          - 사회적 합의를 도출하여 ‘개식용 금지 추진’ <br />
          - 동물 학대 예방·재발 방지 추진 <br /> <br />
          ■ 비대면 시대 가계통신비 부담 완화 <br />
          - 전 국민 휴대폰 데이터 안심요금제 도입, 병사 요금 할인 20%에서 50%로
          확대 <br />
          - 전국 3만여대 버스 5G공공와이파이 확대 설치 <br />
          - 5G기반 지하철 와이파이 광역 지하철(공항철도 포함) 전체로 확대 <br />{" "}
          <br />
          ■ 미디어 창작자 및 스타트업 위한 혁신 정책 추진 <br />
          - 1인미디어 창작자 및 스타트업 교육 지원 <br />
          - 미디어 콘텐츠 창작자들의 제작 역량 강화 <br />
          - 지역·중소 방송 활성화 적극 지원 <br /> <br />
          ■ 방송영상콘텐츠 강국 도약을 위한 혁신성장 기반 구축 <br />
          - 국내 OTT 콘텐츠 활성화 지원과 공정 경쟁환경 조성 <br />
          - 방송영상콘텐츠의 가치를 정상화해 유료방송 콘텐츠 시장 활성화 <br />
          - 방송영상콘텐츠 및 플랫폼의 글로벌 경쟁력 강화 <br /> <br />
          ○ 이행기간 <br />- 2022년부터 관련 법 개정 등 제도 개선과 예산 확보
          등을 통해 추진 <br /> <br />
          ○ 재원조달방안 <br />
          - 국비 및 지방비, 민간투자 자금 활용 <br />
        </Accordion>
        <Accordion title="9. [정치, 사법] 대통령 4년 중임제 개헌 추진, 국민 주권 실현을 위한 정치개혁과 사법개혁">
          ○ 목 표<br />
          - 정치와 사법개혁을 통해 국민주권을 실현하고 국민의 기본권 강화
          <br />
          <br />
          ○ 이행방법
          <br />
          ■ 새로운 기본권 명문화와 대통령 4년 중임제 등 단계적 개헌 추진 <br />
          - 생명권, 안전권, 주거권, 건강권, 자기결정권, 알권리 등 새로운 기본권
          명문화
          <br />
          - 자치 분권, 균형발전 확대 명문화
          <br />
          - 시민사회와 정치권이 함께하는 ‘국민통합추진위원회’ 구성
          <br />
          - 국무총리 국회추천제, 책임총리제 실질적 운영, 부총리 정책조정 기능
          활성화 <br />
          - 진영·출신지역·학벌을 넘어서 능력과 실력 중심으로 통합정부 국민내각
          구성
          <br />
          - 성별과 연령을 고려한 통합정부 균형내각 구성
          <br />
          <br />
          ■ 일하는 국회, 민의를 제대로 반영하는 국회
          <br />
          - 국회의원 불체포특권 폐지 추진 및 무노동 무임금법 도입
          <br />
          - 국회 윤리특별위원회 의원 징계 심사 신속처리
          <br />
          - 비례대표 확대 및 위성정당 설립 금지
          <br />
          - 청년들의 정치 참여와 도전 지원, 주민참여제도 활성화
          <br />
          <br />
          ■ 검찰개혁 완성과 수사과정에서 국민의 인권보호 강화 <br />
          - 인권정책에 관한 기본법, 수사절차법 제정
          <br />
          - 수사·기소 분리, 전관예우 근절 등<br />
          <br />
          ■ 국민 중심의 재판·법률 조력 서비스 실현
          <br />
          - 사법행정의 선진화, 상고제도 개선
          <br />
          - 사법절차의 신속성·투명성·편의성 강화 <br />
          - 국민참여재판 확대, 전문법원 확대 <br />
          <br />
          ○ 이행기간
          <br />
          - 2022년부터 법률 개정 등 제도를 정비하고, 신규사업은 2023년부터 예산
          반영 추진
          <br />
          <br />
          ○ 재원조달방안 등<br />
          - 국비 및 지방비 활용
          <br />
        </Accordion>
        <Accordion title="10. [국방, 통일, 외교] 스마트강군 건설, 실용외교로 평화안보 실현">
          ○ 목 표 :<br />
          - 스마트 강군, 국익중심 실용외교로 한반도 비핵화 실현, 평화체제 제도화
          <br />
          <br />
          ○ 이행방법
          <br />
          ■ 4차 산업혁명 첨단기술로 스마트 강군 건설
          <br />
          - 핵·WMD 대응 억제역량 강화, 원자력추진잠수함 건조 및 우주사령부 창설
          추진
          <br />
          - 육·해·공 현행 3군 체제에서 해병대 독립 준4군 체제로 개편 추진
          <br />
          - 징집병과 기술집약형 전투부사관 중에서 선택하는 ‘선택적 모병제’ 도입
          <br />
          - 병사월급 최저임금 준용하여 2027년까지 200만원 이상 인상
          <br />
          - 군 식당 민간인 직고용을 통한 군 급식 질 획기적 개선
          <br />
          - 군 사관학교 성별 제한선발 제도 개선
          <br />
          <br />
          ■ 국익 중심의 실용 외교
          <br />
          - 미중 경쟁을 국익 증진의 기회로 활용하는 능동적이고 진취적인 외교
          전개
          <br />
          - 한미동맹의 포괄적 동맹 발전 실현 <br />
          - 한중간 실질 협력 증진 및 한반도에서 중국의 긍정적 역할 유도 <br />
          - 정경분리 투 트랙 기조의 실용적 한일관계 구축
          <br />
          - 주변 4강을 넘어 다양한 국가와의 외교 영토 확대
          <br />
          - 공정·포용의 동아시아 질서 구축
          <br />
          - G5 국가 비전을 뒷받침할 통상과 경제안보 외교를 강화 <br />
          - 포스트코로나 신질서 대응 새로운 외교플랫폼 구축 <br />
          - 국격에 맞는 국제개발협력 전개, 청년들의 국제무대 진출 지원 <br />
          - 재외동포기본법 제정 및 재외동포청 설치, 해외 한인 교육 지원
          <br />
          <br />
          ■ 한반도 비핵화와 평화체제 제도화
          <br />
          - 완전한 비핵화와 평화체제 제도화를 위한 실질적 진전 구축:
          스냅백(약속위반시 제재복원)과 단계적 동시행동, 국제협력강화, 신뢰조성
          및 적대해소를 통한 협상 여건 조성
          <br />
          - 첨단산업 중심의 한반도 평화경제 대전환 추진: 접경지역 글로벌
          평화경제 클러스터 조성, 글로벌 공급망 남북협력 추진
          <br />
          - 국민과 함께하는 남북협력 추진: 국민공감 대북정책 제도화, 청년세대
          남북 교류협력 추진
          <br />
          <br />
          ○ 이행기간
          <br />
          - 2022년 국방혁신 기구 설치 등<br />
          - 2023년~2027년 ODA 예산 증액 <br />
          <br />
          ○ 재원조달방안
          <br />
          - 중앙정부의 일반 재정 활용
          <br />
          - 국방비 조정(전력운영비, 방위력개선비 합리화 등) 및 증가분 내 조달
          <br />
        </Accordion>
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
  margin-top: 40px;
  border-bottom: 12px solid #f2f3f5;
`;

export default DetailPage;
