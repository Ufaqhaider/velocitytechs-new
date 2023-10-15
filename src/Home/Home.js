import React from "react";
import "./home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div class="content container mt-lg-5 ">
        <div class="block-hero mt-5">
          <h1 data-w-id="Heading mt-3">
            Hassle-free software development for your business
          </h1>
          <p class="paragraph-hero ">
            Say goodbye to the complexities of software development. Join Us to
            experience seamless and efficient solutions.
          </p>
          <div class="form-block-banner herocta w-form  d-md-table-row">
            <form>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-110}
                duration={100}
              >
                <input
                  type="submit"
                  class="submit-button-white  w-button 0"
                />
              </Link>
            </form>
          </div>
        </div>

        <nav class="social">
          <ul>
            <li>
              <a href="/">
                Twitter <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/highflyer910">
                Facebook <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/teonamushambadze">
                Linkedin <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/teonamushambadze">
                Youtube <i class="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </nav>

        {/* moving bolls animation  */}
        <div class="block-hero-img 5  mt-lg-3 ">
          <div class="block-circle---hero-1">
            <img
              src="https://on-the-spot.loopgenius.com/static/img/orange_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---4 box bounce-1 "
            />
            <img
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---5 box bounce-1 "
            />
            <img
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---6 box bounce-1"
            />
            <img
              src="https://on-the-spot.loopgenius.com/static/img/orange_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---7 box bounce-1 "
            />
            <img
              src="https://on-the-spot.loopgenius.com/static/img/orange_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---8 box bounce-1"
            />
            <img
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---9 box bounce-1 "
            />
          </div>
          <div class="block-circle---hero-2 box bounce-1 ">
            <img
              data-aos="fade-down"
              data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/orange_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---1 box bounce-1 "
            />
            <img
              data-aos="fade-down"
              data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---2"
            />
            <img
              data-aos="fade-down"
              data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
