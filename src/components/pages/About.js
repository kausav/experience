import React from "react";

import "../../App.css";

import "./About.css";

function About() {
  return (
    <section className="about-container">
      <video src="/videos/video4.mp4" autoPlay loop muted />
      <center>
        <h1 className="page-name">
          <u>ABOUT ME</u>
        </h1>
      </center>
      <div className="page-image">
        <center>
          <img src="images/sherry2.JPG" />
        </center>
      </div>
      <div className="page-content">
        <p>
          <span> I, Kausav Kumar</span> am a Hardworking, regular, professional,
          and talented worker & freelancer with a demonstrated history of
          working in the software industry. Skilled in Programming tools-
          Python/Django/Tkinter, HTML, CSS, NodeJS, ElectronJS, ReactJS,
          PHP/LARAVEL, WordPress, AUTOCAD, HFSS, Adobe Photoshop and scripting
          language - MATLAB, Perl, SCILAB. I can also work on various clouds
          like AWS, Google Cloud, IBM Cloud etc. I can also do system
          administrator work on LINUX, Windows OS using tools like ANSIBLE.
        </p>
        <p>
          <span> I did my</span> post-graduation{" "}
          <b>
            (M. Tech) in Electronics & Communication from LPU(Lovely
            Professional University),Jalandhar
          </b>{" "}
          with CGPA 7.32/10 and graduation{" "}
          <b>(B. Tech) from ICFAI University, Dehradun, India</b> in the same
          field with CGPA 6.59/10. During my post- graduation, my research work
          was on{" "}
          <b>
            <i>
              "Digital Image Watermarking for Image Securing & Authentication"
            </i>
          </b>
          , which makes me expert in pretty much everything related to digital
          image processing.
        </p>
        <p>
          <span> So, if you</span> want someone reliable and efficient worker
           <a href="/pdfs/resume.pdf"> Hire me</a> because I never leave my work unfinished.
        </p>
      </div>
    </section>
  );
}
export default About;
