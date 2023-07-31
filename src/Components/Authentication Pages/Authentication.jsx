import React, { useState } from "react";
import "./authentication.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase Config/firebaseConfig";
import logo from "../../images/logo2.png";
import googleLogo from "../../images/Google__G__Logo.svg";
import facebookLogo from "../../images/facebokLogo.png";
import { useForm } from "react-hook-form";
import SignUp from "../SingUp/SignUp";
import Login from "../Login/Login";

//========Initialize Firebase App=========//
const app = initializeApp(firebaseConfig);


const Authentication = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const [handleError, setHandleError] = useState({
    isError: "",
    errorMessage: "",
  });

  console.log(isLoginActive);
  return (
    <section className="form_container_section">
      {/* ===========Login Form Part ============== */}
      <div className="form_container_inner">
        <div className="logo_contaienr mb-5">
          <div className="image_container d-flex align-items-center justify-content-center">
            <img className="img-fluid w-75" src={logo} alt="Logo Image" />
          </div>
        </div>
        {isLoginActive ? (
          <Login />
        ) : (
          <SignUp
            singUpInfo={{
              setHandleError,
              handleError,
              setIsLoginActive,
            }}
          />
        )}

        <>
          {/* Error/ message contaienr section  */}
          <div className="Error_messageContainer">
            {handleError.isError ? (
              <p className="mb-0 mt-1 text-danger text-center fw-bold">
                {handleError.errorMessage}
              </p>
            ) : (
              <p className="mb-0 mt-1 text-success text-center fw-bold">
                {handleError.errorMessage}
              </p>
            )}
          </div>
          {/* ==========provider Buttons ======= */}
          <div className="login_provider d-flex align-items-center justify-content-space-between mt-4">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <div className="image_container">
                  <img className="google-icon img-fluid" src={googleLogo} />
                </div>
                <div className="text_container">
                  <p className="btn-text m-0 fw-bold">
                    {isLoginActive
                      ? "Login with google"
                      : "Sign in with google"}
                  </p>
                </div>
              </div>
            </div>
            <div className="google-btn facebook_btn">
              <div className="google-icon-wrapper">
                <div className="image_container ">
                  <img className="google-icon img-fluid" src={facebookLogo} />
                </div>
                <div className="text_container">
                  <p className="btn-text m-0 fw-bold">
                    {isLoginActive
                      ? "Login with Facebook"
                      : "Sign in with Facebook"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* ==========Handling Don't have account ======= */}

        <div className="singUp_btn_container">
          <button
            onClick={() => {
              isLoginActive ? setIsLoginActive(false) : setIsLoginActive(true);
            }}
            className="btn btn-muted signup_btn w-100 mt-4 fw-bold"
          >
            {isLoginActive
              ? "Create a new account?"
              : "Already have an account?"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Authentication;