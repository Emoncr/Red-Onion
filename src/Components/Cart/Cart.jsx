import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./cart.css";
import CartDetails from "../Cart Details/CartDetails";
import { CartContext } from "../../Contexts/cartContext";
import Pricing from "../Calculate Pricing/Pricing";

const Cart = () => {
  const [delivaryAddress, setdelivaryAddress] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setdelivaryAddress([...delivaryAddress, data]);
  };

  const { cart, tax, delivery } = useContext(CartContext);

  return (
    <section className="cart_section pt-5 pb-5">
      <div className="section_inner">
        <div className="row">
          <div className="col col-xl-7">
            <div className="from_container">
              <h4 className="mb-4 pb-3 address_heading">
                Edit Delivary Details
              </h4>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />

                <input
                  className="form-control mt-4"
                  id="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />

                <div className="form-text">
                  {errors.email && <span>error</span>}
                </div>

                <input
                  type="text"
                  className="form-control mt-4"
                  id="address"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                <input className="btn-danger btn mt-4" type="submit" />
              </form>
            </div>
          </div>
          <div className="col-xl-4 col cart_details_container">
            <div className="cart_item_container">
              <div className="info_container">
                <div className="resturent_details">
                  <h6 className="fw-bold">Form,</h6>
                  <p>
                    <strong className="font-weight-bold name">
                      Gulshan Plaza Restaura GPR
                    </strong>
                  </p>
                  <p>
                    Arriving in 20-30 min <br />
                    107 Rd No 8
                  </p>
                </div>
                <div className=" details_container customer_details">
                  <h6 className="fw-bold" style={{color:"#dc3545"}}>To,</h6>
                  <p>
                    <strong className="font-weight-bold name">
                      Gulshan Plaza Restaura GPR
                    </strong>
                  </p>
                  <p>
                    Arriving in 20-30 min <br />
                    107 Rd No 8
                  </p>
                </div>
              </div>
              <div className="cart_details_container mt-3">
                <div className="cart_details_inner mt-4">
                  {cart &&
                    cart.map((cartPd) => (
                      <CartDetails key={cartPd.food_id} cartItem={cartPd} />
                    ))}
                </div>
              </div>
              <div className="pricing_section">
                <div className="pricing_container mt-5">
                  {<Pricing />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
