import React from "react";
import icon1 from "../../images/mea.jpg";
import icon2 from "../../images/Genesis.jpg";
import icon3 from "../../images/Coinpong.jpg";
import icon4 from "../../images/Suisai.jpg";
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
    <Servicescontainer id="ourgames">
      <Servicesh1>Our Games</Servicesh1>
      <Serviceswrapper>
        <Servicescard>
          <Servicesicon src={icon1} />
          <Servicesh2>Mea</Servicesh2>
          {/* <Servicesp>we help you always </Servicesp> */}
        </Servicescard>
        <Servicescard>
          <Servicesicon src={icon2} />
          <Servicesh2> Genesis</Servicesh2>
        </Servicescard>
        <Servicescard>
          <Servicesicon src={icon3} />
          <Servicesh2> CoinPong</Servicesh2>
        </Servicescard>
        <Servicescard>
          <Servicesicon src={icon4} />
          <Servicesh2> Suisai</Servicesh2>
        </Servicescard>
      </Serviceswrapper>
    </Servicescontainer>
  );
};

export default Services;
