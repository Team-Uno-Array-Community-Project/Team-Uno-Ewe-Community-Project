import React from "react";
import { Jumbotron, Button, Row, Container } from "react-bootstrap";
import HomepageCards from "./HomepageCards";
import HomepageData from "../homepage/HomepageData";
import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <Container className="home-container">
      <Jumbotron className="homepage-jumbotron" />
     
      <HomepageCards HomepageData={HomepageData}/>
      <Row>
        <Link className="view-all-button" to="/featured-products">
      <Button variant="secondary">
        View All
      </Button>
      </Link>
      </Row>
    </Container> 
  );
};

export default Homepage;
