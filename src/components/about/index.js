import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Parallax } from 'react-parallax';
import { Route } from "workbox-routing";

import Nav from "../nav"
import "./style.css";


const About = () => {
    return (
        <Container fluid>
            <Nav/>
            <Row>
                <Col>
                    <Parallax id="image1" bgImage="/assets/studio4.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '750px' }}>
                            <div id="title" style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px" }}>ABOUT</div>
                        </div>
                    </Parallax>
                    <div style={{ height: '500px' }}>
                        <Row>
                            <Col xs={5}>
                                <img src="/assets/India.jpg" id="profile_image"></img>
                            </Col>
                            <Col xs={7}>
                                <div id="name" style={{fontSize: "30px"}}>INDIA NIX</div>
                                <p>
                                    India has been a lover of art her entire life.
                                    White she studied art in school, most of her exploration of styles of different styles of painting has been self-taught.
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <Parallax id="image1" bgImage="/assets/textural_painting_3.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '750px' }}>
                            <div id="subtitle" style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px"  }}>UPCOMING EXHIBITIONS</div>
                        </div>
                    </Parallax>
                    <div style={{ height: '200px' }}>
                        <p className="textElement">
                            Throughout high school and university, India studied many styles of painting from still life to landscape to abstract to 
                        </p>
                        <p className="textElement">
                            India adds texture to her works using for an added '
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;