import styled from "styled-components"
import { gray } from "../../../assets/_colors"

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  color: ${gray.trout};
  width: fit-content;

  > svg {
    transform: rotate(180deg);
    margin-right: 4px;
  }
`