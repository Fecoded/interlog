import {useReducer} from 'react';
import {GET_PRODUCTS, CREATE_PRODUCT, PRODUCT_ERROR} from '../types';
import axios from 'axios';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import setAuthToken from '../../utils/SetAuthToken';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';


const ProductState = props => {
    const INITIALSTATE = {
        product: null,
        products: [],
        error: null,
        loading: false
    }

const [state, dispatch] = useReducer(ProductReducer, INITIALSTATE);

  // Get Products
  const getProducts = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/product');

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.data
      });

      
    } catch (err) {
      dispatch({ type: PRODUCT_ERROR, payload: err.response.message });
    }
  };

  // Create Product
  const createProduct = async (formData) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers : {
        "Content-Type": "application/json"
      }
    };

    try {
      const res =  await axios.post('/product', formData, config);

      dispatch({
        type: CREATE_PRODUCT,
        // payload: res.data.data
      })
      toastr.success(res.data.msg);
      formData.setProduct_Name('');
      formData.setCustomer_Name('');
      formData.hideModal(window.$("#addProductsModal").modal("hide"));
    } catch (err) {
      toastr.error(err.response.data.msg);
      dispatch({ type: PRODUCT_ERROR, payload: err.response.data.msg });
    }
  }


    return (
        <ProductContext.Provider
            value={{
                product: state.product,
                products: state.products,
                error: state.error,
                getProducts,
                createProduct
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductState