import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Events = () => {
  const images = [
    // "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    // "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    // "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    // "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    // "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    { src: "images/img1.jpg", content: "event2" },
    { src: "images/event1.png", content: "event21" },
    { src: "images/img1.jpg", content: "event21" },
    { src: "images/img4.png", content: "event21" },
    { src: "images/img3.png", content: "event21" },
    { src: "images/event1.png", content: "event21" },
  ];
  return (
    <div>
      <div className="haeder  overflow-hidden">
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
      <div className="bg">
        <h1 className="text-dark text-center my-5 text-capitalize fw-bold">
          <span className="text-success">Our</span> Events
        </h1>
      </div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div
            className="col-md-6 position-relative "
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img
              className="img-fluid rounded"
              src="/images/img1.jpg"
              alt="img"
            />
            <h2 className="buy">Buy Ticket</h2>
          </div>
          <div
            className="col-md-6 mt-3"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h5 className="text-capitalize text-success">
              about our Business conferences
            </h5>
            <h2>Explore Future Of Design At Our Yearly Conference</h2>
            <p>
              The Yearly Designer Conferences designed to challenge, Event
              inspire, and push the boundaries of what is possible in design.
              From emerging technologies to sustainable design practices.
            </p>
            <p>
              The Yearly Designer Conferences designed to challenge, Event
              inspire, and push the boundaries of what is possible in design.
              From emerging technologies to sustainable design practices.
            </p>
            <button className="animated-btn">Become an Attendee</button>
          </div>
        </div>
      </div>

      <section className="container py-5">
        <div className="row g-4">
          {images.map((src, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <div className="gallery-item">
                <img
                  src={src.src}
                  alt={`img`}
                  className="img-fluid"
                />
                <div className="overlay">
                  <span>{src.content}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
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

export default Events;
