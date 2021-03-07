import {useReducer} from 'react';
import {GET_CUSTOMERS, CREATE_CUSTOMER, CUSTOMER_ERROR} from '../types';
import axios from 'axios';
import CustomerContext from './CustomerContext';
import CustomerReducer from './CustomerReducer';
import setAuthToken from '../../utils/SetAuthToken';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';


const CustomerState = props => {
    const INITIALSTATE = {
        customer: null,
        customers: [],
        error: null,
        loading: false
    }

const [state, dispatch] = useReducer(CustomerReducer, INITIALSTATE);

  // Get Customers
  const getCustomers = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/customer');

      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data.data
      });

      
    } catch (err) {
      dispatch({ type: CUSTOMER_ERROR, payload: err.response.message });
    }
  };

  // Create Transaction
  const createCustomer = async (formData) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers : {
        "Content-Type": "application/json"
      }
    };

    try {
      const res =  await axios.post('/customer', formData, config);

      dispatch({
        type: CREATE_CUSTOMER,
        // payload: res.data.data
      })
      toastr.success(res.data.msg);
      formData.setCustomer_Name('');
      formData.hideModal(window.$("#addCustomersModal").modal("hide"));
    } catch (err) {
      toastr.error(err.response.data.msg);
      dispatch({ type: CUSTOMER_ERROR, payload: err.response.data.msg });
    }
  }


    return (
        <CustomerContext.Provider
            value={{
                customer: state.customer,
                customers: state.customers,
                error: state.error,
                getCustomers,
                createCustomer
            }}
        >
            {props.children}
        </CustomerContext.Provider>
    );
};

export default CustomerState