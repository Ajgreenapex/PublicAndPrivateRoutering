import { Button, Tabs, Tab } from "react-bootstrap";
import React from "react";
import {
  completedData,
  logout,
  notStartedData,
  ongoingData,
} from "../service/redux/Action";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Cards from "./Cards";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Table from "./Table";

const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isAuthorized = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer${" "}${isAuthorized}`,
  };
  const logOutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const url = `https://api-viralsaints.priceyouridea.com/api/v1/campaigns?page=1&per_page=10&filter[status][]=ongoing`;
    dispatch(ongoingData(url, headers));
  }, []);
  const handleSelect = (e) => {
    if (e === "completedData") {
      const url = `https://api-viralsaints.priceyouridea.com/api/v1/campaigns?page=1&per_page=10&filter[status][]=completed`;

      dispatch(completedData(url, headers));
    } else {
      const url = `https://api-viralsaints.priceyouridea.com/api/v1/campaigns?page=1&per_page=10&filter[status][]=not_started`;

      dispatch(notStartedData(url, headers));
    }
  };
  return (
    <div>
      <Header />
      <Cards />
      <Tabs
        defaultActiveKey="ongoingData"
        id="uncontrolled-tab-example"
        onSelect={handleSelect}
        className="mb-3"
      >
        <Tab eventKey="ongoingData" title="ongoing">
          <Table data={state.ongoingData} />
        </Tab>
        <Tab eventKey="completedData" title="completed">
          <Table data={state.completedData} />
        </Tab>
        <Tab eventKey="notStartedData" title="NotStarted">
          <Table data={state.notStartedData} />
        </Tab>
      </Tabs>
      <Button variant="primary" onClick={logOutHandler}>
        logout
      </Button>
    </div>
  );
};
export default withRouter(Dashboard);
