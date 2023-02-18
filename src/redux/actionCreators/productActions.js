import { ADD_TO_CART } from "../actionTypes/actionTypes"

export const addTocart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data,
    }
}