import React from "react";
import { Controller, useForm } from "react-hook-form";
import { data, Link, useNavigate } from "react-router-dom";

const GeneralInfo = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data.name);
    navigate("/payment");
  };

  const selectOptions = [
    { label: "owner", value: "Owner" },
    { label: "professor", value: "Professor" },
  ];
  const selectRules = {
    role: { required: "Role is required" },
  };
  return (
    <>
      <div className="d-flex">
        <div className=" bg-danger">
          <img
            src="https://www.taipeitimes.com/images/2023/08/12/P07-230812-320.jpg"
            alt=""
            width={400}
          />
        </div>

        <div className="my-4 " style={{ maxWidth: "100%", margin: "auto" }}>
          <h5>General Information</h5>
          <p>
            Share your organization’s details to help us understand your
            business and personalize your experience.
          </p>
          <hr />

          <form
            id="formAuthentication"
            class="mb-6"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div class="mb-6">
              <label for="username" class="form-label fs-6">
                Organization You Represent{" "}
              </label>
              <input
                type="text"
                class="form-control"
                id="organization"
                name="organization"
                placeholder="Enter your Organization Name "
                autofocus
                defaultValue=""
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-danger">This is This felid is required</p>
              )}
            </div>
            {/* <div class="mb-6">
              <label for="position" class="form-label fs-6">
                What’s Your Position?
              </label>
              <Controller
                name="role"
                control={control}
                defaultValue=""
                rules={selectRules.role}
                render={({ field }) => (
                  <select
                    class="form-select "
                    options={selectOptions.label}
                    {...field}
                    label="Text field"
                  />
                )}
              />
              <small className="text-danger">
                {errors?.role && errors.role.message}
              </small>
            </div> */}

            <div class="mb-6 form-password-toggle">
              <label class="form-label fs-6">Select Your Favorite Sports</label>
              <div class="input-group input-group-merge">
                <input
                  type="text"
                  id="favorite_sport"
                  class="form-control"
                  name="favorite_sport"
                  defaultValue=""
                  {...register("fev_sport", { required: true })}
                />

                <span class="input-group-text cursor-pointer">
                  <i class="ti ti-eye-off"></i>
                </span>
              </div>
              <small>
                {errors.fev_sport && (
                  <small className="text-danger ">
                    This is This felid is required{" "}
                  </small>
                )}
              </small>
            </div>

            <div class="mb-6 form-password-toggle">
              <label class="form-label fs-6 ">Where Can We Find You?</label>
              <div class="input-group input-group-merge">
                <textarea
                  type="password"
                  id="password"
                  class="form-control"
                  name="password"
                  defaultValue=""
                  {...register("text_area_location", { required: true })}
                ></textarea>
                <span class="input-group-text cursor-pointer">
                  <i class="ti ti-eye-off"></i>
                </span>
              </div>
              <small>
                {errors.text_area_location && (
                  <small className="text-danger">
                    This is This felid is required
                  </small>
                )}
              </small>
            </div>

            <div class="mb-6 form-password-toggle">
              <label class="form-label fs-6">Upload Organization Logo</label>
              <div class="input-group input-group-merge">
                <input
                  type="file"
                  id="organization_logo"
                  class="form-control"
                  name="organization_logo"
                  defaultValue=""
                  {...register("document_file", { required: true })}
                />
                <span class="input-group-text cursor-pointer">
                  <i class="ti ti-eye-off"></i>
                </span>
              </div>
              <small>
                {errors.document_file && (
                  <small className="text-danger">
                    This is This felid is required
                  </small>
                )}
              </small>
            </div>

            <button class="btn btn-primary d-grid" type="submit" value="Next">
              Next
            </button>

            {/* <input type="submit" value="Next" class="btn btn-primary d-grid " /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default GeneralInfo;
