import styled from 'styled-components'
import { laptop } from '../../../assets/_breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardGrid = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;

  @media (min-width: ${laptop}) {
    width: ${props => props.width ? props.width : "230px"};
    margin: 8px;
    width: 80%;
    margin: 0 auto;
  }
`