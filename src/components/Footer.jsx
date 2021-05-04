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
      className="NavBarBottom"
      bg="light"
      variant="light"
      sticky="bottom"
    >
      <Container className="footer-content-container">
        <Row>
          {/* first colom */}
          <Col className="footer-nav-margin">
            <div className="footer-nav-text">
              <h5>batchat incorporated</h5>
              <p>phone: shine a bat in the sky</p>
              <p>probably wayne tower</p>
              <p>gotham city</p>
            </div>
          </Col>
          {/* second colom */}

          <Col>
            <Nav
              activeKey={location.pathname}
              className="flex-column footer-nav footer-nav-text footer-nav-margin batman-font"
            >
              {/* links that navigate to the respective pages in sync with the header Navbar  */}
              <Nav.Link className="NavbarHover" href="/">
                home
              </Nav.Link>
              <Nav.Link className="NavbarHover" href="/museum/1">
                museum
              </Nav.Link>

              <Nav.Link className="NavbarHover" href="/batchat">
                batchat
              </Nav.Link>
              <Nav.Link className="NavbarHover" href="/aboutus/1">
                about
              </Nav.Link>
              <Nav.Link className="NavbarHover" href="/contactus">
                contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        {/* <BackToTop /> */}
      </Container>
    </Navbar>
  );
};
export default Footer;
