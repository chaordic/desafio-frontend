import React from "react";
import { StyledCard } from "./styles";

const Card = (props) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
