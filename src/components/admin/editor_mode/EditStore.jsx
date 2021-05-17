import React from "react";
import { Form, Col, Row, Container, Button, Badge } from "react-bootstrap";
import { ArrowBarUp, EyeFill } from "react-bootstrap-icons";

import "./EditStore.css";

const EditStore = () => {
  return (
    <Container className="admin-dash-container" fluid>
      <Container>
        <Container className="title-container">
          <Row>
            <Col>
              <h2 className="admin-dash-title mr-auto">Edit Store</h2>
            </Col>
            <h3 className="hello-text">Hello,</h3>
            <Col>
              <Badge pill variant="secondary" className="user-pill mr-auto">
                Steven
              </Badge>
            </Col>
          </Row>
        </Container>
        <Form className="admin-form">
          <Row className="ml-auto">
            <Col>
              <Container className="image-upload-container">
                <h1>
                  <ArrowBarUp />
                </h1>
              </Container>
              <Button className="preview-button" variant="light">
                <EyeFill /> Preview
              </Button>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Store Category</Form.Label>
                <Form.Control as="select">
                  <option value="" disabled selected>
                    Select a Category
                  </option>
                  <option>Yarn</option>
                  <option>Fibers</option>
                  <option>Tools</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Label>Vendor</Form.Label>
                <Form.Control type="text" placeholder="Enter Vendor Name..." />
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Label>Product</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name..." />
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Price..." />
              </Form.Group>
              <Button className="save-publish-button" variant="dark">
                Save + Publish
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};

export default EditStore;
