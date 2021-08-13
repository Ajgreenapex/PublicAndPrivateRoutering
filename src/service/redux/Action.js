import { GET_API, POST_API } from "../ApiService";
import * as actions from "../constant";

///redux action
export const login = (url, data) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    try {
      const res = await POST_API(url, data);
      // console.log("token===============>", res);
      // console.log("token===============>", res.data.data.user.token);

      await localStorage.setItem("token", res.data.data.user.token);

      dispatch({ type: actions.GET_SUCCESS, payload: res.data });
    } catch (e) {
      //console.log("error==========>", e);
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    try {
      localStorage.clear();
      dispatch({ type: actions.GET_LOGOUT, payload: false });
    } catch (e) {
      //console.log("error==========>", e);
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};

export const ongoingData = (url, headers) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    //console.log("res ongoingData=========>", headers);
    const res = await GET_API(url, headers);
    //console.log("res ongoingData=========>", res.data.meta);
    try {
      dispatch({ type: actions.GET_ONGOINGDATA, payload: res.data });
    } catch (e) {
      //console.log("error==========>", e);
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};

export const completedData = (url, headers) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    //console.log("res ongoingData=========>", headers);
    const res = await GET_API(url, headers);
    // console.log("res completedData=========>", res.data.meta);
    try {
      dispatch({ type: actions.GET_COMPLETED, payload: res.data });
    } catch (e) {
      //console.log("error==========>", e);
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};

export const notStartedData = (url, headers) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    //console.log("res ongoingData=========>", headers);
    const res = await GET_API(url, headers);
    // console.log("res notStartedData=========>", res.data.meta);
    try {
      dispatch({ type: actions.GET_NOT_STARTED, payload: res.data });
    } catch (e) {
      //console.log("error==========>", e);
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};
export const viewProfile = (url, headers) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    //console.log("res ongoingData=========>", headers);
    const res = await GET_API(url, headers);
    // console.log("res viewProfile=========>", res.data.meta);
    try {
      dispatch({ type: actions.GET_VIEW_PROFILE, payload: res.data });
    } catch (e) {
      //console.log("error==========>", e);
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};
