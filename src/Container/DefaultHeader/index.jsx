import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assects/Images/bolt.png";
import "./index.scss";

const DeafaultHeader = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand className={"logo"}>
          <img src={logo} alt={"img"} width={"100%"} height={"auto"} />
        </Navbar.Brand>
        <Nav className="ml-5">
          <div className={"d-flex"}>
            <Link className={"nav-link"} to={"/"}>
              Shop
            </Link>
            <Link className={"nav-link"} to={"/"}>
              About Us
            </Link>
            <Link className={"nav-link"} to={"/"}>
              Our Store
            </Link>
            <Link className={"nav-link"} to={"/"}>
              Contact us
            </Link>
            <Link className={"nav-link"} to={"/"}>
              Login
            </Link>
            <Link className={"nav-link"} to={"/"}>
              Signup
            </Link>
          </div>
        </Nav>
      </Navbar>
    </>
  );
};

export default DeafaultHeader;
