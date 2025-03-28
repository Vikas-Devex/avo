import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store/store";
import { publishUnpublishOffer } from "../../services/slices/business/businessSlice";

const PublishUnpublish = ({ show, handleClose, offerItem }) => {
  const [switchValue, setSwichValue] = useState(offerItem?.is_published || false)
  const dispatch = useDispatch<AppDispatch>();
  const handleSwitchToggle = async (event: any) => {
    const isChecked = event.target.checked;
    setSwichValue(isChecked);
    const data = {is_published: isChecked};
    dispatch(publishUnpublishOffer({payload: data, offer_id: offerItem.id, business_id: offerItem?.business_id}))
    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-normal fs-6">
          Name: {offerItem?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="table-responsive">
      <Form.Group className="mb-1">
            <Form.Label className="d-flex fw-normal">Offer</Form.Label>
            <Form.Check
              type="switch"
              checked={switchValue}
              onChange={handleSwitchToggle}
            />
      </Form.Group>
      </Modal.Body>
    </Modal>
  );
};

export default PublishUnpublish;
