import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";
import Container from "../components/Container";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                  <p className="text-center">Please Enter your new password.</p>
                  <form action="">
                    <CustomInput
                      type="password"
                      name="password"
                      label="New Password"
                      id="pass"
                      placeholder="Password"
                    />
                    <CustomInput
                      type="password"
                      name="confpassword"
                      label="Confirm Password"
                      id="confirmpass"
                      placeholder="Confirm Password"
                    />
                    <div>
                      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <button
                          className="button border-0 px-3 py-2 text-white fw-bold w-100"
                          style={{ background: "#ffd333" }}
                          type="submit"
                        >
                          Reset Password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
