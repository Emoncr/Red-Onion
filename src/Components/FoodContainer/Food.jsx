import React, { useState, useEffect } from 'react';
import './food.css';
import Data from '../../FakeData/FakeData';
import FoodItem from '../FoodItem/FoodItem';

const Food = () => {
  const [data, setData] = useState(Data);
  const [categoris, setCategoris] = useState([]);
  const [foodTime, setFoodTime] = useState();
  const [activeButton, setActiveButton] = useState('');

  const getCategory = (data, property) => {
    let catValue = data.map((cat) => cat[property]);
    catValue = [...new Set(catValue)];
    return catValue;
  };

  useEffect(() => {
    const categoriData = getCategory(data, 'category');
    setCategoris(categoriData);
  }, [data]);

  useEffect(() => {
    lunchBtn();
  }, []);

  const lunchBtn = () => {
    setActiveButton('lunch');
  };

  useEffect(() => {
    if (!foodTime) {
      const selectedFoodTime = data.filter((selectFood) => selectFood.category === 'lunch');
      setFoodTime(selectedFoodTime);
    }
  }, [data]);

  const HandleCategori = (e) => {
    const selectedFoodTime = data.filter((selectFood) => selectFood.category === e.target.value);
    setFoodTime(selectedFoodTime);
    setActiveButton(e.target.value)
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
                    className={`categori_btn ${activeButton === catItem ? 'active' : ''}`}
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
          {foodTime && foodTime.map((foodData) => <FoodItem key={foodData.food_id} foodItem={foodData} />)}
        </div>
      </div>
    </section>
  );
};

export default Food;
