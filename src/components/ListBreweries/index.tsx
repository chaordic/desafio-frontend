import { useProvider } from "../../contexts/UserContext";
import CardBrewery from "../CardBrewery";
import { ICardBrewery } from "../CardBrewery/interface";

const ListBreweries = () => {
  const { breweries } = useProvider();
  return (
    <nav aria-label="list of breweries">
      <ul>
        {!breweries.length ? (
          <h2>No results found!</h2>
        ) : (
          breweries.map((brewery: ICardBrewery) => (
            <CardBrewery key={brewery.id} brewery={brewery} />
          ))
        )}
      </ul>
    </nav>
  );
};

export default ListBreweries;
