import React from "react";
import { Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/store/store";
import { forgotPassword } from "../services/slices/auth/signUpSlice";
import toast from "react-hot-toast";

interface ResetFormData {
  email: string;
}
const ForgetPwd = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetFormData>();
  const onSubmit: SubmitHandler<ResetFormData> = async (data: any) => {
    dispatch(forgotPassword(data))
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          toast.success("Check email for reset password!");
          reset();
        }
      });
  };
  return (
    <div>
      <div className="bg-img account vh-100 d-flex justify-content-center align-items-center">
        <div className="bg-white  p-4 rounded otp text-center m-2">
          <h3 className="fw-bold">Forgot Password</h3>
          <p className="text-secondary py-3">
            Please enter email to send OTP (One Time Password)
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label className="d-flex fw-normal">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                This field is required
              </Form.Control.Feedback>
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

export default ForgetPwd;
