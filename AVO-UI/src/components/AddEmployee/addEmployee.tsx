import React, { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/store/store";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";
import { uploadLogoImage } from "../../services/slices/auth/signUpSlice";
import {
  createEmployee,
  updateEmployee,
} from "../../services/slices/business/businessSlice";

interface EmployeeFormData {
  name: string;
  email: string;
  password: string;
  number: string;
  address: string;
  profile_photo: string;
}
const AddEmployee = ({
  showEmployee,
  handleCloseEmployee,
  modalType,
  employeeItem,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EmployeeFormData>();
  const userDetails: any = useSelector(
    (state: RootState) => state.auth.userDetails
  );

  const onSubmit: SubmitHandler<EmployeeFormData> = async (data: any) => {
    if (modalType === "edit" && employeeItem) {
      data.employee_id = employeeItem.id;
      dispatch(
        updateEmployee({ payload: data, business_id: userDetails?.business_id })
      );
    } else {
      dispatch(
        createEmployee({ payload: data, business_id: userDetails?.business_id })
      );
    }
    handleCloseEmployee();
    reset();
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const formData: any = new FormData();
    formData.append("image", file);
    if (file) {
      dispatch(uploadLogoImage(formData))
        .unwrap()
        .then((res: any) => {
          setValue("profile_photo", res.url, { shouldValidate: true });
        });
    }
  };

  useEffect(() => {
    if (modalType === "edit" && employeeItem) {
      reset({
        name: employeeItem.name || "",
        email: employeeItem.email || "",
        number: employeeItem.number || "",
        address: employeeItem.address || "",
        profile_photo: employeeItem.profile_photo || "",
      });
    } else {
      reset();
    }
  }, [modalType, employeeItem, reset]);

  return (
    <Modal
      show={showEmployee}
      onHide={handleCloseEmployee}
      centered
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title> Create Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-1">
            <Form.Label className="d-flex fw-normal">Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              This field is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label className="d-flex fw-normal">Employee Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              This field is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup>
              <InputGroup.Text>🇺🇸 +1</InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                {...register("number", { required: true })}
                isInvalid={!!errors.number}
              />
              <Form.Control.Feedback type="invalid">
                This field is required
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                {...register("password", {
                  required: modalType === "edit" && employeeItem ? false : true,
                })}
                isInvalid={!!errors.password}
              />
              <InputGroup.Text
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                This field is required
              </Form.Control.Feedback>
            </InputGroup>
            <small className="text-muted">
              Use 8+ characters with a mix of letters, numbers & symbols
            </small>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label className="d-flex fw-normal">
              Employee Address
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your employee address"
              {...register("address", { required: true })}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">
              This field is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="d-flex fw-normal">Upload Logo</Form.Label>
            <Controller
              name="profile_photo"
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <div
                  className={`d-flex align-items-center border p-2 rounded ${
                    errors.profile_photo ? "border-danger" : ""
                  }`}
                >
                  <input
                    type="file"
                    className="d-none"
                    id="uploadLogo"
                    accept="image/*"
                    onChange={(e) => {
                      handleFileUpload(e);
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
            {errors.profile_photo && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEmployee}>
              Cancel
            </Button>
            <Button variant=" btn-success" type="submit">
              {modalType === "edit" && employeeItem ? "Save Changes" : "Add"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEmployee;
