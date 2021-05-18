import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <ReactBootStrap.Navbar
        expand="sm"
        bg="dark"
        variant="dark"
        fixed="top"
        className="mb-1"
      >
        <ReactBootStrap.Navbar.Brand href="/home">
          Navbar
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav className="mx-auto">
          <ReactBootStrap.Nav.Link href="/home" className="mr-3">
            Home
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/about-us" className="mr-3">
            About Us
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/pricing">
            Pricing
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        {/* <ReactBootStrap.Form inline>
          <ReactBootStrap.FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-10"
          />
          <ReactBootStrap.Button variant="outline-info">
            Search
          </ReactBootStrap.Button>
        </ReactBootStrap.Form> */}
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navbar;
