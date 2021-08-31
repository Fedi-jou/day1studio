import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  Footercontainer,
  Footerlinkscontainer,
  Footerwrap,
  Footerlinkswraper,
  Footerlinkitems,
  Footerlinktitle,
  Footerlink,
  Socialmedia,
  Socialmediawrap,
  Sociallogo,
  Websiterights,
  Socialicons,
  Socialiconlink,
} from "./footerelement";

const Footer = () => {
  const Togglehome = () => {
    scroll.scrollToTop();
  };
  return (
    <Footercontainer>
      <Footerwrap>
        <Footerlinkscontainer>
          <Footerlinkswraper>
            <Footerlinkitems>
              <Footerlinktitle> About Us</Footerlinktitle>
              <Footerlink>Testimonials</Footerlink>
              <Footerlink>Investors</Footerlink>
              <Footerlink>Terms of services</Footerlink>
            </Footerlinkitems>
            <Footerlinkitems>
              <Footerlinktitle> Join Us</Footerlinktitle>
              <Footerlink>Carees</Footerlink>
              <Footerlink>Got an idea</Footerlink>
            </Footerlinkitems>
          </Footerlinkswraper>
          <Footerlinkswraper>
            <Footerlinkitems>
              <Footerlinktitle> Support </Footerlinktitle>
              <Footerlink>Support request</Footerlink>
              <Footerlink>Contact</Footerlink>
            </Footerlinkitems>
          </Footerlinkswraper>
        </Footerlinkscontainer>
        <Socialmedia>
          <Socialmediawrap>
            <Sociallogo to="/" onClick={Togglehome}>
              Day 1 Studio
            </Sociallogo>
            <Websiterights>
              Day 1 Studio © {new Date().getFullYear()} All Rights Reserved
            </Websiterights>
            <Socialicons>
              <Socialiconlink href="/" target="_blank" aria-label="facebook">
                <FaFacebook />
              </Socialiconlink>
              <Socialiconlink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </Socialiconlink>
              <Socialiconlink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </Socialiconlink>
              <Socialiconlink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Socialiconlink>
              <Socialiconlink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </Socialiconlink>
            </Socialicons>
          </Socialmediawrap>
        </Socialmedia>
      </Footerwrap>
    </Footercontainer>
  );
};

export default Footer;
