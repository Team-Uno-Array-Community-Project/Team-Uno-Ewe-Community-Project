import React from "react";
import { Link } from "react-router-dom";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import { getImageFile } from "../../assets/productImages";

const HomepageCards = (props) => {
  const products = props.latestProducts.filter((product) => product.featured);
  const latestProducts = products.splice(0, 3);
  //  This card maps through the images from getImageFile and product data from the database
  return (
    <div>
      <h2 className="homepage-card-title">Latest New Products</h2>
      <Row className="justify-content-md-center">
        {latestProducts.map((val, index) => (
          <Col key={index} md="auto">
            <CardGroup className="homepage-card-group">
              <Card>
                <Link to="featured-products">
                  <Card.Img
                    variant="top"
                    src={getImageFile(val.image)}
                    style={{ width: "20em" }}
                  />
                </Link>
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
  );
};

export default HomepageCards;
