import React from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import { getImageFile } from "../../assets/productImages";

// This filters through the featuredProducts that are selected from the Admin Dashboard
const ProductCards = (props) => {
  const featuredProducts = props.ProductShown.filter(
    (product) => product.featured
  );
  // These cards display data entered in database from a fetch request in the VendorPage
  return (
    <div>
      <div>
        <h2 className="store-title">Featured Products</h2>
        <Row className="justify-content-md-center">
          {featuredProducts.map((val, index) => (
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
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductCards;
