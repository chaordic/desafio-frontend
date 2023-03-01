import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainS = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

export const LinkDetailS = styled(Link)`
  margin: 10px 0px 30px 0;
  text-decoration: none;
  color: var(--color-closed);
  font-size: 1.5rem;
  transition: 0.5s;
  span {
    margin-left: 5px;
    font-size: 1rem;
  }
  &:hover {
    transform: scale(1.01);
    transition: 0.5s;
  }
`;
