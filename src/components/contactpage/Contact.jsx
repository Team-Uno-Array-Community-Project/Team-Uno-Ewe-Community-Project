import React from "react";
import { Jumbotron, Form, Col, Row } from "react-bootstrap";

import ContactModal from "./ContactModal";

import MapContainer from "../googlemap/GoogleMap";

const ContactPage = () => {
  return (
    <div className="contact-container">
     
        <Jumbotron
          className="knitting-image"
          
        />
    

      <Col>
        <Row>
          <Form className="contact-form-container">
            {/* section for email input */}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h3>email</h3>
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              {/* Section for umbrella reason for contacting */}
              <Form.Label>
                <h3>Choose a topic</h3>
              </Form.Label>
              <Form.Control className="form-options" as="select">
                {/* dropdown options for "Whats up" */}
                <option>Product request</option>
                <option>Event idea</option>
                <option>Complaint or return</option>
                <option>Employment</option>
              </Form.Control>
            </Form.Group>
            {/* section for custom text to submit */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <h4>Write your message here</h4>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

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
