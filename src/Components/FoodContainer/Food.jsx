import React, { useState, useEffect, useContext } from "react";
import "./food.css";
import Data from "../../FakeData/FakeData";
import FoodItem from "../FoodItem/FoodItem";
import { CartContext } from "../../Contexts/cartContext";

const Food = ({ dynamicCat }) => {
  const [data] = useState(Data);
  const [categoris, setCategoris] = useState([]);
  const [foodTime, setFoodTime] = useState();
  const [activeButton, setActiveButton] = useState("");
  const { cart } = useContext(CartContext);

  const getCategory = (data, property) => {
    let catValue = data.map((cat) => cat[property]);
    catValue = [...new Set(catValue)];
    return catValue;
  };

  useEffect(() => {
    const categoriData = getCategory(data, "category");
    setCategoris(categoriData);
  }, [data]);

  useEffect(() => {
    lunchBtn();
  }, []);

  const lunchBtn = () => {
    setActiveButton("lunch");
  };

  useEffect(() => {
    if (!foodTime) {
      const selectedFoodTime = data.filter(
        (selectFood) => selectFood.category === "lunch"
      );
      setFoodTime(selectedFoodTime);
    }
  }, [data]);

  const HandleCategori = (e) => {
    const selectedFoodTime = data.filter(
      (selectFood) => selectFood.category === e.target.value
    );
    setFoodTime(selectedFoodTime);
    setActiveButton(e.target.value);
  };

  return (
    <section className="food_section pt-5 pb-5">
      <div className="inner-section categori_inner">
        <div className="row mx-auto categori-row">
          {categoris &&
            categoris.map((catItem, index) => {
              const buttonId = `category-btn-${index + 1}`;
              return (
                <div className="col-4 categori_container" key={index}>
                  <button
                    onClick={HandleCategori}
                    value={catItem}
                    id={buttonId}
                    className={`categori_btn ${
                      activeButton === catItem ? "active" : ""
                    }`}
                  >
                    {catItem}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <div className="inner_section card_container mt-4">
        <div className="row card_item_row">
          {foodTime &&
            foodTime.map((foodData) => (
              <FoodItem key={foodData.food_id} foodItem={foodData} />
            ))}
        </div>
        <div className="cart_btn_container mt-5 text-uppercase d-flex justify-content-center">
          {cart.lenght ? (
            <button className="px-5 mt-4 fw-normal btn btn-danger">
              Checkout Your Food
            </button>
          ) : (
            <button className="px-5 mt-4 fw-normal btn-secondary btn ">
              Checkout Your Food
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Food;
