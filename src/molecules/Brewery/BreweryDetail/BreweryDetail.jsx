import React, { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../../../assets/constants";
import { Card, Loading } from "../../../atoms";
import { Arrow } from "../../../atoms/Icons";
import { BackButton, Container } from "./styles";

const BreweryDetail = (props) => {
  const [params] = useState(props.match.params);
  const [isLoading, setLoading] = useState(true);
  const [brewery, setBrewery] = useState([]);

  const fetchBewery = useCallback(() => {
    fetch(BASE_URL + "/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBrewery(data);
        setLoading(false);
      });
  }, [params.id]);

  useEffect(() => {
    fetchBewery();
  }, [fetchBewery]);
  return (
    <>
      {isLoading ? (
        <div style={{ display: "flex", margin: "auto" }}>
          <Loading />
        </div>
      ) : (
        <Container>
          <BackButton onClick={() => props.history.go(-1)}>
            <Arrow />
            Back
          </BackButton>
          <Card
            justifyContent="space-around"
            textFont="14px"
            width={"-webkit-fill-available"}
          >
            <h2>{brewery.name}</h2>
            <div>
              <span>Type: {brewery.brewery_type}</span>
              <span>Street: {brewery.street}</span>
              <span>State: {brewery.state}</span>
              <span>Postal code: {brewery.postal_code}</span>
              <span>Country: {brewery.country}</span>
              <span>
                Website:{" "}
                <a
                  href={brewery.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {brewery.website_url}
                </a>
              </span>
              <span>Phone: {brewery.phone}</span>
              <span>
                Open in maps:{" "}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${brewery.latitude},${brewery.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {brewery.latitude}, {brewery.longitude}
                </a>
              </span>
            </div>
          </Card>
        </Container>
      )}
    </>
  );
};

export default BreweryDetail;
