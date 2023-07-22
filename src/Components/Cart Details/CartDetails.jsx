import React, { useContext, useState } from 'react'
import './cart_details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';




const CartDetails = ({ cartItem }) => {

    const { photo_url, food_id, food_name, price, quantity } = cartItem


    return (
        <div className='cart_details mt-3'>
            <div className="cart_image">
                <img className=' cart_item_image' src={photo_url} alt="Food Image" />
            </div>
            <div className="cart_item_content">
                <h6>{food_name}</h6>
                <p className='price'>${price}</p>
            </div>
            <div className="cart_item_count">

                <button onClick={() => console.log('minus clicked')} className='minus_btn product_count_btn quantity_btn font-weight-700'>
                    <FontAwesomeIcon icon={faMinus} />
                </button>

                <h6 className='cart_pd_quantity'>{quantity}</h6>


                <button   className=' font-weight-700 plus_btn product_count_btn quantity_btn'>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default CartDetails