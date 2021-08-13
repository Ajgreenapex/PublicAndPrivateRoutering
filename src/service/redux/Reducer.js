import * as actions from "../constant";

const initailState = {
  loginData: [],
  loading: false,
  error: null,
  isAuthorized: false,
  ongoingData: [],
  completedData: [],
  notStartedData: [],
  meta: [],
  viewProfile: {},
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
    case actions.GET_ONGOINGDATA:
      return {
        ...state,
        loading: false,
        ongoingData: action.payload.data,
        meta: action.payload.meta,
      };
    case actions.GET_COMPLETED:
      return {
        ...state,
        loading: false,
        completedData: action.payload.data,
        meta: action.payload.meta,
      };
    case actions.GET_NOT_STARTED:
      return {
        ...state,
        loading: false,
        notStartedData: action.payload.data,
        meta: action.payload.meta,
      };
    case actions.GET_VIEW_PROFILE:
      return {
        ...state,
        loading: false,
        viewProfile: action.payload.data,
      };
    default:
      return state;
  }
};
