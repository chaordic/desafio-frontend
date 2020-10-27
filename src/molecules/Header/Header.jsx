import React from "react";
import { Component, Container } from "./styles";

const Header = (props) => {
  return (
    <Component>
      <Container>
        <h1>Breweries</h1>
        <span>A breweries list by Open Brewery DB</span>
      </Container>
    </Component>
  );
};

export default Header;
