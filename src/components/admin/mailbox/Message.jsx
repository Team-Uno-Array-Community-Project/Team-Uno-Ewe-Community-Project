import React from "react";
import { Container, Card } from "react-bootstrap";

import "./Message.css";

const Message = () => {
  return (
    <Container className="message-container">
<<<<<<< HEAD
<<<<<<< HEAD
      <h3 className="message-list-title">Messages</h3>
      {/* {props.MessageData.map((val, index) => (
=======
      <h3 className="message-list-title">The message selected</h3>
      {props.MessageData.map((val, index) => (
>>>>>>> e0dbc0dc26c040f216bfdc85a1ca43f4f68529e9
        <Card className="message-card">
          <Card.Body>
            <small className="">{val.timestamp}</small>
            <p className="vendor-text">{val.subject}</p>
            <p className="product-text">{val.from}</p>
            <p className="product-text">{val.message}</p>
          </Card.Body>
        </Card>
      ))} */}
=======
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
>>>>>>> b75f4e89f6f4ddb36c6a7d9af1522d0c02f3dd28
    </Container>
  );
};

export default Message;
