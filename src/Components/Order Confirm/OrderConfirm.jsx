import React from "react";
import "./order_ confirm.css";
import mapImage from "../../images/8 ordercomplete.png";
import cartoonImage from "../../images/Group 1151.png";
import userImage from "../../images/Group 1152.png";

const OrderConfirm = () => {
  let deliveryLocation;
  const localStorageData = localStorage.getItem("delivery__Address");
  const localStorageDataParse = JSON.parse(localStorageData);
  localStorageDataParse === null
    ? (deliveryLocation = [])
    : (deliveryLocation = localStorageDataParse);


  return (
    <>
      <section className="order_confirm_container mb-5 mt-5 p-4">
        <div className="section_inner">
          <div className="row p-2 d-flex justify-content-center align-items-center">
            <div className="col-xl-6 col">
              <div className="image_container">
                <img
                  className="img-fluid"
                  src={mapImage}
                  alt="Location Image"
                />
              </div>
            </div>
            <div className="col-xl-1 empty_div"></div>
            <div className="col-xl-3 order_details_container col ">
              <div className="order_details_inner p-4  rounded">
                <div className="image_contaienr">
                  <img
                    className="img-fluid w-25"
                    src={cartoonImage}
                    alt="delivery cartoon image"
                  />
                </div>
                <div className="location_info_container bg-white rounded p-3 mt-4 ">
                  <div className="location_content">
                    {deliveryLocation.map((adrs) => 
                      <div key={adrs.address}>
                        <p className="fs-5 fw-bold mb-1">{adrs.name}</p>
                        <p className="text-secondary fw-bold">{adrs.address}</p>
                      </div>
                    )}
                  </div>
                  <div className="location_content mt-5">
                    <p className="fs-5 fw-bold mb-1">Shop Address</p>
                    <p className="text-secondary fw-bold">Gulshan Plaza GPR</p>
                  </div>
                </div>
                <div className="estimate_delivery_time mt-3">
                  <p className="fs-3 fw-bold text-danger mb-2">09:40</p>
                  <p className="text-secondary ls-1 fw-bold">
                    Estimate Delivery Time
                  </p>
                </div>
                <div className="user_info_container bg-white rounded p-3 mt-4 ">
                  <div className="user_info_inner d-flex align-items-flex-start justify-content-center">
                    <div className="image_container user_image_container">
                      <img
                        className="img-fluid w-100 "
                        src={userImage}
                        alt=""
                      />
                    </div>
                    <div className="user_name_container">
                      <p className="fw-bold mb-1">Shop Address</p>
                      <p className="text-secondary fw-bold">
                        Gulshan Plaza GPR
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contant_btn mt-3 w-100">
                  <button className="btn btn-danger w-100 fs-5 fw-bold">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderConfirm;
