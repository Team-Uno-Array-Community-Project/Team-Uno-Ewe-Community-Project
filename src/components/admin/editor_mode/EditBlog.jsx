import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import Yamde from "yamde";

const EditBlog = () => {
  const [text, setText] = useState("");
  return (
    <>
    <Container className="admin-dash-container" fluid>
      <Col>
        <Yamde className="text-editor" value={text} handler={setText} theme="light" />
        </Col>
    </Container>
    </>
  );
};

export default EditBlog;
