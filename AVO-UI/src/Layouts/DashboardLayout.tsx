import React, { useEffect, useState } from "react";
import { AdminSideBar } from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [hide, setHide] = useState<boolean>(false);
  
  return (
    <div className="d-flex ">
      <AdminSideBar hide={hide} setHide={setHide} />
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
