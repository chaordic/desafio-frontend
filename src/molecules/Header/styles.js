import styled from "styled-components"
import { black, white } from '../../assets/_colors'

export const Container = styled.div`
  width: 75%;
  height: 100px;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  
  > h1 {
    margin: 0;
  }
`

export const Component = styled.div`
  display: flex;
  color: ${white.primary};
  background-image: linear-gradient(to right, ${black.eerie} 0%, ${black.masala} 100%);
`