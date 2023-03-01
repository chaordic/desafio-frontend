import { Link } from "react-router-dom";
import { IPropyCardBrewery } from "./interface";
import { DivS } from "./styled";

const CardBrewery = ({ brewery }: IPropyCardBrewery) => {
  const { id, name, street, city, state, postal_code, brewery_type, country } =
    brewery;
  return (
    <li>
      <Link to={`/${id}`}>
        <h4>{name}</h4>
        <address>
          <p>{street}</p>
          <p>{`${city} ${state} - ${postal_code}`}</p>
          <p>{country}</p>
        </address>
        <DivS type={brewery_type}>
          <span>{brewery_type}</span>
        </DivS>
      </Link>
    </li>
  );
};

export default CardBrewery;
