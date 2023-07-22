export const initialState = {
  cart: [],
  total_amount: "",
  shipping: "",
};

export const cartReducer = (state, action) => {
  switch (action.type) {

    
    //=======HANDLE ADD TO CART FUNCTIONALITY==========//
    case "ADD_TO_CART":
      const { food, quantity, setQuantity } = action.payload;
      const updateQuantityItem = { ...food, quantity };
      const cartAry = state.cart;
      const isItemExist = cartAry.find((item) => item.food_id === food.food_id);



      //===HANDLE EXISTING FOOD ITEM===//
      if (isItemExist) {
        const updateItemQuantity = cartAry.map((matchItem) => {
          if (matchItem.food_id === food.food_id) {
            let newQuantity = matchItem.quantity + quantity;
            return { ...matchItem, quantity: newQuantity };
          } else {
            return matchItem;
          }
        });
        return { ...state, cart: updateItemQuantity };
      } else {
        const cartItem = [...cartAry, updateQuantityItem];
        return { ...state, cart: cartItem };
      }





    //HANDLE CART ITEM PLUS QUANTITY BUTTON CLICKED
    case "INCREASED":
      const { plusBtnFoodid } = action.payload;
      const cart = state.cart;

      const increasedQuantity = cart.map((currentItem) => {
        if (currentItem.food_id === plusBtnFoodid) {
          let newQuantity = currentItem.quantity + 1;
          return { ...currentItem, quantity: newQuantity };
        } else {
          return currentItem;
        }
      });
      return { ...state, cart: increasedQuantity };





    //HANDLE CART ITEM MINUS QUANTITY BUTTON CLICKED
    case "DECREASED":
      const { minusBtnFoodid } = action.payload;
      const newCart = state.cart;

      const decreasedQuantity = newCart.map((currentItem) => {
        if (currentItem.food_id === minusBtnFoodid) {
          let newQuantity = currentItem.quantity - 1;
          return { ...currentItem, quantity: newQuantity };
        } else {
          return currentItem;
        }
      });
      return { ...state, cart: decreasedQuantity };

    default:
      return state;
  }
};
