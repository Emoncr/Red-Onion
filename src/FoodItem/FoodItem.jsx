import React from 'react'
import './fooditem.css'



const FoodItem = ({ foodItem }) => {
    const {photo_url, price, food_description,food_name } = foodItem
    return (
        <div className="col-4 mt-4 mx-auto card_col">
            <div className="card" >
                <img loading="lazy" className="card-img-top" src={photo_url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{food_name}</h5>
                    <p className="card-text">{food_description}</p>
                    <p className='food_price'>{price}</p>
                </div>
            </div>
        </div>

    )
}

export default FoodItem