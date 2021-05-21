import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SideMenuPanel from "./SideMenuPanel";
import LoginForm from "./Login";
import Mailbox from "./mailbox/Mailbox";

const AdminDash = () => {
  let token = localStorage.getItem("token");

  // fetching form data from Contact page to feed to admin Mailbox component
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

  // if user visits the /admindash route without without set token,
  // they are then redirected to a login form.

  if (!token) {
    return <LoginForm />;
  } else {
    return (
      <Container className="admindash-container">
        <Row>
          {/*this SideMenuPanel component is consistent throughout all admin pages and hosts all admin buttons*/}
          <Col md="auto">
            <SideMenuPanel />
          </Col>
          {/*the Mailbox receives contact form data from mongoDB via fetch and displays it in a mapped card list*/}
          <Mailbox FormData={form} />
        </Row>
      </Container>
    );
  }
};

export default AdminDash;
