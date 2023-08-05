import React, { useContext, useEffect, useState } from "react";
import "./food-selected.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faShoppingCart,
  faCartArrowDown,
  faCartPlus,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { LuUtensilsCrossed } from "react-icons/lu";
import { BsFillCartDashFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/cartContext";

const FoodSelected = ({ selectFood }) => {
  const [isExist, setIsExixt] = useState(false);
  const { food_id, price, photo_url, food_name, food_description } = selectFood;
  const { addToCart, cart, removeItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const isPdExist = () => {
    const isExistPd = cart.find((pd) => pd.food_id === food_id);
    isExistPd && setIsExixt(!isExist);
  };

  useEffect(() => {
    isPdExist();
  }, []);

  return (
    <>
      <div className="row selected_food_container">
        <div className="col-xl-5 col item_container">
          <h3 className="food_name">{food_name}</h3>
          <p className="food_description">{food_description}</p>
          <div className="row mt-4 food_info">
            <div className="col-4 col-md-4 col-lg-3 ">
              <p className="food_price">${price}</p>
            </div>
            <div className="col-6 col-md-6 col-lg-4 quantity_block">
              <div className="inner_quantity">
                {/* ======MINUS QUANTITY BUTTON======= */}
                <button
                  onClick={() =>
                    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
                  }
                  className="quantity_btn"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>

                <p className="product_quantity">{quantity}</p>

                {/* // =====PLUS QUANTITY BUTTON=======// */}
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity_btn plus_btn"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>

          {/* // ==========ADD TO CART BUTTON=========// */}
          <div className="btns_container mt-4 ">
            {isExist ? (
              <>
                <button
                  onClick={() => {
                    removeItem(food_id), setIsExixt(!isExist);
                  }}
                  className="cart_btn btn btn-dark bs_icons"
                >
                  <BsFillCartDashFill />
                  Remove
                </button>
                <Link to="/home" replace={true}>
                  <button
                    onClick={() => addToCart(selectFood, quantity)}
                    className=" cart_btn btn btn-success secound_btn"
                  >
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    Want More..!
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    addToCart(selectFood, quantity), setIsExixt(!isExist);
                  }}
                  className=" cart_btn btn btn-success"
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                  Add To Cart
                </button>
                <Link to="/cart" replace={true}>
                  <button
                    onClick={() => addToCart(selectFood, quantity)}
                    className="cart_btn btn btn-danger secound_btn"
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    Buy Now
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* // Navigate to Food Details Page  */}
          <div className="btns_container mt-2 Navigate_btns">
            {isExist ? (
              <>
                <Link to="/cart" replace={true}>
                  <button className="cart_btn btn btn-danger text-light w-100">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Go To Cart
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/home" replace={true}>
                  <button className="w-100 cart_btn btn btn-warning text-black ">
                    Choose Another Food
                    <LuUtensilsCrossed />
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="col col-xl-5">
          <div className="image_container">
            <img src={photo_url} alt="Food Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodSelected;
