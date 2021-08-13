import { Navbar, Container } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import { logout } from "../service/redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

function Header(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSelect = (e) => {
    setValue(e);
    if (e === "Logout") {
      dispatch(logout());
    } else {
      props.history.push("/ViewProfile");
    }
  };

  return (
    <div className="row">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">VIRAL SAINT</Navbar.Brand>
          <DropdownButton
            alignleft="true"
            title={
              <div className="pull-left">
                <img
                  className="thumbnail-image"
                  src={
                    "https://viralsaints.priceyouridea.com/assets/images/user.jpg"
                  }
                  alt="user pic"
                  width="30"
                  height="50"
                />
              </div>
            }
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
          >
            <Dropdown.Item>hi Adarsh </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="View profile">View profile</Dropdown.Item>
            <Dropdown.Item eventKey="Logout">Logout</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </div>
  );
}
export default withRouter(Header);
