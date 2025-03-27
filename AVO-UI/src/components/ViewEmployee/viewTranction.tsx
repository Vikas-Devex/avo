import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
const ViewTransaction = ({
  showTransaction,
  setShowTransaction,
  transactionData,
  formatDateTime,
}) => {
  const handleClose = () => {
    setShowTransaction(false);
  };
  return (
    <Modal show={showTransaction} onHide={handleClose} centered style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-normal fs-6">Usage history</Modal.Title>
      </Modal.Header>
      <Modal.Body className="table-responsive">
        {transactionData?.length ?
          transactionData?.map((item: any, index: number) => {
            return (
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                {formatDateTime("2025-03-24T12:05:14.000Z")}
              </p>
            );
          }) : 
          <p className="fw-semibold">No records found!</p>}
      </Modal.Body>
    </Modal>
  );
};

export default ViewTransaction;
