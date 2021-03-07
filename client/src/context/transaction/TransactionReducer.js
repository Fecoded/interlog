import {GET_TRANSACTIONS, CREATE_TRANSACTION, TRANSACTION_ERROR} from '../types';


const TransactionReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: payload,
                loading: false
            }
        case CREATE_TRANSACTION:
            return {
                ...state,
                // transactions: [...state.transactions, payload],
                loading: false
            }
        case TRANSACTION_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
        return state;
    }
}

export default TransactionReducer