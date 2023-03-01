import { IPropyCardBrewery } from "./interface";

const CardBrewery = ({ brewery }: IPropyCardBrewery) => {
  const { name, street, city, state, postal_code, brewery_type } = brewery;
  return (
    <li>
      <h4>{name}</h4>
      <address>
        <p>{street}</p>
        <p>{`${city} ${state} - ${postal_code}`}</p>
      </address>
      <span>{brewery_type}</span>
    </li>
  );
};

export default CardBrewery;
