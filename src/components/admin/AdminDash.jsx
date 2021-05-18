import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SideMenuPanel from "./SideMenuPanel";
// import Inbox from "./mailbox/Inbox";

// import InboxData from "./mailbox/InboxData";

import EditBlog from "./editor_mode/EditBlog";

import "./AdminDash.css";

const AdminDash = (props) => {
  return (
    <Container className="admindash-container">
      <Row>
        <Col>
          <SideMenuPanel />
        </Col>
        <Col>
        {/* <Inbox inboxData={InboxData} {...props} /> */}
        </Col>
        <Col>
        <EditBlog/>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDash;
