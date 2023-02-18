import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    remove_cart: [],
    wishlist: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_CART:
            return {
                ...state,
                remove_cart: [...state, action.payload]

            }
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state, action.payload]

            }
        default:
            return state;
    }
}

export default productReducer;