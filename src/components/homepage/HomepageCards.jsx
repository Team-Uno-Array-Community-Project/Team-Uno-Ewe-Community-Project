import React from "react";
import { CardGroup, Card, Button, Row, Col } from "react-bootstrap";

const HomepageCards = (props) => {
  return (
    <div>
      <h2 className="homepage-card-title">Hand-Picked Products</h2>
      <Row>
        {props.HomepageData.map((val, index) => (
          <Col key={val.id}>
            <CardGroup className="homepage-card-group">
              <Card>
                <Card.Img variant="top" src={val.photo} />
                <Card.Body>
                  <Card.Text></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Data must be plugged in then use val.blah like code above</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        ))}
      </Row>
      <Button variant="secondary" className="view-all-button">
        View All
      </Button>
    </div>
  );
};

export default HomepageCards;
