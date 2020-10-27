import React from "react";
import { CardGrid } from "./styles";
import { Card } from "../../../atoms";

const BreweryList = (props) => {
  return (
    <CardGrid>
      {props.breweries &&
        props.breweries.map((brewery) => (
          <Card
            cursor={"pointer"}
            key={brewery.id}
            breweryType={brewery.brewery_type}
            onClick={() => props.history.push("/brewery/" + brewery.id)}
            history={props.history}
          >
            <h2>{brewery.name}</h2>
            <div>
              <span>{brewery.street}</span>
              <span>
                {brewery.city} {brewery.state} - {brewery.postal_code}
              </span>
              <span>{brewery.country}</span>
            </div>
            <p>{brewery.brewery_type}</p>
          </Card>
        ))}
    </CardGrid>
  );
};

export default BreweryList;
