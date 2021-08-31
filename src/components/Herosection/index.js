import React, { useState } from "react";
import {
  Herocontainer,
  Herobg,
  Videobg,
  Herocontent,
  Heroh1,
  HeroP,
  Herobtnwrapper,
  ArrowForward,
  ArrowRight,
} from "./Heroelement";
import video from "../../videos/video1.mp4";
import { Button } from "../Buttonelement";
import Text from "../Text/Text";
import "../Text/Text.css";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Herocontainer>
      <Herobg>
        <Videobg autoPlay loop muted src={video} type="video/mp4" />
      </Herobg>
      <Herocontent>
        <Heroh1>
          <Text />
        </Heroh1>
        <HeroP>Video games as never seen before</HeroP>

        <Herobtnwrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </Herobtnwrapper>
      </Herocontent>
    </Herocontainer>
  );
};

export default Hero;
