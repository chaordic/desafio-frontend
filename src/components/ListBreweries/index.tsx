import { useProvider } from "../../contexts/UserContext";
import CardBrewery from "../CardBrewery";
import { ICardBrewery } from "../CardBrewery/interface";
import { UlS } from "./styled";

const ListBreweries = () => {
  const { breweries } = useProvider();
  return (
    <nav aria-label="list of breweries">
      <UlS>
        {!breweries.length ? (
          <h2>No results found!</h2>
        ) : (
          breweries.map((brewery: ICardBrewery) => (
            <CardBrewery key={brewery.id} brewery={brewery} />
          ))
        )}
      </UlS>
    </nav>
  );
};

export default ListBreweries;
