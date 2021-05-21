import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav, Container, Image, Row, Col } from "react-bootstrap";

import logo from "../assets/Ewe_Logo_Mint.png";
import { render } from "@testing-library/react";
import LogoutForm from "./admin/Logout";

// useLocation is here to eventually display the current location of the user on the site. //

const Navigation = (props) => {
  const location = useLocation();
  let token = localStorage.getItem("token")

  const logoutButton = () => {
    if (token) {
      return <LogoutForm />
    }
  }

  return (
    <>
      <Container className="company-logo-signin-container">
        <Row xs={2} md={4} lg={6}>
          <Col className="logo-col">
          <Link to="/">
            <Image src={logo} className="logo" alt="circular logo of a sheep" />
          </Link>
          </Col>
          <Col>
          <h2 className="company-name">Ewe Count</h2>
          <p className="year-established">Est. 1990</p>
          </Col>
        </Row>
      </Container>
      <Navbar
        activeKey={location.pathname}
        className="top-navbar"
        bg="light"
        variant="light"
      >
        <Nav className="nav-links">
          
          <Nav.Link href="/featured-products">Featured Products</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        
          {logoutButton()}
          
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
