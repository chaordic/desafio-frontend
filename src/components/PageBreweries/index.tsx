import { Link } from "react-router-dom";

const PageBreweries = () => {
  return (
    <nav aria-label="browse pages">
      <ul>
        <li>
          <Link to={"/?page=1"}>1</Link>
        </li>
        <li>
          <Link to={"/?page=2"}>2</Link>
        </li>
        <li>
          <Link to={"/?page=3"}>3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageBreweries;
