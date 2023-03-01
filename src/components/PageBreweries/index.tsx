import { useProvider } from "../../contexts/UserContext";
import { LinkS, NavS } from "./styled";

const PageBreweries = () => {
  const { page } = useProvider();
  return (
    <NavS aria-label="browse pages">
      <ul>
        <li>
          <LinkS to={"/?page=1"} isActive={page === "1" || !page}>
            1
          </LinkS>
        </li>
        <li>
          <LinkS to={"/?page=2"} isActive={page === "2"}>
            2
          </LinkS>
        </li>
        <li>
          <LinkS to={"/?page=3"} isActive={page === "3"}>
            3
          </LinkS>
        </li>
      </ul>
    </NavS>
  );
};

export default PageBreweries;
