import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    type: "business",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted successfully!");
  };

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
          <span className="text-success">Our</span> Events
        </h1>
      </div>
      <div className="">
        <div className="container my-5">
          <div className="row align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div
                className=" p-4 shadow-lg rounded"
                style={{ maxWidth: "600px", margin: "auto" }}
              >
                <h2 className="text-center text-dark mb-3">Inquiry Form</h2>

                <div className="d-flex justify-content-center mb-3">
                  <button
                    className={`btn me-2 ${
                      formData.type === "business"
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, type: "business" })
                    }
                  >
                    Business
                  </button>
                  <button
                    className={`btn ${
                      formData.type === "individual"
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        type: "individual",
                        company: "",
                      })
                    }
                  >
                    Individual
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  {formData.type === "business" && (
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows={4}
                      required
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="3000"
              style={{
                borderRadius: "10px",
              }}
            >
              <iframe
                title="iframe-1"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54895.639293760105!2d76.75029051151121!3d30.69091038510129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1741256236392!5m2!1sen!2sin"
                width="100%"
                height="700"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <img
              className="img-fluid move-img"
              src="/images/banner-img.png"
            ></img> */}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container my-5 ">
          <div className="row align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img className="img-fluid" src="/images/contact.png" alt="img" />
            </div>
            <div className="col-md-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="contact-info p-4">
                  <h4 className="mb-4">Get in Touch</h4>
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

export default ContactUs;
