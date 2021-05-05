import React from "react";
import { Nav, Navbar, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// import BackToTop from "../BackToTop/backtotop.js";

//sets up props for the page
const Footer = (props) => {
  const location = useLocation();
  //start of the section that renders on the bottom of each page
  return (
    <Navbar
      activeKey={location.pathname}
      className="NavBarBottom"
      bg="light"
      variant="light"
      sticky="bottom"
    >
      <Container className="footer-content-container">
        <Row>
          {/* first column */}
          <Col className="footer-nav-margin">
            <Nav className="footer-nav-text">
            <Nav.Link href="/fabric">Fabric</Nav.Link>
            <Nav.Link href="/yarn">Yarn</Nav.Link>
            <Nav.Link href="/patterns">Patterns</Nav.Link>
            <Nav.Link href="/tools">Tools</Nav.Link>
            </Nav>
          </Col>
          {/* second column */}

          <Col className="footer-nav-margin">
          <Nav className="footer-nav-text">
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
         </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default Footer;
