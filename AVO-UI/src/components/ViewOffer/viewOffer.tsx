import React from "react";
import { Modal } from "react-bootstrap";
const ViewOffer = ({ show, handleClose, offerItem, formatDateTime }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title className="fw-normal fs-6">
          Name: {offerItem?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="table-responsive">
        <table className="table table-outer">
          <thead className="table-light table-header">
            <tr>
              <th>Title</th>
              <th>Max usage</th>
              <th>Price</th>
              <th>Discount%</th>
              <th>Start date</th>
              <th>End date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-medium" style={{ fontSize: "14px" }}>
                {offerItem?.title}
              </td>
              <td className="fw-medium" style={{ fontSize: "14px" }}>
                {offerItem?.max_usage}
              </td>
              <td className="fw-medium" style={{ fontSize: "14px" }}>
                ${offerItem?.price}
              </td>
              <td className="fw-medium" style={{ fontSize: "14px" }}>
                {offerItem?.discount_percentage}
              </td>
              <td className="fw-medium" style={{ fontSize: "14px" }}>
                {formatDateTime(offerItem?.start_date)}
              </td>
              <td className="fw-medium" style={{ fontSize: "14px" }}>
                {formatDateTime(offerItem?.end_date)}
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
};

export default ViewOffer;
