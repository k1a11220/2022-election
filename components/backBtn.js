import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  padding-top: ${(props) => (props.isOnly ? "" : "40px")};
  cursor: pointer;
`;

const BackBtn = ({ isOnly }) => {
  const router = useRouter();

  return (
    <Container isOnly={isOnly} onClick={() => router.back()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
      >
        <path
          id="Chevron_Right"
          d="M54.379,8.572l8.167,7.193a1.01,1.01,0,0,0,1.3,0,.74.74,0,0,0,0-1.141L56.325,8l7.519-6.622a.741.741,0,0,0,0-1.142,1.01,1.01,0,0,0-1.3,0L54.378,7.43A.748.748,0,0,0,54.379,8.572Z"
          transform="translate(-54.113 -0.001)"
          fill="var(--main-color)"
        />
      </svg>
    </Container>
  );
};

export default BackBtn;
