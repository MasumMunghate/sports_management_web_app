import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheckBox = (data)=>{
    console.log(data),
    navigate("/");
  }


  return (
    <>
      <div className="d-flex">
        <div className="bg-danger">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIRijyN8DIxhoekNUktUUDTRrfoHHRrmiHA&s"
            alt=""
            width={500}
          />
          <p className="w-75 m-auto text-center text-white">
            Please review your payment details and select your preferred payment
            method to complete the transaction. Contact support if you need
            assistance. Thank you for your payment!
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <div className="d-flex ">
            <div className="fs-1 ">
              <FaArrowLeft />
            </div>
            <div className="fs-1">
              <IoLogOut />
            </div>
          </div>
          <form onSubmit={handleSubmit(handleCheckBox)}>
            <div className="text-center w-75 m-auto">
              <h6>First-Time Entry Fee</h6>
              <p>
                Pay a one-time entry fee to get started and access exclusive
                features, ensuring a premium experience right from the start!
              </p>
              <div>
                <p className="bg-danger text-white p-4 rounded">
                  Pay a one-time entry fee to get started and unlock exclusive
                  features for an enhanced experience. This fee covers all the
                  essential tools and resources you'll need to dive into the
                  world of Score It. Enjoy immediate access to premium content,
                  personalized support, and much more. Start your journey with
                  us today and experience hand wrestling like never before!
                </p>
              </div>
              <div class="form-check mb-8 ms-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="terms-conditions"
                  name="terms"
                  defaultValue=""
                 {...register("payment_checkbox", { required: true })}
                />
                <label class="" for="terms-conditions">
                  I agree to By clicking this, you agree to our Terms and
                  Conditions and Privacy Policy.
                </label>
                <small>
                {errors.payment_checkbox && (
                  <small className="text-danger">
                    This is This felid is required
                  </small>
                )}
              </small>
              </div>
              
            </div>
            
             <button class="btn btn-primary d-grid w-75 m-auto" type="submit" value="Next">Next</button>
            
          </form>

          <h1 className="display-4 w-75 m-auto">Rs 25000.00/-</h1>
         
          {/* Need to payment integration  */}
        </div>
      </div>
    </>
  );
};

export default Payment;
