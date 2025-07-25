import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { dynamic_menu_bar } from "../../store/MenuSlice/MenuSlice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    fetchAPI(data);
  };
  const fetchAPI = async (data) => {
    const { email, passwords } = data;
    try {
      const payload = {
        email,
        password: passwords,
      };
      const response = await fetch("http://localhost:8080/app/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.ok) {
        dispatch(dynamic_menu_bar(result.result.role));
        navigate("/dashboard");
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };


  return (
    <>
      <div className="authentication-wrapper authentication-cover">
        <a href="index.html" className="app-brand auth-cover-brand">
          <span className="app-brand-logo demo">
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
          <span className="app-brand-text demo text-heading fw-bold">
            Vuexy
          </span>
        </a>

        <div className="authentication-inner row m-0">
          <div className="d-none d-lg-flex col-lg-8 p-0">
            <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-login-illustration-light.png"
                alt="auth-login-cover"
                className="my-5 auth-illustration"
                data-app-light-img="illustrations/auth-login-illustration-light.png"
                data-app-dark-img="illustrations/auth-login-illustration-dark.png"
              />

              <img
                src="../../assets/img/illustrations/bg-shape-image-light.png"
                alt="auth-login-cover"
                className="platform-bg"
                data-app-light-img="illustrations/bg-shape-image-light.png"
                data-app-dark-img="illustrations/bg-shape-image-dark.png"
              />
            </div>
          </div>

          <div className="d-flex col-12 col-lg-4 align-items-center authentication-bg p-sm-12 p-6">
            <div className="w-px-400 mx-auto mt-12 pt-5">
              <h4 className="mb-1">Welcome to Vuexy! 👋</h4>
              <p className="mb-6">
                Please sign-in to your account and start the adventure
              </p>

              <form
                id="formAuthentication"
                className="mb-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-6">
                  <label for="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email or username"
                    autofocus
                    defaultValue=""
                    {...register("email", {
                      required: "This field is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>

                <div className="mb-6 form-password-toggle">
                  <label className="form-label" for="password">
                    Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                      defaultValue=""
                      {...register("passwords", { required: true })}
                    />

                    <span className="input-group-text cursor-pointer">
                      <i className="ti ti-eye-off"></i>
                    </span>
                  </div>
                  {errors.passwords && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>
                <div className="my-8">
                  <div className="d-flex justify-content-between">
                    <div className="form-check mb-0 ms-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />

                      <label className="form-check-label" for="remember-me">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                    <a href="auth-forgot-password-cover.html">
                      <p className="mb-0">Forgot Password?</p>
                    </a>
                  </div>
                </div>
                <input className="btn btn-primary d-grid w-100" type="Submit" />
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                <Link to="/create_account">
                  <span>Create an account</span>
                </Link>
              </p>

              <div className="divider my-6">
                <div className="divider-text">or</div>
              </div>

              <div className="d-flex justify-content-center">
                <a
                  href="javascript:;"
                  className="btn btn-sm btn-icon rounded-pill btn-text-facebook me-1_5"
                >
                  <i className="tf-icons ti ti-brand-facebook-filled"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-sm btn-icon rounded-pill btn-text-twitter me-1_5"
                >
                  <i className="tf-icons ti ti-brand-twitter-filled"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-sm btn-icon rounded-pill btn-text-github me-1_5"
                >
                  <i className="tf-icons ti ti-brand-github-filled"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-sm btn-icon rounded-pill btn-text-google-plus"
                >
                  <i className="tf-icons ti ti-brand-google-filled"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
