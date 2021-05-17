import React from "react";
import { Container, Card } from "react-bootstrap";

import "./Message.css";

const Message = (props) => {
  return (
    <Container className="message-container">
      <h3 className="message-list-title">Messages</h3>
      {/* {props.MessageData.map((val, index) => (
        <Card className="message-card">
          <Card.Body>
            <small className="">{val.timestamp}</small>
            <p className="vendor-text">{val.subject}</p>
            <p className="product-text">{val.from}</p>
            <p className="product-text">{val.message}</p>
          </Card.Body>
        </Card>
      ))} */}
    </Container>
  );
};

export default Message;

// <Container className="Message-container" flex>
// <dl className="message-info">
//   <dt>Subject</dt>
//   {/* <dd>{this.props.subject}</dd> */}

//   <dt>From</dt>
//   {/* <dd>{this.props.from}</dd> */}

//   <dt>To</dt>
//   {/* <dd>{this.props.to}</dd> */}
//   <div
//     className="message-body"
//     // dangerouslySetInnerHTML={{ __html: this.props.body }}
//   >
//     Message Body Here...
//   </div>
// </dl>
// </Container>
