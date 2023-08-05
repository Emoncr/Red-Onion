import React, { useContext, useEffect, useState } from "react";
import "./fooditem.css";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { CartContext } from "../../Contexts/cartContext";

const FoodItem = ({ foodItem }) => {
  const [isExist, setIsExixt] = useState(false);
  const { photo_url, price, food_description, food_name, food_id } = foodItem;
  const { addToCart, removeItem, cart } = useContext(CartContext);

  const isPdExist = () => {
    const isExistPd = cart.find((pd) => pd.food_id === food_id);
    isExistPd && setIsExixt(!isExist);
  };

  useEffect(() => {
    isPdExist();
  }, []);

  return (
    <>
      <div className="col-4 mt-4 mx-auto card_col ">
        {isExist ? (
          <button
            onClick={() => {
              removeItem(food_id), setIsExixt(!isExist);
            }}
            className="btn product_cart_btn checked_btn fs-5 text-success"
          >
            <BsFillCartCheckFill />
          </button>
        ) : (
          <button
            onClick={() => {
              addToCart(foodItem, 1), setIsExixt(!isExist);
            }}
            className="btn product_cart_btn fs-5 text-danger "
          >
            <BsFillCartPlusFill />
          </button>
        )}
        <Link to={`../${food_id}`} replace={true}>
          <div className="card">
            <img
              loading="lazy"
              className="card-img-top"
              src={photo_url}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{food_name}</h5>
              <p className="card-text">{food_description}</p>
              <p className="food_price">${price}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FoodItem;
