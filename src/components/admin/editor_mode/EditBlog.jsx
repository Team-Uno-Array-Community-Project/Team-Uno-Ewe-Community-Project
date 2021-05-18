import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
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
        <Col>
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
        <Col>
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Label>Edit Post</Form.Label>
            <Form.Control type="text" placeholder="Enter Post Title..." />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default EditBlog;
