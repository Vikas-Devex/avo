import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Top Navbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm px-3">
          <Container fluid>
            <div className="flex items-center px-3 py-1 w-1/3 ">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.69341 12.5352C12.4232 11.3751 13.6957 8.2216 12.5356 5.49177C11.3754 2.76193 8.22196 1.48945 5.49212 2.6496C2.76229 3.80975 1.48981 6.96321 2.64996 9.69305C3.81011 12.4229 6.96357 13.6954 9.69341 12.5352Z"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3901 11.3896L15.5555 15.5556"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>

              <input
                type="text"
                placeholder="Search"
                className="ml-2 w-full outline-none border-0 bg-transparent mx-1"
              />
            </div>
            <div className="d-flex align-items-center">
              <FaBell className="me-3" size={20} />
              <FaUserCircle size={25} />
            </div>
            <div className="d-flex align-items-center gap-3">
              <img
                className="img-fluid"
                src="/images/girl.png"
                alt="Profile"
                style={{
                  maxWidth: "41px",
                  backgroundColor: "green",
                  borderRadius: "29px",
                }}
              />
              <div>
                <h6 className="m-0">Moni Roy</h6>
                <p className="p-0 m-0">Admin</p>
              </div>
            </div>
          </Container>
        </Navbar>

        <div className="offers px-4 mt-3 ">
          <h2 className="font-bold text-[35px] mb-3">
            Offer listing for community
          </h2>
          <div className="row">
            <div className="col-md-3 ">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="offer1 shadow-lg p-3 rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-3  ">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-3  ">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-3  ">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-3  ">
              <div className="offer1 border p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-3  ">
              <div className="offer1 shadow-lg p-3  rounded">
                <div className="d-flex justify-content-between">
                  <h2 className="fw-semibold fs-6 text-secondary  ">
                    Offer Name
                  </h2>{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                      stroke="#00B69B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    color: "#202224", // Color value must be in quotes
                    fontSize: "22px", // Use camelCase for fontSize and wrap the value in quotes
                  }}
                >
                  20% OFF
                </h3>

                <button
                  type="button"
                  className="btn btn-success px-3 fw-medium "
                >
                  Redeem offer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="profile shadow-lg p-4 m-4 rounded">
          <h3 className="fw-semibold fs-5 mb-3">Profile</h3>
          <div className="d-flex gap-4">
            <div className="">
              <img
                className="shadow-lg p-4 rounded-circle"
                src="/images/girl.png"
                alt="img"
              />
            </div>
            <div>
              <h4>Alina</h4>
              <p>Admin</p>
              <h6>alina@gmail.com</h6>
            </div>
          </div>
        </div>

        <div className="shadow-lg p-4 m-4 rounded">
          <div className="d-flex  align-content-center justify-content-between">
            <div>
              <h4 className="fw-semibold fs-5 mb-3">Personal information</h4>
            </div>
            <div className="">
              <button className="btn btn-success fw-medium">
                Edit{" "}
                <svg
                  className="mx-2"
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.01849 14.89L14.1605 4.74801L12.7465 3.33401L2.60449 13.476V14.89H4.01849ZM4.84749 16.89H0.604492V12.647L12.0395 1.21201C12.227 1.02454 12.4813 0.91922 12.7465 0.91922C13.0117 0.91922 13.266 1.02454 13.4535 1.21201L16.2825 4.04101C16.47 4.22853 16.5753 4.48284 16.5753 4.74801C16.5753 5.01317 16.47 5.26748 16.2825 5.45501L4.84749 16.89ZM0.604492 18.89H18.6045V20.89H0.604492V18.89Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="">
            <table className="table">
              <tr>
                <th style={{ minWidth: "200px" }}>First Name</th>
                <th style={{ minWidth: "200px" }}>Last Name</th>
                <th style={{ minWidth: "200px" }}>DOB</th>
              </tr>
              <tr>
                <td className="text-secondary">Alina</td>
                <td className="text-secondary">Joli</td>
                <td className="text-secondary">12-12-1999</td>
              </tr>
            </table>

            <table className="table">
              <tr>
                <th style={{ minWidth: "200px" }}>Email Address</th>
                <th style={{ minWidth: "200px" }}>Phone Number</th>
                <th style={{ minWidth: "200px" }}>User Role</th>
              </tr>
              <tr>
                <td className="text-secondary">alina@gmail.com</td>
                <td className="text-secondary">+00 987654321</td>
                <td className="text-secondary">Admin</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="shadow-lg p-4 m-4 rounded">
          <div className="d-flex  align-content-center justify-content-between">
            <div>
              <h4 className="fw-semibold fs-5 mb-3">Address</h4>
            </div>
            <div className="">
              <button className="btn btn-success fw-medium">
                Edit{" "}
                <svg
                  className="mx-2"
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.01849 14.89L14.1605 4.74801L12.7465 3.33401L2.60449 13.476V14.89H4.01849ZM4.84749 16.89H0.604492V12.647L12.0395 1.21201C12.227 1.02454 12.4813 0.91922 12.7465 0.91922C13.0117 0.91922 13.266 1.02454 13.4535 1.21201L16.2825 4.04101C16.47 4.22853 16.5753 4.48284 16.5753 4.74801C16.5753 5.01317 16.47 5.26748 16.2825 5.45501L4.84749 16.89ZM0.604492 18.89H18.6045V20.89H0.604492V18.89Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="">
            <table className="table">
              <tr>
                <th style={{ minWidth: "200px" }}>Country</th>
                <th style={{ minWidth: "200px" }}>City</th>
                <th style={{ minWidth: "200px" }}>Post code</th>
              </tr>
              <tr>
                <td className="text-secondary">Singapore</td>
                <td className="text-secondary">Jurong East</td>
                <td className="text-secondary">000000</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="profile-edit shadow-lg p-4 m-4 rounded">
          <h3 className="fw-semibold fs-5 mb-3">Edit Profile</h3>
          <div className="row">
            <div className="col-6">
              <label className="form-label mt-3">First Name</label>
              <input
                type="text"
                placeholder="Alina"
                className="form-control"
              ></input>
            </div>

            <div className="col-6">
              <label className="form-label mt-3">last Name</label>
              <input
                type="text"
                placeholder="Joli"
                className="form-control"
              ></input>
            </div>

            <div className="col-6">
              <label className="form-label mt-3">Email Address</label>
              <input
                type="text"
                placeholder="alina@gmail.com"
                className="form-control"
              ></input>
            </div>

            <div className="col-6">
              <label className="form-label mt-3">DOB</label>
              <input
                type="date"
                className="form-control"
                placeholder="12-12-1999"
                id="dob"
                name="dob"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="phone" className="form-label mt-3">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="userRole" className="form-label mt-3">
                User Role
              </label>
              <select className="form-select" id="userRole" name="userRole" defaultValue="admin">
                <option value="" selected disabled>
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="country" className="form-label mt-3">
                Country
              </label>
              <select className="form-select" id="country" name="country" defaultValue="canada">
                <option value="" selected disabled>
                  Select Country
                </option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="india">India</option>
                <option value="germany">Germany</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="city" className="form-label mt-3">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="Enter your city"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="postcode" className="form-label mt-3 ">
                Post Code
              </label>
              <input
                type="text"
                className="form-control"
                id="postcode"
                name="postcode"
                placeholder="Enter postal code"
                pattern="[0-9]{5,6}"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; // ✅ Fixed component name casing
