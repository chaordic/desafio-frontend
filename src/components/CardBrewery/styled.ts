import styled from "styled-components";
import { IPropySpan } from "./interface";

export const DivS = styled.div<IPropySpan>`
  display: flex;
  font-size: 0.6rem;
  justify-content: flex-start;
  margin: 0px 0px 10px 10px;
  border-radius: 6px;
  span {
    display: block;
  }
  padding: 5px 8px;
  background-color: var(--color-${(props) => props.type});
  color: var(--color-bg);
`;
