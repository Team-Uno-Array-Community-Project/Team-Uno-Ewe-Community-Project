import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SideMenuPanel from "./SideMenuPanel";

// import Inbox from "./mailbox/Inbox";
import EditStore from "./editor_mode/EditStore";
// import InboxData from "./mailbox/InboxData";

import InboxData from "./mailbox/InboxData";
import MessageData from "./mailbox/MessageData";

// import EditBlog from "./editor_mode/EditBlog";

import LoginForm from "./Login";

import Mailbox from "./mailbox/Mailbox";

// import "./AdminDash.css";
import Message from "./mailbox/Message";

const AdminDash = (props) => {
  // let token = localStorage.getItem("token");

  // if (!token) {
  //   return <LoginForm />;
  // } else {
    return (
      <Container className="admindash-container">
        <Row>
          <Col sm={2} md={2} xl={2}>
            <SideMenuPanel />
          </Col>
          <Col sm={3} md={3} xl={3}>
            <Mailbox
              MessageData={MessageData}
              InboxData={InboxData}
              {...props}
            />
          </Col>
          <Col sm={7} md={7} xl="auto">
            <Message />
          </Col>
          <EditStore />
        </Row>
      </Container>
    );
  }
;

export default AdminDash;
