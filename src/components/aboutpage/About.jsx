import React from "react";
import { Jumbotron, Container, Col } from "react-bootstrap";
import SheepImage from "../../assets/SheepImage.png";
import ChristmasImage from "../../assets/ChristmasImage.png";
import "./About.css";

const Homepage = () => {
  return (
    <div>
      <Jumbotron className="about-page-jumbotron" fluid></Jumbotron>
      <h2 className="about-title">Our Story</h2>
      <Col>
        <img className="sheep-image" src={SheepImage} alt="sheepimage" />
      </Col>
      <Container className="sheep-text-container">
        <p className="sheep-text">
          Welcome to Ewe Count. My name is Penny and I will be your guide in my
          little corner of cyberspace. The shop is located in Cheyenne, Wyoming
          and has been my “home away from home” since 1994. The shop is
          predominantly counted cross stitch and yarns for knitting and
          crocheting. A wide variety of quality yarns are also available. Wool,
          alpaca, mohair, cotton, bamboo, and soysilk are plentiful along with
          acrylic and lots of blends and novelty yarns. A plethora of sock yarns
          are also in stock.
        </p>
      </Container>
      <Col>
        <img
          className="christmas-image"
          src={ChristmasImage}
          alt="christmasimage"
        />
      </Col>
      <Container className="christmas-text-container">
        <p className="christmas-text">
          I have been stitching for most of my life and have won many awards for
          my work. I have made ornaments for the White House Christmas tree and
          am the originator of the Wyoming Governors’ Residence Needlework
          Ornament program. Knitting has become a passion for me and I can
          usually figure out most patterns. I can do most any stitch and am not
          afraid to try something new. I am a member of the Embroiderer’s Guild
          of America, the American Needlepoint Guild, the Knitting Guild
          Association and the National Needlearts Assocation.
        </p>
      </Container>
    </div>
  );
};

export default Homepage;
