import React from "react";

const DashboardSection = () => {
  return (
    <div className="d-flex flex-wrap gap-3">
      {[1, 2].map((_, index) => (
        <div
          key={index}
          className="bg-white p-3 rounded flex-grow-1"
          style={{ minWidth: "280px" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-3">Active deals</h6>
              <h3 className="fw-bold">40,689</h3>
            </div>
            <div className="user-item">
              <img
                src={`/images/icon${index === 1 ? "2" : ""}.png`}
                alt="img"
              />
            </div>
          </div>
          <p className="mt-3 fw-semibold text-muted">
            <img className="me-2" src="/images/iconleft.png" alt="" />
            <span>8.5%</span> Up from yesterday
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardSection;
