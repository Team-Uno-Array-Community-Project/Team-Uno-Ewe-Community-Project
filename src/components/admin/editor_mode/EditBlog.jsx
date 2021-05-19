import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import Yamde from "yamde";
import SideMenuPanel from "../SideMenuPanel";

const EditBlog = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Row>
        <Col>
          <SideMenuPanel />
        </Col>
        <Container className="edit-blog-container">
        <Col>
        <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Label>Create Post</Form.Label>
            <Form.Control type="text" placeholder="Enter Post Title..." />
          </Form.Group>
          <Yamde
            className="text-editor"
            value={text}
            handler={setText}
            theme="light"
          />
          <Button className="save-publish-button" variant="dark">
            Save + Publish
          </Button>
        </Col>
        </Container>
      </Row>
    </>
  );
};

export default EditBlog;
