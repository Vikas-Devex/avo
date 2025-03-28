import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
const Community = () => {
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
          <span className="text-success">Our</span> Community
        </h1>
      </div>
      <section id="heading-with-image" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Image */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="/images/10.jpg"
                alt="Descriptive Alt Text"
                className="img-fluid rounded"
              />
            </div>
            {/* Right Side: Content */}
            <div className="col-md-6">
              <h2
                className="display-6 text-dark mb-4 fw-bold"
                style={{ fontSize: "35px" }}
              >
                Get Your $10 Card/Coupon
              </h2>
              <p className="lead text-muted mb-3">
                Get your $10 card or coupon and unlock exclusive deals, events,
                and special perks that will elevate your experience with our
                services.
              </p>
              <p
                className="text-muted mb-4"
                style={{ fontSize: "1.1em", lineHeight: "1.7" }}
              >
                Our $10 card provides you with access to a variety of discounts
                on selected services, invitations to exclusive events, and a
                range of perks designed to enhance your journey with us. Don't
                miss out on this incredible offer.
              </p>
              <button className="btn btn-success  mx-0 rounded-pill">
                Claim Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="container py-5">
        {/* Layout 1: Image Left, Content Right */}
        <div className="row align-items-center mb-5 justify-content-between">
          {/* Left Side: Image */}
          <div className="col-md-6">
            <div className="offer-img">
              <img
                src="/images/offer.jpg"
                alt="Exclusive"
                className="img-fluid"
              />
            </div>
          </div>
          {/* Right Side: Content */}
          <div className="col-md-6">
            <h2
              className="display-6 text-dark mb-4 fw-bold"
              style={{ fontSize: "35px" }}
            >
              Exclusive Deals
            </h2>
            <p className="lead text-muted">
              Enjoy special discounts and offers available only to our members,
              ensuring you get the best value for your purchases. As a member,
              you'll have access to limited-time sales, product bundles, and
              seasonal discounts.
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-gift"></i> Access to member-only deals and
                flash sales.
              </li>
              <li>
                <i className="fa fa-percent"></i> Exclusive discounts on popular
                products.
              </li>
              <li>
                <i className="fa fa-user-secret"></i> Personalized offers based
                on your shopping history.
              </li>
              <li>
                <i className="fa fa-calendar"></i> Early bird offers for new
                arrivals and seasonal sales.
              </li>
            </ul>
          </div>
        </div>

        {/* Layout 2: Image Right, Content Left */}
        <div className="row align-items-center mb-5 flex-row-reverse justify-content-between">
          {/* Left Side: Content */}
          <div className="col-md-6 order-md-2">
            <h2
              className="display-6 text-dark mb-4 fw-bold"
              style={{ fontSize: "35px" }}
            >
              Exciting Events
            </h2>
            <p className="lead text-muted">
              Gain access to exclusive events, workshops, and seminars that
              cater to your interests and professional growth. These events
              provide valuable networking opportunities and insights from
              industry leaders.
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-calendar-check"></i> Invitations to
                exclusive webinars and live events.
              </li>
              <li>
                <i className="fa fa-trophy"></i> Opportunities to participate in
                contests and giveaways.
              </li>
              <li>
                <i className="fa fa-users"></i> Special guest speakers and panel
                discussions.
              </li>
              <li>
                <i className="fa fa-star"></i> VIP access to meet-and-greets
                with experts and influencers.
              </li>
            </ul>
          </div>
          {/* Right Side: Image */}
          <div className="col-md-6 order-md-1">
            <div className="offer-img">
              <img
                src="/images/event.jpg"
                alt="Exciting"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Layout 3: Image Left, Content Right */}
        <div className="row align-items-center justify-content-between">
          {/* Left Side: Image */}
          <div className="col-md-6 order-2 order-md-0">
            <div className="offer-img">
              <img
                src="/images/perks.jpg"
                alt="Member"
                className="img-fluid"
              />
            </div>
          </div>
          {/* Right Side: Content */}
          <div className="col-md-6">
            <h2
              className="display-6 text-dark mb-4 fw-bold"
              style={{ fontSize: "35px" }}
            >
              Member Perks
            </h2>
            <p className="lead text-muted">
              Unlock a range of perks, including priority customer service,
              early access to sales, and personalized recommendations. These
              exclusive benefits are designed to make your experience as a
              member even more rewarding.
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-headphones"></i> Priority customer support
                with dedicated representatives.
              </li>
              <li>
                <i className="fa-solid fa-clock"></i> Early access to new
                products and services.
              </li>
              <li>
                <i className="fa fa-cogs"></i> Personalized shopping experience
                with tailored recommendations.
              </li>
              <li>
                <i className="fa fa-diamond"></i> Exclusive invites to VIP
                events and product launches.
              </li>
            </ul>
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

export default Community;
