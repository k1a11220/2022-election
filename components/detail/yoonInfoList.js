import React from "react";
import Table from "./table";

const YoonInfoList = () => {
  return (
    <>
      <Table label={"출생"} list={["1960. 12. 18(63세, 만 61세) 서울"]} />
      <Table label={"직업"} list={["전 검찰총장"]} />
      <Table label={"병역"} list={["면제(사유: 부동시)"]} />
      <Table label={"전과"} list={["없음"]} />
      <Table
        label={"학력"}
        list={[
          "서울대학교 대학원 법학과",
          "서울대학교 법학과 학사",
          "충암고등학교",
          "충암중학교",
          "대광국민학교",
        ]}
      />
      <Table label={"재산"} list={["69억 978만원"]} />
    </>
  );
};

export default YoonInfoList;
