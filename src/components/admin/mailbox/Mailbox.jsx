import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

// const Message = (props) => {
//   return (
//     <Container className="message-container">
//       <h3 className="message-list-title">Messages</h3>
//       {props.FormData.map((val, index) => (
//         <Card className="message-selected-card">
//           <Card.Header>{val.topic}</Card.Header>
//           <Card.Body>
//             <p className="sender-email">{val.email}</p>
//             <p className="message-text">{val.message}</p>
//           </Card.Body>
//         </Card>
//       ))}
//     </Container>
//   );
// };

const Mailbox = (props) => {
  const [messageSelected, setMessageSelected] = useState(0);
  return (
    <Container className="mailbox-previews">
      {props.FormData.map((val, index) => (
        <Card className="message-preview-card">
          <Card.Header>
            <p className="vendor-text">{val.topic}</p>
            <p className="product-text">From: {val.email}</p>
          </Card.Header>
          <Card.Body>
            Message:
            <br />
            {val.message}
          </Card.Body>
          <Button variant="warning" onClick={() => setMessageSelected(index)}>
            View More
          </Button>
        </Card>
      ))}
      {/* <Message
        className="message-displayed"
        FormData={props.FormData[messageSelected]}
      /> */}
    </Container>
  );
};

export default Mailbox;
