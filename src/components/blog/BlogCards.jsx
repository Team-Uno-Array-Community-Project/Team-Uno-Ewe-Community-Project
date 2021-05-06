import React from "react";

const BlogCards = (props) => {
  return (
    <>
      <h2 className="blog-cards-title">Welcome to Ewe Blog</h2>
      {props.BlogCardData.map((val, index) => (
        <div>
          <div class="blog-card">
            <div class="meta">
              <div class="photo"></div>
              <ul class="details">
                <li class="author">
                  <a href="/">John Doe</a>
                </li>
                <li class="date">Aug. 24, 2015</li>
                <li class="tags">
                  <ul>
                    <li>
                      <a href="/">Learn</a>
                    </li>
                    <li>
                      <a href="/">Code</a>
                    </li>
                    <li>
                      <a href="/">HTML</a>
                    </li>
                    <li>
                      <a href="/">CSS</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="description">
              <h1>{val.title}</h1>
              <h2>Opening a door to the future</h2>
              <p>
              {val.text}
              </p>
              <p class="read-more">
                <a href="/">Read More</a>
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
