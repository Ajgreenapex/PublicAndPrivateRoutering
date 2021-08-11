import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state);
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute
            exact
            path="/"
            isAuthorized={state.isAuthorized}
            component={Login}
          />
          <PrivateRoute
            exact
            path="/dashboard"
            isAuthorized={state.isAuthorized}
            component={Dashboard}
          />
          {/* <Route exact path="/exmaple" component={exmaple} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
