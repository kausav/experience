import React from "react";

import "../../App.css";

import "./Experience.css";

function Experience() {
  return (
    <section className="experience-container">
      <video src="/videos/video10.mp4" autoPlay loop muted />
      <center>
        <h1 className="page-name">
          <u>Work Experience</u>
        </h1>
      </center>

      <div className="freelance">
        <div>
          <span>1.) FREELANCER, 04/2015 to Current</span>
          <p className="freelance-content">
            <span className="paragraph">I am currently</span> working as a
            freelancer. Designing and developing websites, UX/UI or solving
            software issues for various freelancing websites as per customer
            demand is main part of my job. Other than that, Helping college
            students specializing in Digital Signal Processing (especially in
            Digital Image Processing & Audio Signal Processing) with their
            thesis & projects with programming parts of their thesis which
            require usage of MATLAB. Mainly executing the results of various
            research papers & Journals (especially IEEE & Springer) on MATLAB as
            per individuals demand. For example: “Reducing the Noise in Audio
            Signals While Using Multiple Microphones”, “Reduction in The Memory
            Size Of 8-Bit JPG Digital Image Without Compromising Its Quality”
            etc.
          </p>
        </div>
      </div>

      <div className="executive">
        <span>
          2.) EXECUTIVE ENGINEER, 02/2019 to 07/2020 (Company Name :
          PERFECT ID- GHAZIABAD, UP)
        </span>
        <li>Designing of various RFID antennas on AUTOCAD </li>
        <li>
          Testing for RFID Antennas by running simulations on TRAVA or SONET{" "}
        </li>
        <li>Manufacturing of RFID Tags </li>
        <li>Responsible for in-house Server Maintenance and network issues </li>
        <li>Second level support for in house applications based on SQL </li>
        <li>
          Responsible for trouble shooting of all the issues raised by customer
          in RFID Tags.{" "}
        </li>
        <li>Maintaining all company softwares & servers. </li>
      </div>

      <div className="contract">
        <span>
          3.) SKILLED ENGINEER (CONTRACT BASIS), 08/2018 To 11/2018 (Company Name
          : BEL FACTORY- PANCHKULA,HR)
        </span>
        <li>Verification of Contrast & Length Sensors used in VVPAT Machines </li>
      </div>

      <p className="lastdetail">For more experience information <a href="pdfs/experience.pdf"> click here</a>. </p>
    </section>
  );
}
export default Experience;
