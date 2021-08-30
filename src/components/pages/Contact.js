import React from "react";

import "../../App.css";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-container">
      <video src="/videos/video9.mp4" autoPlay loop muted />
      <center>
        <h1 className="page-name2">
          <u>Contact Me</u>
        </h1>
      </center>

      <p className="details">
        If you want to get in touch with me here is my contact info:
      </p>

      <div className="name">
        <i className="fas fa-user"></i>
        <div className="contactinfo">
          <div className="latestname">
            <div className="head">Name:</div>
            <div className="sub-title">Kausav Kumar</div>
          </div>
        </div>
      </div>

      <div className="address">
        <i className="fas fa-map-marker-alt"></i>
        <div className="contactinfo">
          <div className="head">Address:</div>
          <div className="sub-title">
            233-New Model Town, Tohana(125120),Haryana,India
          </div>
        </div>
      </div>

      <div className="email">
        <i className="fas fa-envelope"></i>
        <div className="contactinfo">
          <div className="latestmail">
            <div className="head">EmailID:</div>
            <div className="sub-title">kausavkumar23@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="mob">
        <i className="fas fa-phone-alt"></i>
        <div className="contactinfo">
          <div className="latestmob">
            <div className="head">Mob:</div>
            <div className="sub-title">8168563218,9465189863</div>
          </div>
        </div>
      </div>

      <div className="ldn">
        <i className="fab fa-linkedin"></i>
        <div className="contactinfo">
          <div className="head">LinkedinID:</div>
          <div className="sub-title">
            https://www.linkedin.com/in/kausav-kumar
          </div>
        </div>
      </div>

      <div className="indiweb">
        <i className="fas fa-tv"></i>
        <div className="contactinfo">
          <div className="latest">
            <div className="head">Website:</div>
            <div className="sub-title">https://kausavkumar.netlify.app/</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
