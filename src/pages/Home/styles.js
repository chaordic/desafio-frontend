import styled from "styled-components"
import { black, white } from "../../assets/_colors"

export const Pagination = styled.div`
  display: flex;
  margin: 8px auto;
`

export const FilterContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 8px auto;

  > h3 {
    margin-right: 16px;
  }
`

export const Item = styled.div`
  display: flex;
  cursor: pointer;
  margin: 4px;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 6px;

  &#page1 {
    color: ${props => props.page === 1 ? white.alabaster : black.masala };
    background-color: ${props => props.page === 1 ? black.masala : white.alabaster };
  }

  &#page2 {
    color: ${props => props.page === 2 ? white.alabaster : black.masala };
    background-color: ${props => props.page === 2 ? black.masala : white.alabaster };
  }

  &#page3 {
    color: ${props => props.page === 3 ? white.alabaster : black.masala };
    background-color: ${props => props.page === 3 ? black.masala : white.alabaster };
  }

  
  > span {
    display: flex;
    margin: auto;
  }
`