import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";

// import Inbox from "./Inbox";
// import Message from "./Message";

// import InboxData from "./InboxData";
// import MessageData from "./MessageData";

function Mailbox(props) {
  //insert Use effect with fetch (get rq) , assign a variable
  // use below in lieu of InboxData. see Abby's Edit store
  // use val.email, val.topic, val.message
  const [form, setForm] = useState({});
    useEffect(() => {
      fetch("/api/contact")
      .then((response) => response.json())
      .then((data) => {
        setForm(form)
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    },
    )
    
  return (
    <Container className="mailbox-previews">
      {props.form.map((val, index) => (
        <Card className="message-preview-card">
          <Card.Header>
            <p className="vendor-text">{val.topic}</p>
            <p className="product-text">From: {val.email}</p>
            <small className="">timestamp</small>
          </Card.Header>
          <Card.Body>
           Message:
            <br />
            {val.message}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Mailbox;
