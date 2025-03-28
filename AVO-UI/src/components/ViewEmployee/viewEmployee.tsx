import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import ViewTransaction from "./viewTranction";

const ViewEmployee = ({ show, handleClose, employeeItem, formatDateTime }) => {
  const [showTransaction, setShowTransaction] = useState(false);
  const [transactionData, setTransactionData] = useState([]);
  const handleTransaction = (item) => {
    setShowTransaction(true);
    setTransactionData(item?.usage_history);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title className="fw-normal fs-6">
            Name: {employeeItem?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="table-responsive">
          <Modal.Title className="fw-normal fs-6 mt-4">Employee Detail</Modal.Title>
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
              <tr>
                <td className="fw-medium" style={{ fontSize: "14px" }}>
                  <img
                    className="img-fluid redeemed-item"
                    src={employeeItem?.profile_photo}
                    alt="img"
                  />
                  {employeeItem?.name}
                </td>
                <td className="fw-medium" style={{ fontSize: "14px" }}>
                  {employeeItem?.id + " " + employeeItem?.email}
                </td>
                <td className="fw-medium" style={{ fontSize: "14px" }}>
                  {formatDateTime(employeeItem?.created_at)}
                </td>
                <td className="fw-medium" style={{ fontSize: "14px" }}>
                  {employeeItem?.number}
                </td>
                <td className="fw-medium" style={{ fontSize: "14px" }}>
                  {employeeItem?.address}
                </td>
              </tr>
            </tbody>
          </table>

          <Modal.Title className="fw-normal fs-6">Redeemed Coupons</Modal.Title>

          <table className="table table-outer">
            <thead className="table-light table-header">
              <tr>
                <th>Offer Id</th>
                <th>Title</th>
                <th>Usage count</th>
                <th>Redeemed at</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employeeItem &&
                employeeItem?.redeemed_coupons?.map(
                  (item: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td className="fw-medium" style={{ fontSize: "14px" }}>
                          <img
                            className="img-fluid redeemed-item"
                            src={item?.image}
                            alt="img"
                          />
                          {item?.offer_id}
                        </td>
                        <td className="fw-medium" style={{ fontSize: "14px" }}>
                          {item?.title}
                        </td>
                        <td className="fw-medium" style={{ fontSize: "14px" }}>
                          {item?.usage_count}
                        </td>
                        <td className="fw-medium" style={{ fontSize: "14px" }}>
                          {formatDateTime(item?.redeemed_at)}
                        </td>
                        <td className="text-end">
                          <FaEye
                            className="mx-1 offer-icons"
                            onClick={() => handleTransaction(item)}
                          />
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
      <ViewTransaction
        showTransaction={showTransaction}
        setShowTransaction={setShowTransaction}
        transactionData={transactionData}
        formatDateTime={formatDateTime}
      />
    </div>
  );
};

export default ViewEmployee;
