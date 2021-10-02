import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./style.css";
import { Parallax } from 'react-parallax';




const About = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Parallax id="image1" bgImage="/assets/studio2.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '900px' }}>
                            <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px" }}>INDIA NIX</div>
                        </div>
                    </Parallax>
                        <div style={{ height: '400px' }}>
                        </div>
                    <Parallax id="image1" bgImage="/assets/oil_painting_winter.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '900px' }}>
                            <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px"  }}>RECENT WORKS</div>
                        </div>
                    </Parallax>
                </Col>
            </Row>
            <Row>
                <h2 style={{textAlign: "center", padding: "40px 0"}}>| | |</h2>
                <Col>
                    <img src="/assets/rose1.jpg" id="rose1" alt="rose painting before" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
                <Col>
                    <img src="/assets/rose2.jpg" id="rose2" alt="rose painting after" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src="/assets/hand2.jpg" id="hand2" alt="rose painting before" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
                <Col>
                    <img src="/assets/hand1.jpg" id="hand1" alt="rose painting after" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
            </Row>
        </Container>
    );
};

export default About;