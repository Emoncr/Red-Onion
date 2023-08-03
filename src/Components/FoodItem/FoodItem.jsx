import React from "react";
import "./fooditem.css";
import { Link } from "react-router-dom";

const FoodItem = ({ foodItem }) => {
  const { photo_url, price, food_description, food_name, food_id } = foodItem;

  return (
    <>
      <div className="col-4 mt-4 mx-auto card_col ">
        <Link to={food_id} replace={true}>
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
