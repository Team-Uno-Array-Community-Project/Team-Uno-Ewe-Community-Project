import React, { useState } from "react";
import { Jumbotron, Form, Col, Row, Button, Modal } from "react-bootstrap";
// import Contact_Hero from "../../assets/Contact_Hero.jpg";

import MapContainer from "../googlemap/GoogleMap";

const ContactPage = () => {
  const [form, setForm] = useState({});
  const [show, setShow] = useState();
  // sets the functions so that the message and pop up doesnt show until the event is fired
  const handleClose = () => setShow(false);
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
        console.log("i am here");
        e.target.reset();
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
                <h3>email</h3>
              </Form.Label>
              <Form.Control
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
                rows={3}
                type="text"
                placeholder="Write message..."
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="secondary"
              className="button-contact-submit"
              onClick={() => handleShow()}
            >
              Submit
            </Button>

            <Modal
              className="modal-styling"
              show={show}
              onHide={() => handleClose()}
            >
              <Modal.Header closeButton>
                <Modal.Title className="modal-contact-title">
                  Thanks for reaching out.
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-contact-body">
                your message has been sent!
              </Modal.Body>
              <Modal.Footer>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="button-contact-close"
                  onClick={handleClose}
                >
                  close
                </Button>
              </Modal.Footer>
            </Modal>

            <></>
          </Form>
          <MapContainer />
        </Row>
      </Col>
    </div>
  );
};

export default ContactPage;
