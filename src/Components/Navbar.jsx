import React from "react";
import * as ReactBootStrap from "react-bootstrap";
const Navbar = () => {
  return (
    <>
      <ReactBootStrap.Navbar bg="dark" variant="dark" className="mb-5">
        <ReactBootStrap.Nav className="mx-auto">
          <ReactBootStrap.Nav.Link href="/" className="mr-3">
            Home
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/about-academy">
            About academy
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/about-me" className="mr-3">
            About me
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navbar;
