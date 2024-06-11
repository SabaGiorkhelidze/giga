import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

const HomePageAboutSection = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Image src="path-to-your-image.jpg" roundedCircle fluid />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>About Us</h2>
          <p>
            Welcome to our website! We are dedicated to providing you with the
            best service possible. Our team is passionate about our mission and
            works tirelessly to achieve our goals.
          </p>
          <p>
            Our vision is to create a better world through our innovative
            solutions and unparalleled customer service. We believe in the power
            of collaboration, integrity, and excellence.
          </p>
          <p>
            Thank you for visiting our site. We hope you find what you're
            looking for and look forward to serving you.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageAboutSection;
