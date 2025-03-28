import React, { useState } from "react";
import { Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/store/store";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import {
  signUpUser,
  uploadLogoImage,
} from "../services/slices/auth/signUpSlice";
import { Link, useNavigate } from "react-router-dom";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  businessRole: string;
  website: string;
  phone: string;
  companyName: string;
  address: string;
  email: string;
  password: string;
  logo: string;
}

const Register = () => {
  const [file, setFile] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    // Create FormData for file upload (and other fields)
    const payload = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      businessRole: data.businessRole,
      website: data.website,
      number: data.phone,
      companyName: data.companyName,
      profile_photo: data.logo,
      address: data.address,
    };
    dispatch(signUpUser({ payload: payload, navigate }))
      .unwrap()
      .then((res) => reset());
    setImgFile(null);
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
          setValue("logo", res.url, { shouldValidate: true });
        });
    }
  };

  const handleDeleteImage = () => {
    setImgFile(null);
    setValue("logo", "", { shouldValidate: true });
  };

  return (
    <div className="register-page bg-dark text-light vh-100 d-flex align-items-center">
      <div className="container-fluid">
        <Row className="justify-content-center px-5">
          <Col md={12} lg={12}>
            <div className="">
              <Row className="">
                {/* Left Section */}
                <Col
                  md={5}
                  className="bg-dark text-white d-flex flex-column justify-content-center  py-4"
                >
                  <h2 className="mb-3 fw-bold fs-1">
                    Successfull Business <br></br> Strategies
                  </h2>
                  <p>
                    Avo allows you to control the narrative & aids in bringing
                    together local businesses to retain employees by creating a
                    community inspired discount program.
                  </p>
                  <img
                    className="w-75 mt-5"
                    src="/images/OBJECTS.png"
                    alt="img"
                  />
                  <div className="mt-auto">
                    <div className="d-flex align-items-center">
                      <div className="me-2">⬜⬜⬜⬜</div>
                    </div>
                  </div>
                </Col>

                {/* Right Section - Form */}
                <Col md={7}>
                  <Card.Body
                    className="bg-white p-4 text-black"
                    style={{
                      borderRadius: "24px",
                      borderLeft: "7px solid #198754",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <h4 className="fw-bold mb-4">Employer Sign-Up</h4>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Row>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              placeholder="First Name"
                              {...register("firstName", { required: true })}
                              isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                              This field is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Last Name"
                              {...register("lastName", { required: true })}
                              isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                              This field is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="formJobRole" className="mb-3">
                            <Form.Label>Your Bussiness role</Form.Label>
                            <Form.Select
                              {...register("businessRole", { required: true })}
                              isInvalid={!!errors.businessRole}
                            >
                              <option value="">Select your job role</option>
                              <option value="developer">employees</option>
                              <option value="designer">Community</option>
                              <option value="manager">admin</option>
                              <option value="other">Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              This field is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formAddress" className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter your Address"
                              {...register("address", { required: true })}
                              isInvalid={!!errors.address}
                            />
                            <Form.Control.Feedback type="invalid">
                              This field is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formWebsite" className="mb-3">
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                              type="url"
                              placeholder="Enter your website URL"
                              {...register("website", { required: true })}
                              isInvalid={!!errors.website}
                            />
                            <Form.Control.Feedback type="invalid">
                              This field is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>🇺🇸 +1</InputGroup.Text>
                              <Form.Control
                                type="tel"
                                placeholder="Phone Number"
                                {...register("phone", { required: true })}
                                isInvalid={!!errors.phone}
                              />
                              <Form.Control.Feedback type="invalid">
                                This field is required
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Company Name"
                              {...register("companyName", { required: true })}
                              isInvalid={!!errors.companyName}
                            />
                            <Form.Control.Feedback type="invalid">
                              This field is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              {...register("email", { required: true })}
                              isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                              This field is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          {imgFile === null ? (
                            <Form.Group className="mb-3">
                              <Form.Label>Upload Logo</Form.Label>
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
                              {errors.logo && (
                                <span className="text-danger">
                                  This field is required
                                </span>
                              )}
                            </Form.Group>
                          ) : (
                            <div className="w-100 mb-2 mt-3">
                              <div className="d-flex w-100 mb-2">
                                <img
                                  className="w-25 rounded-circle"
                                  src={imgFile}
                                  alt="preview img"
                                />
                                <div className="d-flex w-50 m-auto">
                                  <Button
                                    className="w-10 upload-div-btn me-2"
                                    variant="danger"
                                    onClick={() => handleDeleteImage()}
                                  >
                                    Delete
                                  </Button>
                                  <Button
                                    className="w-10 upload-div-btn"
                                    variant="success"
                                    onClick={() => handleFileUpload()}
                                  >
                                    Upload
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                              <Form.Control
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter password"
                                {...register("password", { required: true })}
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
                              Use 8+ characters with a mix of letters, numbers &
                              symbols
                            </small>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <p
                            className="text-secondary"
                            style={{ color: "#7a7777" }}
                          >
                            By uploading your logo, you hereby agree and consent
                            to allow Use Avo to utilize the company logo for
                            www.useavo.com and other marketing initiatives aimed
                            at enhancing the development of the Use Avo
                            platform.
                          </p>
                        </Col>
                      </Row>
                      <div className="d-flex gap-2 align-items-center">
                        <Button
                          variant="primary"
                          type="submit"
                          className="content-fit btn-success"
                        >
                          Sign Up
                        </Button>

                        <p className="text-center mt-3">
                          Already have an account?{" "}
                          <Link to="/login" className="text-success">
                            Log in
                          </Link>
                        </p>
                      </div>
                      <p className="text-center">
                        <b>Copyright 2023 © </b> Designed by Tyler Fox.
                        UseAvo.com serving local businesses in Abington PA,
                        Ambler PA, Bryn Athyn PA, Dresher PA, Fort Washington
                        PA, Hatboro PA, Horsham PA, Huntingdon Valley PA,
                        Jamison PA, Montgomeryville PA, Oreland PA, Spring House
                        PA, Upper Dublin PA, Warminster PA, Warrington PA, &
                        Willow Grove PA and surrounding counties in Montgomery &
                        Bucks County, PA, and Philadelphia, PA.
                      </p>
                    </Form>
                  </Card.Body>
                </Col>
              </Row>
              <p></p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
