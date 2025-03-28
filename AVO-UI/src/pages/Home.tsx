import React from "react";
import { FaBullhorn, FaMapMarkerAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Home = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 2,
  // };
  return (
    <div>
      <div className="haeder mb-5 overflow-hidden">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="container">
            <a className="navbar-brand fw-bold" href="/">
              <img
                className="img-fluid"
                style={{ maxWidth: "133px" }}
                src="/images/logo.png"
                alt="img"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/how-it-works">
                    How It Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/businesses">
                    Businesses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/community">
                    Community
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <div className="d-none mob">
                  <button
                    className="btn btn-outline-light border mx-2"
                    style={{ backgroundColor: "#000" }}
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <button
                    className="btn btn-outline-light border text-dark"
                    type="submit"
                  >
                    Join Now
                  </button>
                </div>
              </ul>
            </div>
            <div className="desktop">
              <button
                className="btn btn-outline-light border text-hover mx-2"
                style={{ backgroundColor: "#0aa958" }}
                type="submit"
              >
                Sign Up
              </button>

              <button
                className="btn btn-outline-light border text-dark"
                type="submit"
              >
                Join Now
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- banner --> */}
      <section id="banner" className="banner overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-7 col-sm-12 py-md-5 py-0"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="content-banner">
                <h1 className="fw-bold font4">
                  <span className="spantext">Strengthening Small</span>{" "}
                  Businesses, Retaining Employees Growing Communities
                </h1>
                <h5 className="my-3">
                  Join AVO and unlock exclusive perks for your employees and
                  local customers.
                </h5>
                <button className="animated-btn">Get Started Today</button>

                <img
                  className="img-fluid d-none mob"
                  src="/images/banner-img.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="">
                <img
                  className="img-fluid  mob-view"
                  src="/images/banner-img.png"
                  alt="Banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- features-section --> */}
      <section
        className="features-section mt-5 overflow-hidden"
        style={{ marginTop: "70px" }}
      >
        {/* Content here */}

        <div className="container">
          <h2 className="fw-bold text-dark features">Our Features</h2>

          <div className="row">
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="feature-box">
                <FaTags />
                <h4>Employee Discounts</h4>
                <p>Exclusive deals for employees to save more.</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="feature-box">
                <FaMapMarkerAlt />

                <h4>Local Perks</h4>
                <p>Special offers at local businesses and vendors.</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="feature-box">
                <FaBullhorn />

                <h4>Marketing Tools</h4>
                <p>Powerful tools to help you grow your business.</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="feature-box">
                <CiMobile1 />
                <h4>App Features</h4>
                <p>Easy-to-use mobile app with all essential features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- benefits --> */}
      <section
        id="benefits"
        className="my-5 overflow-hidden reletive"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2 className="fw-bold text-dark features text-center get mb-5">
          Benefits Of AVO
        </h2>
        <img className="dooler" src="/images/doler.png" alt="img" />
        <img className="img-fluid" src="/images/new-img.png" alt="img" />
      </section>
      {/* <!-- Testimonials --> */}
      <div className="container" data-aos="fade-up" data-aos-duration="3000">
        <h2 className="fw-bold text-dark features text-center get mb-5">
          Testimonials
        </h2>
        <div className="slider-container">
          <Slider
            {...{
              dots: true,
              infinite: false,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 3,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ],
            }}
          >
            <div>
              <div className="box1">
                <img className="img-fluid" src="/images/img1.jpg" alt="img" />
                <h1 className="text-slider">Lorem Ipsum</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt tenetur eveniet porro accusamus necessitatibus non
                  officiis natus maxime odit cum, nemo ipsum vitae at commodi?
                  Totam tempora architecto quos illo!
                </p>
              </div>
            </div>
            <div>
              <div className="box1">
                <img className="img-fluid" src="/images/img1.jpg" alt="img" />
                <h1 className="text-slider">Lorem Ipsum</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt tenetur eveniet porro accusamus necessitatibus non
                  officiis natus maxime odit cum, nemo ipsum vitae at commodi?
                  Totam tempora architecto quos illo!
                </p>
              </div>
            </div>
            <div className="">
              <div className="box1">
                <img className="img-fluid" src="/images/img1.jpg" alt="img" />
                <h1 className="text-slider">Lorem Ipsum</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt tenetur eveniet porro accusamus necessitatibus non
                  officiis natus maxime odit cum, nemo ipsum vitae at commodi?
                  Totam tempora architecto quos illo!
                </p>
              </div>
            </div>
            <div className="">
              <div className="box1">
                <img className="img-fluid" src="/images/img1.jpg" alt="img" />
                <h1 className="text-slider">Lorem Ipsum</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt tenetur eveniet porro accusamus necessitatibus non
                  officiis natus maxime odit cum, nemo ipsum vitae at commodi?
                  Totam tempora architecto quos illo!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* <!-- subscribe --> */}
      <div
        className="mt-5 bg-clr mb-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <h2>RETAIN TODAY WITH AVO</h2>
          <p>JOIN TODAY & START OFFERING YOUR EMPLOYEES COMPANY DISCOUNTS</p>
          <button className="animated-btn">JOIN AVO</button>
        </div>
      </div>

      {/* <!-- get touch --> */}
      <section id="" className="mt-5 overflow-auto">
        <h2 className="text-center text-[40px] fw-bold get">Get in touch</h2>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-5">
                {/* <!-- Contact Info --> */}
                <div
                  className="col-md-5"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="contact-info p-4">
                    <h4 className="mb-4">Our Free Webinar Form</h4>
                    <div className="info-box d-flex align-items-center">
                      <i className="bi bi-geo-alt fs-4 me-3"></i>
                      <div>
                        <strong>Location</strong>
                        <p className="mb-0">123 Street, Anytown USA</p>
                      </div>
                    </div>
                    <div className="info-box d-flex align-items-center">
                      <i className="bi bi-telephone fs-4 me-3"></i>
                      <div>
                        <strong>Give us a call</strong>
                        <p className="mb-0">
                          (555) 456-678
                          <br />
                          +555 06-1359
                        </p>
                      </div>
                    </div>
                    <div className="info-box d-flex align-items-center">
                      <i className="bi bi-envelope fs-4 me-3"></i>
                      <div>
                        <strong>E-mail</strong>
                        <p className="mb-0">info@JoinOurFreeWebinar.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Form Section --> */}
                <div
                  className="col-md-7"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="form-section p-4">
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <select className="form-select" defaultValue="1">
                            <option selected>Subject</option>
                            <option value="1">Inquiry</option>
                            <option value="2">Support</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone No"
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            rows={4}
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            className="btn btn-primary w-100 submit"
                            style={{
                              backgroundColor: "#3bc781",
                              border: "1px solid #3bc781",
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <footer className="footer text-light pt-5 pb-4 mt-5 overflow-hidden">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* <!-- Company Info --> */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
              <img
                className="img-fluid"
                style={{
                  width: "55px",
                  height: "55px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
                src="/images/logo-footer.png"
                alt="Footer Logo"
              />

              <p>
                We provide high-quality solutions to help local businesses grow.
                Join us on our journey!
              </p>
            </div>

            {/* <!-- Useful Links --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h5 className="fw-bold text-uppercase mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/how-it-works">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/businesses">
                    Businesses
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/community">
                    Community
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* <!-- Contact Info --> */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
              <h5 className="fw-bold text-uppercase mb-4">Contact</h5>
              <p>
                <i className="fas fa-home me-3"></i> 123 Street, City, Country
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i> info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +123 456 7890
              </p>
            </div>

            {/* <!-- Newsletter --> */}
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto">
              <h5 className="fw-bold text-uppercase mb-4">Subscribe</h5>
              <form className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary subscribe" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* <!-- Social Media --> */}
          <div className="text-center mt-4">
            <a href="/" className="me-3 text-light">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="/" className="me-3 text-light">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="/" className="me-3 text-light">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="/" className="me-3 text-light">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>

          {/* <!-- Copyright --> */}
          <div className="text-center mt-3">
            <p className="mb-0">
              &copy; 2025 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- chatbot msg --> */}

      {/* <script
      src="https://kit.fontawesome.com/YOUR_FA_KIT.js"
      crossorigin="anonymous"
    ></script>

    <script>
      AOS.init({
        disable: function () {
          return window.innerWidth < 768; // Disable AOS on mobile
        },
      });
    </script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.js"
      integrity="sha512-6DC1eE3AWg1bgitkoaRM1lhY98PxbMIbhgYCGV107aZlyzzvaWCW1nJW2vDuYQm06hXrW0As6OGKcIaAVWnHJw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.4.1/jquery-migrate.min.js"
      integrity="sha512-KgffulL3mxrOsDicgQWA11O6q6oKeWcV00VxgfJw4TcM8XRQT8Df9EsrYxDf7tpVpfl3qcYD96BpyPvA4d1FDQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
      integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <script type="text/javascript">
      $(".responsive").slick({
        dots: true,
        infinite: false,

        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      });
    </script> */}
    </div>
  );
};

export default Home;
