import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container className="p-4">
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>Email: xyz@gmail.com</p>
            <p>Phone: 555-1234</p>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <p>
              Linkdin :{" "}
              <a href="https://www.linkedin.com/in/piyush-shrimal-8178a1164/">Linkdin</a>
            </p>
            <p>
              Github : <a href="https://github.com/piyushshri01">Github</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
