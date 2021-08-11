import * as actions from "../constant";

const initailState = {
  loginData: [],
  loading: false,
  error: null,
  isAuthorized: false,
};
export const Reducer = (state = initailState, action) => {
  switch (action.type) {
    case actions.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actions.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        loginData: action.payload.data,
        isAuthorized: action.payload.data.user.token,
      };

    case actions.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actions.GET_LOGOUT:
      return {
        ...state,
        loading: false,
        isAuthorized: action.payload,
      };
    default:
      return state;
  }
};
