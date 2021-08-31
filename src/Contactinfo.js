import React from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import "./Contactinfo.css";

function Contact() {
  return (
    <div className="abc">
      <div>
        <div className="xyz">
          <icon>
            <FiPhoneIncoming size="30px" />
          </icon>
          <h2>Give us a call</h2>
          <p>+216 23 23 8 666 / +216 27 618 164</p>
        </div>
        <div className="xyz">
          <icon>
            <HiOutlineMail size="30px" />
          </icon>
          <h2>Send us an E-mail</h2>
          <p>day1studi0@gmail.com</p>
        </div>
        <div className="xyz">
          <icon>
            <GoLocation size="30px" />
          </icon>
          <h2>Come see us</h2>
          <p>Innovate CoWorking space n°3 2074 Mourouj 1</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
