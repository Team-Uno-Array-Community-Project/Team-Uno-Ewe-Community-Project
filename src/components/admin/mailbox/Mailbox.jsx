import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

// this is const becomes a "component" placed within the Mailbox const component below.
// It then displays the selected message from list of contact messages

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

// This mailbox is fed contact form data from a fetch in AdminDash component to be displayed in list form.
// The user can then click 'View More' to carry over data to the 'Message' const.
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
      {/* the Message container rendered here accepts form data from above to display it in larger format */}
      <Message selectedMessage={messageSelected} />
    </>
  );
};

export default Mailbox;
