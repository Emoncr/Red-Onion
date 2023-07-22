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


  const increaseQuantity=(food)=>{
    dispatch({
      type:'INCREASED',
      payload:{food}
    })
  }
  const decreaseQuantity=(food)=>{
    dispatch({
      type:'DECREASED',
      payload:{food}
    })
  }


  return (
    <CartContext.Provider value={{...state , addToCart, increaseQuantity ,decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider 