import  { createContext, useReducer } from 'react'
import { cartReducer, initialState } from '../reducers/cartReducer'

 export const CartContext = createContext()


const CartContextProvider  = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (food, quantity, setQuantity)=>{
    dispatch({
      type:'ADD_TO_CART',
      payload:{food,quantity, setQuantity}
    })
  }


  const increaseQuantity=(plusBtnFoodid)=>{
    dispatch({
      type:'INCREASED',
      payload:{plusBtnFoodid}
    })
  }
  const decreaseQuantity=(minusBtnFoodid)=>{
    dispatch({
      type:'DECREASED',
      payload:{minusBtnFoodid}
    })
  }


  return (
    <CartContext.Provider value={{...state , addToCart, increaseQuantity ,decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider 