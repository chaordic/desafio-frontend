import styled from "styled-components"
import { white } from '../../assets/_colors'

export const Component = styled.div`
  display: flex;
  height: 100px;
  padding: 16px;
  background-color: ${white.alabaster};
  box-shadow: rgba(0,0,0,0.1) 0px 0px 6px 0px;
  margin-top: auto;
  width: -webkit-fill-available;

  > h1 {
    margin: auto;
    font-size: 14px;
  }
`