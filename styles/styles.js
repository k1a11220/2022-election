import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => (props.top ? "120px" : "10px")};
  padding-bottom: 32px;

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--font-gray-1);
  }
`;
