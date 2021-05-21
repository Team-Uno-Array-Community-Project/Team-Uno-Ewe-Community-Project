import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Row, Container } from "react-bootstrap";
import HomepageCards from "./HomepageCards";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    fetch("/api/item/")
      .then((res) => res.json())
      .then((data) => {
        setLatestProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container className="home-container">
      <Jumbotron className="homepage-jumbotron" />

      <HomepageCards latestProducts={latestProducts} />
      <Row>
        <Link className="view-all-button" to="/featured-products">
          <Button variant="secondary">View All</Button>
        </Link>
      </Row>
    </Container>
  );
};

export default Homepage;
