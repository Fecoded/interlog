import {GET_CUSTOMERS, CREATE_CUSTOMER, CUSTOMER_ERROR} from '../types';


const CustomerReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: payload,
                loading: false
            }
        case CREATE_CUSTOMER:
            return {
                ...state,
                // customers: [...state.customers, payload],
                loading: false
            }
        case CUSTOMER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
        return state;
    }
}

export default CustomerReducer
