import React from "react";
import BlogCards from "./BlogCards";
import ProductCards from "./ProductCards";
import Ad from "./Ad";
import HomepageData from "../homepage/HomepageData";
import BlogCardData from "../blog/BlogCardData";


const Blogpage = () => {
  return (
    <>
      <BlogCards BlogCardData={BlogCardData} />
      <ProductCards HomepageData={HomepageData} />
      <Ad />
    </>
  );
};
export default Blogpage;
