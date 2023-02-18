import { ADD_TO_CART, REMOVE_CART } from "../actionTypes/actionTypes"

export const addTocart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data,
    }
}

export const removeCart = (data) => {
    return {
        type: REMOVE_CART,
        payload: data
    }
}