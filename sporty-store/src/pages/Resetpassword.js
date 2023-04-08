import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
        <Container class1="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center mt-2 mb-3">
                  We will send you an email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="email" name="email" placeholder="Email" />

                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center title">Forgot Password</h3>
          <p className="text-center">
            Please Enter your register email to get reset password mail.
          </p>
          <form action="">
            <CustomInput type="password" label="Email Address" id="email" />

            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              Send Link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
