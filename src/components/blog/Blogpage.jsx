import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";
import ProductCards from "./ProductCards";
import Ad from "./Ad";
import HomepageData from "../homepage/HomepageData";
import BlogCardData from "../blog/BlogCardData";

const Blogpage = () => {
  return (
    <section className="blog-container">
      <Row>
        <Col>
          <Ad />
        </Col>
        <Col>
        <BlogCards BlogCardData={BlogCardData} />
        </Col>
        <Col>
        <ProductCards HomepageData={HomepageData} />
        </Col>
      </Row>
    </section>
  );
};
export default Blogpage;
