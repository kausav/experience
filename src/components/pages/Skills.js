import React from "react";

import "../../App.css";

import "./Skills.css";

function Skills() {
  return (
    <section className="skills-container">
      <video src="/videos/video5.mp4" autoPlay loop muted />
      <center>
        <h1 className="page-name">
          <u>My Skills</u>
        </h1>
      </center>

      <div className="firstline">
        My creative and programming skills are as follows:
      </div>

      <div className="leftside">
        <div className="frontend">Frontend Skills:</div>
        <div className="frontend-container">
          <div className="bars">
            <div className="info">
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div className="line html"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>CSS</span>
              <span>80%</span>
            </div>
            <div className="line css"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>NodeJS</span>
              <span>60%</span>
            </div>
            <div className="line node"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>ReactJS</span>
              <span>70%</span>
            </div>
            <div className="line react"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>ElectronJS</span>
              <span>75%</span>
            </div>
            <div className="line electron"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>WordPress</span>
              <span>60%</span>
            </div>
            <div className="line word"></div>
          </div>
        </div>
      </div>

      <div className="rightside">
        <div className="backend">Backend Skills:</div>
        <div className="backend-container">
          <div className="bars">
            <div className="info">
              <span>Python</span>
              <span>70%</span>
            </div>
            <div className="line python"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>Tkinter</span>
              <span>80%</span>
            </div>
            <div className="line tkinter"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>Django</span>
              <span>50%</span>
            </div>
            <div className="line django"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>MySQL</span>
              <span>80%</span>
            </div>
            <div className="line sql"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>PHP/LARAVEL</span>
              <span>60%</span>
            </div>
            <div className="line php"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>MATLAB(ECE)</span>
              <span>90%</span>
            </div>
            <div className="line matlab"></div>
          </div>
        </div>
      </div>
      <div className="others">
        <p>
          <span>Other</span> than skills shown above, I can also work on various
          clouds like AWS, Google Cloud, IBM Cloud etc. I can also do system
          administrator work on LINUX, Windows OS using tools like ANSIBLE. I
          can also modify digital images using tools like MATLAB, Adobe
          Photoshop etc. and I can also modify digital audio/video signals using
          tools like SCILAB.
        </p>
      </div>
    </section>
  );
}
export default Skills;
