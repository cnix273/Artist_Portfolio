import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "./style.css";

import { IoLogoInstagram } from 'react-icons/io';

function Footer() {
  return (
    <footer className="footer" >
        <span>
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col xs={6}>
                </Col>
            </Row>
        </Container>
        <h3>CONTACT</h3>
        <div id="icons">
                    <a href="https://www.instagram.com/indiagrayart/"><IoLogoInstagram size="5em" className="contactIcon"/></a>
                    {/* <a href="https://www.linkedin.com/in/cameronnix/"><FaLinkedin size="5em" className="contactIcon"/></a>
                    <a href="mailto:camerondeverenix@gmail.com"><FiMail size="5em" className="contactIcon"/></a>  */}
                </div>
            
        
        
      India Gray © | 2021 </span>
    </footer>
  );
}

export default Footer;
