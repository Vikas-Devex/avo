import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/store/store";
import { resetPassword } from "../services/slices/auth/signUpSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface ResetFormData {
  token: string;
  new_password: string;
}
const ResetPwd = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetFormData>();
  const onSubmit: SubmitHandler<ResetFormData> = async (data: any) => {
    const token = queryParams.get("token");
    data.token = token;
    dispatch(resetPassword(data))
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          toast.success("Password reset successfully!");
          navigate("/login");
          reset();
        }
      });
  };
  return (
    <div>
      <div className="bg-img account vh-100 d-flex justify-content-center align-items-center">
        <div className="bg-white  p-4 rounded otp text-center m-2">
          <h3 className="fw-bold">Reset Password</h3>
          <p className="text-secondary py-3">
            Please enter email to send OTP (One Time Password)
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label className="d-flex fw-normal">New Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter new password"
                  {...register("new_password", { required: true })}
                  isInvalid={!!errors.new_password}
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
            </Form.Group>

            <button type="submit" className="btn btn-success mt-3 px-3">
              Next
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPwd;
