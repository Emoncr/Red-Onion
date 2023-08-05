import { createContext, useEffect, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (food, quantity) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { food, quantity },
    });
  };

  const increaseQuantity = (plusBtnFoodid) => {
    dispatch({
      type: "INCREASED",
      payload: { plusBtnFoodid },
    });
  };
  const decreaseQuantity = (minusBtnFoodid) => {
    dispatch({
      type: "DECREASED",
      payload: { minusBtnFoodid },
    });
  };

  //=====remove item from cart=========//
  const removeItem = (itemId) => {
    dispatch({
      type: "ITEM_REMOVE",
      payload: { itemId },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLAER_CART",
    });
  };

  //========SET CART ITEM TO LOCAL STORAGE=======//
  const setLocalStorageItem = (keyName, value) => {
    useEffect(() => {
      const valueStr = JSON.stringify(value);
      localStorage.setItem(keyName, valueStr);
    }, [value]);
  };
  setLocalStorageItem("cart", state.cart);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        increaseQuantity,
        setLocalStorageItem,
        decreaseQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
