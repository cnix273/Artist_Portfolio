import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Parallax } from 'react-parallax';

import Nav from "../nav"
import "./style.css";


const Gallery = () => {
    return (
        <Container fluid>
            <Nav/>
            <Row>
                <Col>
                    {/* <Parallax id="image1" bgImage="/assets/studio4.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '750px' }}>
                            <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px" }}>GALLERY</div>
                        </div>
                    </Parallax> */}
                    <Parallax id="image1" bgImage="/assets/textural_painting_3.jpg" bgImageAlt="oil painting" strength={200}>
                        <div style={{ height: '700px' }}>
                            <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px"  }}>GALLERY</div>
                        </div>
                    </Parallax>
                </Col>
            </Row>
            <Row>
                <p style={{textAlign: "center", padding: "40px 0", margin: 0, fontSize: "50px" }}>RECENT WORKS</p>
                <Col>
                    <Parallax id="studio-top" bgImage="/assets/studio-top.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '800px' }}/>
                    </Parallax>

                    <div style={{ height: '12px' }}></div>

                    <Parallax id="studio-bottom" bgImage="/assets/studio-bottom.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '800px' }}/>
                    </Parallax>
                </Col>
            </Row>
            <Row>
                <p style={{textAlign: "center", padding: "40px 0", margin: 0, fontSize: "50px" }}>BEFORE &amp; AFTERS</p>
                <Col>
                    <img src="/assets/rose1.jpg" id="rose-1" alt="rose painting before" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
                <Col>
                    <img src="/assets/rose2.jpg" id="rose-2" alt="rose painting after" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src="/assets/hand1.jpg" id="hand-2" alt="rose painting after" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
                <Col>
                    <img src="/assets/hand2.jpg" id="hand-1" alt="rose painting before" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;