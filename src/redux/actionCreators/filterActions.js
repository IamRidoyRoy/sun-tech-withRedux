import { TOGGLE_BRAND } from "../actionTypes/actionTypes"

export const toggle_Brand = (brandName) => {

    return {
        type: TOGGLE_BRAND,
        payload: brandName,
    }

}