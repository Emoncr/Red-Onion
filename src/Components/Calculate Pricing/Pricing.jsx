import React, { useContext } from "react";
import "./pricing.css";
import { CartContext } from "../../Contexts/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BsFillCartXFill, BsFillCartPlusFill } from "react-icons/bs";
const Pricing = ({ isAddressProvided }) => {
  const { cart, tax, delivery,clearCart } = useContext(CartContext);

  //CALCULATE PRICE OF FOOD ITEM===========//
  const subTotalPrice = cart.reduce((total, foodItem) => {
    const foodPrice = foodItem.price * foodItem.quantity;
    return total + foodPrice;
  }, 0);

  let newSubTotal = parseFloat(subTotalPrice.toFixed(2));

  const TaxPrice = parseFloat((subTotalPrice * tax).toFixed(2));

  let delivaryCost;

  if (cart.length < 3) {
    delivaryCost = delivery;
  }
  if (cart.length === 0) {
    delivaryCost = delivery - delivery;
  }
  if (cart.length >= 3) {
    delivaryCost = delivery - 1;
  }

  let grandTotal = parseFloat(
    (delivaryCost + subTotalPrice + TaxPrice).toFixed(2)
  );

  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty_cart_container">
          <p className=" empty_cart_msg"> Your cart is empty !!! &#128551;</p>
          <Link to={"/"} replace={true}>
            <button className="btn btn-danger w-100 fs-4 fw-bold mt-3 big_btn">
              Order Now
              <FontAwesomeIcon className="px-2" icon={faArrowAltCircleRight} />
            </button>
          </Link>
        </div>
      ) : (
        <div className="content_container">
          <div className="cart_bts_container d-flex align-items-center justify-content-between">
            <div className="add_more_btn">
              <Link to={'../home'} >
                <button className="btn btn-danger">
                  Add More
                  <BsFillCartPlusFill className="fs-5 mb-1" />
                </button>
              </Link>
            </div>
            <div className="clear_cart_btn">
              <button onClick={clearCart}  className="btn btn-dark ">
                Clear Cart
                <BsFillCartXFill className="fs-5 mb-1" />
              </button>
            </div>
          </div>
          {/* SUB TOTAL SECTION CODE  */}
          <div className="amount_container mt-4">
            <div className="pricing_name fw-normal pricing">
              <p>
                Sub Total *
                <span className="text-danger fw-bold px-1">
                  {cart.length} item
                </span>{" "}
              </p>
            </div>
            <div className="price_area pricing">
              <p>${newSubTotal}</p>
            </div>
          </div>

          {/* TAX SECTION CODE  */}
          <div className="amount_container">
            <div className="pricing_name fw-normal pricing">
              <p>Tax</p>
            </div>
            <div className="price_area pricing">
              <p>${TaxPrice}</p>
            </div>
          </div>

          {/* DELIVARY SECTION CODE  */}
          <div className="amount_container">
            <div className="pricing_name fw-normal pricing">
              <p>Delivery fee</p>
            </div>
            <div className="price_area pricing">
              {cart.length >= 5 ? (
                <p style={{ color: "#dc3545", fontWeight: 700 }}>
                  Delivary Free
                </p>
              ) : (
                <p>${delivaryCost}</p>
              )}
            </div>
          </div>

          {/* total price SECTION CODE  */}
          <div className="amount_container total_price">
            <div className="pricing_name fw-bold   pricing">
              <p>Total</p>
            </div>
            <div className="fw-bold  price_area pricing">
              <p>${grandTotal}</p>
            </div>
          </div>

          {/* =========place order btn ========== */}
          <div className="place_order_btn">
            {isAddressProvided ? (
              <div>
                <p className="text-danger fw-bold mb-0 mt-3">
                  "Order now for pure delight!" &#128515;
                </p>

                <Link to={"/order_confirm"} replace={true}>
                  <button className="btn btn-danger w-100 fs-4 fw-bold mt-3 big_btn">
                    Place Order
                    <FontAwesomeIcon
                      className="px-2"
                      icon={faArrowAltCircleRight}
                    />
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <p className="text-danger fw-bold mb-0 mt-3">
                  'Please, submit the from first for Order' &#129488;
                </p>
                <button
                  disabled
                  className="btn btn-secondary w-100 fs-4 fw-bold mt-3 big_btn"
                >
                  Place Order
                  <FontAwesomeIcon
                    className="px-2"
                    icon={faArrowAltCircleRight}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
