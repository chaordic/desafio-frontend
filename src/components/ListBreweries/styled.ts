import styled from "styled-components";

export const UlS = styled.ul`
  h2 {
    font-size: 1.25rem;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    transition: 0.5s;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
      0px 12px 24px rgba(239, 239, 239, 0.5);
    border: 1px solid #efefef;
    margin-bottom: 40px;
    width: 250px;
    a {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      color: var(--color-contract);
      text-decoration: none;
      h4 {
        font-size: 1.5rem;
        padding: 7px 10px;
      }
      address {
        padding: 0px 10px;
        width: 100%;
        font-size: 0.75rem;
        padding-bottom: 45px;
        border-bottom: 1px solid #efefef;
      }
    }
  }
  li:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
