export const initialState = {
    cart:[],
    total_amount: "",
    shipping: ""
    
}
 

export const cartReducer =(state, action)=>{

    switch (action.type) {

        // HANDLE ADD TO CART ACTION================//
        case "ADD_TO_CART":
            const {food,quantity, setQuantity} = action.payload
            const updateFood = {...food, quantity}
            const cartAry = state.cart;
            const isFoodExist = cartAry.find(existItem => existItem.food_id === food.food_id)
            
            if(isFoodExist){
                const updateItemQuantity = cartAry.map(currentItem=>{
                    if(currentItem.food_id === food.food_id){
                        let newFoodQuantity = currentItem.quantity + quantity;
                        return {...currentItem, quantity: newFoodQuantity}
                    }
                    else{
                        return currentItem;
                    };
                });
                return {...state , cart:updateItemQuantity }
                
            }
            else{
                const cartItem = [...cartAry, updateFood]
                return {...state , cart:cartItem }
            };








            
            


        default:
            return state
    }
}


