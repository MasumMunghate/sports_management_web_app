import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    // console.log(data.username);
    navigate("/general_information");
  };
  return (
    <>
      <div class="authentication-wrapper authentication-cover">
        <a href="index.html" class="app-brand auth-cover-brand">
          <span class="app-brand-logo demo">
            <svg
              width="32"
              height="22"
              viewBox="0 0 32 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                fill="#7367F0"
              />
              <path
                opacity="0.06"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                fill="#161616"
              />
              <path
                opacity="0.06"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                fill="#161616"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                fill="#7367F0"
              />
            </svg>
          </span>
          <span class="app-brand-text demo text-heading fw-bold">Vuexy</span>
        </a>

        <div class="authentication-inner row m-0">
          <div class="d-none d-lg-flex col-lg-8 p-0">
            <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-register-illustration-light.png"
                alt="auth-register-cover"
                class="my-5 auth-illustration"
                data-app-light-img="illustrations/auth-register-illustration-light.png"
                data-app-dark-img="illustrations/auth-register-illustration-dark.png"
              />

              <img
                src="../../assets/img/illustrations/bg-shape-image-light.png"
                alt="auth-register-cover"
                class="platform-bg"
                data-app-light-img="illustrations/bg-shape-image-light.png"
                data-app-dark-img="illustrations/bg-shape-image-dark.png"
              />
            </div>
          </div>
          <div class="d-flex col-12 col-lg-4 align-items-center authentication-bg p-sm-12 p-6">
            <div class="w-px-400 mx-auto  ">
              <h4 class="mb-1">Adventure starts here 🚀</h4>
              <p class="mb-6">Make your app management easy and fun!</p>

              <form
                id="formAuthentication"
                class="mb-6"
                onSubmit={handleSubmit(handleRegistration)}
              >
                <div class="mb-6">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    autofocus
                    defaultValue=""
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>
                <div class="mb-6">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    defaultValue=""
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>

                <div class="mb-6 form-password-toggle">
                  <label class="form-label" for="password">
                    Mobile Number
                  </label>
                  <div class="input-group input-group-merge">
                    <input
                      type="number"
                      id="number"
                      class="form-control"
                      name="number"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="number"
                      defaultValue=""
                      {...register("mobile_number", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Only 10-digit number is valid",
                        },
                      })}
                    />
                    <span class="input-group-text cursor-pointer">
                      <i class="ti ti-eye-off"></i>
                    </span>
                  </div>
                  {errors.mobile_number && (
                    <p className="text-danger">
                      {errors.mobile_number.message}
                    </p>
                  )}
                </div>

                <div class="mb-6 form-password-toggle">
                  <label class="form-label" for="password">
                    Password
                  </label>
                  <div class="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                      defaultValue=""
                      {...register("password", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
                        },
                      })}
                    />
                    <span class="input-group-text cursor-pointer">
                      <i class="ti ti-eye-off"></i>
                    </span>
                  </div>
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>

                <div class="mb-6 mt-8">
                  <div class="form-check mb-8 ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="terms-conditions"
                      name="terms"
                    />
                    <label class="form-check-label" for="terms-conditions">
                      I agree to
                      <a href="javascript:void(0);">privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                {/* <button class="btn btn-primary d-grid w-100">Sign up</button> */}
                <input
                  type="submit"
                  class="btn btn-primary d-grid w-100"
                  value="Submit"
                />
              </form>
              {/* </Link> */}

              <p class="text-center">
                <span>Already have an account?</span>
                {/* <a href="auth-login-cover.html">
                <span>Sign in instead</span>
              </a> */}
                {/* <Link to="/"> */}
                <span>Sign in instead</span>
                {/* </Link> */}
              </p>

              <div class="divider my-6">
                <div class="divider-text">or</div>
              </div>

              <div class="d-flex justify-content-center">
                <a
                  href="javascript:;"
                  class="btn btn-sm btn-icon rounded-pill btn-text-facebook me-1_5"
                >
                  <i class="tf-icons ti ti-brand-facebook-filled"></i>
                </a>

                <a
                  href="javascript:;"
                  class="btn btn-sm btn-icon rounded-pill btn-text-twitter me-1_5"
                >
                  <i class="tf-icons ti ti-brand-twitter-filled"></i>
                </a>

                <a
                  href="javascript:;"
                  class="btn btn-sm btn-icon rounded-pill btn-text-github me-1_5"
                >
                  <i class="tf-icons ti ti-brand-github-filled"></i>
                </a>

                <a
                  href="javascript:;"
                  class="btn btn-sm btn-icon rounded-pill btn-text-google-plus"
                >
                  <i class="tf-icons ti ti-brand-google-filled"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
