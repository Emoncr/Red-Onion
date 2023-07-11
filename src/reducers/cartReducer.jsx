export const intialState = {
    cart:[],
    quantity : "",
    total_amount: "",
    shipping: ""
    
}

export const cartReducer =(state, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            let {product, quantity} = action.payload;
            
            const cartAry = state.cart;
            const cartItem = [...cartAry, product]
            return {...state , cart:cartItem }

        default:
            return state
    }
}