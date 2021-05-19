import React from "react";
import {
  Form,
  Col,
  Row,
  Badge,
  Card,
  CardGroup,
} from "react-bootstrap";
import {getImageFile} from "../../../assets/productImages";

const EditStoreCards = (props) => {
    const adminItems = props.ProductShown.filter(product => product.adminItems);
    return (


        <div>
          <div>
            <h2 className="homepage-card-title">Featured Products</h2>
            <Row>
              <Col>
                <h2 className="admin-dash-title mr-auto">Edit Store</h2>
              </Col>
              <h3 className="hello-text">Hello,</h3>
              <Col>
                <Badge pill variant="secondary" className="user-pill mr-auto">
                  Steven
                </Badge>
                
              </Col>
              {adminItems.map((val, index) => (
                <Col key={index} xs={6} md={4}>
                  <CardGroup className="vendorpage-card-group">
                    <Card className="vendor-product-cards">
                    <Card.Img variant="top" src={getImageFile(val.image)} />
                      <Card.Footer>
                        <p className="vendor-text">{val.vendor}</p>
                        <p className="product-text">{val.product}</p>
                        <small className="text-muted">{val.price}</small>
                        <Form.Check aria-label="option 1" />
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
    
    
    export default EditStoreCards;