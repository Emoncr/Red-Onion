import React from "react";
import "./footer.css";
import logo from "../../images/logo - Copy.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer_section py-5">
      <div className="container-xxl section_inner">
        <div className="row footer_row">
          <div className="col-xl-6 col footer_image">
            <div className="img-container">
              <Link to="/" replace>
                <img className="img-fluid w-100" src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col footer_content footer_col_1">
            <ul>
              <li>About Online Food</li>
              <li>Read our blog</li>
              <li>Sign up to deliver</li>
              <li>Add your restaurant</li>
            </ul>
          </div>
          <div className="col-xl-3 col footer_content footer_col_2">
            <ul>
              <li>Get help</li>
              <li>Read FAQs</li>
              <li>View all cities</li>
              <li>Restaurants near me</li>
            </ul>
          </div>
        </div>
        <div className="row condition_row ">
          <div className="col-xl-12 col footer_content ">
            <ul className="d-flex align-items-center justify-content-between">
              <li>Privacy Policy</li>
              <li>Terms of Use </li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
