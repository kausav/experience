import React from "react";
// import Carousel from "react-elastic-carousel";
import "../../App.css";
import { Button } from "../Button";
import "./Home.css";
import Typical from "react-typical";
// import { sliderData } from "../SliderData";
// import Item from "./items";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  let settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <section className="home-container">
      <div className="first-div">
        <div className="img-container">
          <Slider {...settings}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src="images/img-1.jpg" />
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src="images/img-2.jpg" />
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src="images/img-3.jpg" />
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src="images/img-4.jpg" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="second-div">
        <div className="second-div-first-div">
          <h1>Our Placements</h1>
        </div>
        <div className="second-div-second-div">
          <p></p>
        </div>
      </div>
      <div className="third-div">
        <p>Any Text Data</p>
      </div>
      <div className="fourth-div">
        <div className="fourth-div-first-div">
          <h1>Student Testimonials</h1>
        </div>
        <div className="fourth-div-second-div">
          <p></p>
        </div>
      </div>

      <div className="fifth-div">
        <div className="fifth-div-first-div">
          <h1>Commencing Batches</h1>
          <h1>Online & Offline Batches</h1>
        </div>
        <div className="fifth-div-second-div">
          <p></p>
        </div>
      </div>

      <div className="sixth-div">
        <div className="sixth-div-first-div">
          <h1>Announcement</h1>
        </div>
        <div className="sixth-div-second-div">
          <p></p>
        </div>
      </div>

      <div className="seventh-div">
        <div className="seventh-div-first-div">
          <h1>Enquiry Form</h1>
        </div>
        <div className="seventh-div-second-div">
          <form>
            <input type="text" placeholder="Name" class="input-field" />
            <input type="email" placeholder="Email Id" class="input-field" />
            <input
              list="browsers"
              name="browser"
              id="browser"
              placeholder="Preferred Course"
              class="input-field"
            />

            <datalist id="browsers">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>

            <input
              list="browsers"
              name="browser"
              id="browser"
              placeholder="Training Center"
              class="input-field"
            />

            <datalist id="browsers">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>

            <input type="text" placeholder="Contact No." class="input-field" />
            <textarea
              type="text"
              placeholder="Message"
              class="input-field textarea-field"
            ></textarea>
          </form>
          <button>Submit Form</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
