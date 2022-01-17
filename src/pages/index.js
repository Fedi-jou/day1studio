import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Herosection";
import Info from "../components/Infosection";
import Finalcontact from "../components/Contactform/finalcontact";
import { Homeobjone } from "../components/Infosection/data";
import Services from "../components/Services";
import Services1 from "../components/Test";
import Footer from "../components/Footer";
import Cube1 from "../components/swiper/Swiper";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...Homeobjone} />
      <Services1 />
      <Services />
      {/* <Cube1 /> */}
      <Finalcontact />
      <Footer />
    </>
  );
};

export default Home;
