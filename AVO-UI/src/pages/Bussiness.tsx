import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is included
import { FaCheck, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Bussiness = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header overflow-hidden">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">
              <img
                className="img-fluid"
                style={{ maxWidth: "133px" }}
                src="/images/logo.png"
                alt="Logo"
              />
            </Link>
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
              </ul>
            </div>
            <div className="desktop">
              <button
                className="btn btn-outline-light border text-hover mx-2"
                style={{ backgroundColor: "#0aa958" }}
              >
                Sign Up
              </button>
              <button className="btn btn-outline-light border text-dark">
                Join Now
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="bg">
        <h1
          className="text-dark text-center my-5 text-capitalize fw-bold"
          data-aos="zoom-in"
        >
          <span className="text-success">Our</span> Bussiness
        </h1>
      </div>
      {/* Business Plans Section */}
      <section className="business-plans py-5 bg-white">
        <div className="container ">
          <h2 className="text-center fw-bold mb-5 get">Tiered Benefits</h2>
          <div className="row justify-content-between gy-3 ">
            {[
              {
                name: "FREE",
                price: "$0/month",
                border: "border-success",
                features: [true, false, false],
              },
              {
                name: "BASIC",
                price: "$19/month",
                border: "border-warning",
                features: [true, true, false],
              },
              {
                name: "ADVANCED",
                price: "$49/month",
                border: "border-danger",
                features: [true, true, true],
              },
              {
                name: "PREMIUM",
                price: "$99/month",
                border: "border-primary",
                features: [true, true, true],
              },
            ].map((plan, index) => (
              <div key={index} className="col-lg-3 col-md-6 ">
                <div
                  className={`pricing-card container
                     mx-auto ${plan.border} border-top border-5 p-4 text-center`}
                >
                  <h3>{plan.name}</h3>
                  <p className="price fw-bold">{plan.price}</p>
                  <ul className="features-list list-unstyled p-0">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        {feature ? (
                          <FaCheck className="text-success me-2" />
                        ) : (
                          <FaTimes className="text-danger me-2" />
                        )}
                        Feature {i + 1}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn ${plan.border.replace(
                      "border-",
                      "btn-"
                    )} text-white mt-3`}
                  >
                    {plan.name === "FREE" ? "GET STARTED" : "CHOOSE PLAN"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5 get">Marketing Services</h2>
          <div className="row justify-content-center gy-4 py-5">
            <div className="col-md-4">
              <div className="list-group shadow border-primary border-2 border">
                <div className="list-group-item d-flex align-items-center border-0">
                  <span className="badge border-primary">
                    <IoSearch className="bg-primary rounded-circle p-3 me-3 text-white" />
                  </span>
                  <span>Search Engine Optimization</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="list-group shadow border-warning border-2 border">
                <div className="list-group-item d-flex align-items-center border-0">
                  <span className="badge border-warning">
                    <FaShareAlt className="bg-warning rounded-circle p-3 me-3" />
                  </span>
                  <span>Social Media Marketing</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="list-group shadow border-success border-2 border">
                <div className="list-group-item d-flex align-items-center border-0">
                  <span className="badge border-success">
                    <FaFileAlt className="bg-success rounded-circle p-3 me-3" />
                  </span>
                  <span>Content Marketing</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="list-group shadow border-danger border-2 border">
                <div className="list-group-item d-flex align-items-center border-0">
                  <span className="badge border-danger">
                    <FaFileAlt className="bg-danger rounded-circle p-3 me-3" />
                  </span>
                  <span>Online Reputation Management</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="list-group shadow border-primary border-2 border">
                <div className="list-group-item d-flex align-items-center border-0">
                  <span className="badge border-primary">
                    <FaFileAlt className="bg-primary rounded-circle p-3 me-3" />
                  </span>
                  <span>Paid Marketing Services (PPC)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="fw-bold text-center my-5 get">Success Stories</h2>
      <Slider
        className="container story-slider"
        {...{
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <div className="carousel-card">
          <div className="card mx-auto text-center shadow-sm p-4">
            <div className="d-flex justify-content-center align-items-center card-img">
              <img
                src="/images/PROFILE.jpg"
                className="rounded-circle"
                width="80"
                height="80"
                alt="Client 1"
              />
            </div>

            <h5 className="fw-bold mt-3">John Doe</h5>
            <span className="text-muted">Founder, Tech Solutions</span>
            <p className="mt-3 fst-italic">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              Thanks to their marketing strategies, our revenue grew by 60% in
              just 6 months!
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div className="carousel-card">
          <div className="card mx-auto text-center shadow-sm p-4">
            <div className="d-flex justify-content-center align-items-center card-img">
              <img
                src="/images/PROFILE.jpg"
                className="rounded-circle"
                width="80"
                height="80"
                alt="Client 1"
              />
            </div>

            <h5 className="fw-bold mt-3">Sarah Smith</h5>
            <span className="text-muted">Marketing Manager, BrandCo</span>
            <p className="mt-3 fst-italic">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              Their SEO expertise helped us reach top search rankings and double
              our website traffic.
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div className="carousel-card">
          <div className="card mx-auto text-center shadow-sm p-4">
            <div className="d-flex justify-content-center align-items-center card-img">
              <img
                src="/images/PROFILE.jpg"
                className="rounded-circle"
                width="80"
                height="80"
                alt="Client 1"
              />
            </div>

            <h5 className="fw-bold mt-3">David Brown</h5>
            <span className="text-muted">Founder, EcomStore</span>
            <p className="mt-3 fst-italic">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              We saw a 75% increase in online sales after implementing their
              paid marketing strategies.
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div className="carousel-card">
          <div className="card mx-auto text-center shadow-sm p-4">
            <div className="d-flex justify-content-center align-items-center card-img">
              <img
                src="/images/PROFILE.jpg"
                className="rounded-circle"
                width="80"
                height="80"
                alt="Client 1"
              />
            </div>

            <h5 className="fw-bold mt-3">Emily Johnson</h5>
            <span className="text-muted">Business Owner, Fashion Hub</span>
            <p className="mt-3 fst-italic">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              Our brand awareness skyrocketed, and engagement on social media
              tripled!
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div className="carousel-card">
          <div className="card mx-auto text-center shadow-sm p-4">
            <div className="d-flex justify-content-center align-items-center card-img">
              <img
                src="/images/PROFILE.jpg"
                className="rounded-circle"
                width="80"
                height="80"
                alt="Client 1"
              />
            </div>

            <h5 className="fw-bold mt-3">Michael Lee</h5>
            <span className="text-muted">Director, Auto World</span>
            <p className="mt-3 fst-italic">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              Their online reputation management helped us regain trust and
              attract more customers.
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div className="carousel-card">
          <div className="card mx-auto text-center shadow-sm p-4">
            <div className="d-flex justify-content-center align-items-center card-img">
              <img
                src="/images/PROFILE.jpg"
                className="rounded-circle"
                width="80"
                height="80"
                alt="Client 1"
              />
            </div>

            <h5 className="fw-bold mt-3">Sophia Williams</h5>
            <span className="text-muted">CEO, GreenTech</span>
            <p className="mt-3 fst-italic">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              Their strategies made our startup a known brand within just one
              year!
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </Slider>
      {/* Footer Section */}
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
    </div>
  );
};

export default Bussiness;
