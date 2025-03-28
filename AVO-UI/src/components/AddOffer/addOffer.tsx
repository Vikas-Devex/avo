import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/store/store";
import { FaUpload } from "react-icons/fa";
import { uploadLogoImage } from "../../services/slices/auth/signUpSlice";
import { createOffer } from "../../services/slices/business/businessSlice";

interface OfferFormData {
  offer_id: number; // add offerId if update  for create remove that param
  title: string;
  description: string;
  image: string;
  discount_percentage: number;
  max_usage: number;
  price: number;
  start_date: string;
  end_date: string;
}
const AddOffer = ({ showOffer, handleCloseOffer, modalType, offerItem }) => {
  const [file, setFile] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OfferFormData>();
  const userDetails: any = useSelector(
    (state: RootState) => state.auth.userDetails
  );

  const onSubmit: SubmitHandler<OfferFormData> = async (data: any) => {
    if (modalType === "edit" && offerItem) {
      dispatch(
        createOffer({ payload: data, business_id: userDetails?.business_id })
      );
    } else {
      dispatch(
        createOffer({ payload: data, business_id: userDetails?.business_id })
      );
    }
    handleCloseOffer();
    setImgFile(null);
    reset();
  };

  const handleFileChange = (e: any) => {
    const fileData = e.target.files[0];
    setFile(fileData);
    setImgFile(URL.createObjectURL(fileData));
  };

  const handleFileUpload = () => {
    const formData: any = new FormData();
    formData.append("image", file);
    if (file) {
      dispatch(uploadLogoImage(formData))
        .unwrap()
        .then((res: any) => {
          setValue("image", res.url, { shouldValidate: true });
        });
    }
  };

  const handleDeleteImage = () => {
    setImgFile(null);
    setValue("image", "", { shouldValidate: true });
  };

  useEffect(() => {
    if (modalType === "edit" && offerItem) {
      reset({
        offer_id: offerItem?.id,
        title: offerItem?.title,
        description: offerItem?.description,
        image: offerItem?.image,
        discount_percentage: offerItem?.discount_percentage,
        max_usage: offerItem?.max_usage,
        price: offerItem?.price,
        start_date: offerItem?.start_date
          ? new Date(offerItem.start_date).toISOString().slice(0, 10)
          : "",
        end_date: offerItem?.end_date
          ? new Date(offerItem.end_date).toISOString().slice(0, 10)
          : "",
      });
    } else {
      reset({
        offer_id: null,
        title: "",
        description: "",
        image: "",
        discount_percentage: null,
        max_usage: null,
        price: null,
        start_date: "",
        end_date: "",
      });
    }
  }, [modalType, offerItem, reset]);

  return (
    <Modal
      show={showOffer}
      onHide={handleCloseOffer}
      centered
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {" "}
          {modalType === "edit" ? "Update" : "Create"} Offer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!offerItem || offerItem?.is_published === 0 ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-1">
              <Form.Label className="d-flex fw-normal">Offer title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                {...register("title", { required: true })}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">
                This field is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="d-flex fw-normal">
                Offer description
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your description"
                {...register("description", { required: true })}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                This field is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="d-flex fw-normal">
                Discount percentage
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter discount percentage"
                {...register("discount_percentage", { required: true })}
                isInvalid={!!errors.discount_percentage}
              />
              <Form.Control.Feedback type="invalid">
                This field is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="d-flex fw-normal">Max usage</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter max usage"
                {...register("max_usage", { required: true })}
                isInvalid={!!errors.max_usage}
              />
              <Form.Control.Feedback type="invalid">
                This field is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="d-flex fw-normal">Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                {...register("price", { required: true })}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">
                This field is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="d-flex fw-normal">Start date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter start date"
                {...register("start_date", {
                  required: false,
                  validate: (value) =>
                    !watch("end_date") ||
                    new Date(value) < new Date(watch("end_date")) ||
                    "Start date must be earlier than end date",
                })}
                isInvalid={!!errors.start_date}
              />
              <Form.Control.Feedback type="invalid">
                {errors.start_date?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="d-flex fw-normal">End date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter start date"
                {...register("end_date", {
                  required: false,
                  validate: (value) =>
                    !watch("start_date") ||
                    new Date(value) > new Date(watch("start_date")) ||
                    "End date must be later than start date",
                })}
                isInvalid={!!errors.end_date}
              />
              <Form.Control.Feedback type="invalid">
                {errors.end_date?.message}
              </Form.Control.Feedback>
            </Form.Group>
            {imgFile === null ? (
              <Form.Group className="mb-3">
                <Form.Label className="d-flex fw-normal">
                  Upload Logo
                </Form.Label>
                <Controller
                  name="image"
                  control={control}
                  rules={{ required: false }}
                  render={({ field }) => (
                    <div
                      className={`d-flex align-items-center border p-2 rounded ${
                        errors.image ? "border-danger" : ""
                      }`}
                    >
                      <input
                        type="file"
                        className="d-none"
                        id="uploadLogo"
                        accept="image/*"
                        onChange={(e) => {
                          handleFileChange(e);
                          field.onChange(e);
                        }}
                      />
                      <label
                        htmlFor="uploadLogo"
                        className="d-flex align-items-center cursor-pointer"
                      >
                        <FaUpload className="me-2" />
                        <span>Upload logo</span>
                      </label>
                    </div>
                  )}
                />
                {errors.image && (
                  <span className="text-danger">This field is required</span>
                )}
              </Form.Group>
            ) : (
              <div className="w-100 mb-2 mt-3">
                <div className="w-100 mb-2">
                  <img
                    className="w-25 rounded-circle"
                    src={imgFile}
                    alt="preview img"
                  />
                </div>
                <div className="w-100">
                  <Button
                    className="w-10 me-2"
                    variant="danger"
                    onClick={() => handleDeleteImage()}
                  >
                    Delete
                  </Button>
                  <Button
                    className="w-10"
                    variant="success"
                    onClick={() => handleFileUpload()}
                  >
                    Upload
                  </Button>
                </div>
              </div>
            )}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseOffer}>
                Cancel
              </Button>
              <Button variant=" btn-success" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        ) : (
          "For update you need to unpublish offer"
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AddOffer;
