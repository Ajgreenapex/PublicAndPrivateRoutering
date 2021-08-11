import React from "react";
import { Redirect, Route } from "react-router-dom";

// function PrivateRoute({ component: Component, ...rest }) {
//   const isAuthorized = localStorage.getItem("token");
//   console.log("isAuthorized========>", isAuthorized, rest);
//   <Route
//     {...rest}
//     render={(props) => {
//       isAuthorized ? (
//         <Component {...props} />
//       ) : (
//         // <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         <Redirect to="/" />
//       );
//     }}
//   />;
// }
// export default PrivateRoute;

//const isAuthorized = localStorage.getItem("token");
const PrivateRoute = ({ component: Component, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthorized ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
