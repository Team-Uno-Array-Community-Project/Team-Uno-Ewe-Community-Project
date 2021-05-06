import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav, Container, Image, Row, Col } from "react-bootstrap";

import logo from "../assets/Ewe_Logo_Mint.png";

// useLocation is here to eventually display the current location of the user on the site. //

const Navigation = (props) => {
  const location = useLocation();
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
          <Nav.Link href="/fabric">Fabric</Nav.Link>
          <Nav.Link href="/yarn">Yarn</Nav.Link>
          <Nav.Link href="/patterns">Patterns</Nav.Link>
          <Nav.Link href="/tools">Tools</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
