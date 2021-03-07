import {useReducer} from 'react';
import {GET_TRANSACTIONS, CREATE_TRANSACTION, TRANSACTION_ERROR} from '../types';
import axios from 'axios';
import TransactionContext from './TransactionContext';
import TransactionReducer from './TransactionReducer';
import setAuthToken from '../../utils/SetAuthToken';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const TransactionState = props => {
    const INITIALSTATE = {
        transaction: null,
        transactions: [],
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
      formData.setClosing_balance('');
      formData.setCustomer_Name('');
      formData.setLoading('');
      formData.setOpening_balance('');
      formData.setPhysical_Stock_Balance('');
      formData.setProduct_Name('');
      formData.setRelease_('');
      formData.setRelease_balance('');
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
                error: state.error,
                getTransactions,
                createTransaction
            }}
        >
            {props.children}
        </TransactionContext.Provider>
    );
};

export default TransactionState

