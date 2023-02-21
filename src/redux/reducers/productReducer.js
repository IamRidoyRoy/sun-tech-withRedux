import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    wishlist: [],
};

const productReducer = (state = initialState, action) => {

    // Find selected product 
    const selectedProduct = state.cart.find((product) => product._id === action.payload._id)
    console.log(selectedProduct);
    switch (action.type) {
        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter((product) => product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_CART:
            if (selectedProduct.quantity > 1) {
                const newCart = state.cart.filter((product) => product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity - 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== action.payload._id)

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