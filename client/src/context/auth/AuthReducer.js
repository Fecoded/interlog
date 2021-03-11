import {
    USER_LOADED, 
    USERS_LOADED, 
    LOGIN_SUCCESS, 
    // REGISTER_SUCCESS, 
    LOGIN_FAIL, 
    REGISTER_FAIL, 
    AUTH_ERROR,
    LOGOUT
} from '../types';

const AuthReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
      case USERS_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          users: payload
        };
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          error: payload
        };
      default:
        return state;
    }
  };

  export default AuthReducer;