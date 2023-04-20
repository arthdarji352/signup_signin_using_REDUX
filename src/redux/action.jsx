// import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"
import { REGISTER_DATA, LOGIN_DATA, LOG_OUT } from "./constant";

export const registerData = (data) => {
  console.warn("action is called", data);
  return {
    type: REGISTER_DATA,
    data,
  };
};

export const loginData = (auth) => {
  console.warn("action is called", auth);
  return {
    type: LOGIN_DATA,
    auth,
  };
};

export const logoutData = () => {
  return {
    type: LOG_OUT,
  };
};
