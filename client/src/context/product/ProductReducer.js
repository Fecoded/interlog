import {GET_PRODUCTS, CREATE_PRODUCT, PRODUCT_ERROR} from '../types';


const ProductReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                // products: [...state.products, payload],
                loading: false
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
        return state;
    }
}

export default ProductReducer
