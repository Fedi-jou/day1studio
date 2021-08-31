import React from "react";
import { Button } from "../Buttonelement";
import {
  Infocontainer,
  Infowrapper,
  Inforow,
  Column1,
  Column2,
  Textwrapper,
  Topline,
  Heading,
  Subtitle,
  Btnwrap,
  Imgwrap,
  Img,
} from "./infoelement";

const Info = ({
  id,
  lightBg,
  imgStart,
  topline,
  headline,
  description,
  buttonlabell,
  img,
  alt,
  primary,
  dark,
  dark2,
  lightText,
  darkText,
  direction,
}) => {
  return (
    <>
      <Infocontainer lightBg={lightBg} id={id}>
        <Infowrapper>
          <Inforow imgStart={imgStart}>
            <Column1>
              <Textwrapper>
                <Topline>{topline}</Topline>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Btnwrap>
                  <Button
                    to={direction}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonlabell}
                  </Button>
                </Btnwrap>
              </Textwrapper>
            </Column1>
            <Column2>
              <Imgwrap>
                <Img src={img} alt={alt} />
              </Imgwrap>
            </Column2>
          </Inforow>
        </Infowrapper>
      </Infocontainer>
    </>
  );
};

export default Info;
