import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const initialState = {
    filters: {
        brands: [],
        stock: false,
    },
    keywords: '',
}


export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BRAND:
            // if the array is empty the brand will be added
            if (!state.filters.brands.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.brands,
                        brands: [...state.filters.brands, action.payload]
                    }
                }
            }
            else {
                // If the brand is previously added the brand will delete 
                return {
                    ...state,
                    filters: {
                        ...state.brands,
                        brands: state.filters.brands.filter((brand) => brand !== action.payload)
                    }
                }

            }
        case TOGGLE_STOCK:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    stock: !state.filters.stock,
                }
            }

        default:
            break;
    }

    return state;
}