import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HiBars3CenterLeft } from "react-icons/hi2";
import "./sideBarStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RootState } from "../services/store/store";

const dashboardTabs = [
  {
    label: "Dashboard",
    path: "",
    icon: "fa-solid fa-house text-graytext",
  },
  {
    label: "Community Offer",
    path: "CommunityOffers",
    icon: "fa-regular fa-user text-graytext",
  },
  {
    label: "Profile",
    path: "profile",
    icon: "fa-solid fa-chart-gantt text-graytext",
  },
  {
    label: "Create Business",
    path: "create-business",
    icon: "fa-solid fa-business-time text-graytext",
  },
  {
    label: "Sign Out",
    path: "/login",
    icon: "fa-solid fa-arrow-right-from-bracket text-graytext",
  },
];

export const AdminSideBar = (props: {
  hide?: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeTab, setActiveTab] = useState("");

  const userDetails: any = useSelector(
    (state: RootState) => state.auth.userDetails
  );

  const handleTab = (tab: any) => {
    if (tab.label === "Sign Out") {
      Cookies.remove("user_data");
    }
    setActiveTab(tab.path);
  }
  return (
    <div
      className={`side-navbar  border-end !border-graytext  ${
        props.hide ? "active" : ""
      }`}
    >
      <ul className="m-0 mt-2 p-0">
        <button
          onClick={() => {
            props.setHide(!props.hide);
          }}
          className="m-2 mob border-0 bg-transparent"
          style={{
            fontSize: "36px",
            color: "#0bbf64",
            maxWidth: "50px",
          }}
        >
          <HiBars3CenterLeft />
        </button>
        <img
          className="img-fluid profile"
          src="/images/logo.png"
          alt="Profile"
          style={{
            maxWidth: "100%",
          }}
        />
        {dashboardTabs.map((tab, index) => {
          return (
          <li
            key={index}
            className={`${activeTab === tab.path ? "activetab " : ""} mb-1 overflow-hidden`}
            onClick={() => handleTab(tab)}
          >
            {userDetails?.role !== "user" &&
            tab.label === "Create Business" ? null : (
              <NavLink
                to={tab.path}
                className="d-flex align-items-center text-decoration-none"
              >
                <span className="icon">
                  <i className={tab.icon}></i>
                </span>
                <span className="text text-graytext text-lg font-medium ms-2">
                  {tab.label}
                </span>
              </NavLink>
            )}
          </li>
        )})}
      </ul>
    </div>
  );
};
