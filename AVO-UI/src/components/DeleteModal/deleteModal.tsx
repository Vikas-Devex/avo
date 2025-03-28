import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({
  title,
  show,
  handleClose,
  modalType,
  deleteDataItem,
  dataItem,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this offer?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant={modalType === "edit" ? " btn-success" : "danger"}
          onClick={() => deleteDataItem(dataItem)}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
