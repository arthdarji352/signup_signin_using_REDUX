import {
  LOGIN_DATA,
  REGISTER_DATA,
  LOG_OUT,
  UPDATE_DATA,
  DELETE_USER,
} from "./constant";

const initialState = {
  users: [],
  loggedInUser: [],
  isLogin: false,
};

export const allData = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_DATA:
      console.warn("REGISTER_DATA condition ", action);
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case LOGIN_DATA:
      return {
        ...state,
        // loggedInUser: [...state.loggedInUser, action.auth],
        loggedInUser: action.payload,
        isLogin: true,
      };
    case LOG_OUT:
      return {
        ...state,
        loggedInUser: action.payload,
        isLogin: false,
      };
    case UPDATE_DATA:
      // const { id, name, email } = action.payload;
      // console.log("data in updata data reducer", action.payload);
      // // const alldatas= ...state,
      // const uu = state.users.find((user) => user.id === id);
      // console.log(uu);

      // if (uu) {
      //   uu.name = name;
      //   uu.email = email;
      // }
      // return state.users.map((user) =>
      //   user.id === action.payload.id
      //     ? { ...user, ...action.payload.data }
      //     : user
      // );

      // return {
      //   ...state,
      //   users: [...state.users, action.payload],
      // };

      // const uu = state.users.find((user) => user.id == id);
      // return {
      //   ...state,
      // };
      const { id, name, email } = action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload,
          };
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
        loggedInUser: {
          id,
          name,
          email,
        },
        isLogin: true,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
        loggedInUser: [],
        isLogin: false,
      };

    // const { id } = action.payload;
    // const uu = state.users.find((user) => user.id == id);
    // if (uu) {
    //   return state.users.filter((f) => f.id !== id);
    // }
    // return {
    //   ...state,
    //   users: [...state.users, action.payload],
    // };

    default:
      return state;
  }
};
