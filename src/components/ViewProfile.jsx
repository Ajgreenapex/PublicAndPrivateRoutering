import React from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { viewProfile } from "../service/redux/Action";
function ViewProfile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isAuthorized = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer${" "}${isAuthorized}`,
  };

  useEffect(() => {
    const url = `https://api-viralsaints.priceyouridea.com/api/v1/brands/159`;
    dispatch(viewProfile(url, headers));
  }, [dispatch]);

  return (
    <>
      <Header />
      <h1>View Profile </h1>
      <br />
      <h4>
        {state.viewProfile.brand.first_name +
          " " +
          state.viewProfile.brand.last_name}
      </h4>
      <h4>{state.viewProfile.brand.email}</h4>
      <h4>{state.viewProfile.brand.city}</h4>
      <h4>{state.viewProfile.brand.phone}</h4>
    </>
  );
}
export default withRouter(ViewProfile);
