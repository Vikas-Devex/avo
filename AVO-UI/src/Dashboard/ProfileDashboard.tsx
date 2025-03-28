import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import { useSelector } from "react-redux";
import { RootState } from "../services/store/store";
import UpdateProfileDetails from "../components/updateProfileDetails/updateProfileDetails";
import QRCode from 'react-qr-code';

const ProfileDashboard = () => {
  const [showProfileDetail, setShowProfileDetail] = useState(false);
  const userDetails: any = useSelector(
    (state: RootState) => state.auth.userDetails
  );

  return (
    <div>
      <div className="main-outer pt-3  ">
        <div className="container">
          <Header />
          <div className="shadow-lg p-4 my-4 rounded">
            <h3 className="fw-semibold fs-5 mb-3">Profile</h3>
            <div className="d-flex gap-4">
              <div className="">
                <img
                  className="shadow-lg rounded-circle profile-img-width"
                  src={userDetails?.profile_photo}
                  alt="img"
                />
              </div>
              <div>
                <h4>{userDetails?.name}</h4>
                <p>{userDetails?.role}</p>
                <h6>{userDetails?.email}</h6>
              </div>
              <div className="mt-3 ms-auto">
              {userDetails && (
                    <QRCode
                        value={`${window.location.origin}/dashboard/employee/${userDetails?.id}`}
                        bgColor={"#FFFFFF"}
                        fgColor={"#000000"}
                        size={220}
                    />
                )}
              </div>
            </div>
          </div>

          <div className="shadow-lg p-4 my-4 rounded">
            <div className="d-flex  align-content-center justify-content-between">
              <div className="w-50 ">
                <h4 className="fw-semibold fs-5 mb-3">Personal information</h4>
              </div>
              <div className="w-50 text-end mb-2">
                <button className="btn btn-success fw-medium" onClick={()=>setShowProfileDetail(true)}>
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

            <div className="table-responsive">
              <table className="table">
                <thead>
                <tr>
                  <th style={{ minWidth: "200px" }}>First Name</th>
                  <th style={{ minWidth: "200px" }}>Last Name</th>
                  {/* <th style={{ minWidth: "200px" }}>DOB</th> */}
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="text-secondary">{userDetails?.name?.split(" ")?.[0] ?? ""}</td>
                  <td className="text-secondary">{userDetails?.name?.split(" ")?.[1] ?? ""}</td>
                  {/* <td className="text-secondary">12-12-1999</td> */}
                </tr>
                </tbody>
              </table>

              <table className="table">
                <thead>
                <tr>
                  <th style={{ minWidth: "200px" }}>Email Address</th>
                  <th style={{ minWidth: "200px" }}>Phone Number</th>
                  <th style={{ minWidth: "200px" }}>User Role</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="text-secondary">{userDetails?.email}</td>
                  <td className="text-secondary">{userDetails?.number}</td>
                  <td className="text-secondary">{userDetails?.role}</td>
                </tr>
                </tbody>
              </table>
              <table className="table">
              <thead>
                <tr>
                  <th style={{ minWidth: "200px" }}>Address</th>
                </tr>
              </thead>
                <tbody>
                <tr>
                  <td className="text-secondary">{userDetails?.address}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <UpdateProfileDetails showProfileDetail={showProfileDetail} setShowProfileDetail={setShowProfileDetail} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
