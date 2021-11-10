import React from "react";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Gallery from "../gallery"
// import About from "../about"
// import Home from "../home"

import "./style.css";

import { IoLogoInstagram } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
// import { Route } from "react-router";

function Footer() {
  return (
    <footer className="footer">
        <span>
            <Container>
                <Row>
                    <Col xs={4}>
                        <h4 className="footer-title">PAGES</h4>
                        <div className="footer-links">
                            <Link to="/home">Home</Link><br/>
                            <Link to="/about">About</Link><br/>
                            <Link to="/gallery">Gallery</Link>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <h4 className="footer-title">CONNECT</h4>

                    </Col>
                    <Col xs={4}>
                        <h4 className="footer-title">CONNECT</h4>
                        <div className="icons">
                            <a href="https://www.instagram.com/indiagrayart/"><IoLogoInstagram size="5em" className="contactIcon"/></a>
                            <a href="https://www.linkedin.com/in/india-nix-8a398793/"><FaLinkedin size="5em" className="contactIcon"/></a>
                            <a href="mailto:camerondeverenix@gmail.com"><FiMail size="5em" className="contactIcon"/></a>
                        </div>
                    </Col>
                </Row>
                <div id="copyright"> India Gray © | 2021 </div>
            </Container>
        </span>
    </footer>
  );
}

export default Footer;
