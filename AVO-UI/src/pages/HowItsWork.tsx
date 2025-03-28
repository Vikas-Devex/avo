import React from "react";
import { Link } from "react-router-dom";

const HowItsWork = () => {
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
      <h1
        className="text-dark text-center my-5 text-capitalize fw-bold get"
        data-aos="zoom-in"
      >
        <span className="text-success">How</span> Its Work
      </h1>
      <div className="bg-clr graph" data-aos="zoom-in" data-aos-duration="3000">
        <div className="container my-5">
          <div className="d-flex gap-5 align-items-center borderspace">
            <div className="circle1">
              <h2 className="">START</h2>
            </div>
            <div className="step">STEP1</div>
            <div className="step">STEP2</div>
            <div className="step">STEP3</div>
          </div>
          <img className="img-fluid" src="/images/borderimg2.png" alt="img" />
          <div className="d-flex gap-5 align-items-center justify-content-between borderspace">
            <div className="step">STEP1</div>
            <div className="step">STEP2</div>
            <div className="step">STEP3</div>

            <div className="circle1">
              <h2 className="">END</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card1 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="">
                <img className="img-fluid " src="/images/card1.png" alt="img" />
              </div>
            </div>
            <div
              className="col-md-7"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <h2 className="fw-bold">
                <span className="text-success">Digital Card</span> explanation
              </h2>
              <p>
                A physical card is a tangible, plastic or metal card issued by
                banks, financial institutions, or service providers for
                transactions. It typically includes a magnetic strip, EMV chip,
                and contactless technology for secure payments.
              </p>
              <h6 className="text-success">Key Features:</h6>
              <ul className="links p-0 ">
                <li className="list-unstyled position-relative ps-4 ">
                  <b>Security Features</b> – Explain how digital cards ensure
                  security through encryption, tokenization, and biometric
                  authentication.
                </li>
                <li className="list-unstyled position-relative ps-4">
                  <b>Convenience</b> – Highlight the ease of use, including
                  mobile wallet integration, quick payments, and online
                  transactions.
                </li>
                <li className="list-unstyled position-relative ps-4">
                  <b>Customization </b> – Mention how digital cards can be
                  personalized with spending limits, virtual card numbers, and
                  expiration controls.
                </li>
                <li className="list-unstyled position-relative ps-4">
                  <b>Environmental Benefits</b> – Digital cards reduce plastic
                  waste and promote eco-friendly payment solutions.
                </li>
                <li className="list-unstyled position-relative ps-4">
                  <b>Instant Issuance </b>– Unlike physical cards, digital cards
                  can be generated instantly and used immediately for
                  transactions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card2" style={{ backgroundColor: "#CDDC39" }}>
        <div className="container ">
          <div className="row align-items-center ">
            <div
              className="col-md-6 p-3"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <h2 className="fw-bold">
                <span className="text-success">Physical card</span> explanation
              </h2>
              <p>
                A physical card is a tangible, plastic or metal card issued by
                banks, financial institutions, or service providers for
                transactions. It typically includes a magnetic strip, EMV chip,
                and contactless technology for secure payments.
              </p>
              <h6 className="text-success">Key Features:</h6>
              <ul className="links p-0 ">
                <li className="list-unstyled position-relative ps-4 ">
                  <b>Durability</b> – Made from plastic or metal for long-term
                  use.
                </li>
                <li className="list-unstyled position-relative ps-4">
                  <b>Security Measures</b> – Equipped with EMV chips and PIN
                  protection to prevent fraud.
                </li>
                <li className="list-unstyled position-relative ps-4">
                  <b>Widely Accepted</b> – Can be used at ATMs, POS terminals,
                  and online transactions.
                </li>
                <li className="list-unstyled position-relative ps-4">
                  <b> Contactless Payments</b> – Supports NFC technology for
                  tap-and-go payments.
                </li>
                <li className="list-unstyled position-relative ps-4">
                  <b>Physical Presence Required</b> – Must be carried for
                  in-store purchases and ATM withdrawals.
                </li>
              </ul>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="">
                <img className="img-fluid " src="/images/card2.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="how-we-work my-5 mx-3">
        <h2 className="fw-bold get text-center">
          <span className="text-success">Simple steps </span> to sign up
        </h2>
        <div className="container">
          <div className="col-12 text-center"></div>
          <div className="row my-5 py-4  position-relative justify-content-center">
            <div
              className="col-lg-3  my-2 icon-box text-center position-relative design-container"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="half-circle-dashed"></div>
              <div className="work-icon"></div>
              <h3 className="text-success fw-bold">1</h3>
              <div className="points">
                <h5 className="fw-bold">Visit the Website/App</h5>
                <p>Go to the official website or open the mobile app.. </p>
              </div>
            </div>
            <div
              className="col-lg-3  my-2 icon-box text-center position-relative design-container"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="half-circle-dashed"></div>
              <div className="work-icon"></div>
              <h3 className="text-success fw-bold">2</h3>
              <div className="points">
                <h5 className="fw-bold">Click on "Sign Up"</h5>
                <p>Find and select the Sign Up or Create Account button.</p>
              </div>
            </div>
            <div
              className="col-lg-3  my-2 icon-box text-center position-relative design-container"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="half-circle-dashed"></div>
              <div className="work-icon"></div>
              <h3 className="text-success fw-bold">3</h3>
              <div className="points">
                <h5 className="fw-bold">Enter Your Details</h5>
                <p>Provide your name, email, phone number, and password.</p>
              </div>
            </div>
            <div
              className="col-lg-3  my-2 icon-box text-center position-relative design-container"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="work-icon"></div>
              <h3 className="text-success fw-bold">4</h3>
              <div className="points">
                <h5 className="fw-bold">Verify Your Identity</h5>
                <p>
                  Enter the OTP sent to your email or phone for verification.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3  my-2 icon-box text-center position-relative design-container"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="half-circle-dashed"></div>
              <div className="work-icon"></div>
              <h3 className="text-success fw-bold">5</h3>
              <div className="points">
                <h5 className="fw-bold">Set Up Your Profile</h5>
                <p>
                  Add additional details if required, like address or payment
                  info.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3  my-2 icon-box text-center position-relative design-container"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="half-circle-dashed"></div>
              <div className="work-icon"></div>
              <h3 className="text-success fw-bold">6</h3>
              <div className="points">
                <h5 className="fw-bold">Agree to Terms & Conditions</h5>
                <p>
                  Add additional details if required, like address or payment
                  info.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3  my-2 icon-box text-center position-relative design-container"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="work-icon"></div>
              <h3 className="text-success fw-bold">7</h3>
              <div className="points">
                <h5 className="fw-bold">Complete Registration</h5>
                <p>Click Submit or Finish to create your account successfull</p>
              </div>
            </div>
          </div>
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

export default HowItsWork;
