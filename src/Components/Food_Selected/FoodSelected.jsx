import React, { useContext, useState } from 'react'
import './food-selected.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import Food from '../FoodContainer/Food'
import { cartContext } from '../../App'


const FoodSelected = ({ selectFood }) => {
    const { food_id, price, photo_url, food_name, food_description, category } = selectFood
    const [cart, setCart] = useContext(cartContext)
    const [orderQuantity, setOrderQuantity] = useState(1)



    selectFood.quantity = orderQuantity;
    const handleAddingCart = () => {
        const checkCurrentFood = cart.find((food) => { 
           if ( food.food_id === food_id) {
            return true
           }
         })
        checkCurrentFood ? setOrderQuantity(orderQuantity + 1) : setCart([...cart, selectFood])
    }

    return (
        <>
            <div className="row selected_food_container">
                <div className="col-xl-5 col">
                    <h3 className='food_name' >{food_name}</h3>
                    <p className='food_description'>{food_description}</p>
                    <div className="row mt-4 food_info">
                        <div className="col-3 col-lg-3 ">
                            <p className='food_price'>${price}</p>
                        </div>
                        <div className="col-6 col-lg-4 quantity_block">
                            <div className="inner_quantity">

                                {
                                    orderQuantity <= 1 ? 
                                    <button disabled className='quantity_btn'>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                :
                                <button onClick={()=>setOrderQuantity(orderQuantity - 1)}  className='quantity_btn'>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                                }


                                <p className='product_quantity'>{orderQuantity}</p>
                                
                                <button onClick={()=>setOrderQuantity(orderQuantity + 1)} className='quantity_btn plus_btn'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleAddingCart} className='mt-4 cart_btn'> <FontAwesomeIcon icon={faCartShopping} /> Add</button>

                </div>
                <div className="col col-xl-5">
                    <div className="image_container">
                        <img src={photo_url} alt="Food Image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodSelected