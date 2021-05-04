import React from "react";
import "./HomepageCards.css";
import { CardGroup, Card, Button } from "react-bootstrap";

const HomepageCards = (props) => {

  return (
    <div>
      <h2 className="homepage-card-title">Hand-Picked Products</h2>
      <CardGroup className="homepage-card-group">
        <Card>
          <Card.Img variant="top" src={props.HomepageData.photo}/>
          <Card.Body>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Laine
              Grey Yarn
              $25 USD</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Brooklyn Tweed Dapple $12.75 USD</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Madder Making No. II Dawn $26 USD</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Button variant="secondary" className="view-all-button">View All</Button>
    </div>
  );
};

export default HomepageCards;
