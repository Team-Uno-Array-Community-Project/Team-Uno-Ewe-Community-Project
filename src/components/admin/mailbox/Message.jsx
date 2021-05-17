import React from "react";
import { Container, Card } from "react-bootstrap";

import "./Message.css";

const Message = () => {
  return (
    <Container className="message-container">
      <Card className="message-card">
        <Card.Header>Sender/Email + Topic of Message Selected</Card.Header>
        <Card.Body>
          <small className="">timestamp</small>
          <p className="product-text">
            Blahblahblahblahblahblahblahblahblahblahblahb
            lahblahblahblahblahblahblahblahblahblahblahblahblahblah.Blahblahblahblahblahblahblahblahblahblahblahb
            lahblahblahblahblahblahblahblahblahblahblahblahblahblah.Blahblahblahblahblahblahblahblahblahblahblahb
            lahblahblahblahblahblahblahblahblahblahblahblahblahblah.
            <br />
            Blahblahblahblahblahblahblahblahblahblahblahb
            lahblahblahblahblahblahblahblahblahblahblahblahblahblah.Blahblahblahblahblahblahblahblahblahblahblahb
            lahblahblahblahblahblahblahblahblahblahblahblahblahblah.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Message;
