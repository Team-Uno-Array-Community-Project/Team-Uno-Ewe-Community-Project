import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";
import BlogProductCards from "./BlogProductCards";
// import HomepageCards from "./HomepageCards";

import Ad from "./Ad";

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    fetch("/api/blog/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.error(err);
      });

    fetch("/api/item/")
      .then((res) => res.json())
      .then((data) => {
        setLatestProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="blog-container">
      <Row className="justify-content-md-center">
        <Col xl={3}>
          <Ad />
        </Col>
        <Col xl={6}>
          <BlogCards BlogCardData={posts} />
        </Col>
        <Col xl={3}>
          <BlogProductCards latestProducts={latestProducts} />
        </Col >
      </Row>
    </div>
  );
};
export default Blogpage;
