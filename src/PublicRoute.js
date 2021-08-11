import React from "react";
import { Redirect, Route } from "react-router-dom";

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const isAuthorized = localStorage.getItem("token");
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         isAuthorized ? (
//           <Redirect
//             to={{ pathname: "/dashboard", state: { from: props.location } }}
//           />
//         ) : (
//           <Component />
//         );
//       }}
//     />
//   );
// }

//const isAuthorized = localStorage.getItem("token");
//console.log(isAuthorized);
const PublicRoute = ({ component: Component, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthorized ? (
        // <Redirect to="/dashboard" />
        <Redirect
          to={{ pathname: "/dashboard", state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
