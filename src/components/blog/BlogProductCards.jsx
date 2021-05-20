import React from "react";
import { CardGroup, Card, Container, Col } from "react-bootstrap";

const BlogProductCards = (props) => {
  return (
    <Container className="blog-product-cards-container">
      <h2 className="blog-product-cards-title">Featured Items</h2>
      <Col>
        {props.HomepageData.map((val, index) => (
          <div key={val.id}>
            <Col>
              <CardGroup className="blog-product-cards">
                <Col>
                  <Card>
                    <Card.Img variant="top" src={val.photo} />
                    <Card.Footer>
                      <p className="blog-vendor-text">{val.vendor}</p>
                      <p className="blog-product-text">{val.product}</p>
                      <small className="text-muted">{val.price}</small>
                    </Card.Footer>
                  </Card>
                </Col>
              </CardGroup>
            </Col>
          </div>
        ))}
      </Col>
    </Container>
  );
};

export default BlogProductCards;
