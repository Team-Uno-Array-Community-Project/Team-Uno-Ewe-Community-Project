import React, { useState } from "react";
import { CardGroup, Card, Row, Col, Form, Button } from "react-bootstrap";
import { getImageFile } from "../../../assets/productImages";

const EditStoreCards = (props) => {
  // const [numberFeatured, setNumberFeatured] = useState(0);
  const handleChecked=(e) => {
   
    const {checked}=e.target;
  
    // !checked ? setNumberFeatured(numberFeatured+1) : setNumberFeatured(numberFeatured-1)
    setFeaturedStatus(!checked)
  }
  const [featuredStatus, setFeaturedStatus] = useState(true);

  const updateFeaturedStatus = (featured, id) => {
   
    fetch("/api/item/patch", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: id,
        newFeaturedStatus: featured
      }),
    })
      .then((res) => res.json())
      
        
      .catch((err) => {
        console.error(err);
      });
    // console.log(`${vendor} is the vendor,status is ${featuredStatus}`);
  };

// useEffect(() => {
//   const featuredProducts = props.Products.filter(
//     (product) => product.featured
//   );
//   setNumberFeatured(featuredProducts.length)
// }, [props.Products])

 
  return (
    <div>
      <div>
        <h2 className="homepage-card-title">Featured Products</h2>
        <Row>
          {props.Products.map((val, index) => (
            <Col key={index} xs={6} md={4}>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={getImageFile(val.image)} />
                  <Card.Footer>
                    <p className="vendor-text">{val.vendor}</p>
                    <p className="product-text">{val.product}</p>
                    <small className="text-muted">{val.price}</small>
                    <Form.Check
                    // disabled={!val.featured && numberFeatured >= 9}
                    defaultChecked={val.featured}
                    onMouseDown={handleChecked}
                    onMouseUp={() => updateFeaturedStatus(featuredStatus, val._id)}
                     
                      aria-label="option 1"
                    />
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Col>
          ))}
        </Row>
        <Button
          onClick={() => {}}
          variant="secondary"
          size="lg"
          active
        >
          Save and Update
        </Button>
      </div>
    </div>
  );
};

export default EditStoreCards;
