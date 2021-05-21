import React, { useState } from "react";
import {
  CardGroup,
  Card,
  Row,
  Col,
  Form,
  Container,
} from "react-bootstrap";
import { getImageFile } from "../../../assets/productImages";

// This handles the functionality of the click features to display selected products on the VendorPage
const EditStoreCards = (props) => {
  const handleChecked = (e) => {
    const { checked } = e.target;

    setFeaturedStatus(!checked);
  };
  const [featuredStatus, setFeaturedStatus] = useState(true);
// This is a patch request made through the Admin Dashboard to modify the featured data
  const updateFeaturedStatus = (featured, id) => {
    fetch("/api/item/patch", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        newFeaturedStatus: featured,
      }),
    })
      .then((res) => res.json())

      .catch((err) => {
        console.error(err);
      });
  };
// This card maps through and displays all 27 items in the database for the Admin to select or deselect for display on the Vendor Page
  return (
    <Container className="store-container">
      <h2 className="store-title">Show or Hide Products</h2>
      <Row className="justify-content-md-center">
        {props.Products.map((val, index) => (
          <Col key={index} md="auto">
            
              <CardGroup className="store-card">
                <Card>
                  <Card.Img
                    variant="top"
                    src={getImageFile(val.image)}
                    style={{ width: "16em" }}
                  />
                  <Card.Footer>
                    <p className="vendor-text">{val.vendor}</p>
                    <p className="product-text">{val.description}</p>
                    <small className="text-muted">{val.price}</small>
                    <Form.Check
                      defaultChecked={val.featured}
                      onMouseDown={handleChecked}
                      onMouseUp={() =>
                        updateFeaturedStatus(featuredStatus, val._id)
                      }
                      aria-label="option 1"
                    />
                  </Card.Footer>
                </Card>
              </CardGroup>
            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EditStoreCards;
