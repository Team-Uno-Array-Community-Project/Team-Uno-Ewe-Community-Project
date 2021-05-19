import React from "react";
import { Nav, Navbar, Row, Col, Container, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import facebookicon from "../assets/facebookicon.svg";
import instagramicon from "../assets/instagramicon.svg";
import twittericon from "../assets/twittericon.svg";
import pinteresticon from "../assets/pinteresticon.svg";

import BackToTop from "./backtotop/BackToTop";
import PopChat from "./chatbot/popchat";

const msgs = [`Hello and welcome to Ewe!`];

const getMessage = (msg) => {
  console.log(msg);
};

// import BackToTop from "../BackToTop/backtotop.js";

//sets up props for the page
const Footer = (props) => {
  const location = useLocation();

  //start of the section that renders on the bottom of each page
  return (
    <>
      <Navbar
        activeKey={location.pathname}
        className="NavBarBottom"
        bg="light"
        variant="light"
        sticky="bottom"
      >
        <Container className="footer-content-container">
          <Row>
            <BackToTop />
            {/* first column */}
            <Col className="footer-nav-margin">
              <Nav className="footer-nav-text">
                <Nav.Link href="/featured-products">Products</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
            </Col>
            {/* second column */}

            <Col className="footer-nav-margin">
              <Nav className="footer-nav-text">
                
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Col>
          </Row>
          <div className="social-icons-container">
              
                <img src={facebookicon} alt="facebook logo social icon" className="social-icons"/>
                <img src={instagramicon} alt="instagram logo social icon" className="social-icons"/>
              
                <img src={twittericon} alt="twitter logo social icon" className="social-icons"/>
                <img src={pinteresticon} alt="pinterest logo social icon" className="social-icons"/>
             
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label footer-form-label">
              Subscribe to our newsletter
            </Form.Label>
            <Form.Control
              className="form-control footer-form"
              type="email"
              placeholder="Enter your email..."
              autoComplete="off"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <PopChat messages={msgs} getMessage={getMessage} />
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
