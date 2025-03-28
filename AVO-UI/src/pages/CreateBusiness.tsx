import React from "react";
import { Form } from "react-bootstrap";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../services/store/store";
import {
  uploadLogoImage,
} from "../services/slices/auth/signUpSlice";
import { FaUpload } from "react-icons/fa";
import Header from "../components/Header/header";
import { createBusiness } from "../services/slices/business/businessSlice";
import { useNavigate } from "react-router-dom";
interface BusinessFormData {
  business_name: string;
  business_address: string;
  logo: string;
}
const CreateBusiness = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BusinessFormData>();
  const userData: any = useSelector(
    (state: RootState) => state.auth.userDetails
  );

  const onSubmit: SubmitHandler<BusinessFormData> = async (data: any) => {
    dispatch(createBusiness({ payload: data, navigate }))
      .unwrap()
      .then((res) => reset());
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const formData: any = new FormData();
    formData.append("image", file);
    if (file) {
      dispatch(uploadLogoImage(formData))
        .unwrap()
        .then((res: any) => {
          setValue("logo", res.url, { shouldValidate: true });
        });
    }
  };

  return (
    <div>
      <div className="main-outer pt-3  h-100">
        <div className="container">
          <Header />

          {userData?.role === "user" ? (
            <div className="shadow-lg p-4 mt-4 rounded">
              <div className="d-flex  align-content-center justify-content-between">
                <h4 className="fw-semibold fs-5 mb-3">Create Business</h4>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label className="d-flex fw-normal">
                    Business Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your business name"
                    {...register("business_name", { required: true })}
                    isInvalid={!!errors.business_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    This field is required
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="d-flex fw-normal">
                    Business Address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your business address"
                    {...register("business_address", { required: true })}
                    isInvalid={!!errors.business_address}
                  />
                  <Form.Control.Feedback type="invalid">
                    This field is required
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="d-flex fw-normal">
                    Upload Logo
                  </Form.Label>
                  <Controller
                    name="logo"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                      <div
                        className={`d-flex align-items-center border p-2 rounded ${
                          errors.logo ? "border-danger" : ""
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
                  {errors.logo && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>

                <button type="submit" className="btn btn-success mt-3 px-3">
                  Submit
                </button>
              </Form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreateBusiness;
