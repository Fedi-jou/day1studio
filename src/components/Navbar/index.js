import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../logo.png";
import {
  Nav,
  Navbarcontainer,
  Navlogo,
  Mobileicon,
  Navmenu,
  Navitem,
  Navlinks,
  Navbtn,
  Navbtnlink,
} from "./navbarelement";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const ChangeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);
  }, []);
  const Togglehome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <Navbarcontainer>
          <Navlogo to="/" onClick={Togglehome}>
            <img src={logo} alt="" width={120} />
          </Navlogo>
          <Mobileicon onClick={toggle}>
            <FaBars />
          </Mobileicon>
          <Navmenu>
            <Navitem>
              <Navlinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </Navlinks>
            </Navitem>
            <Navitem>
              <Navlinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </Navlinks>
            </Navitem>
            <Navitem>
              <Navlinks
                to="ourgames"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Our Games
              </Navlinks>
            </Navitem>
            <Navitem>
              <Navlinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact us
              </Navlinks>
            </Navitem>
          </Navmenu>
          {/*      <Navbtn>
            <Navbtnlink
              to="signin"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              sign in
            </Navbtnlink>
          </Navbtn> */}
        </Navbarcontainer>
      </Nav>
    </>
  );
};

export default Navbar;
