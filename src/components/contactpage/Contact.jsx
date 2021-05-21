import React, { useState } from "react";
import { Jumbotron, Form, Col, Row } from "react-bootstrap";

import MapContainer from "../googlemap/GoogleMap";

// Function that render the Contact Page and Contact Form
// viewable on public site //
const ContactPage = () => {
  const [form, setForm] = useState({});

  // Function that posts the Contact Form information
  // to the database as an object via a fetch request //
  const handleSubmit = (e) => {
    fetch("http://localhost:3003/api/contact/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="contact-container">
      <Jumbotron className="knitting-image" />
      <Col>
        <Row>
          <Form className="contact-form-container" onSubmit={handleSubmit}>
            {/* section for email input */}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h3>Email</h3>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email..."
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              {/* Section for umbrella reason for contacting */}
              <Form.Label>
                <h3>Message Subject</h3>
              </Form.Label>
              <Form.Control
                className="form-options"
                type="text"
                placeholder="Enter your message subject..."
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
              />
            </Form.Group>
            {/* section for custom text to submit */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <h4>Message</h4>
              </Form.Label>
              <Form.Control
                rows={3}
                type="text"
                placeholder="Write your message here..."
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </Form.Group>
            <></>
          </Form>
          <MapContainer />
        </Row>
      </Col>
    </div>
  );
};

export default ContactPage;
