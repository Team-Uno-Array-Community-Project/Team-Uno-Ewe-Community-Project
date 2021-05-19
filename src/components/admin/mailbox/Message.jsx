import React from "react";
import { Container, Card } from "react-bootstrap";

const Message = () => {
  return (
    <Container className="message-container">
      <h3 className="message-list-title">Messages</h3>
      {/* {props.MessageData.map((val, index) => (
      <h3 className="message-list-title">The message selected</h3>
      {props.MessageData.map((val, index) => (
        <Card className="message-card">
          <Card.Body>
            <small className="">{val.timestamp}</small>
            <p className="vendor-text">{val.subject}</p>
            <p className="product-text">{val.from}</p>
            <p className="product-text">{val.message}</p>
          </Card.Body>
        </Card>
      ))} */}
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
