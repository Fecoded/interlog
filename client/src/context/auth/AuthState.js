import {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import setAuthToken from '../../utils/SetAuthToken';
import jwtDecode from 'jwt-decode';
import {
    USER_LOADED, 
    USERS_LOADED, 
    LOGIN_SUCCESS, 
    FILTERED_USERS, 
    LOGIN_FAIL, 
    REGISTER_FAIL, 
    AUTH_ERROR,
    LOGOUT
} from '../types';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const AuthState = props => {
    const INITIALSTATE = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        users: [],
        filtered: null,
        error: null,
        loading: false,
    }

    const [state, dispatch] = useReducer(AuthReducer, INITIALSTATE);


    // Load User
  const loadUser = async () => {
    let token;
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      token = localStorage.token;
    }


    const {user} = jwtDecode(token);

    try {
      const res = await axios.get(`/user/${user.id}`);

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
}

  // Load Users
  const loadUsers = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get(`/user`);

      dispatch({
        type: USERS_LOADED,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
}


  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/user/login', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      toastr.success(res.data.message);
      loadUser();
    } catch (err) {
      toastr.error(err.response.data.message);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message
      });
    }
  };

   // Register User
   const register = async formData => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/user', formData, config);

      formData.setFullname("");
      formData.setEmail("");
      formData.hideModal(window.$("#addUserModal").modal("hide"));
      toastr.success(res.data.msg);

      loadUsers();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

    // Update User
    const updateUser = async formData => {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };
  
      try {
        const res = await axios.patch('/user', formData, config);
  
        formData.setFullname("");
        formData.setEmail("");
        formData.hideModal(window.$("#addUserModal").modal("hide"));
        toastr.success(res.data.message);
  
        loadUsers();
      } catch (err) {
        toastr.error(err.response.data.message);
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response.data.msg
        });
      }
    };

      // Remove User
      const deleteUser = async (id) => {
        if (localStorage.token) {
          setAuthToken(localStorage.token);
        };
  
        try {
          const res = await axios.delete('/user', {params: {id}});
  
          toastr.success(res.data.message);
          loadUsers();
          
        } catch (err) {
          toastr.error(err.response.data.message);
          dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
          });
        }
      }

  const filteruser = (text) => dispatch({ type: FILTERED_USERS, payload: text });

  // Logout
  const logout = () => dispatch({ type: LOGOUT });


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                filtered: state.filtered,
                user: state.user,
                users: state.users,
                error: state.error,
                login,
                register,
                loadUser,
                loadUsers,
                updateUser,
                filteruser,
                deleteUser,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState

