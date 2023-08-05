import React, { useContext, useState } from "react";
import "./cart_details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Contexts/cartContext";
import { useNavigate } from "react-router-dom";

const CartDetails = ({ cartItem }) => {
  const { photo_url, food_id, food_name, price, quantity } = cartItem;

  const { increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="cart_content">
        <div className="cart_details mt-3">
          <div className="cart_image">
            <img
              className=" cart_item_image"
              src={photo_url}
              alt="Food Image"
              onClick={() => navigate(`../${food_id}`, { replace: true })}
            />
          </div>
          <div className="cart_item_content">
            <h6 onClick={() => navigate(`../${food_id}`, { replace: true })}>
              {food_name}
            </h6>
            <p className="price">${price}</p>
          </div>
          <div className="cart_item_count">
            {/* HANDLE MINUS CLICK ON CART ITEM  */}
            {quantity > 1 ? (
              <button
                onClick={() => decreaseQuantity(food_id)}
                className="minus_btn product_count_btn quantity_btn font-weight-700"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            ) : (
              <button
                disabled
                className="minus_btn product_count_btn quantity_btn font-weight-700"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            )}

            <h6 className="cart_pd_quantity">{quantity}</h6>

            {/* HANDLE PLUS CLICK ON CART ITEM  */}
            <button
              onClick={() => increaseQuantity(food_id)}
              className=" font-weight-700 plus_btn product_count_btn quantity_btn"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="remove_btn_container">
          <button
            onClick={() => removeItem(food_id)}
            className="remove_btn btn btn-danger"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
