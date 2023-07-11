import React, { createContext, useReducer, useState } from 'react'
import { cartReducer, intialState } from '../reducers/cartReducer'

 export const CartContext = createContext()



const CartContextProvider  = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, intialState)

  const addToCart = (product, quantity)=>{
    dispatch({
      type:'ADD_TO_CART',
      payload:{product, quantity}
    })
  }

  console.log(state);
  return (
    <CartContext.Provider value={{...state , addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider 