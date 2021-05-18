import React from "react";
import { Form, Col, Row, Container, Button, Badge } from "react-bootstrap";
import { ArrowBarUp, EyeFill } from "react-bootstrap-icons";


import "./EditStore.css";

const EditStore = () => {
  // const [disabled, setDisabled] = useState(false);
  // const onChecked = (e) => { 
    
  // }
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
                Steven  ...Hold the shift key to select multiple items
              </Badge>
              <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Tools</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Fibers</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Yarn</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </Form.Control>
  </Form.Group>
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
   
         
              {/* <Form.Group className="" controlId="exampleForm.ControlInput1">
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
              </Form.Group> */}
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
