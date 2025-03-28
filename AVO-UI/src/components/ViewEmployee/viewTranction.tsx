import React from "react";
import { Modal } from "react-bootstrap";
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
      <div className="table-responsive">
          <table className="table table-outer">
            <thead className="table-light table-header">
              <tr>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {transactionData?.length ?
                transactionData?.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {formatDateTime(item)?.split("-")?.[0]}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                      {formatDateTime(item)?.split("-")?.[1]}
                      </td>
                    </tr>
                  );
                }) : 
                <p className="fw-semibold">No records found!</p>}
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewTransaction;
