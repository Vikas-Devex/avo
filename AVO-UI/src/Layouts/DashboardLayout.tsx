import React, { Children, useState } from "react";
import { Nav } from "react-bootstrap";
import {
  FaUsers,
  FaChartLine,
  FaGift,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { AdminSideBar } from "./AdminSidebar";
import { Outlet, useSearchParams } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <div className="d-flex ">
      <AdminSideBar hide={hide} setHide={setHide} />

      <div className="flex-grow-1">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
