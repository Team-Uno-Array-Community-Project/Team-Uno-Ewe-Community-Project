import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

import SideMenuPanel from "../SideMenuPanel";

const EditBlog = () => {


  const [blogPost, setBlogPost] = useState({title: "", text: "", image: "", author: "", date: ""});

  const handleSubmit = () => {

    fetch("http://localhost:3003/api/blog/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogPost),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonTok) => {
        console.log("Success:", jsonTok);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Row>
        <Col>
          <SideMenuPanel />
        </Col>
        <Container onSubmit={handleSubmit} className="edit-blog-container">
          <Col>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label>Blog Post Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setBlogPost({ ...blogPost, title: e.target.value })
                }
                placeholder="Enter Blog Post Title..."
              />
            </Form.Group>
            <Form.Group className="" controlId="exampleForm.ControlInput5">
            <Form.Label>Blog Text</Form.Label>
              <Form.Control 
                type="text"
                onChange={(e) =>
                  setBlogPost({ ...blogPost, text: e.target.value })
                } className="blog-text-input-window" controlId="exampleForm.ControlInput5"
                placeholder="Enter blog post..."
              />
              </Form.Group>
            
            <Form.Group className="" controlId="exampleForm.ControlInput2">
            <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setBlogPost({ ...blogPost, image: e.target.value })
                }
                placeholder="Enter image URL..."
              />
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlInput3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setBlogPost({ ...blogPost, author: e.target.value })
                }
                placeholder="Enter author name..."
              />
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlInput4">
              <Form.Label>Posted Date</Form.Label>
              <Form.Control className="blog-date-input-window"
                type="text"
                onChange={(e) =>
                  setBlogPost({ ...blogPost, date: e.target.value })
                }
                placeholder="Enter posted date..."
              />
              </Form.Group>
            <Button type="submit" onClick={() => {
                  handleSubmit();
                }} className="save-publish-button" variant="dark">
              Save + Publish
            </Button>
            
          </Col>
        </Container>
      </Row>
    </>
  );
};

export default EditBlog;
