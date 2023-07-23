import React, { useContext } from "react";
import "./pricing.css";
import { CartContext } from "../../Contexts/cartContext";

const Pricing = () => {
  const { cart, tax, delivery } = useContext(CartContext);

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
          <p className=" empty_cart_msg"> Your cart is empty !!! &#128551;</p>
      ) : (
        <div className="content_container">
          {/* SUB TOTAL SECTION CODE  */}
          <div className="amount_container">
            <div className="pricing_name fw-normal pricing">
              <p>
                Sub Total *<span className="text-danger fw-bold px-1">{cart.length} item</span>{" "}
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
        </div>
      )}
    </div>
  );
};

export default Pricing;
