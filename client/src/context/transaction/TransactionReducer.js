import {
    GET_TRANSACTIONS, 
    USER_TRANSACTIONS, 
    CREATE_TRANSACTION, 
    SET_CURRENT, 
    FILTERED_TRANSACTION,
    SEARCH_TRANSACTION,
    TRANSACTION,
    TRANSACTION_ERROR
} from '../types';


const TransactionReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: payload,
                loading: false
            }
        case USER_TRANSACTIONS:
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
        case SET_CURRENT:
            return {
                ...state,
                current: payload,
                loading: false
            }
        case SEARCH_TRANSACTION: {
            return {
                ...state,
                transactions: payload,
                loading: false
            }
        }
        case TRANSACTION:
            return {
                ...state,
                data: payload,
                loading: false
            }
        case FILTERED_TRANSACTION:
            return {
                ...state,
                filtered: state.transactions.filter((transaction) => {
                    const regex = new RegExp(`${payload}`, 'gi');
                    return (
                        transaction.Product_Name.match(regex) ||
                        transaction.Field_Staff_Name.match(regex));
                }),
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
