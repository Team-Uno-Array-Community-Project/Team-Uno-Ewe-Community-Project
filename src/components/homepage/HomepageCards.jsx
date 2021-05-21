import React from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";

const HomepageCards = (props) => {
  return (
    <div>
      <h2 className="homepage-card-title">In-Store Sale</h2>
      <Row className="justify-content-md-center">
        {props.HomepageData.map((val, index) => (
          <Col key={val.id} md="auto">
            <CardGroup className="homepage-card-group">
              <Card>
                <Card.Img variant="top" src={val.photo} style={{ width: "20em" }} />
                <Card.Footer>
                  <p className="vendor-text">{val.vendor}</p>
                  <p className="product-text">{val.product}</p>
                  <small className="text-muted">{val.price}</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        ))}
      </Row>
     
    </div>
  );
};

export default HomepageCards;
