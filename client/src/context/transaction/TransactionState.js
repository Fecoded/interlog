import {useReducer} from 'react';
import {GET_TRANSACTIONS, USER_TRANSACTIONS, CREATE_TRANSACTION, TRANSACTION_ERROR} from '../types';
import axios from 'axios';
import TransactionContext from './TransactionContext';
import TransactionReducer from './TransactionReducer';
import setAuthToken from '../../utils/SetAuthToken';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import jwtDecode from 'jwt-decode';

const TransactionState = props => {
    const INITIALSTATE = {
        transaction: null,
        transactions: [],
        userTransactions: [],
        error: null,
        loading: false
    }

    const [state, dispatch] = useReducer(TransactionReducer, INITIALSTATE);

  // Get Transactions
  const getTransactions = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/transaction');

      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data.data
      });

      
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.response.message });
    }
  };

   // Get User Transactions
   const getUserTransactions = async () => {
    let token;

    if (localStorage.token) {
      setAuthToken(localStorage.token);
      token = localStorage.token;
    }

    const {user} = jwtDecode(token);

    try {
      const res = await axios.get(`/transaction/${user.id}`);

      dispatch({
        type: USER_TRANSACTIONS,
        payload: res.data.data
      });
  
      
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.response.message });
    }
  };


  // Create Transaction
  const createTransaction = async (formData) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers : {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post('/transaction', formData, config);

      dispatch({
        type: CREATE_TRANSACTION,
        // payload: res.data.data
      })

      toastr.success(res.data.msg);
      formData.setReporting_date('');
      formData.setField_Staff_Name('');
      formData.setCustomer_Name('');
      formData.setLoading('');
      formData.setOpening_balance('');
      formData.setProduct_Name('');
      formData.setRelease_('');
      formData.setTake_on('');
      
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.response.message });
    }
  }


    return (
        <TransactionContext.Provider
            value={{
                transaction: state.transaction,
                transactions: state.transactions,
                userTransactions: state.userTransactions,
                error: state.error,
                getTransactions,
                createTransaction,
                getUserTransactions
            }}
        >
            {props.children}
        </TransactionContext.Provider>
    );
};

export default TransactionState

