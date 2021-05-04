import React from "react";
import { Jumbotron } from "react-bootstrap";
import HomepageCards from "./HomepageCards";
import HomepageData from "../homepage/HomepageData";
import "./Homepage.css";


const Homepage = () => {
  return (
    <div>
      <Jumbotron className="homepage-jumbotron" fluid>
      </Jumbotron>
      <HomepageCards HomepageData={HomepageData}/>
    </div> 
  );
};

export default Homepage;
