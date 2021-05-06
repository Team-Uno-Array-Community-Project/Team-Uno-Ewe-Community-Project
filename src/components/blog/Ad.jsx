import React from "react";
import { Card, Button } from "react-bootstrap";
// import "../blog/Ad.css";
import AdLogo from '../../assets/nyt-logo.png';

const Ad = () => {
  return (
    <div>
      <Card className="ad-container">
        <Card.Body style= {{backgroundColor: '#ECECEC'}}>
          <p className="ad-text-1">
            It's the stories you weren't expecting that make subscribing
            worthwhile.
          </p>
          <p className="ad-text-2">From $8.99 a month.</p>
          <Button variant="dark">SUBSCRIBE NOW</Button>
          <img className="ad-logo" src={AdLogo} style={{width: '12rem'}} alt='ad' />
        </Card.Body>
      </Card>
    </div>
  );
};
export default Ad;
