import React from "react";
import icon1 from "../../images/mea.jpg";
import icon2 from "../../images/Genesis.jpg";
import icon3 from "../../images/Coinpong.jpg";
import icon4 from "../../images/Suisai.jpg";
import GameCard from "../../GameCard";
import {
  Servicescontainer,
  Servicesh1,
  Serviceswrapper,
  Servicescard,
  Servicesicon,
  Servicesh2,
  Servicesp,
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
