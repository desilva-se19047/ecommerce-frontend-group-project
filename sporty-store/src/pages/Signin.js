import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomIn from "../components/CustomIn";

const Signin = () => {
  return (
    <>
      <Meta title={"Signin"} />
      <BreadCrumb title="Signin" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <style>(
            .col-12 
              background-image: url('./images/1.jpg');
              )
          </style>
            <div className="auth-card">
              <h3 className="text-center mb-3">Signin</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomIn type="email" name="email" placeholder="Email" />
                <CustomIn
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Signin
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signin;
