import React from "react";
import { Jumbotron, Button, Row, Container } from "react-bootstrap";
import HomepageCards from "./HomepageCards";
import HomepageData from "../homepage/HomepageData";


const Homepage = () => {
  return (
    <Container className="home-container">
      <Jumbotron className="homepage-jumbotron" />
     
      <HomepageCards HomepageData={HomepageData}/>
      <Row>
      <Button variant="secondary" className="view-all-button">
        View All
      </Button>
      </Row>
    </Container> 
  );
};

export default Homepage;
