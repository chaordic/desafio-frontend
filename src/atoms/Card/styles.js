import styled from 'styled-components'
import { black, blue, green, gray, purple, white, yellow } from '../../assets/_colors'
import { laptop } from "../../assets/_breakpoints"

export const StyledCard = styled.div`
  width: 190px;
  margin: 4px;
  height: ${props => props.height ? props.height : "230px"};
  cursor: ${props => props.cursor ? props.cursor : "auto"};
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 15px 0px;
  background-color: ${white.primary};
  border-radius: 4px;
  padding: 22px 22px 0px 22px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};

  > h2 { 
    font-weight: 400;
    margin: 0;
  }

  > div {
    width: initial;
    display: flex;
    flex-direction: column;

    > span {
      color: ${gray.trout};
      font-size: ${props => props.textFont ? props.textFont : "13px"};;
    }
  }

  > p {
    background: ${props => {
      switch (props.breweryType) {
        case "micro":
         return green.stone;
      
        case "contract":
         return black.eerie;
      
        case "brewpub":
         return yellow.cream;
      
        case "regional":
         return blue.royal;
      
        default:
          return purple.primary;
      }
    }};

    color: ${props => props.breweryType === "brewpub" ? "black" : "white" };
    margin: 8px 0;
    width: fit-content;
    font-weight: bold;
    font-size: 1em;
    padding: 6px;
    border-radius: 8px;
  }

  @media (min-width: ${laptop}) {
    width: ${props => props.width ? props.width : "230px"};
    margin: 8px;
  }
`