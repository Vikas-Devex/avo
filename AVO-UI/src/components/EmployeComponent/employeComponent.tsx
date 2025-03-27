import React from "react";
import { Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

const EmployeComponent = ({
  handleShowEmployee,
  employeesData,
  formatDateTime,
  handleViewEmployee,
  handleShowEmployeModal,
  handleEditEmployee,
}) => {
  return (
    <div className="container table-w">
      <div className="bg-white py-4 px-4 rounded mt-5">
        <div className="d-flex justify-content-between">
          <div className="">
            <h3 className="fw-semibold">Employee Details</h3>
          </div>
          <div className="d-flex">
            <div className="dropdown">
              <Button
                variant="outline-dark"
                className="mx-2 btn-success text-white border-white"
                onClick={() => handleShowEmployee("employee")}
              >
                Create Employee +
              </Button>
            </div>
          </div>
        </div>
        <div className=" mt-3 table-responsive">
          <table className="table table-outer">
            <thead className="table-light table-header">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date - Time</th>
                <th>Number</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employeesData &&
                employeesData?.employees?.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        <img
                          className="img-fluid"
                          src={item?.profile_photo}
                          alt="logo"
                          style={{
                            width: "30px",
                            marginRight: "10px",
                            borderRadius: "25px",
                          }}
                        />
                        {item?.name}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.id + " " + item?.email}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {formatDateTime(item?.created_at)}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.number}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.address}
                      </td>
                      <td className="text-end">
                        <FaEye
                          className="mx-1 offer-icons"
                          onClick={() =>
                            handleViewEmployee(item, "view-employee")
                          }
                        />

                        <MdDelete
                          className="mx-1 delete-icon"
                          onClick={() => handleShowEmployeModal(item, "delete")}
                        />
                        <LuPencilLine
                          className="mx-1 edit-icon"
                          
                          onClick={() => handleEditEmployee(item, "edit")}
                        />
                      </td>
                    </tr>
                  );
                })}
              {/* Repeat for other rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeComponent;
