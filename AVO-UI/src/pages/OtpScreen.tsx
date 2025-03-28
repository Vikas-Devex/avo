import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/store/store";
import {
  resendOtpUser,
  verifyAccount,
} from "../services/slices/auth/signUpSlice";
import { useNavigate } from "react-router-dom";
const OtpScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { otp: ["", "", "", "", "", ""] }, // Array for OTP fields
  });

  const inputRefs: any = useRef<Array<HTMLInputElement | null>>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits (0-9)

    const otp: any = [...watch("otp")];
    otp[index] = value;
    setValue("otp", otp, { shouldValidate: true });

    // Move focus to next input if a number is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const onSubmit = (data: any) => {
    const otpValue = data.otp.join(""); // Combine into a single OTP string
    const savedEmail = Cookies.get("user_email");
    const otpData: any = { email: savedEmail, otp: otpValue };
    dispatch(verifyAccount({ payload: otpData, navigate }));
    reset();
  };

  const resendOtp = () => {
    const savedEmail = Cookies.get("user_email");
    const data: any = { email: savedEmail };
    dispatch(resendOtpUser(data));
  };
  return (
    <div className="bg-img account vh-100 d-flex justify-content-center align-items-center">
      <div className="bg-white  p-4 rounded otp text-center m-2">
        <h3 className="fw-bold">One Time Password</h3>
        <p className="text-secondary">
          Please check your email and fill OTP (One Time Password)
        </p>

        <p className="fw-bold">OTP</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul className="d-flex gap-3 justify-content-center p-0">
            {watch("otp").map((_, index) => (
              <li
                key={index}
                className="border border-success list-unstyled px-3 py-2 rounded"
              >
                <Controller
                  name={`otp.${index}`}
                  control={control}
                  rules={{ required: "OTP is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      ref={(el: any) => (inputRefs.current[index] = el)}
                      type="text"
                      className="text-center border-0 bg-transparent otp-inputs"
                      maxLength={1}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                    />
                  )}
                />
              </li>
            ))}
          </ul>
          {errors.otp && <p className="text-danger mt-2">OTP is required</p>}
          <button type="submit" className="btn btn-success mt-3 px-3">
            Next
          </button>

          <button
            type="button"
            className="btn btn-danger mt-3 px-3 ms-3"
            onClick={() => resendOtp()}
          >
            Reset OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpScreen;
