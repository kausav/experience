import React from "react";

import "../../App.css";

import "./Projects.css";

function Projects() {
  return (
    <section className="contact-container">
      <video src="/videos/video8.mp4" autoPlay loop muted />
      <center>
        <h1 className="page-name2">
          <u>Projects & Publications</u>
        </h1>
      </center>

      <div className="wholecontainer">
        <a href="https://nishtha.info/">
          <div className="container1">
            <div className="projects-content">
              <i className="fas fa-code"></i>
              <h3 className="projects_title">Personal Portfolio</h3>
              <p className="projects_description">
                I created a Personal Portfolio website for my client.
              </p>
            </div>
          </div>
        </a>

        <a href="/pdfs/erp.pdf">
          <div className="container2">
            <div className="projects-content">
              <i className="fas fa-paint-brush"></i>
              <h3 className="projects_title">ERP Software</h3>
              <p className="projects_description">
                I am creating a GUI software for my client on ElectronJS.
              </p>
            </div>
          </div>
        </a>

        <div className="container3">
          <div className="projects-content">
            <i className="fas fa-pen"></i>
            <h3 className="projects_title">M. Tech Thesis</h3>
            <p className="projects_description">
              My whole master's thesis was on how to secure digital image using
              watermarking.
            </p>
          </div>
        </div>

        <a href="/pdfs/erp.pdf">
          <div className="container4">
            <div className="projects-content">
              <i className="fas fa-file"></i>
              <h3 className="projects_title">Research Paper</h3>
              <p className="projects_description">
                This is the link to my published research paper.
              </p>
            </div>
          </div>
        </a>

        <div className="container5">
          <div className="projects-content">
            <i className="fas fa-tools"></i>
            <h3 className="projects_title">Online pH-Meter</h3>
            <p className="projects_description">
              I created a industrial grade pH-Meter for measuring pH of Various
              liquids flowing through companies pipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
