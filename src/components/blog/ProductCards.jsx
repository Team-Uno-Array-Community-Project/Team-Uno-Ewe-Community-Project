import React from "react";
import { CardGroup, Card, Container, Col } from "react-bootstrap";

const ProductCards = (props) => {
  return (
    <Container className="product-cards-container">
      <h2 className="product-cards-title">Featured Items</h2>
      <Col>
        {props.HomepageData.map((val, index) => (
          <div key={val.id}>
            <Col>
              <CardGroup>
                <Col>
                  <Card>
                    <Card.Img variant="top" src={val.photo} />
                    <Card.Footer>
                      <p className="vendor-text">{val.vendor}</p>
                      <p className="product-text">{val.product}</p>
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

export default ProductCards;
