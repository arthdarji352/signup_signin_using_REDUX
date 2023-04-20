import { LOGIN_DATA, REGISTER_DATA, LOG_OUT } from "./constant";

const initialState = {
  users: [],
  loggedInUser: [],
};

export const allData = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_DATA:
      console.warn("REGISTER_DATA condition ", action);
      return {
        ...state,
        users: [...state.users, action.data],
      };

    case LOGIN_DATA:
      return {
        ...state,
        loggedInUser: [...state.loggedInUser, action.auth],
      };
    case LOG_OUT:
      return {
        ...state,
        loggedInUser: [],
      };

    default:
      return state;
  }
};
