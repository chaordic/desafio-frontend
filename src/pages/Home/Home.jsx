import React, { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../../assets/constants";
import { BreweryList } from "../../molecules";
import { Dropdown, Loading } from "../../atoms";
import { FilterContainer, Pagination, Item } from "./styles";
import { breweryTypes } from "../../assets/breweryTypes";

const Home = (props) => {
  const [breweries, setBreweries] = useState([]);
  const [selectedBreweryType, setSelectedBreweryType] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchBeweries = useCallback(() => {
    setLoading(true);
    fetch(`${BASE_URL}?page=${page}&by_type=${selectedBreweryType}`)
      .then((response) => response.json())
      .then((data) => {
        setBreweries(data);
        setLoading(false);
      });
  }, [page, selectedBreweryType]);

  useEffect(() => {
    fetchBeweries();
  }, [fetchBeweries]);

  return (
    <>
      {isLoading ? (
        <div style={{ display: "flex", margin: "auto" }}>
          <Loading />
        </div>
      ) : (
        <>
          <FilterContainer>
            <h3>Filter</h3>
            <Dropdown
              onClick={(event) => setSelectedBreweryType(event.target.id)}
              data={breweryTypes}
              placeholder={
                selectedBreweryType === ""
                  ? "Brewery Types"
                  : selectedBreweryType
              }
              width="180px"
            />
          </FilterContainer>
          <BreweryList breweries={breweries} history={props.history} />
          <Pagination>
            <Item id="page1" page={page} onClick={() => setPage(1)}>
              <span>1</span>
            </Item>
            <Item id="page2" page={page} onClick={() => setPage(2)}>
              <span>2</span>
            </Item>
            <Item id="page3" page={page} onClick={() => setPage(3)}>
              <span>3</span>
            </Item>
          </Pagination>
        </>
      )}
    </>
  );
};

export default Home;
