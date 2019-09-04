import React, { useReducer } from "react";
import axios from "axios";
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: null,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOAD USER
  const loadUser = () => console.log("loaduser");
  //REGISTER USER
  // FormData = data to register the user
  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/users", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  //LOGIN USER
  const login = () => console.log("login");

  //LOGOUT
  const logout = () => console.log("logout");

  //CLEAR ERRORS
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthState;
