import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { GiConsoleController, GiTeamIdea } from "react-icons/gi";
import "./assets/css/icofont.min.css";
import {
  Card,
  Content,
  Icon,
  Plantitle,
  Plancost,
  Featurelistitem,
  Backgroundsquare,
  Actionbutton,
  Cardwrapper,
  Th,
} from "./Gamestyle.CSS";

function GameCard() {
  /*   const [features] = useState([
    "Want to see your game on consoles? We can make it real on any platform.",
    "10 domaine name",
    "unlimited mails",
  ]); */
  return (
    <>
      <Cardwrapper id={"services"}>
        <Card>
          <Backgroundsquare />
          <Content>
            <Icon>
              <FaConnectdevelop />
            </Icon>
            <Plantitle>GAME </Plantitle>
            <Plancost>DEVELOPMENT</Plancost>

            <Featurelistitem>
              <i className="icofont-check" />
              <span>
                Videogames are our passion. We can build a fantastic world just
                for you.
              </span>
            </Featurelistitem>
            {/* 
            <Actionbutton>Order now</Actionbutton> */}
          </Content>
        </Card>
        <Card>
          <Backgroundsquare />
          <Content>
            <Icon>
              <GiConsoleController />
            </Icon>
            <Plantitle>GAME</Plantitle>
            <Plancost>PORTING</Plancost>
            <Featurelistitem>
              <i className="icofont-check" />
              <span>
                Want to see your game on consoles? We can make it real on any
                platform.
              </span>
            </Featurelistitem>

            {/* <Actionbutton>Order now</Actionbutton> */}
          </Content>
        </Card>
        <Card>
          <Backgroundsquare />
          <Content>
            <Icon>
              <GiTeamIdea />
            </Icon>
            <Plantitle>ASSISTANCE & </Plantitle>
            <Plancost>OUTSCORING</Plancost>

            <Featurelistitem>
              <i className="icofont-check" />
              <span>
                Need anything else? We will put our heart and soul into any
                project in any sector.
              </span>
            </Featurelistitem>

            {/* <Actionbutton>Order now</Actionbutton> */}
          </Content>
        </Card>
      </Cardwrapper>
    </>
  );
}

export default GameCard;
