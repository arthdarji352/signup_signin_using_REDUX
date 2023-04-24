// import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"
import {
  REGISTER_DATA,
  LOGIN_DATA,
  LOG_OUT,
  UPDATE_DATA,
  DELETE_USER,
} from "./constant";
// {
//   type:actiontype
//   payload
// }
export const registerData = (data) => {
  console.warn("action is called", data);
  return {
    type: REGISTER_DATA,
    payload: data,
  };
};

export const loginData = (payload) => {
  console.warn("action is called", payload);
  return {
    type: LOGIN_DATA,
    payload,
  };
};
export const profileUpdateData = (payload) => {
  console.warn("action is called updatedata", payload);
  return {
    type: UPDATE_DATA,
    payload,
  };
};

export const logoutData = (payload) => {
  return {
    type: LOG_OUT,
    payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};
