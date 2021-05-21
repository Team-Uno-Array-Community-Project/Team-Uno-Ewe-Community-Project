import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav, Container, Image, Row, Col, Button } from "react-bootstrap";

import logo from "../assets/Ewe_Logo_Mint.png";
import LogoutForm from "./admin/Logout";

// useLocation is here to display the current location of the user on the site. //

const Navigation = (props) => {
  const location = useLocation();
  let token = localStorage.getItem("token")

  // If token is found in localStorage, user is then presented a logout button within top navbar //
  const logoutButton = () => {
    if (token) {
      return <LogoutForm />
    }
  }
  //takes the admin back to admin dashboard if they are in a public page, also only displays if a token is in local storage
  const adminDashRoute = () => {
    if (token) {
      return <Button variant="info" className="admin-home-button" href="/admindash">Admin Dashboard</Button>
    }
  }

  return (
    <>
    {/*This container renders logo and descriptors on top left corner of page*/} 
      <Container className="company-logo-container">
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
      {/*This is the top navbar found consistently throughout the site*/} 
      <Navbar
        activeKey={location.pathname}
        className="top-navbar"
        bg="light"
        variant="light"
      >
        <Nav className="nav-links">
          
          {adminDashRoute()}

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
