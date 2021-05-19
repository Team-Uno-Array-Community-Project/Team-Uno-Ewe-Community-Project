import React from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import SheepImage from "../../assets/SheepImage.png";
import ChristmasImage from "../../assets/ChristmasImage.png";

const Homepage = () => {
  return (
    <Container className="about-container">
      <Jumbotron className="about-page-jumbotron"></Jumbotron>
      <h2 className="about-title">Our Story</h2>
      <Row>
        <Col>
          <img className="sheep-image" src={SheepImage} alt="sheepimage" />
        </Col>
        <Container className="sheep-text-container">
          <p className="sheep-text">
            EWE COUNT, or "Ooi Twee' as it was originally known, was founded in
            1721 by the 'Dutch Knitters', a group formed as an offshoot of the
            Dutch Golden Age of Painting who believed the tradition of detailed
            realism could be best expressed through yarn. In 1808 Ooi Twee was
            purchased by John Colter (of the Lewis and Clark expedition) as a
            'retirement hobby for me and the missus'. He ran the establishment
            until well into the 1830's, when he died peacefully, surrounded by
            family members and fellow Knitters, wrapped in a gorgeous mohair
            afghan. Mohair is notable for its high luster and sheen. In 1835 the
            store was re-opened and renamed 'EWE SHALL NOT PASS' by Elder Smith,
            who had decided to settle in Cheyenne rather than continue the
            arduous trek along the Oregon Trail. <br />
            <br />
            Smith turned the small shop into a successful business, which he
            then sold in 1860 in order to fund the creation of a multi-store
            franchise based in Utah under the name 'B-Y-EWE' focused primarily
            on bespoke temple garments. "EWE SHALL NOT PASS" was bought by
            Railroad tycoon John Reading. It was far from his main focus, and
            faltered under his management. YELP reviews from that time commonly
            mention how yarn purchased during this period ""...always smelt of
            grease and coal, despite most frequent washings".
            <br />
            <br />
            Finally, in 1868, the store was purchased and named EWE COUNT by
            Penny's great great great grandmother, Nellie Ross. The name was a
            direct reference to the ongoing women's suffrage campaign, and
            Nellie rode that public relations wave with great success, flooding
            the market with crocheted campaign slogans like 'we can vote just
            like EWE', and the ever popular, if racy for the time 'give us the
            vote, gosh-yarn-it!!!'. EWE COUNT has remained a family business
            until this day, and has never strayed from the political focus that
            made it such a success in the late 1800's. EWE COUNT's designs have
            been featured prominently on the shoulders of several first ladies
            including LadyBird and Jackie, and during the 60's EWE Count briefly
            popularized the 'yarn bra', which, while scratchy and fairly
            uncomfortable to wear, was very flammable.
            <br />
            <br />
            EWE COUNT currently has a large contract with Northrup-Grumman's
            skunkworks division, providing government approved scarves for high
            altitude test pilots. Chuck Yeager reportedly attributed much of his
            success as a death defying test pilot to the warmth and comfort
            afforded him by a EWE COUNT original cardigan/scarf combo, stating
            'When I reached my top speed of mach 2.44 (or 1650 mph), it was so
            comforting to not have to also worry about catching cold'. EWE COUNT
            is proud to be Cheyenne's premier provider of all things Yarn, and
            is thrilled to be celebrating it's Tercentenary anniversary. Thank
            you for your patronage through all these years.
          </p>
        </Container>
      </Row>
      <Row>
        <Container className="christmas-text-container">
          <p className="christmas-text">
            I have been stitching for most of my life and have won many awards
            for my work. I have made ornaments for the White House Christmas
            tree and am the originator of the Wyoming Governors’ Residence
            Needlework Ornament program. Knitting has become a passion for me
            and I can usually figure out most patterns. I can do most any stitch
            and am not afraid to try something new. I am a member of the
            Embroiderer’s Guild of America, the American Needlepoint Guild, the
            Knitting Guild Association and the National Needlearts Assocation.
          </p>
        </Container>
        <Col>
          <img
            className="christmas-image"
            src={ChristmasImage}
            alt="christmasimage"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
