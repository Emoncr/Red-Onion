import React, { useState, useEffect } from 'react'
import './food.css'
import Data from '../FakeData/FakeData'
import FoodItem from '../FoodItem/FoodItem'


const Food = () => {
  const [data, setData] = useState(Data)
  const [categoris, setCategoris] = useState([])

  const getCategory = (data, property) => {
    let catValue = data.map(cat => cat[property])
    catValue = [...new Set(catValue)]
    return catValue
  }

  useEffect(() => {
    const categoriData = getCategory(data, "category")
    setCategoris(categoriData)
  }, [])

  return (
    <section className='food_section pt-5 pb-5'>
      <div className="inner-section categori_inner">
        <div className="row mx-auto categori-row">
          {
            categoris && categoris.map(catItem => {
              return (
                <div className="col-4 categori_container">
                  <button className='categori_btn'>{catItem}</button>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="inner_section card_container mt-4">
        <div className="row card_item_row">
          {
            data.map(foodData => <FoodItem key={foodData.id} foodItem={foodData} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Food
