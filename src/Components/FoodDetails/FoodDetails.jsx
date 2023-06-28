import React from 'react'
import './foodDetails.css'
import { useParams } from 'react-router-dom'
import foodData from '../../FakeData/FakeData'
import FoodSelected from '../Food_Selected/foodSelected'



const FoodDetails = () => {
  const paramsId = useParams()
  const selectedFood = foodData.filter((food) => food.food_id === paramsId.id)
console.log(selectedFood);

  return (
    <section className='food_details_section pt-5 pb-5'>
      <div className="inner_section">
        {
          selectedFood.map((food)=><FoodSelected selectFood={food} />)
        }
      </div>
    </section>
  )
}

export default FoodDetails