import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// useLocation is here to eventually display the current location of the user on the site. //

const Navigation = (props) => {
  const location = useLocation();
  return (
    <Navbar activeKey={location.pathname} bg="light" variant="light">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  );
};

export default Navigation;
