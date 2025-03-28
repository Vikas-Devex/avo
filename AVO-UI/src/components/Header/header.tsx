import React, { useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import { getUserDetails } from "../../services/slices/auth/signUpSlice";
import { AppDispatch, RootState } from "../../services/store/store";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userDetails: any = useSelector(
    (state: RootState) => state.auth.userDetails
  );
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);
  return (
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

        <div className="d-flex align-items-center gap-3">
          <div className="">
            <FaBell className="me-3" size={20} />
            <sup className="notifivation">2</sup>
          </div>
          <img
            className="img-fluid rounded-circle header-img"
            src={userDetails?.profile_photo}
            alt="Profile"
          />
          <div>
            <h6 className="m-0">{userDetails?.name}</h6>
            <p className="p-0 m-0">{userDetails?.role}</p>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
