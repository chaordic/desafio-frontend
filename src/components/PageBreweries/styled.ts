import styled from "styled-components";
import { Link } from "react-router-dom";

interface IPropyLink {
  isActive: boolean;
}

export const NavS = styled.nav`
  margin: 0 auto;
  ul {
    display: flex;
    flex-direction: row;
    li {
      cursor: pointer;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #efefef;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
        0px 12px 24px rgba(239, 239, 239, 0.5);
      margin-left: 5px;
      border-radius: 4px;
      a {
        text-decoration: none;
        font-size: 0.75rem;
        transition: 0.5s;
      }
      transition: 0.5s;
    }
    li:hover {
      transition: 0.5s;
      background-color: var(--color-closed);
      a {
        transition: 0.5s;
        color: var(--color-bg);
      }
    }
  }
`;

export const LinkS = styled(Link)<IPropyLink>`
  color: #333;
  text-decoration: none;
  margin: 0 8px;
  padding: 4px 8px;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #0a0c10;
    color: #fff;
  `}
`;
