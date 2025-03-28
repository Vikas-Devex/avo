import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const About = () => {
  const stats = [
    { label: "Businesses Empowered", value: 5000 },
    { label: "Employees Benefited", value: 20000 },
    { label: "Communities Strengthened", value: 100 },
    { label: "Customers Reached", value: 1000000 },
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
        <h1
          className="text-dark text-center my-5 text-capitalize fw-bold"
          data-aos="zoom-in"
        >
          <span className="text-success">About</span> Us
        </h1>
      </div>
      <div className="about my-5">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="">
                {/* <p className="mb-0 text-success text-capitalize fw-bold">
                  about us
                </p> */}
                <h2 className="text-capitalize fw-bold">
                  <span className="text-success">story </span> behind AVO
                </h2>
                <p>
                  At AVO, we believe that small businesses are the backbone of
                  thriving communities. Our mission is to empower local
                  businesses, support employees, and create stronger connections
                  between companies and their customers. We started AVO with a
                  simple vision: "What if businesses had a way to reward their
                  employees and attract local customers effortlessly?" With this
                  idea,
                </p>

                <p>
                  AVO was built as a one-stop solution that provides exclusive
                  employee discounts, local perks, and powerful marketing tools
                  to help businesses grow. Whether you’re a small business owner
                  looking to expand your reach or an employee searching for
                  valuable benefits, AVO brings the best deals and opportunities
                  right to your fingertips. What We Stand For:Empowering Small
                  Businesses – Helping them attract and retain loyal customers.
                  Supporting Employees – Providing them with meaningful perks
                  and savings. Strengthening Communities – Building a network
                  where businesses and customers thrive together. At AVO, we’re
                  more than just a platform—we’re a movement towards a smarter,
                  more connected business ecosystem. Join us on this journey and
                  unlock endless possibilities with AVO!
                </p>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img className="img-fluid" src="/images/about.png" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <section
        className="text-white py-5"
        style={{ backgroundColor: "#099c51" }}
      >
        <div className="container text-center">
          <h2 className="mb-4 fw-bold">Statistics</h2>
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-sm-6 col-md-6 mb-4">
                <div
                  className="p-4 border rounded bg-white impact h-100"
                  style={{
                    backgroundColor: "#099c51",
                    boxShadow: "rgba(0, 0, 0, 0.35) 11px 13px 18px",
                  }}
                >
                  <h3 className="fw-bold text-success text-dark">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={3}
                      separator=","
                    />
                    +
                  </h3>
                  <p className="mb-0 text-dark">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="Mission my-5">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img
                className=""
                style={{ width: "80%" }}
                src="/images/mission.png"
                alt="Mission"
              />
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="mt-2">
                <h2 className="text-capitalize fw-bold">
                  <span className="text-success">Our</span> Mission{" "}
                </h2>
                <p>
                  At AVO, our mission is to empower small businesses by
                  equipping them with the essential tools and resources needed
                  to grow, retain employees, and strengthen local communities.
                  We believe that when businesses thrive, they create a ripple
                  effect—leading to happier employees, stronger customer
                  relationships, and more connected, vibrant communities.
                </p>
                <p>
                  Through a combination of exclusive perks, innovative marketing
                  solutions, and seamless engagement tools, we help businesses
                  not only attract and retain loyal customers but also provide
                  their employees with valuable benefits that enhance job
                  satisfaction and overall well-being. Our approach ensures that
                  businesses can focus on what they do best while fostering a
                  supportive environment where both employees and customers feel
                  valued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-5">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="">
                <h2 className="text-capitalize fw-bold">
                  <span className="text-success">Our</span> vision{" "}
                </h2>
                <p>
                  At AVO, we believe that small businesses are the backbone of
                  thriving communities. Our mission is to empower local
                  businesses, support employees, and create stronger connections
                  between companies and their customers. We started AVO with a
                  simple vision: "What if businesses had a way to reward their
                  employees and attract local customers effortlessly?" With this
                  idea,
                </p>

                <p>
                  AVO was built as a one-stop solution that provides exclusive
                  employee discounts, local perks, and powerful marketing tools
                  to help businesses grow. Whether you’re a small business owner
                  looking to expand your reach or an employee searching for
                  valuable benefits, AVO brings the best deals and opportunities
                  right to your fingertips. What We Stand For:Empowering Small
                  Businesses – Helping them attract and retain loyal customers.
                  Supporting Employees – Providing them with meaningful perks
                  and savings. Strengthening Communities – Building a network
                  where businesses and customers thrive together. At AVO, we’re
                  more than just a platform—we’re a movement towards a smarter,
                  more connected business ecosystem. Join us on this journey and
                  unlock endless possibilities with AVO!
                </p>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img className="img-fluid" src="/images/vission2.png" alt="img" />
            </div>
          </div>
        </div>
      </div>

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

export default About;
