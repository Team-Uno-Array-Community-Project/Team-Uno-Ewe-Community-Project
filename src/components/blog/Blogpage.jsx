import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";
import ProductCards from "./ProductCards";
import Ad from "./Ad";
import HomepageData from "../homepage/HomepageData";


const Blogpage = () => {
  const [posts, setPosts] = useState([]);
useEffect(() => {
  fetch("/api/blog/")
  .then(res => res.json())
  .then(data => {
    setPosts(data);
  })
  .catch(err => {
    console.error(err);
  });
}, [])
  return (
    <section className="blog-container">
      <Row>
        <Col>
          <Ad />
        </Col>
        <Col>
        <BlogCards BlogCardData={posts} />
        </Col>
        <Col>
        <ProductCards HomepageData={HomepageData} />
        </Col>
      </Row>
    </section>
  );
};
export default Blogpage;
