import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./style.css";
import { Parallax } from 'react-parallax';




const Gallery = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Parallax id="image1" bgImage="/image3.1.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '900px' }}>
                            <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>INDIA NIX</div>
                        </div>
                    </Parallax>
                    <div>
                        <h1>
                            hi there
                        </h1>
                        <h2>
                            hi skvnoabvosiandan
                        </h2>
                    </div>
                    <Parallax id="image1" bgImage="/image3.2.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '900px' }}>
                            <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>RECENT WORKS</div>
                        </div>
                    </Parallax>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;