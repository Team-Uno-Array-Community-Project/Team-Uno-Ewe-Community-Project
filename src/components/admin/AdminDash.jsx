import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SideMenuPanel from "./SideMenuPanel";

// import Inbox from "./mailbox/Inbox";
// import EditStore from "./editor_mode/EditStore";
// import InboxData from "./mailbox/InboxData";

// import EditBlog from "./editor_mode/EditBlog";

import LoginForm from "./Login";
import LogoutForm from "./Logout";

import Mailbox from "./mailbox/Mailbox";

// import "./AdminDash.css";

const AdminDash = () => {
  let token = localStorage.getItem("token");

  const [form, setForm] = useState([]);
  useEffect(() => {
    fetch("/api/contact")
      .then((response) => response.json())
      .then((data) => {
        setForm(data);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!token) {
    return <LoginForm />;
  } else {
    return (
      <Container className="admindash-container">
        {/* <Row><LogoutForm /></Row> */}
        <Row>
          <Col md="auto">
            <SideMenuPanel />
          </Col>
          
            <Mailbox FormData={form} />
          
        </Row>
      </Container>
    );
  }
};

export default AdminDash;
