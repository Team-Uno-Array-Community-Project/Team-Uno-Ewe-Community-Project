import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

const Message = (props) => {
  return (
    <div className="message-container">
      <h3 className="message-list-title">Message</h3>
      <Card className="message-selected-card">
        <Card.Header>
          {props.selectedMessage.topic}
          <br />
          <p className="message-sender-email">{props.selectedMessage.email}</p>
        </Card.Header>
        <Card.Body>
          <p className="message-text">{props.selectedMessage.message}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

const Mailbox = (props) => {
  const [messageSelected, setMessageSelected] = useState({});
  return (
    <>
      <div className="mailbox-container">
        <h3 className="mailbox-list-title">Inbox</h3>
        {props.FormData.map((val, index) => (
          <Card className="message-preview-card">
            <Card.Header>
              <p className="message-subject">{val.topic}</p>
              <p className="message-sender-email">{val.email}</p>
            </Card.Header>
            <Card.Body className="message-preview-body">
              <br />
              {val.message}
            </Card.Body>
            <Button
              variant="warning"
              className="mailbox-btn"
              onClick={() => setMessageSelected(val)}
            >
              View Message
            </Button>
          </Card>
        ))}
      </div>

      <Message selectedMessage={messageSelected} />
    </>
  );
};

export default Mailbox;
