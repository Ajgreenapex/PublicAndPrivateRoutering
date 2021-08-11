import { POST_API } from "../ApiService";
import * as actions from "../constant";

///redux action
export const login = (url, data) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });

    try {
      const res = await POST_API(url, data);
      localStorage.setItem("token", res.data.data.user.token);
      // console.log("token===============>", res);
      // console.log("token===============>", res.data.data.user.token);
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
      dispatch({ type: actions.GET_LOGOUT, payload: localStorage.clear() });
    } catch (e) {
      //console.log("error==========>", e);
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};
