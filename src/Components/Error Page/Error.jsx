import React from "react";
import errorImage from "../../images/Frame.png";
import { Link, } from "react-router-dom";

const Error = () => {
  return (
    <section className="error_section py-5 d-flex align-items-center justify-content-center flex-column">
      <div className="inner_section ">
        <img className="img-fluid" src={errorImage} alt="" />
      </div>
      <Link to={"../home"}>
        <button className="btn btn-danger mt-4">Go Back To Home</button>
      </Link>
    </section>
  );
};

export default Error;

