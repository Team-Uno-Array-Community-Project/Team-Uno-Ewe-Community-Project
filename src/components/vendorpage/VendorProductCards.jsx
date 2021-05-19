import React from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import {getImageFile} from "../../assets/productImages";

const ProductCards = (props) => {
  const featuredProducts = props.ProductShown.filter(product => product.featured);
  return (
    <div>
      <div>
        <h2 className="homepage-card-title">Featured Products</h2>
        <Row>
          {featuredProducts.map((val, index) => (
            <Col key={index} xs={6} md={4}>
              <CardGroup className="vendorpage-card-group">
                <Card className="vendor-product-cards"
                >
                  <Card.Img variant="top" src={getImageFile(val.image)} />
                  <Card.Footer>
                    <p className="vendor-text">{val.vendor}</p>
                    <p className="product-text">{val.product}</p>
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
