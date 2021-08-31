import React from "react";
import GameCard from "../../GameCard";
import {
  Servicescontainer,
  Servicesh1,
  Serviceswrapper,
} from "./serviceselement";

const Services = () => {
  return (
    <Servicescontainer id="services">
      <Servicesh1>Our Services</Servicesh1>
      <Serviceswrapper>
        <GameCard />
      </Serviceswrapper>
    </Servicescontainer>
  );
};

export default Services;
