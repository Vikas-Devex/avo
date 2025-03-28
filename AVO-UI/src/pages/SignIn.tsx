import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInUser } from "../services/slices/auth/signUpSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/store/store";

interface SignInFormData {
  email: string;
  password: string;
}
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    dispatch(signInUser({ payload: data, from, navigate }));
  };
  return (
    <div className="account">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="shadow-lg border-0 w-75 ">
          <Row>
            {/* Left Side - Create Account */}
            <Col md={6} className="p-5 ">
              <h3 className="fw-bold">Create an account</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ul className="text-muted">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <Button variant="dark" className="w-100 py-2 rounded-pill">
                <Link
                  to="/register"
                  className="text-white text-decoration-none"
                >
                  Create an account
                </Link>
              </Button>
            </Col>

            {/* Right Side - Sign In */}
            <Col md={6} className="p-5">
              <h3 className="fw-bold">Sign in</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
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
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    This field is required
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-between mb-3">
                  <span></span>
                  <Link
                    to="/forgot-password"
                    className="text-white text-decoration-none"
                  >
                    Forgot password
                  </Link>
                </div>
                <Button
                  variant="secondary"
                  className="w-100 py-2 rounded-pill"
                  type="submit"
                >
                  Sign in
                </Button>
                <div className="text-center my-3">
                  {" "}
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="border-b w-50"
                      style={{ borderBottom: "1px solid #80808042" }}
                    ></div>
                    <div> Or</div>

                    <div
                      className="border-b w-50"
                      style={{ borderBottom: "1px solid #80808042" }}
                    ></div>
                  </div>
                </div>
                <Button
                  variant="outline-dark"
                  className="w-100 py-2 rounded-pill"
                >
                  <div className="me-2" />{" "}
                  <span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.501 12.7332C22.501 11.8699 22.4296 11.2399 22.2748 10.5865H12.2153V14.4832H18.12C18.001 15.4515 17.3582 16.9099 15.9296 17.8898L15.9096 18.0203L19.0902 20.435L19.3106 20.4565C21.3343 18.6249 22.501 15.9298 22.501 12.7332Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.214 23C15.1068 23 17.5353 22.0666 19.3092 20.4567L15.9282 17.8899C15.0235 18.5083 13.8092 18.9399 12.214 18.9399C9.38069 18.9399 6.97596 17.1083 6.11874 14.5766L5.99309 14.5871L2.68583 17.0954L2.64258 17.2132C4.40446 20.6433 8.0235 23 12.214 23Z"
                        fill="#34A853"
                      />
                      <path
                        d="M6.12046 14.5767C5.89428 13.9234 5.76337 13.2233 5.76337 12.5C5.76337 11.7767 5.89428 11.0767 6.10856 10.4234L6.10257 10.2842L2.75386 7.7356L2.64429 7.78667C1.91814 9.21002 1.50146 10.8084 1.50146 12.5C1.50146 14.1917 1.91814 15.79 2.64429 17.2133L6.12046 14.5767Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.2141 6.05997C14.2259 6.05997 15.583 6.91163 16.3569 7.62335L19.3807 4.73C17.5236 3.03834 15.1069 2 12.2141 2C8.02353 2 4.40447 4.35665 2.64258 7.78662L6.10686 10.4233C6.97598 7.89166 9.38073 6.05997 12.2141 6.05997Z"
                        fill="#EB4335"
                      />
                    </svg>
                  </span>{" "}
                  Continue with Google
                </Button>
              </Form>
              <p className="text-muted mt-3 text-center">
                By continuing, you agree to the <a href="/">Terms of use</a> and
                <a href="/"> Privacy Policy</a>.
              </p>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
