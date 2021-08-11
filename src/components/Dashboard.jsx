import { Button } from "react-bootstrap";
import React from "react";
import { logout } from "../service/redux/Action";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>dashborad </h1>
      <h1>dashborad </h1> <h1>dashborad </h1> <h1>dashborad </h1>
      <Button variant="primary" onClick={logOutHandler}>
        logout
      </Button>
    </div>
  );
};
export default Dashboard;

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   logOutHandler = () => {
//     localStorage.clear();
//     console.log("props==== dashborad>", this.props);
//     this.props.history.push("/");
//   };

//   render() {
//     console.log("1props==== dashborad>", this.props);
//     return (
//       <div>
//         <h1>dashborad </h1>
//         <h1>dashborad </h1> <h1>dashborad </h1> <h1>dashborad </h1>
//         <Button variant="primary" onClick={this.logOutHandler}>
//           logout
//         </Button>
//       </div>
//     );
//   }
// }

// export default withRouter(Dashboard);
