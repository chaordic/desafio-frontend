import styled from "styled-components";
export const HeaderS = styled.header`
  background-color: var(--color-primary);
  width: 100%;
  height: 120px;
  color: var(--color-bg);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  div {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    h1 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
