import React from "react";
import {
  Sidebarcontainer,
  Icon,
  Closeicon,
  Sidebarwrapper,
  Sidebarmenu,
  Sidebarlink,
  Sidebarroute,
  Sidebtnwrap,
} from "./sidebarelement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Sidebarcontainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <Closeicon />
      </Icon>
      <Sidebarwrapper>
        <Sidebarmenu>
          <Sidebarlink onClick={toggle} to="about">
            About
          </Sidebarlink>
          <Sidebarlink onClick={toggle} to="services">
            Services
          </Sidebarlink>
          <Sidebarlink onClick={toggle} to="ourgames">
            Our games
          </Sidebarlink>
          <Sidebarlink onClick={toggle} to="contact">
            Contact us
          </Sidebarlink>
        </Sidebarmenu>
        {/* <Sidebtnwrap>
          <Sidebarroute to="/signin">Sign in</Sidebarroute>
        </Sidebtnwrap> */}
      </Sidebarwrapper>
    </Sidebarcontainer>
  );
};

export default Sidebar;
