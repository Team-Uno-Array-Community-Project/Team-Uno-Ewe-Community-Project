import React from "react";
import { Card, Container } from "react-bootstrap";

// import Inbox from "./Inbox";
// import Message from "./Message";

// import InboxData from "./InboxData";
// import MessageData from "./MessageData";

function Mailbox(props) {
  //insert Use effect with fetch (get rq) , assign a variable 
  // use below in lieu of InboxData. see Abby's Edit store
  // use val.email, val.topic, val.message 
  return (
    <Container className="mailbox-previews">
      {props.InboxData.map((val, index) => (
        <Card className="message-preview-card">
          <Card.Header>
            <p className="vendor-text">Topic</p>
            <p className="product-text">email from</p>
            <small className="">timestamp</small>
          </Card.Header>
          <Card.Body>
            This is a preview of the customer's message
            Blahblahblahblahblahblahblahblahblahblahblahb
            <br />
            lahblahblahblahblahblahblahblahblahblahblahblahblahblah.
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Mailbox;
