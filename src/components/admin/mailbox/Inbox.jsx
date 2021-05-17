import React from "react";
import { Container, Card } from "react-bootstrap";

import "./Inbox.css";

const Inbox = (props) => {
  return (
    <Container className="inbox-container">
      <h3 className="message-list-title">Inbox</h3>
      {props.InboxData.map((val, index) => (
        <Card className="inbox-cards">
          <Card.Body>
            <small className="">
              {val.timestamp}
            </small>
            <p className="vendor-text">{val.subject}</p>
            <p className="product-text">{val.from}</p>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Inbox;
