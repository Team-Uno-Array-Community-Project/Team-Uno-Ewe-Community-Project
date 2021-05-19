import React from "react";
// import { Form, Col, Row, Badge, Button, ButtonGroup, Card, CardGroup } from "react-bootstrap";
// import {getImageFile} from "../../../assets/productImages";
import {Dropdown, Container, Row, Col } from "react-bootstrap";

import "./EditStore.css";

const EditStore = () => {
  // const featuredProducts = props.ProductShown.filter(product => product.featured);
  // const [disabled, setDisabled] = useState(false);
  // const onChecked = (e) => { 
    
  // }
  return (
    <Container>
      <Row>
       
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Yarn
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Coastal</Dropdown.Item>
    <Dropdown.Item href="#/action-2">BioBalance</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Fibers
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">BambooFiber</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Tools
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</Row>
  </Container>
  )}


export default EditStore;
