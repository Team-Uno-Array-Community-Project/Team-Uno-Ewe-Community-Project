import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SideMenuPanel from "./SideMenuPanel";

import InboxData from "./mailbox/InboxData";
import MessageData from "./mailbox/MessageData";

import EditBlog from "./editor_mode/EditBlog";

import "./AdminDash.css";
import Mailbox from "./mailbox/Mailbox";

// import "./AdminDash.css";
import Message from "./mailbox/Message";

const AdminDash = (props) => {
  return (
    <Container className="admindash-container">
      <Row>
        <Col sm={2} md={2} xl={2}>
          <SideMenuPanel />
        </Col>
        <Col sm={3} md={3} xl={3}>
          <Mailbox MessageData={MessageData} InboxData={InboxData} {...props} />
        </Col>
        <Col sm={7} md={7} xl="auto">
          <Message />
        </Col>
        <Col>
        <EditBlog/>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDash;
