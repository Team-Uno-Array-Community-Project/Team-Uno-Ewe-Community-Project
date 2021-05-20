import React from "react";
import {getBlogImageFile} from "../../assets/blogImages";

const BlogCards = (props) => {
  return (
    <>
      <h2 className="blog-cards-title">Welcome to Ewe Blog</h2>
      {props.BlogCardData.map((val, index) => (
        <div>
          <div class="blog-card">
            <div class="meta">
             <img class="photo" src={getBlogImageFile(val.image)} style={{height: "250px"}} alt="blog subject" />
              <ul class="details">
                <li class="author">
                  <a href="/blog">{val.author}</a> 
                </li>
                <li class="date">{val.date}</li>
              </ul>
            </div>
            <div class="description">
              <h1>{val.title}</h1>
              
              <p>
              {val.text}
              </p>
            </div>
          </div>
        </div>
      ))}
      <p className="blog-cards-footer">
        Stay up to date with the latest blog by signing up to our newsletter
        below!
      </p>
    </>
  );
};

export default BlogCards;
