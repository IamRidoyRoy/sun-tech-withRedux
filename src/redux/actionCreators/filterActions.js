import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const toggle_Brand = (brandName) => {

    return {
        type: TOGGLE_BRAND,
        payload: brandName,
    }

}
export const toggleStock = () => {

    return {
        type: TOGGLE_STOCK,

    }

}

