import React, { useState } from "react";
import { Jumbotron, Form, Col, Row, Button } from "react-bootstrap";
// import Contact_Hero from "../../assets/Contact_Hero.jpg";

import ContactModal from "./ContactModal";

import MapContainer from "../googlemap/GoogleMap";

const ContactPage = () => {
  const [form, setForm] = useState({ email: "", topic: "", message: "" });
  const [show, setShow] = useState();
  const handleShow = () => setShow(true);

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
        setForm({});
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const handleSubmit = (e) => {
  //   fetch("http://localhost:3003/api/contact/post", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     })
  //     .finally(() => {
  //       // Use this to wipe the form, regardless of success or failure.
  //       setForm({});
  //     });
  // };

  return (
    <div className="contact-container">
      <Jumbotron className="knitting-image" />

      <Col>
        <Row>
          <Form className="contact-form-container">
            {/* section for email input */}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h3>email</h3>
              </Form.Label>
              <Form.Control
                value={form.email}
                type="text"
                placeholder="name@example.com"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              {/* Section for umbrella reason for contacting */}
              <Form.Label>
                <h3>Describe your topic</h3>
              </Form.Label>
              <Form.Control
                value={form.topic}
                className="form-options"
                type="text"
                placeholder="Enter topic"
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
              />
            </Form.Group>
            {/* section for custom text to submit */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <h4>Write your message here</h4>
              </Form.Label>
              <Form.Control
                value={form.message}
                rows={3}
                type="text"
                placeholder="Write message..."
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </Form.Group>
            <Button
              onClick={() => {
                handleSubmit();
                handleShow();
              }}
              show={show}
            >
              Submit Button
            </Button>
            <>
              <ContactModal />
            </>
          </Form>
          <MapContainer />
        </Row>
      </Col>
    </div>
  );
};

export default ContactPage;
