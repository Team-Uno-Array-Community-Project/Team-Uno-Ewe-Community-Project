import React from "react";
import { Link } from "react-router-dom";
import { CardGroup, Card, Col } from "react-bootstrap";
import { getImageFile } from "../../assets/productImages";

const BlogPageCards = (props) => {
  const products = props.latestProducts.filter((product) => product.featured);
  const latestProducts = products.splice(0, 3);

  return (
    <div>
      <h2 className="blog-cards-title">Latest Products</h2>
        {latestProducts.map((val, index) => (
          <Col key={index}>
            <CardGroup className="blog-product-card-group">
              <Card className="blog-product-card">
                <Link to="featured-products">
                  <Card.Img variant="top" src={getImageFile(val.image)} />
                </Link>
                <Card.Footer>
                  <p className="vendor-text">{val.vendor}</p>
                  <p className="product-text">{val.description}</p>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        ))}
    </div>
  );
};

export default BlogPageCards;
